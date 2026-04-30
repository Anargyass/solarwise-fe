"use client";

import { FormEvent, useMemo, useState } from "react";

type Feasibility = "Sangat Layak" | "Layak" | "Kurang Layak";

type SimulationInput = {
  location: string;
  monthlyBill: number;
};

type SimulationResult = {
  coordinates: { lat: number; lon: number };
  irradiance: number;
  monthlyKwh: number;
  annualKwh: number;
  requiredKwP: number;
  panelCount: number;
  roofArea: number;
  installationCost: number;
  annualGeneration: number;
  annualSavings: number;
  roiYears: number;
  coverage: number;
  feasibility: Feasibility;
  reasoning: string[];
  insights: string[];
};

const CITY_DATA: Record<string, { lat: number; lon: number; sunHours: number }> = {
  jakarta: { lat: -6.2, lon: 106.8, sunHours: 4.75 },
  bandung: { lat: -6.91, lon: 107.61, sunHours: 4.64 },
  surabaya: { lat: -7.26, lon: 112.75, sunHours: 5.02 },
  yogyakarta: { lat: -7.8, lon: 110.37, sunHours: 4.89 },
  semarang: { lat: -6.99, lon: 110.42, sunHours: 4.86 },
  medan: { lat: 3.59, lon: 98.67, sunHours: 4.58 },
  makassar: { lat: -5.15, lon: 119.43, sunHours: 5.12 },
  denpasar: { lat: -8.65, lon: 115.22, sunHours: 5.19 },
};

