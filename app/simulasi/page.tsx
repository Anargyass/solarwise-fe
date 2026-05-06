"use client";

import Link from "next/link";

export default function SimulasiPage() {
  return (
    <div className="min-h-screen bg-[#fff6d1]">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 pt-24 pb-16">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 rounded-full bg-[#003631] px-5 py-2.5 text-sm font-semibold text-[#fff6d1] transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </Link>

        {/* Header Section */}
        <div className="mb-16 rounded-4xl border-2 border-[#003631] bg-[#003631] p-8 text-[#fff6d1] shadow-[0_18px_50px_rgba(0,54,49,0.15)]">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#fff6d1]/20 px-4 py-1.5">
            <span className="text-xs font-bold uppercase tracking-wide">Coming Soon</span>
          </div>
          <h1 className="mb-2 text-4xl font-bold sm:text-5xl">Simulasi Solar Panel</h1>
          <p className="text-lg text-[#fff6d1]/80">Fitur interaktif sedang dalam pengembangan dengan pendekatan iteratif</p>
        </div>

        {/* Coming Soon Section */}
        <section className="mb-16">
          <div className="rounded-3xl border-2 border-[#003631] bg-white p-8 text-center shadow-[0_8px_24px_rgba(0,54,49,0.08)]">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#003631]/10">
                <svg className="h-8 w-8 text-[#003631]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[#003631]">Fitur Simulasi Segera Hadir!</h2>
            <p className="text-[#003631]/70">Kami sedang menyiapkan pengalaman interaktif untuk visualisasi real-time potensi panel surya rumah Anda</p>
          </div>
        </section>

        {/* Video Demo Info */}
        <section className="mb-16">
          <h2 className="mb-2 text-3xl font-bold text-[#003631]">Apa Yang Akan Ditampilkan?</h2>
          <p className="mb-8 text-[#003631]/70">Fitur-fitur yang sedang dikembangkan untuk pengalaman simulasi terbaik:</p>
          
          <div className="space-y-3">
            <div className="flex gap-4 rounded-3xl border-2 border-[#003631] bg-white p-5 shadow-[0_6px_16px_rgba(0,54,49,0.06)]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003631] font-bold text-[#fff6d1]">
                1
              </div>
              <div>
                <h3 className="mb-1 font-bold text-[#003631]">Input Interaktif</h3>
                <p className="text-sm text-[#003631]/70">Masukkan data lokasi dan tagihan listrik Anda dengan antarmuka yang user-friendly</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl border-2 border-[#003631] bg-white p-5 shadow-[0_6px_16px_rgba(0,54,49,0.06)]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003631] font-bold text-[#fff6d1]">
                2
              </div>
              <div>
                <h3 className="mb-1 font-bold text-[#003631]">Analisis Radiasi Dinamis</h3>
                <p className="text-sm text-[#003631]/70">Lihat visualisasi peta potensi matahari untuk area Anda secara real-time</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl border-2 border-[#003631] bg-white p-5 shadow-[0_6px_16px_rgba(0,54,49,0.06)]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003631] font-bold text-[#fff6d1]">
                3
              </div>
              <div>
                <h3 className="mb-1 font-bold text-[#003631]">Journey Input ke Output</h3>
                <p className="text-sm text-[#003631]/70">Pahami setiap langkah proses dari input data hingga hasil analisis kelayakan</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl border-2 border-[#003631] bg-white p-5 shadow-[0_6px_16px_rgba(0,54,49,0.06)]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003631] font-bold text-[#fff6d1]">
                4
              </div>
              <div>
                <h3 className="mb-1 font-bold text-[#003631]">Grafik ROI Interaktif</h3>
                <p className="text-sm text-[#003631]/70">Eksplorasi grafik proyeksi ROI dan lihat break-even point investasi Anda</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl border-2 border-[#003631] bg-white p-5 shadow-[0_6px_16px_rgba(0,54,49,0.06)]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003631] font-bold text-[#fff6d1]">
                5
              </div>
              <div>
                <h3 className="mb-1 font-bold text-[#003631]">Tips Keputusan</h3>
                <p className="text-sm text-[#003631]/70">Dapatkan rekomendasi spesifik berdasarkan kondisi unik rumah dan keuangan Anda</p>
              </div>
            </div>
          </div>
        </section>

        {/* What To Do Now */}
        <section className="mb-16">
          <h2 className="mb-2 text-3xl font-bold text-[#003631]">Sementara Itu...</h2>
          <p className="mb-8 text-[#003631]/70">Apa yang bisa Anda lakukan sekarang:</p>
          
          <div className="rounded-3xl border-2 border-[#003631] bg-white p-8 shadow-[0_8px_24px_rgba(0,54,49,0.08)]">
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  ✓
                </div>
                <div>
                  <p className="text-[#003631]">Cek kelayakan rumah Anda saat ini dengan fitur dasar kami yang sudah tersedia</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  ✓
                </div>
                <div>
                  <p className="text-[#003631]">Baca penjelasan "Cara Kerja" untuk memahami metodologi analisis kami</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  ✓
                </div>
                <div>
                  <p className="text-[#003631]">Pelajari lebih lanjut tentang SolarWise di halaman "Tentang"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Placeholder */}
        <section className="mb-12">
          <div className="aspect-video rounded-2xl bg-linear-to-br from-[#003631]/10 to-[#003631]/20 flex items-center justify-center">
            <div className="text-center">
              <svg className="mx-auto mb-4 h-16 w-16 text-[#003631]/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5h3V9h4v3h3l-5 5z" />
              </svg>
              <p className="text-gray-500">Demo video akan ditampilkan di sini segera</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-4xl border-2 border-[#003631] bg-[#003631] p-8 text-center text-[#fff6d1] shadow-[0_18px_50px_rgba(0,54,49,0.15)] sm:p-12">
          <h3 className="mb-2 text-2xl font-bold sm:text-3xl">Jangan Sabar Menunggu!</h3>
          <p className="mb-8 text-[#fff6d1]/80">Mulai cek kelayakan panel surya untuk rumah Anda sekarang juga dengan fitur yang sudah tersedia</p>
          <Link
            href="/home"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fff6d1] px-8 py-3.5 font-bold text-[#003631] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,54,49,0.2)] hover:scale-105"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Cek Kelayakan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
