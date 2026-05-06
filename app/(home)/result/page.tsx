"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type ResultMapProps = {
  coordinates: { lat: number; lng: number };
  locationName: string;
};

const ResultMap = dynamic<ResultMapProps>(
  () => import("@/app/components/result-map").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div className="w-full animate-pulse bg-gray-200" style={{ height: "28rem" }} />,
  },
);

// Fallback coordinates untuk berbagai kota di Indonesia
const FALLBACK_COORDINATES: Record<string, { lat: number; lng: number }> = {
  surabaya: { lat: -7.2506, lng: 112.7508 },
  jakarta: { lat: -6.2088, lng: 106.8456 },
  bandung: { lat: -6.9147, lng: 107.6098 },
  bogor: { lat: -6.5960, lng: 106.7885 },
  yogyakarta: { lat: -7.7956, lng: 110.3695 },
};

interface SimulationResponse {
  status: "Layak" | "Sangat Layak" | "Tidak Layak";
  reasoning: string;
  confidence: "LOW" | "MEDIUM" | "HIGH";
  confidence_score: number;
  confidence_factors: {
    data_completeness: number;
    irradiation_variability: number;
    financial_assumptions: number;
  };
  financials: {
    total_investment: number;
    monthly_savings: number;
    payback_period_years: number;
    break_even_year: number;
    coverage_ratio: number;
  };
  technical_recommendation: {
    panel_count: number;
    system_capacity_kwp: number;
    required_area_m2: number;
  };
  assumptions: {
    electricity_tariff: number;
    system_efficiency: number;
    annual_degradation: number;
  };
  roi_chart_data: Array<{
    year: number;
    cumulative_profit: number;
  }>;
  warnings: string[];
  display: {
    monthly_savings: string;
    payback_period: string;
    system_capacity_kwp: string;
    total_investment: string;
  };
}

type ErrorType = "VALIDATION" | "GEOCODING" | "API" | "NETWORK" | "UNKNOWN";

interface AppError {
  type: ErrorType;
  message: string;
  details?: string;
  retryable: boolean;
}

// Type guard to check if a value is an AppError
function isAppError(err: unknown): err is AppError {
  return (
    typeof err === "object" &&
    err !== null &&
    "type" in err &&
    "message" in err &&
    "retryable" in err
  );
}

// Validation functions
function validateLocationInput(lokasi: string): { valid: boolean; error?: string } {
  if (!lokasi || lokasi.trim().length === 0) {
    return { valid: false, error: "Lokasi tidak boleh kosong" };
  }
  if (lokasi.length > 200) {
    return { valid: false, error: "Lokasi terlalu panjang (maksimal 200 karakter)" };
  }
  return { valid: true };
}

function validateBillingInput(tagihan: string): { valid: boolean; error?: string; value?: number } {
  const tagihanNum = parseInt(tagihan, 10);
  if (isNaN(tagihanNum)) {
    return { valid: false, error: "Tagihan harus berupa angka" };
  }
  if (tagihanNum < 10000) {
    return { valid: false, error: "Tagihan minimal Rp 10.000" };
  }
  if (tagihanNum > 100000000) {
    return { valid: false, error: "Tagihan maksimal Rp 100.000.000" };
  }
  return { valid: true, value: tagihanNum };
}

function validateSimulationResponse(data: unknown): { valid: boolean; error?: string } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Response data tidak valid" };
  }

  const obj = data as Record<string, unknown>;
  
  // Check required fields
  const requiredFields = ["status", "reasoning", "confidence_score", "financials", "display"];
  for (const field of requiredFields) {
    if (!(field in obj)) {
      return { valid: false, error: `Field ${field} tidak ditemukan dalam response` };
    }
  }

  // Validate status enum
  if (!["Layak", "Sangat Layak", "Tidak Layak"].includes(obj.status as string)) {
    return { valid: false, error: "Status tidak valid" };
  }

  // Validate confidence_score is a number between 0 and 1
  if (typeof obj.confidence_score !== "number" || obj.confidence_score < 0 || obj.confidence_score > 1) {
    return { valid: false, error: "Confidence score harus angka antara 0 dan 1" };
  }

  // Validate financials
  const financials = obj.financials as Record<string, unknown>;
  const financialFields = ["total_investment", "monthly_savings", "payback_period_years", "coverage_ratio"];
  for (const field of financialFields) {
    if (typeof financials?.[field] !== "number") {
      return { valid: false, error: `Field financials.${field} harus berupa angka` };
    }
  }

  return { valid: true };
}