const IDR_FORMAT = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function toSentenceCase(input: string): string {
  if (!input.trim()) {
    return "Lokasi tidak diketahui";
  }

  return input
    .trim()
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function estimateSolarOutcome(input: SimulationInput): SimulationResult {
  const normalized = input.location.trim().toLowerCase();
  const cityProfile = CITY_DATA[normalized] ?? {
    lat: -2.5,
    lon: 118,
    sunHours: 4.82,
  };

  const tariff = 1650;
  const performanceRatio = 0.78;
  const exportEfficiency = 0.9;
  const panelWatt = 550;
  const panelArea = 2.1;
  const capexPerKwP = 14_500_000;

  const monthlyKwh = input.monthlyBill / tariff;
  const annualKwh = monthlyKwh * 12;
  const requiredKwP = annualKwh / (cityProfile.sunHours * 365 * performanceRatio);
  const panelCount = Math.max(1, Math.ceil((requiredKwP * 1000) / panelWatt));
  const roofArea = panelCount * panelArea;

  const annualGeneration = requiredKwP * cityProfile.sunHours * 365 * performanceRatio;
  const annualSavings = Math.min(annualGeneration, annualKwh) * tariff * exportEfficiency;
  const installationCost = requiredKwP * capexPerKwP;
  const roiYears = installationCost / annualSavings;
  const coverage = Math.min(100, (annualGeneration / annualKwh) * 100);

  const reasoning: string[] = [];
  const insights: string[] = [];

  if (roiYears <= 6) {
    reasoning.push("Waktu pengembalian investasi sangat kompetitif untuk proyek rooftop.");
  } else if (roiYears <= 9) {
    reasoning.push("ROI masih berada dalam rentang layak untuk aset energi jangka menengah.");
  } else {
    reasoning.push("ROI relatif panjang, perlu optimasi desain atau skema pembiayaan.");
  }

  if (coverage >= 85) {
    reasoning.push("Kapasitas sistem mampu menutup sebagian besar kebutuhan listrik tahunan.");
  } else {
    reasoning.push("Kebutuhan energi tinggi membuat coverage belum optimal dengan konfigurasi awal.");
  }

  if (roofArea > 120) {
    insights.push("Kebutuhan luas atap cukup besar. Pertimbangkan pembagian fase instalasi.");
  }

  if (panelCount > 40) {
    insights.push("Jumlah panel tinggi untuk skala rumah tangga. Verifikasi struktur atap diperlukan.");
  }

  if (roiYears > 8) {
    insights.push("Pertimbangkan opsi pembiayaan hijau untuk menurunkan beban investasi awal.");
  }

  if (normalized in CITY_DATA) {
    insights.push("Profil radiasi diambil dari baseline kota yang kamu pilih dan cocok untuk estimasi awal.");
  } else {
    insights.push("Lokasi belum ada di baseline kota. Sistem menggunakan rata-rata nasional sebagai pendekatan.");
  }

  let feasibility: Feasibility;
  if (roiYears <= 6 && roofArea <= 120) {
    feasibility = "Sangat Layak";
  } else if (roiYears <= 9) {
    feasibility = "Layak";
  } else {
    feasibility = "Kurang Layak";
  }

  return {
    coordinates: {
      lat: cityProfile.lat,
      lon: cityProfile.lon,
    },
    irradiance: cityProfile.sunHours,
    monthlyKwh,
    annualKwh,
    requiredKwP,
    panelCount,
    roofArea,
    installationCost,
    annualGeneration,
    annualSavings,
    roiYears,
    coverage,
    feasibility,
    reasoning,
    insights,
  };
}

function metricNumber(value: number, digits = 1): string {
  return Number.isFinite(value) ? value.toFixed(digits) : "0";
}

export default function SolarwisePrototype() {
  const [location, setLocation] = useState("Bandung");
  const [monthlyBill, setMonthlyBill] = useState("1200000");
  const [phase, setPhase] = useState<"input" | "analysis" | "result">("input");
  const [result, setResult] = useState<SimulationResult | null>(null);

  const progressLabel = useMemo(() => {
    if (phase === "input") {
      return "Input Profil";
    }

    if (phase === "analysis") {
      return "Analisis Lokasi & Finansial";
    }

    return "Dashboard Keputusan";
  }, [phase]);

  const submitSimulation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const safeBill = Number(monthlyBill.replace(/[^\d]/g, ""));
    if (!location.trim() || !safeBill || safeBill < 250000) {
      return;
    }

    setPhase("analysis");

    window.setTimeout(() => {
      const simulation = estimateSolarOutcome({
        location,
        monthlyBill: safeBill,
      });
      setResult(simulation);
      setPhase("result");
    }, 1400);
  };

  return (
    <main className="relative overflow-hidden px-4 py-8 sm:px-8 lg:px-14">
      <div className="hero-glow hero-glow-left" aria-hidden />
      <div className="hero-glow hero-glow-right" aria-hidden />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="grid gap-5 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-[0_20px_80px_-30px_rgba(0,56,89,0.35)] backdrop-blur-md sm:p-8">
          <p className="inline-flex w-fit items-center rounded-full border border-slate-300 bg-slate-900 px-3 py-1 text-xs tracking-[0.16em] text-slate-100 uppercase">
            SolarWise Decision Engine
          </p>
          <h1 className="max-w-3xl text-balance text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Dari tagihan listrik ke keputusan investasi solar rooftop yang jelas.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Prototipe ini memadukan analisis lokasi, simulasi finansial, dan reasoning agar pengguna rumah tangga
            maupun UMKM bisa menilai kelayakan investasi dengan percaya diri.
          </p>
          <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Tahap Aktif</p>
              <p className="mt-1 text-base font-semibold text-slate-900">{progressLabel}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Alur</p>
              <p className="mt-1 text-base font-semibold text-slate-900">Input → Analisis → Rekomendasi</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Target Pengguna</p>
              <p className="mt-1 text-base font-semibold text-slate-900">Rumah Tangga & UMKM</p>
            </div>
          </div>
        </header>
              
        <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <form
            onSubmit={submitSimulation}
            className="grid gap-6 rounded-3xl border border-[#D6E6E9] bg-[#F4FAFB] p-6 shadow-[0_22px_60px_-40px_rgba(0,56,89,0.65)] sm:p-8"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">1. Input Data Awal</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                Masukkan kota atau alamat singkat, lalu total tagihan listrik bulanan. Sistem akan menerjemahkan input
                ini menjadi estimasi kebutuhan sistem dan output finansial.
              </p>
            </div>
            

            <label className="grid gap-2 text-sm text-slate-800">
              Lokasi (kota atau alamat)
              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                placeholder="Contoh: Bandung"
                required
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-800">
              Tagihan listrik bulanan (IDR)
              <input
                type="text"
                inputMode="numeric"
                value={monthlyBill}
                onChange={(event) => setMonthlyBill(event.target.value)}
                className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                placeholder="Contoh: 1200000"
                required
              />
            </label>

            <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
              Minimum simulasi disarankan untuk tagihan mulai IDR 250.000 agar sizing sistem lebih representatif.
            </p>

            <button
              type="submit"
              className="h-12 rounded-xl bg-slate-950 text-sm font-semibold tracking-wide text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
              disabled={phase === "analysis"}
            >
              {phase === "analysis" ? "Menganalisis Data..." : "Jalankan Analisis SolarWise"}
            </button>
          </form>

          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">2. Proses Analisis</h2>
            <ol className="grid gap-3 text-sm text-slate-700">
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                Geocoding lokasi untuk mendapatkan koordinat.
              </li>
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                Pengambilan baseline irradiance sebagai representasi data NASA POWER.
              </li>
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                Perhitungan kebutuhan kapasitas, biaya instalasi, dan potensi penghematan.
              </li>
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                Decision engine mengeluarkan status kelayakan + reasoning.
              </li>
            </ol>

            {phase === "analysis" ? (
              <div className="rounded-2xl border border-teal-300 bg-teal-50 p-4 text-sm text-teal-900">
                <div className="solarwise-loader mb-3" aria-hidden />
                Sistem sedang mensimulasikan potensi energi surya berbasis lokasi dan profil konsumsi.
              </div>
            ) : (
              <p className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Jalankan analisis untuk melihat dashboard keputusan otomatis.
              </p>
            )}
          </div>
        </section>

        {result ? (
          <section className="grid gap-6 rounded-3xl border border-[#BFDDE2] bg-white p-6 shadow-[0_20px_60px_-35px_rgba(0,56,89,0.55)] sm:p-8">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-slate-500">3. Dashboard Keputusan</p>
                <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">
                  Status: <span className="text-teal-700">{result.feasibility}</span>
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Lokasi: {toSentenceCase(location)} ({metricNumber(result.coordinates.lat, 2)}, {metricNumber(result.coordinates.lon, 2)})
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                Irradiance Estimasi: <strong>{metricNumber(result.irradiance, 2)} kWh/m2/hari</strong>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <article className="metric-card">
                <p>Konsumsi Bulanan</p>
                <h3>{metricNumber(result.monthlyKwh, 0)} kWh</h3>
              </article>
              <article className="metric-card">
                <p>Kapasitas Sistem</p>
                <h3>{metricNumber(result.requiredKwP, 2)} kWp</h3>
              </article>
              <article className="metric-card">
                <p>Biaya Instalasi</p>
                <h3>{IDR_FORMAT.format(result.installationCost)}</h3>
              </article>
              <article className="metric-card">
                <p>Estimasi ROI</p>
                <h3>{metricNumber(result.roiYears, 1)} tahun</h3>
              </article>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Rekomendasi Sistem</h3>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                  <li>Jumlah panel estimasi: {result.panelCount} panel (@550Wp)</li>
                  <li>Kebutuhan area atap: {metricNumber(result.roofArea, 1)} m2</li>
                  <li>Produksi energi tahunan: {metricNumber(result.annualGeneration, 0)} kWh</li>
                  <li>Cakupan kebutuhan listrik: {metricNumber(result.coverage, 1)}%</li>
                  <li>Potensi penghematan tahunan: {IDR_FORMAT.format(result.annualSavings)}</li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Reasoning Decision Engine</h3>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                  {result.reasoning.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              </article>
            </div>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-base font-semibold text-amber-900">Insight Tambahan</h3>
              <ul className="mt-3 grid gap-2 text-sm text-amber-950">
                {result.insights.map((insight) => (
                  <li key={insight}>{insight}</li>
                ))}
              </ul>
            </article>
          </section>
        ) : null}
      </section>
    </main>
  );
}
