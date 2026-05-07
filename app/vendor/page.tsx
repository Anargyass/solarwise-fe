"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Mock vendor data
const MOCK_VENDORS = [
  {
    id: 1,
    name: "PT Surya Energi Nusantara",
    city: "Surabaya",
    pricePerKwp: 15000000,
    projectTypes: ["Residential", "Commercial"],
    matchScore: 95,
    matchReason: "Spesialisasi 2-6 kWp untuk area Surabaya",
    experience: "7+ tahun",
    projects: 200,
  },
  {
    id: 2,
    name: "Solar Indonesia Praktis",
    city: "Surabaya",
    pricePerKwp: 14500000,
    projectTypes: ["Residential"],
    matchScore: 88,
    matchReason: "Fokus residential, harga kompetitif, respon cepat",
    experience: "5+ tahun",
    projects: 150,
  },
  {
    id: 3,
    name: "Powerhouse Renewable",
    city: "Jakarta",
    pricePerKwp: 16000000,
    projectTypes: ["Residential", "Commercial"],
    matchScore: 82,
    matchReason: "Teknologi baru, garansi lengkap, jangkauan luas",
    experience: "10+ tahun",
    projects: 500,
  },
  {
    id: 4,
    name: "Green Energy Solutions",
    city: "Bandung",
    pricePerKwp: 14000000,
    projectTypes: ["Residential"],
    matchScore: 75,
    matchReason: "Harga kompetitif untuk kapasitas kecil",
    experience: "3+ tahun",
    projects: 80,
  },
];

interface UserSimulationData {
  lokasi: string;
  kapasitas: number;
  penghematan: string;
  roi: string;
}