// Error handling
function createAppError(type: ErrorType, message: string, details?: string, retryable = true): AppError {
  return { type, message, details, retryable };
}

function getErrorTitle(error: AppError): string {
  switch (error.type) {
    case "VALIDATION":
      return "Input Tidak Valid";
    case "GEOCODING":
      return "Lokasi Tidak Ditemukan";
    case "API":
      return "Error dari Server";
    case "NETWORK":
      return "Koneksi Gagal";
    default:
      return "Terjadi Kesalahan";
  }
}

function getErrorDescription(error: AppError): string {
  let desc = error.message;
  if (error.details) {
    desc += ` (${error.details})`;
  }
  return desc;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getStatusColor(
  status: "Layak" | "Sangat Layak" | "Tidak Layak",
): string {
  switch (status) {
    case "Sangat Layak":
      return "from-green-400 to-green-600";
    case "Layak":
      return "from-yellow-400 to-yellow-600";
    case "Tidak Layak":
      return "from-red-400 to-red-600";
    default:
      return "from-gray-400 to-gray-600";
  }
}

function ROIChart({ data }: { data: Array<{ year: number; cumulative_profit: number }> }) {
  if (!data || data.length === 0) return null;

  // Ensure data is sorted by year so the chart draws chronologically
  const sortedData = [...data].sort((a, b) => a.year - b.year);

  const values = sortedData.map((d) => d.cumulative_profit);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  let range = maxValue - minValue;

  const chartHeight = 300;
  const chartWidth = 800;
  const leftPadding = 120;
  const rightPadding = 40;
  const topPadding = 40;
  const bottomPadding = 50;

  const usableWidth = chartWidth - leftPadding - rightPadding;
  const usableHeight = chartHeight - topPadding - bottomPadding;

  // Avoid division by zero when all values are equal
  const allEqual = range === 0;

  const points = sortedData.map((d, i) => {
    const x = leftPadding + (i / (sortedData.length - 1)) * usableWidth;
    const normalizedY = allEqual ? 0.5 : (d.cumulative_profit - minValue) / range;
    const y = topPadding + usableHeight - normalizedY * usableHeight;
    return { x, y, value: d.cumulative_profit, year: d.year };
  });

  const pathPoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  // Format y-axis values
  const yAxisSteps = 4;
  const yAxisValues = Array.from({ length: yAxisSteps + 1 }).map((_, i) => {
    return minValue + (range / yAxisSteps) * i;
  });

  return (
      <div className="w-full overflow-hidden">
      <svg
        width="100%"
        height={chartHeight}
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className="block h-auto w-full max-w-full"
      >
        {/* Grid lines */}
        {Array.from({ length: yAxisSteps + 1 }).map((_, i) => {
          const y = topPadding + (usableHeight / yAxisSteps) * i;
          return (
            <line
              key={`grid-${i}`}
              x1={leftPadding}
              y1={y}
              x2={chartWidth - rightPadding}
              y2={y}
              stroke="#fff6d1"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
          );
        })}

        {/* Axes */}
        <line
          x1={leftPadding}
          y1={topPadding}
          x2={leftPadding}
          y2={chartHeight - bottomPadding}
          stroke="#fff6d1"
          strokeWidth="2"
        />
        <line
          x1={leftPadding}
          y1={chartHeight - bottomPadding}
          x2={chartWidth - rightPadding}
          y2={chartHeight - bottomPadding}
          stroke="#fff6d1"
          strokeWidth="2"
        />

        {/* Polyline for profit curve */}
        <polyline points={pathPoints} fill="none" stroke="#fff6d1" strokeWidth="3" />

        {/* Area under curve */}
        <polygon
          points={`${leftPadding},${chartHeight - bottomPadding} ${pathPoints} ${chartWidth - rightPadding},${chartHeight - bottomPadding}`}
          fill="#fff6d1"
          opacity="0.08"
        />

        {/* Data points */}
        {points.map((p, i) => (
          <circle key={`point-${i}`} cx={p.x} cy={p.y} r="4" fill="#fff6d1" />
        ))}

        {/* X-axis labels (years) */}
        {points
          .filter((_, i) => i % Math.ceil(data.length / 8) === 0 || i === data.length - 1)
          .map((p, i) => (
            <text
              key={`x-label-${i}`}
              x={p.x}
              y={chartHeight - bottomPadding + 25}
              textAnchor="middle"
              fontSize="12"
              fill="#fff6d1"
              fontWeight="500"
            >
              {p.year} th
            </text>
          ))}

        {/* Y-axis labels */}
        {yAxisValues.map((value, i) => {
          const y = topPadding + (usableHeight / yAxisSteps) * (yAxisSteps - i);
          return (
            <text
              key={`y-label-${i}`}
              x={leftPadding - 15}
              y={y}
              textAnchor="end"
              fontSize="11"
              fill="#fff6d1"
              dy="0.3em"
              fontWeight="500"
            >
              {value >= 0 ? "+" : ""}
              {(value / 1000000).toFixed(0)}M
            </text>
          );
        })}

        {/* Y-axis label */}
        <text
          x={15}
          y={topPadding - 10}
          fontSize="12"
          fontWeight="600"
          fill="#fff6d1"
          opacity="0.7"
        >
          Profit (Rp)
        </text>
      </svg>
    </div>
  );
}

export default function ResultPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<SimulationResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AppError | null>(null);
  const [selectedView, setSelectedView] = useState<"overview" | "financial" | "technical">("overview");
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [locationName, setLocationName] = useState<string>("");
  const [geocodingWarning, setGeocodingWarning] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get and validate inputs
        const lokasiInput = searchParams.get("lokasi") || "Surabaya";
        const tagihanInput = searchParams.get("tagihan") || "1000000";

        // Validate location
        const locValidation = validateLocationInput(lokasiInput);
        if (!locValidation.valid) {
          throw createAppError("VALIDATION", locValidation.error || "Lokasi tidak valid");
        }

        // Validate billing
        const billValidation = validateBillingInput(tagihanInput);
        if (!billValidation.valid) {
          throw createAppError("VALIDATION", billValidation.error || "Tagihan tidak valid");
        }

        const lokasi = lokasiInput;
        const tagihan = billValidation.value!;

        setLocationName(lokasi);

        // Try geocoding with Photon, fallback to alternative locations
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

          try {
            const geoResponse = await fetch(
              `https://photon.komoot.io/api/?q=${encodeURIComponent(lokasi)}&limit=1`,
              { signal: controller.signal }
            );

            clearTimeout(timeoutId);

            if (!geoResponse.ok) {
              throw new Error(`Photon API returned status ${geoResponse.status}`);
            }

            const geoData = await geoResponse.json();
            if (geoData?.features && geoData.features.length > 0) {
              const coords = geoData.features[0].geometry.coordinates;
              setCoordinates({
                lat: coords[1],
                lng: coords[0],
              });
            } else {
              // Try fallback city lookup
              const cityKey = lokasi.toLowerCase().split(",")[0].trim();
              const fallbackCoord = FALLBACK_COORDINATES[cityKey] || FALLBACK_COORDINATES.surabaya;
              setCoordinates(fallbackCoord);
              setGeocodingWarning(`Lokasi spesifik tidak ditemukan. Menampilkan lokasi perkiraan: ${cityKey}`);
            }
          } catch (geoError) {
            clearTimeout(timeoutId);

            if (geoError instanceof Error && geoError.name === "AbortError") {
              console.warn("Geocoding timeout, using fallback coordinates");
            } else {
              console.warn("Geocoding error:", geoError);
            }

            // Use fallback coordinates
            const cityKey = lokasi.toLowerCase().split(",")[0].trim();
            const fallbackCoord = FALLBACK_COORDINATES[cityKey] || FALLBACK_COORDINATES.surabaya;
            setCoordinates(fallbackCoord);
            setGeocodingWarning("Peta ditampilkan dengan lokasi perkiraan");
          }
        } catch (err) {
          console.error("Geocoding error handler:", err);
          // Still set fallback coordinates
          setCoordinates(FALLBACK_COORDINATES.surabaya);
        }

        // Fetch simulation data
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

          try {
            const response = await fetch("http://localhost:8080/api/v1/simulation", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                lokasi,
                tagihan_bulanan: tagihan,
              }),
              signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
              const errorText = await response.text().catch(() => "Unknown error");
              if (response.status === 400) {
                throw createAppError(
                  "API",
                  "Parameter tidak valid",
                  errorText,
                  false
                );
              } else if (response.status === 500) {
                throw createAppError(
                  "API",
                  "Server sedang mengalami masalah",
                  "Silakan coba lagi dalam beberapa saat",
                  true
                );
              } else {
                throw createAppError(
                  "API",
                  `Server error: ${response.status}`,
                  errorText,
                  true
                );
              }
            }

            const result = await response.json();


            // Validate response data
            const validation = validateSimulationResponse(result);
            if (!validation.valid) {
              throw createAppError(
                "API",
                "Data response tidak valid",
                validation.error,
                false
              );
            }

            setData(result as SimulationResponse);
          } catch (fetchError) {
            clearTimeout(timeoutId);

            if (isAppError(fetchError)) {
              throw fetchError;
            }

            if (fetchError instanceof Error) {
              if (fetchError.name === "AbortError") {
                throw createAppError(
                  "NETWORK",
                  "Request timeout",
                  "Server tidak merespons dalam waktu yang ditentukan",
                  true
                );
              } else if (fetchError.message.includes("fetch")) {
                throw createAppError(
                  "NETWORK",
                  "Koneksi ke server gagal",
                  "Pastikan server berjalan di localhost:8080",
                  true
                );
              }
            }

            throw createAppError(
              "UNKNOWN",
              "Kesalahan tidak diketahui saat mengambil data simulasi",
              fetchError instanceof Error ? fetchError.message : String(fetchError),
              true
            );
          }
        } catch (err) {
          if (isAppError(err)) {
            throw err;
          }
          throw createAppError(
            "UNKNOWN",
            "Error tidak terduga",
            err instanceof Error ? err.message : String(err),
            true
          );
        }
      } catch (err) {
        if (isAppError(err)) {
          setError(err);
        } else {
          setError(
            createAppError(
              "UNKNOWN",
              "Error tidak terduga",
              err instanceof Error ? err.message : String(err),
              true
            )
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fff6d1] flex flex-col items-center justify-center px-4 py-12 text-[#003631] transition-colors duration-500">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#003631]/20 border-t-[#003631]" />
          <p className="text-lg font-medium">Menganalisis data Anda...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#fff6d1] flex flex-col items-center justify-center px-4 py-12 text-[#003631] transition-colors duration-500">
        <div className="w-full max-w-md">
          {/* Error Card */}
          <div className="rounded-2xl border-2 border-red-300 bg-red-50 p-6 shadow-lg">
            <div className="flex gap-4">
              <div className="shrink-0">
                <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-red-800">{getErrorTitle(error)}</h2>
                <p className="mt-2 text-sm text-red-700">{getErrorDescription(error)}</p>
                {error.type === "API" && (
                  <p className="mt-2 text-xs text-red-600">
                    💡 Tip: Pastikan backend server berjalan di http://localhost:8080
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => window.location.href = "/home"}
                className="flex-1 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 transition-colors text-sm"
              >
                Kembali ke Input
              </button>
              {error.retryable && (
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 rounded-lg border-2 border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-50 transition-colors text-sm"
                >
                  Coba Lagi
                </button>
              )}
            </div>
          </div>

          {/* Debug Info */}
          <div className="mt-4 rounded-lg border border-[#003631]/20 bg-white p-4">
            <p className="text-xs font-semibold text-[#003631]/70 uppercase">Debug Info</p>
            <pre className="mt-2 text-xs text-[#003631]/60 overflow-auto max-h-24 bg-gray-50 p-2 rounded">
{`Type: ${error.type}
Message: ${error.message}
${error.details ? `Details: ${error.details}` : ""}`}
            </pre>
          </div>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fff6d1] flex flex-col items-center justify-center px-4 py-12 text-[#003631] transition-colors duration-500">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#003631]/20 border-t-[#003631]" />
          <p className="text-lg font-medium">Menganalisis data Anda...</p>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-screen bg-[#fff6d1] flex flex-col items-center justify-center px-4 py-12 text-[#003631] transition-colors duration-500">
        <div className="rounded-2xl border border-[#003631]/20 bg-white p-6 shadow-lg max-w-md">
          <h2 className="text-xl font-bold">Data Tidak Ditemukan</h2>
          <p className="mt-2 text-[#003631]/70">Hasil simulasi tidak dapat dimuat. Silakan coba lagi.</p>
          <button
            onClick={() => window.location.href = "/home"}
            className="mt-4 inline-flex items-center justify-center w-full rounded-full bg-[#003631] px-6 py-3 font-semibold text-[#fff6d1] hover:opacity-90"
          >
            Kembali ke Input
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff6d1] px-4 pt-0 pb-8 text-[#003631] transition-colors duration-500 sm:px-8 lg:px-16 sm:pt-0 lg:pt-0">
        {/* Map Section */}
        {coordinates && (
          <div className="relative z-0 -mt-24 mb-4 -mx-4 overflow-hidden border-y border-[#003631]/20 shadow-lg sm:-mt-28 sm:-mx-8 lg:-mt-32 lg:-mx-16 lg:rounded-none lg:border-x-0">
            <ResultMap coordinates={coordinates} locationName={locationName} />
          </div>
        )}
        
        {/* Geocoding Warning */}
        {geocodingWarning && (
          <div className="mb-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0zM8 8a1 1 0 000 2h6a1 1 0 000-2H8zm0 4a1 1 0 000 2h3a1 1 0 000-2H8z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-blue-700">{geocodingWarning}</p>
            </div>
          </div>
        )}

        <div className="mx-auto max-w-6xl">
          {/* Main Status Card */}
          <div className={`mb-8 rounded-3xl bg-linear-to-br ${getStatusColor(data.status)} p-8 text-white shadow-xl sm:p-12`}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest opacity-90">Rekomendasi Investasi</p>
              <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{data.status}</h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed opacity-90">{data.reasoning}</p>
            </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-[#fff6d1] px-6 py-4 text-[#003631] backdrop-blur-sm">
                <p className="text-sm font-semibold opacity-80">Confidence</p>
                <p className="text-3xl font-bold">{Math.round(data.confidence_score * 100)}%</p>
                <p className="text-xs opacity-70">{data.confidence}</p>
            </div>
          </div>
          </div>

          {/* Quick Stats */}
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border-2 border-[#003631] bg-linear-to-br from-[#003631] to-[#003631]/80 p-4 shadow-md transition-shadow hover:shadow-lg">
              <p className="text-xs font-semibold text-[#fff6d1] uppercase">Investasi Total</p>
              <p className="mt-2 text-xl font-bold text-[#fff6d1]">{data.display.total_investment}</p>
            </div>
            <div className="rounded-2xl border-2 border-[#003631] bg-linear-to-br from-[#003631] to-[#003631]/75 p-4 shadow-md transition-shadow hover:shadow-lg">
              <p className="text-xs font-semibold text-[#fff6d1] uppercase">Penghematan/Bulan</p>
              <p className="mt-2 text-xl font-bold text-[#fff6d1]">{data.display.monthly_savings}</p>
            </div>
            <div className="rounded-2xl border-2 border-[#003631] bg-linear-to-br from-[#003631] to-[#003631]/70 p-4 shadow-md transition-shadow hover:shadow-lg">
              <p className="text-xs font-semibold text-[#fff6d1] uppercase">Payback Period</p>
              <p className="mt-2 text-xl font-bold text-[#fff6d1]">{data.display.payback_period}</p>
            </div>
            <div className="rounded-2xl border-2 border-[#003631] bg-linear-to-br from-[#003631] to-[#003631]/65 p-4 shadow-md transition-shadow hover:shadow-lg">
              <p className="text-xs font-semibold text-[#fff6d1] uppercase">Kapasitas Sistem</p>
              <p className="mt-2 text-xl font-bold text-[#fff6d1]">{data.display.system_capacity_kwp}</p>
            </div>
          </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-2 border-b-2 border-[#003631]/20">
          {["overview", "financial", "technical"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedView(tab as typeof selectedView)}
              className={`px-4 py-3 font-semibold uppercase text-xs tracking-wide transition-all ${
                selectedView === tab
                  ? "border-b-2 border-[#003631] text-[#003631]"
                  : "text-[#003631]/60 hover:text-[#003631]"
              }`}
            >
              {tab === "overview" && "Ringkasan"}
              {tab === "financial" && "Finansial"}
              {tab === "technical" && "Teknis"}
            </button>
          ))}
        </div>

        {/* Content Views */}
        {selectedView === "overview" && (
          <div className="space-y-6">
            {/* ROI Chart */}
            <div className="rounded-3xl border-2 border-[#003631] bg-linear-to-br from-[#003631] to-[#003631]/80 p-6 shadow-lg sm:p-8 text-white">
              <h2 className="mb-6 text-2xl font-bold text-white">Proyeksi ROI (15 Tahun)</h2>
              <ROIChart data={data.roi_chart_data} />
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-[#fff6d1]/20 bg-[#fff6d1] p-4 text-[#003631]">
                  <p className="text-xs text-[#003631]/70">Break Even Year</p>
                  <p className="mt-2 text-2xl font-bold text-[#003631]">{data.financials.break_even_year}</p>
                </div>
                <div className="rounded-xl border border-[#fff6d1]/20 bg-[#fff6d1] p-4 text-[#003631]">
                  <p className="text-xs text-[#003631]/70">Coverage Ratio</p>
                  <p className="mt-2 text-2xl font-bold text-[#003631]">{Math.round(data.financials.coverage_ratio * 100)}%</p>
                </div>
                <div className="rounded-xl border border-[#fff6d1]/20 bg-[#fff6d1] p-4 text-[#003631]">
                  <p className="text-xs text-[#003631]/70">Tahun ke-15</p>
                  <p className="mt-2 text-lg font-bold text-[#003631]">{formatCurrency(data.roi_chart_data[15]?.cumulative_profit || 0)}</p>
                </div>
              </div>
            </div>

            {/* Warnings */}
            {data.warnings.length > 0 && (
              <div className="rounded-3xl border-l-4 border-yellow-500 bg-yellow-50 p-6 shadow-sm">
                <div className="flex gap-4">
                  <div className="text-yellow-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-900">Catatan Penting</h3>
                    <ul className="mt-3 space-y-2 text-sm text-yellow-800">
                      {data.warnings.map((warning, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="shrink-0">•</span>
                          <span>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {selectedView === "financial" && (
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-[#003631] bg-linear-to-br from-[#003631] to-[#003631]/90 p-6 shadow-lg sm:p-8 text-[#fff6d1]">
              <h2 className="mb-6 text-2xl font-bold text-[#fff6d1]">Analisis Finansial Detail</h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-[#003631] bg-[#fff6d1] p-6 text-[#003631]">
                  <p className="text-sm font-semibold text-[#003631]/70 uppercase">Total Investasi</p>
                  <p className="mt-3 text-3xl font-bold text-[#003631]">{formatCurrency(data.financials.total_investment)}</p>
                  <p className="mt-2 text-xs text-[#003631]/60">Biaya pemasangan dan panel</p>
                </div>

                <div className="rounded-2xl border-2 border-[#003631] bg-[#fff6d1] p-6 text-[#003631]">
                  <p className="text-sm font-semibold text-[#003631]/70 uppercase">Penghematan Bulanan</p>
                  <p className="mt-3 text-3xl font-bold text-[#003631]">{formatCurrency(data.financials.monthly_savings)}</p>
                  <p className="mt-2 text-xs text-[#003631]/60">Rata-rata penghematan per bulan</p>
                </div>

                <div className="rounded-2xl border-2 border-[#003631]/40 bg-[#fff6d1] p-6 text-[#003631]">
                  <p className="text-sm font-semibold text-[#003631]/70 uppercase">Payback Period</p>
                  <p className="mt-3 text-3xl font-bold text-[#003631]">{data.financials.payback_period_years} Tahun</p>
                  <p className="mt-2 text-xs text-[#003631]/60">Waktu untuk kembali modal</p>
                </div>

                <div className="rounded-2xl border-2 border-[#003631]/40 bg-[#fff6d1] p-6 text-[#003631]">
                  <p className="text-sm font-semibold text-[#003631]/70 uppercase">Angka Offset Konsumsi</p>
                  <p className="mt-3 text-3xl font-bold text-[#003631]">{Math.round(data.financials.coverage_ratio * 100)}%</p>
                  <p className="mt-2 text-xs text-[#003631]/60">Persentase tagihan listrik yang ditutup</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border-2 border-[#fff6d1] bg-[#fff6d1] p-6 text-[#003631]">
                <h3 className="font-bold text-[#003631]">Perincian Asumsi Keuangan</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#003631]/70">Tarif Listrik per kWh</span>
                    <span className="font-semibold text-[#003631]">Rp {data.assumptions.electricity_tariff.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#003631]/70">Efisiensi Sistem</span>
                    <span className="font-semibold text-[#003631]">{Math.round(data.assumptions.system_efficiency * 100)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#003631]/70">Degradasi Tahunan Panel</span>
                    <span className="font-semibold text-[#003631]">{Math.round(data.assumptions.annual_degradation * 100)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedView === "technical" && (
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-[#003631] bg-linear-to-br from-[#003631] to-[#003631]/90 p-6 shadow-lg sm:p-8 text-[#fff6d1]">
              <h2 className="mb-6 text-2xl font-bold text-[#fff6d1]">Rekomendasi Teknis</h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border-2 border-[#003631] bg-[#fff6d1] p-6 text-center text-[#003631]">
                  <p className="text-sm font-semibold text-[#003631]/70 uppercase">Jumlah Panel</p>
                  <p className="mt-3 text-4xl font-bold text-[#003631]">{data.technical_recommendation.panel_count}</p>
                  <p className="mt-2 text-xs text-[#003631]/60">Unit panel surya</p>
                </div>

                <div className="rounded-2xl border-2 border-[#003631] bg-[#fff6d1] p-6 text-center text-[#003631]">
                  <p className="text-sm font-semibold text-[#003631]/70 uppercase">Kapasitas Sistem</p>
                  <p className="mt-3 text-4xl font-bold text-[#003631]">{data.technical_recommendation.system_capacity_kwp}</p>
                  <p className="mt-2 text-xs text-[#003631]/60">kWp (kilowatt peak)</p>
                </div>

                <div className="rounded-2xl border-2 border-[#003631] bg-[#fff6d1] p-6 text-center text-[#003631]">
                  <p className="text-sm font-semibold text-[#003631]/70 uppercase">Area Atap yang Dibutuhkan</p>
                  <p className="mt-3 text-4xl font-bold text-[#003631]">{data.technical_recommendation.required_area_m2}</p>
                  <p className="mt-2 text-xs text-[#003631]/60">meter persegi</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border-2 border-[#fff6d1] bg-[#fff6d1] p-6 text-[#003631]">
                <h3 className="mb-4 font-bold text-[#003631]">Informasi Sistem</h3>
                <div className="space-y-4 text-sm text-[#003631]">
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#003631]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#003631]">Jumlah Panel: {data.technical_recommendation.panel_count} unit</p>
                      <p className="mt-1 text-[#003631]/70">Setiap panel dirancang optimal untuk kondisi iklim Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#003631]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#003631]">Area Atap: {data.technical_recommendation.required_area_m2} m²</p>
                      <p className="mt-1 text-[#003631]/70">Memastikan sistem pas dengan luas atap khas rumah Indonesia (30-40 m²)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#003631]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#003631]">Coverage: {Math.round(data.financials.coverage_ratio * 100)}% dari konsumsi listrik</p>
                      <p className="mt-1 text-[#003631]/70">Sistem tidak dirancang 100% untuk menjaga efisiensi biaya dan performa optimal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-12 rounded-3xl border-2 border-[#003631] bg-linear-to-br from-[#003631] to-[#003631]/90 p-8 text-center shadow-lg text-[#fff6d1]">
          <h2 className="text-2xl font-bold text-[#fff6d1]">Siap Melanjutkan?</h2>
          <p className="mt-3 text-[#fff6d1]/80">Temukan vendor terpercaya atau lakukan analisis ulang untuk hasil yang lebih detail</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => window.location.href = "/home"}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#fff6d1] px-8 py-3 font-semibold text-[#fff6d1] hover:bg-[#fff6d1]/10 transition-colors"
            >
              Analisis Ulang
            </button>
            <Link
              href={`/vendor?lokasi=${encodeURIComponent(locationName)}&kapasitas=${data.technical_recommendation.system_capacity_kwp}&penghematan=${encodeURIComponent(data.display.monthly_savings)}&roi=${encodeURIComponent(data.display.payback_period)}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fff6d1] px-8 py-3 font-semibold text-[#003631] hover:opacity-90 transition-opacity"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Temukan Vendor
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
