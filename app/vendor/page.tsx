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
    matchReason: "Spesialisasi instalasi 2-6 kWp, beroperasi di Surabaya",
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
    matchReason: "Fokus pada residential murah, response cepat",
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
    matchReason: "Teknologi terkini, garansi komprehensif, jangkauan Indonesia",
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
    matchReason: "Harga kompetitif untuk kWp kecil",
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

function VendorContent() {
  const searchParams = useSearchParams();

  // Parse user data from URL
  const userData: UserSimulationData = {
    lokasi: searchParams.get("lokasi") || "Surabaya",
    kapasitas: parseInt(searchParams.get("kapasitas") || "3", 10),
    penghematan: searchParams.get("penghematan") || "Rp 600.000",
    roi: searchParams.get("roi") || "8 tahun",
  };

  // Filter vendors berdasarkan lokasi user (simplified matching)
  const matchedVendors = MOCK_VENDORS.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <main className="min-h-screen bg-[#fff6d1] text-[#003631]">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#003631]/20 bg-white px-4 py-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#003631]" />
            <span className="text-xs font-bold uppercase tracking-wide">Langkah Berikutnya</span>
          </div>

          <h1 className="text-balance text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Lanjutkan ke Instalasi Nyata
          </h1>

          <p className="mt-6 text-balance text-base leading-relaxed sm:text-lg text-[#003631]/80">
            Hasil analisis Anda sudah siap. Sekarang temukan vendor terpercaya yang paling cocok dengan kebutuhan energi dan lokasi Anda—berdasarkan data, bukan asumsi.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <button className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#003631] px-8 text-base font-semibold text-[#fff6d1] shadow-lg transition-all hover:-translate-y-1 active:translate-y-0">
              Temukan Vendor Terdekat
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-xs font-medium text-[#003631]/60">
              Berdasarkan analisis lokasi & kebutuhan energi Anda
            </p>
          </div>
        </div>
      </section>

      {/* Matching Insight Section */}
      <section className="px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Profil Kebutuhan Anda</h2>
            <p className="mt-2 text-[#003631]/70">
              Informasi ini digunakan untuk mencocokkan Anda dengan vendor paling relevan
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border-2 border-[#003631]/20 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <p className="text-xs font-semibold text-[#003631]/60 uppercase">Lokasi</p>
              <p className="mt-3 text-xl font-bold text-[#003631]">{userData.lokasi}</p>
            </div>
            <div className="rounded-2xl border-2 border-[#003631]/20 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <p className="text-xs font-semibold text-[#003631]/60 uppercase">Kapasitas</p>
              <p className="mt-3 text-xl font-bold text-[#003631]">{userData.kapasitas} kWp</p>
            </div>
            <div className="rounded-2xl border-2 border-[#003631]/20 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <p className="text-xs font-semibold text-[#003631]/60 uppercase">Penghematan</p>
              <p className="mt-3 text-xl font-bold text-[#003631]">{userData.penghematan}</p>
            </div>
            <div className="rounded-2xl border-2 border-[#003631]/20 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <p className="text-xs font-semibold text-[#003631]/60 uppercase">ROI</p>
              <p className="mt-3 text-xl font-bold text-[#003631]">{userData.roi}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Matching Section */}
      <section className="px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Vendor Rekomendasi untuk Anda</h2>
            <p className="mt-2 text-[#003631]/70">
              Dipilih berdasarkan kecocokan dengan profil kebutuhan dan lokasi Anda
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {matchedVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white shadow-md transition-all duration-300 hover:border-[#003631]/50 hover:shadow-lg"
              >
                {/* Match Score Badge */}
                <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1">
                  <span className="text-xs font-bold text-green-700">Match {vendor.matchScore}%</span>
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-[#003631]">{vendor.name}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#003631]/60" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-[#003631]/70">{vendor.city}</span>
                    </div>
                  </div>

                  {/* Match Reason */}
                  <div className="mb-6 rounded-2xl bg-blue-50 p-4">
                    <p className="text-xs font-semibold text-blue-600 uppercase">Mengapa Cocok</p>
                    <p className="mt-2 text-sm text-blue-900">{vendor.matchReason}</p>
                  </div>

                  {/* Key Info */}
                  <div className="mb-6 space-y-3 border-y border-[#003631]/10 py-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-[#003631]/70">Harga per kWp</span>
                      <span className="font-semibold text-[#003631]">{formatCurrency(vendor.pricePerKwp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-[#003631]/70">Pengalaman</span>
                      <span className="font-semibold text-[#003631]">{vendor.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-[#003631]/70">Proyek Selesai</span>
                      <span className="font-semibold text-[#003631]">{vendor.projects}+</span>
                    </div>
                  </div>

                  {/* Project Types */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {vendor.projectTypes.map((type) => (
                      <span key={type} className="inline-flex items-center rounded-full bg-[#003631]/10 px-3 py-1 text-xs font-semibold text-[#003631]">
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-2">
                    <button className="w-full rounded-xl bg-[#003631] px-4 py-3 font-semibold text-[#fff6d1] transition-all hover:opacity-90">
                      Hubungi Vendor
                    </button>
                    <button className="w-full rounded-xl border-2 border-[#003631] px-4 py-3 font-semibold text-[#003631] transition-all hover:bg-[#003631]/5">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 rounded-2xl border-2 border-[#003631]/20 bg-white p-6">
            <p className="text-sm text-[#003631]/70">
              💡 <strong>Tip:</strong> Vendor di atas adalah yang paling cocok untuk kapasitas {userData.kapasitas} kWp di area {userData.lokasi}.
              Anda bebas membandingkan atau konsultasi lebih lanjut dengan tim support kami.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Mengapa Vendor Matching SolarWise Berbeda</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-[#003631]/20 bg-white p-8 text-center transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#003631]/10">
                <svg className="h-7 w-7 text-[#003631]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000-2 4 4 0 00-4 4v9a4 4 0 004 4h12a4 4 0 004-4V5a2 2 0 00-2-2 1 1 0 000 2h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2-1a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#003631]">Cocok dari Data</h3>
              <p className="mt-2 text-sm text-[#003631]/70">
                Bukan listing biasa, tapi hasil matching algoritma berdasarkan analisis teknis & finansial Anda
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#003631]/20 bg-white p-8 text-center transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#003631]/10">
                <svg className="h-7 w-7 text-[#003631]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 9a2 2 0 012-2h1.293a.5.5 0 00.354-.146l2.5-2.5a.5.5 0 00-.708-.708L4.586 5.5H4a1 1 0 00-1 1v5a1 1 0 001 1h1.586l2.146-2.146a.5.5 0 10-.708-.708l-2.5 2.5A.5.5 0 005.293 11H4a2 2 0 01-2-2V9z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M14.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 8a2 2 0 114 0 2 2 0 01-4 0zm-8 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 15a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#003631]">Tidak Perlu Bandingkan Manual</h3>
              <p className="mt-2 text-sm text-[#003631]/70">
                Kami sudah filter vendor terbaik untuk Anda — hemat waktu dan riset
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#003631]/20 bg-white p-8 text-center transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#003631]/10">
                <svg className="h-7 w-7 text-[#003631]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.050A3.066 3.066 0 0117 17.5H3a3.066 3.066 0 01-3.066-3.062v-6.05a3.066 3.066 0 012.812-3.062zm0 1.23a1.832 1.832 0 00-1.04.429A1.834 1.834 0 004.168 5.5h11.664a1.834 1.834 0 00-1.06-.386 1.832 1.832 0 00-1.04-.429H6.267zm0-1.23h8.468A3.066 3.066 0 0017 5.688v6.05a1.834 1.834 0 01-1.834 1.834H4.834A1.834 1.834 0 013 11.738v-6.05a3.066 3.066 0 013.267-3.062zm9.732 7.416a1 1 0 10-1.414-1.414l-3.083 3.083-1.414-1.414a1 1 0 00-1.414 1.414l2.121 2.121a1 1 0 001.414 0l4.242-4.242z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#003631]">Kurangi Risiko Kesalahan</h3>
              <p className="mt-2 text-sm text-[#003631]/70">
                Vendor sudah terverifikasi dan sesuai dengan kebutuhan spesifik rumah Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Langkah-Langkah Selanjutnya</h2>
            <p className="mt-2 text-[#003631]/70">Dari analisis hingga instalasi panel surya</p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: 1, title: "Analisis", desc: "Kebutuhan energi & lokasi", done: true },
              { step: 2, title: "Matching Vendor", desc: "Vendor terbaik dipilih", done: true },
              { step: 3, title: "Konsultasi", desc: "Survei & penawaran detail", done: false },
              { step: 4, title: "Instalasi", desc: "Proses pemasangan panel", done: false },
            ].map((item, idx) => (
              <div key={idx}>
                <div className={`relative flex flex-col items-center text-center ${idx < 3 ? "pb-8" : ""}`}>
                  {/* Step Circle */}
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full font-bold text-lg ${
                      item.done
                        ? "bg-green-100 text-green-700"
                        : "border-2 border-[#003631]/20 bg-white text-[#003631]"
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

                  {/* Connector Line */}
                  {idx < 3 && (
                    <div
                      className={`absolute top-6 left-1/2 h-8 w-1 transform -translate-x-1/2 translate-y-12 ${
                        item.done ? "bg-green-300" : "bg-[#003631]/20"
                      }`}
                    />
                  )}

                  {/* Text */}
                  <h3 className="font-bold text-[#003631]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#003631]/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-4xl border-2 border-[#003631] bg-[#003631] p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-bold text-[#fff6d1] sm:text-3xl">
              Siap Melanjutkan ke Instalasi?
            </h2>
            <p className="mt-4 text-[#fff6d1]/80">
              Hubungi salah satu vendor rekomendasi kami untuk konsultasi teknis dan penawaran terbaik
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#fff6d1] px-8 py-3 font-semibold text-[#003631] transition-all hover:opacity-90">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Hubungi Vendor Pilihan
              </button>
              <Link
                href="/home"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#fff6d1] px-8 py-3 font-semibold text-[#fff6d1] transition-all hover:bg-[#fff6d1]/10"
              >
                Kembali ke Analisis
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#fff6d1]/70">
              Tanpa komitmen • Gratis konsultasi awal • Vendor terverifikasi
            </p>
          </div>
        </div>
      </section>

      {/* Footer Trust Signals */}
      <section className="border-t border-[#003631]/10 px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-[#003631]">500+</p>
              <p className="mt-1 text-sm text-[#003631]/70">Proyek Sukses</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#003631]">30+</p>
              <p className="mt-1 text-sm text-[#003631]/70">Vendor Terverifikasi</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#003631]">98%</p>
              <p className="mt-1 text-sm text-[#003631]/70">Kepuasan Klien</p>
            </div>
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