<<<<<<< HEAD
function VendorContent() {
=======
const VALUE_PILLARS = [
  {
    title: "Cocok dari Data",
    description: "Bukan listing biasa, tapi hasil matching algoritma berdasarkan analisis teknis dan finansial.",
    icon: (
      <svg className="h-7 w-7 text-[#003631]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path
          fillRule="evenodd"
          d="M4 5a2 2 0 012-2 1 1 0 000-2 4 4 0 00-4 4v9a4 4 0 004 4h12a4 4 0 004-4V5a2 2 0 00-2-2 1 1 0 000 2h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2-1a1 1 0 100 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Ringkas dan Terarah",
    description: "Kami sudah filter vendor terbaik untuk Anda sehingga Anda fokus pada opsi paling relevan.",
    icon: (
      <svg className="h-7 w-7 text-[#003631]" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M2 9a2 2 0 012-2h1.293a.5.5 0 00.354-.146l2.5-2.5a.5.5 0 00-.708-.708L4.586 5.5H4a1 1 0 00-1 1v5a1 1 0 001 1h1.586l2.146-2.146a.5.5 0 10-.708-.708l-2.5 2.5A.5.5 0 005.293 11H4a2 2 0 01-2-2V9z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M14.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 8a2 2 0 114 0 2 2 0 01-4 0zm-8 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 15a3 3 0 116 0 3 3 0 01-6 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Risiko Lebih Rendah",
    description: "Vendor sudah terverifikasi dan sesuai kebutuhan kapasitas rumah Anda.",
    icon: (
      <svg className="h-7 w-7 text-[#003631]" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.050A3.066 3.066 0 0117 17.5H3a3.066 3.066 0 01-3.066-3.062v-6.05a3.066 3.066 0 012.812-3.062zm0 1.23a1.832 1.832 0 00-1.04.429A1.834 1.834 0 004.168 5.5h11.664a1.834 1.834 0 00-1.06-.386 1.832 1.832 0 00-1.04-.429H6.267zm0-1.23h8.468A3.066 3.066 0 0017 5.688v6.05a1.834 1.834 0 01-1.834 1.834H4.834A1.834 1.834 0 013 11.738v-6.05a3.066 3.066 0 013.267-3.062zm9.732 7.416a1 1 0 10-1.414-1.414l-3.083 3.083-1.414-1.414a1 1 0 00-1.414 1.414l2.121 2.121a1 1 0 001.414 0l4.242-4.242z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  { step: 1, title: "Analisis", desc: "Kebutuhan energi dan lokasi", done: true },
  { step: 2, title: "Matching Vendor", desc: "Vendor terbaik dipilih", done: true },
  { step: 3, title: "Konsultasi", desc: "Survei dan penawaran detail", done: false },
  { step: 4, title: "Instalasi", desc: "Pemasangan panel surya", done: false },
];

const TRUST_STATS = [
  { value: "500+", label: "Proyek Sukses" },
  { value: "30+", label: "Vendor Terverifikasi" },
  { value: "98%", label: "Kepuasan Klien" },
];

export default function VendorPage() {
>>>>>>> 8309447 (donee)
  const searchParams = useSearchParams();

  // Parse user data from URL
  const userData: UserSimulationData = {
    lokasi: searchParams.get("lokasi") || "Surabaya",
    kapasitas: parseInt(searchParams.get("kapasitas") || "3", 10),
    penghematan: searchParams.get("penghematan") || "Rp 600.000",
    roi: searchParams.get("roi") || "8 tahun",
  };

  // Filter vendors berdasarkan lokasi user (simplified matching)
  const matchedVendors = [...MOCK_VENDORS].sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
  const topMatch = matchedVendors[0];

  const profileMetrics = [
    { label: "Lokasi", value: userData.lokasi, note: "Basis matching" },
    { label: "Kapasitas", value: `${userData.kapasitas} kWp`, note: "Target sistem" },
    { label: "Hemat/bulan", value: userData.penghematan, note: "Estimasi" },
    { label: "ROI", value: userData.roi, note: "Waktu balik modal" },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <main className="relative min-h-screen bg-[#fff6d1] text-[#003631]">

      <section className="relative px-4 pb-14 pt-16 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 motion-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#003631]/15 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-wide shadow-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Vendor siap dihubungi
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Vendor terbaik untuk sistem surya Anda
              </h1>
              <p className="text-balance text-sm leading-relaxed text-[#003631]/75 sm:text-base">
                Rekomendasi dibuat dari simulasi energi dan lokasi Anda. Fokus pada opsi yang paling relevan.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#vendor-list"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#003631] px-7 text-sm font-semibold text-[#fff6d1] shadow-md transition-all hover:-translate-y-1"
              >
                Lihat Vendor Rekomendasi
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/home"
                className="inline-flex h-12 items-center justify-center rounded-2xl border-2 border-[#003631] px-6 text-sm font-semibold text-[#003631] transition-all hover:bg-[#003631]/5"
              >
                Ubah Simulasi
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] font-semibold text-[#003631]/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Vendor terverifikasi
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Harga transparan per kWp
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                Pendampingan survey
              </span>
            </div>
          </div>

          <aside className="motion-rise" style={{ animationDelay: "120ms" }}>
            <div className="rounded-3xl border border-[#003631]/15 bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#003631]/60">Profil kebutuhan</p>
                  <h2 className="mt-2 text-xl font-bold">Ringkasan Simulasi</h2>
                </div>
                {topMatch && (
                  <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-center">
                    <p className="text-xs font-semibold text-emerald-700">Top match</p>
                    <p className="text-lg font-bold text-emerald-700">{topMatch.matchScore}%</p>
                  </div>
                )}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {profileMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-[#003631]/10 bg-white p-4 shadow-sm"
                  >
                    <p className="text-[11px] font-semibold uppercase text-[#003631]/60">{metric.label}</p>
                    <p className="mt-2 text-base font-bold text-[#003631]">{metric.value}</p>
                    <p className="mt-1 text-xs text-[#003631]/60">{metric.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#003631] p-5 text-[#fff6d1]">
                <p className="text-xs font-semibold uppercase text-[#fff6d1]/70">Rekomendasi utama</p>
                <p className="mt-2 text-base font-bold">
                  {topMatch ? topMatch.name : "Vendor pilihan SolarWise"}
                </p>
                <p className="mt-2 text-xs text-[#fff6d1]/80">
                  Cocok untuk kapasitas {userData.kapasitas} kWp di area {userData.lokasi}.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="vendor-list" className="relative px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Vendor rekomendasi untuk Anda</h2>
              <p className="mt-2 text-sm text-[#003631]/70">
                Dipilih dari profil, lokasi, dan kapasitas sistem Anda.
              </p>
            </div>
            <div className="rounded-2xl border border-[#003631]/15 bg-white px-4 py-3 text-[11px] font-semibold uppercase text-[#003631]/70 shadow-sm">
              {matchedVendors.length} vendor terbaik dari {MOCK_VENDORS.length} kandidat
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {matchedVendors.map((vendor) => (
              <article
                key={vendor.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#003631]/15 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-[#003631]/20" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-[#003631]">{vendor.name}</h3>
                      <div className="mt-2 flex items-center gap-2 text-xs text-[#003631]/70">
                        <svg className="h-4 w-4 text-[#003631]/60" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {vendor.city}
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                      Match {vendor.matchScore}%
                    </div>
                  </div>

                  <p className="mt-4 rounded-2xl bg-blue-50 px-4 py-3 text-xs text-blue-900">
                    {vendor.matchReason}
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl border border-[#003631]/10 bg-white p-3">
                      <p className="text-[10px] font-semibold uppercase text-[#003631]/60">Harga/kWp</p>
                      <p className="mt-2 text-xs font-bold text-[#003631]">{formatCurrency(vendor.pricePerKwp)}</p>
                    </div>
                    <div className="rounded-2xl border border-[#003631]/10 bg-white p-3">
                      <p className="text-[10px] font-semibold uppercase text-[#003631]/60">Pengalaman</p>
                      <p className="mt-2 text-xs font-bold text-[#003631]">{vendor.experience}</p>
                    </div>
                    <div className="rounded-2xl border border-[#003631]/10 bg-white p-3">
                      <p className="text-[10px] font-semibold uppercase text-[#003631]/60">Proyek</p>
                      <p className="mt-2 text-xs font-bold text-[#003631]">{vendor.projects}+</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {vendor.projectTypes.map((type) => (
                      <span key={type} className="rounded-full bg-[#003631]/10 px-3 py-1 text-[11px] font-semibold text-[#003631]">
                        {type}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <button className="w-full rounded-xl bg-[#003631] px-4 py-2.5 text-sm font-semibold text-[#fff6d1] transition-all hover:opacity-90">
                      Hubungi Vendor
                    </button>
                    <button className="w-full rounded-xl border-2 border-[#003631] px-4 py-2.5 text-sm font-semibold text-[#003631] transition-all hover:bg-[#003631]/5">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#003631]/15 bg-white p-6 text-xs text-[#003631]/80 shadow-sm">
            Tip: Vendor di atas paling cocok untuk kapasitas {userData.kapasitas} kWp di area {userData.lokasi}. Anda bebas membandingkan atau konsultasi dengan tim support kami.
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Mengapa matching SolarWise lebih akurat</h2>
            <p className="mt-2 text-sm text-[#003631]/70">Dibuat agar keputusan Anda terasa yakin, bukan spekulatif.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {VALUE_PILLARS.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-[#003631]/15 bg-white p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#003631]/10">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-[#003631]">{pillar.title}</h3>
                <p className="mt-2 text-xs text-[#003631]/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Langkah selanjutnya</h2>
            <p className="mt-2 text-sm text-[#003631]/70">Dari analisis hingga pemasangan panel surya.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="rounded-3xl border border-[#003631]/15 bg-white p-5 text-center shadow-sm">
                <div
                  className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-base font-bold ${
                    item.done ? "bg-emerald-100 text-emerald-700" : "border-2 border-[#003631]/20 text-[#003631]"
                  }`}
                >
                  {item.done ? (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    item.step
                  )}
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#003631]">{item.title}</h3>
                <p className="mt-2 text-[11px] text-[#003631]/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[28px] bg-[#003631] p-8 text-center text-[#fff6d1] shadow-2xl sm:p-10">
            <h2 className="text-xl font-bold sm:text-2xl">Siap lanjut ke instalasi?</h2>
            <p className="mt-3 text-sm text-[#fff6d1]/80">
              Hubungi vendor rekomendasi untuk konsultasi teknis dan penawaran terbaik.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#fff6d1] px-6 py-2.5 text-sm font-semibold text-[#003631] transition-all hover:opacity-90">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Hubungi Vendor Pilihan
              </button>
              <Link
                href="/home"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#fff6d1] px-6 py-2.5 text-sm font-semibold text-[#fff6d1] transition-all hover:bg-[#fff6d1]/10"
              >
                Kembali ke Analisis
              </Link>
            </div>

            <p className="mt-6 text-xs text-[#fff6d1]/70">
              Tanpa komitmen - Gratis konsultasi awal - Vendor terverifikasi
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#003631]/10 px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#003631]/10 bg-white p-6 shadow-sm">
                <p className="text-xl font-bold text-[#003631]">{stat.value}</p>
                <p className="mt-1 text-xs text-[#003631]/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { Suspense } from "react";

export default function VendorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center p-4 bg-[#F7F9F2]">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#003631] border-t-transparent"></div>
            <p className="mt-4 font-medium text-[#003631]">Memuat data vendor...</p>
          </div>
        </div>
      }
    >
      <VendorContent />
    </Suspense>
  );
}
