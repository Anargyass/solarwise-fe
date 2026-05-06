"use client";

import { useState } from "react";
import { getNominatimReverseUrl, apiConfig } from "@/app/lib/api-config";

export default function HomePage() {
  const [location, setLocation] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("");
  const [monthlyBillRaw, setMonthlyBillRaw] = useState<number | null>(null);
  const [monthlyKwh, setMonthlyKwh] = useState("");
  const [monthlyKwhRaw, setMonthlyKwhRaw] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [detectingLocation, setDetectingLocation] = useState(false);
  const [locationMessage, setLocationMessage] = useState<string | null>(null);

  const tariffOptions = [
    { label: "R-1 (Non-Subsidi) 900 VA", range: "900 VA", rate: 1352 },
    { label: "R-1 (Non-Subsidi) 1.300 VA – 2.200 VA", range: "1.300–2.200 VA", rate: 1444.7 },
    { label: "R-2 3.500 VA – 5.500 VA", range: "3.500–5.500 VA", rate: 1699.53 },
    { label: "R-3 ≥ 6.600 VA", range: ">= 6.600 VA", rate: 1699.53 },
  ];

  const [tariffIndex, setTariffIndex] = useState(0);
  // Use fixed rate as requested
  const rate = 1444;

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationMessage("Browser ini belum mendukung lokasi otomatis.");
      return;
    }

    setDetectingLocation(true);
    setLocationMessage(null);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const fallbackLabel = `${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`;

        try {
          const response = await fetch(
            getNominatimReverseUrl(coords.latitude, coords.longitude),
          );

          if (!response.ok) {
            throw new Error("Reverse geocoding failed");
          }

          const data = (await response.json()) as { display_name?: string };
          setLocation(data.display_name ?? fallbackLabel);
          setLocationMessage("Lokasi saat ini berhasil dipakai.");
        } catch {
          setLocation(fallbackLabel);
          setLocationMessage("Lokasi ditemukan, tapi nama area tidak bisa dimuat.");
        } finally {
          setDetectingLocation(false);
        }
      },
      () => {
        setDetectingLocation(false);
        setLocationMessage("Izin lokasi ditolak atau tidak tersedia.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      },
    );
  };

  const formatCurrency = (value: number) => {
    try {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
    } catch {
      return `Rp ${value.toLocaleString('id-ID')}`;
    }
  };

  const handleMonthlyBillChange = (val: string) => {
    const digits = val.replace(/\D/g, "");
    const num = digits ? parseInt(digits, 10) : 0;
    setMonthlyBillRaw(num || null);
    setMonthlyBill(num ? formatCurrency(num) : "");

    if (num && rate) {
      const kwh = Math.round((num / rate) * 100) / 100;
      setMonthlyKwhRaw(kwh || null);
      setMonthlyKwh(kwh ? kwh.toLocaleString("id-ID", { maximumFractionDigits: 2 }) : "");
    } else {
      setMonthlyKwhRaw(null);
      setMonthlyKwh("");
    }
  };

  const handleMonthlyKwhChange = (val: string) => {
    // Accept comma or dot as decimal
    const cleaned = val.replace(/,/g, '.').replace(/[^0-9.]/g, '');
    const num = cleaned ? parseFloat(cleaned) : 0;
    setMonthlyKwhRaw(num || null);
    setMonthlyKwh(num ? num.toLocaleString('id-ID', { maximumFractionDigits: 2 }) : '');

    if (num && rate) {
      const bill = Math.round(num * rate);
      setMonthlyBillRaw(bill || null);
      setMonthlyBill(bill ? formatCurrency(bill) : '');
    } else {
      setMonthlyBillRaw(null);
      setMonthlyBill('');
    }
  };

  // tariff slider removed per request; rate is fixed to 1444

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use parsed billing amount from state
      const billingAmount = monthlyBillRaw ?? parseInt(monthlyBill.replace(/\D/g, ""));

      if (!location || !billingAmount) {
        setLocationMessage("Pastikan lokasi dan tagihan listrik terisi dengan benar");
        setLoading(false);
        return;
      }

      // Redirect to result page with query parameters
      const params = new URLSearchParams({
        lokasi: location,
        tagihan: billingAmount.toString(),
        tarif: rate.toString(),
        kwh: (monthlyKwhRaw ?? '').toString(),
      });

      window.location.href = `/result?${params.toString()}`;
    } catch (error) {
      setLocationMessage("Terjadi kesalahan saat memproses data");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fff6d1] flex flex-col items-center justify-center px-4 py-12 text-[#003631] transition-colors duration-500 sm:px-8">
      <div className="w-full max-w-2xl">
        <div className="mb-8 flex justify-center">
          <img src="/images/branding/logoGelap.png" alt="SolarWise" className="h-14 w-auto sm:h-16" />
        </div>

        <p className="mb-10 text-center text-base font-medium sm:text-lg">
          Ketahui kelayakan solar panel untuk rumahmu dalam hitungan menit
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-4xl border border-[#003631] bg-[#003631] p-5 text-[#fff6d1] shadow-[0_18px_50px_rgba(6,46,42,0.22)] transition-colors duration-500 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fff6d1]">
                  Input Data
                </p>
                <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                  Isi data rumahmu di sini
                </h2>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#fff6d1] text-[#003631] sm:flex">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 11.25 12 4l9 7.25V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.75Z" />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="block text-sm font-semibold">
                  Di mana lokasi rumah atau usahamu?
                </label>

                <button
                  type="button"
                  onClick={useCurrentLocation}
                  disabled={detectingLocation}
                  className="inline-flex items-center gap-2 rounded-full border border-[#fff6d1] bg-[#fff6d1] px-4 py-2 text-xs font-semibold text-[#003631] transition-colors duration-500 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.5-7.5-2.1 2.1M8.6 15.4l-2.1 2.1m0-10 2.1 2.1m8.9 8.9 2.1 2.1"
                    />
                    <circle cx="12" cy="12" r="3" strokeWidth={2} />
                  </svg>
                  {detectingLocation ? "Mendeteksi lokasi..." : "Gunakan lokasi saat ini"}
                </button>
              </div>

              <div className="rounded-3xl border border-[#fff6d1] bg-[#fff6d1] px-4 py-3 shadow-sm transition-all duration-500 focus-within:border-[#fff6d1] focus-within:ring-4 focus-within:ring-[#fff6d1] focus-within:shadow-[0_0_0_1px_rgba(255,246,209,1),0_16px_34px_rgba(0,54,49,0.24)]">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="jalan keputih, d29"
                  className="w-full bg-transparent text-[#003631] caret-[#003631] placeholder-[#003631]/60 outline-none"
                  required
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-[#fff6d1]">
                <span className="mt-0.5">•</span>
                <p>
                  Kamu bisa mengetik manual atau memakai lokasi saat ini untuk isi otomatis.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label className="block text-sm font-semibold">
                Rata - rata tagihan listrik perbulan
              </label>
              <div className="rounded-full border border-[#fff6d1]/15 bg-[#fff6d1] px-4 py-3 shadow-sm transition-all duration-500 focus-within:border-[#fff6d1] focus-within:ring-4 focus-within:ring-[#fff6d1]/20 focus-within:shadow-[0_0_0_1px_rgba(255,246,209,0.45),0_16px_34px_rgba(6,46,42,0.18)]">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={monthlyBill}
                    onChange={(e) => handleMonthlyBillChange(e.target.value)}
                    placeholder="Rp 500.000"
                    className="flex-1 bg-transparent text-[#003631] caret-[#003631] placeholder-[#003631]/60 outline-none"
                    inputMode="numeric"
                    required
                  />

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={monthlyKwh}
                      onChange={(e) => handleMonthlyKwhChange(e.target.value)}
                      placeholder="kWh"
                      className="w-28 rounded-full border border-[#003631]/10 bg-white/10 px-3 py-1 text-sm text-[#003631] outline-none"
                      inputMode="decimal"
                    />
                    <span className="text-xs text-[#003631]/70">kWh</span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-sm text-[#fff6d1]/90">Tarif yang digunakan: <span className="font-semibold">{formatCurrency(rate)}/kWh</span></div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-w-44 items-center justify-center rounded-full bg-[#fff6d1] px-8 py-3 font-semibold text-[#003631] transition-colors duration-500 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Menganalisis..." : "Cek Kelayakan"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {locationMessage ? (
        <div className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-[#003631]/20 bg-[#fff6d1] px-4 py-3 text-[#003631] shadow-[0_12px_30px_rgba(6,46,42,0.18)] transition-colors duration-500">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631]/10 text-[#003631]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">Lokasi diperbarui</p>
              <p className="mt-0.5 text-sm text-[#003631]/70">{locationMessage}</p>
            </div>

            <button
              type="button"
              onClick={() => setLocationMessage(null)}
              className="rounded-full p-1 text-[#003631]/60 transition hover:bg-[#003631]/10 hover:text-[#003631]"
              aria-label="Tutup pesan lokasi"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}

