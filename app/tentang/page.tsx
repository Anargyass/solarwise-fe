"use client";

import Link from "next/link";

export default function TentangPage() {
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
            <span className="text-xs font-bold uppercase tracking-wide">Platform</span>
          </div>
          <h1 className="mb-2 text-4xl font-bold sm:text-5xl">Tentang SolarWise</h1>
          <p className="text-lg text-[#fff6d1]/80">Mengenal lebih jauh tentang platform decision support untuk kelayakan panel surya</p>
        </div>

        {/* Apa Itu */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#003631]">Apa Itu SolarWise?</h2>
            <p className="text-lg text-[#003631]/70">Platform yang membantu Anda mengevaluasi potensi investasi panel surya dengan data akurat dan analisis transparan:</p>
          </div>
          <div className="rounded-3xl border-2 border-[#003631] bg-white p-10 shadow-[0_8px_24px_rgba(0,54,49,0.08)]">
            <p className="mb-6 text-lg leading-relaxed text-[#003631]">
              <strong>Platform decision support</strong> untuk mengevaluasi kelayakan investasi panel surya secara berbasis data dan transparan
            </p>
            <p className="leading-relaxed text-[#003631]/70">
              Cukup masukkan lokasi rumah dan tagihan listrik bulanan Anda, SolarWise akan menganalisis potensi energi matahari, memproyeksikan penghematan, dan memberikan estimasi waktu kembali investasi dengan penjelasan lengkap tentang setiap asumsi yang digunakan.
            </p>
          </div>
        </section>

        {/* Masalah Yang Kami Selesaikan */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#003631]">Masalah Yang Kami Selesaikan</h2>
            <p className="text-lg text-[#003631]/70">Empat tantangan utama yang kami bantu Anda atasi:</p>
          </div>
          
          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  1
                </div>
                <h3 className="text-lg font-bold text-[#003631]">Informasi yang Membingungkan</h3>
              </div>
              <p className="ml-12 leading-relaxed text-[#003631]/70">
                Ada terlalu banyak vendor, harga berbeda, klaim yang tidak terverifikasi, dan sulit membandingkan opsi
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  2
                </div>
                <h3 className="text-lg font-bold text-[#003631]\">Analisis Manual yang Rumit</h3>
              </div>
              <p className="ml-12 leading-relaxed text-[#003631]/70">
                Menghitung kelayakan sendiri memerlukan data teknis kompleks, perhitungan finansial panjang, dan expertise khusus
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  3
                </div>
                <h3 className="text-lg font-bold text-[#003631]\">Akurasi Data Lokal</h3>
              </div>
              <p className="ml-12 leading-relaxed text-[#003631]/70">
                Potensi matahari bervariasi signifikan antar lokasi, cuaca lokal mempengaruhi produksi, perlu data akurat per wilayah
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  4
                </div>
                <h3 className="text-lg font-bold text-[#003631]\">Ketidakpastian Kelayakan Investasi</h3>
              </div>
              <p className="ml-12 leading-relaxed text-[#003631]/70">
                Pengguna sering tidak tahu apakah panel surya benar-benar menguntungkan untuk kondisi rumah dan konsumsi listrik mereka secara spesifik
              </p>
            </div>
          </div>
        </section>

        {/* Keunggulan */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#003631]">Keunggulan SolarWise</h2>
            <p className="text-lg text-[#003631]/70">
              Kami membantu Anda mengatasi ketidakpastian dengan menyediakan framework analisis yang kredibel dan transparan:
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white p-8 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100\">
                <span className="text-2xl\">📊</span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#003631]\">Mengurangi Ketidakpastian</h3>
              <p className="leading-relaxed text-[#003631]/70">
                Dapatkan analisis berbasis data konkret untuk membuat keputusan yang informed, bukan berdasarkan asumsi atau marketing klaim
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white p-8 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100\">
                <span className="text-2xl\">👁</span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#003631]\">Transparansi Penuh</h3>
              <p className="leading-relaxed text-[#003631]/70">
                Setiap angka, asumsi, dan kalkulasi dapat Anda verifikasi — tidak ada black box
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white p-8 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100\">
                <span className="text-2xl\">⚡</span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#003631]\">Pre-Screening Cepat</h3>
              <p className="leading-relaxed text-[#003631]/70">
                Tahu apakah panel surya feasible untuk rumah Anda sebelum konsultasi profesional
              </p>
            </div>
          </div>
        </section>

        {/* Mengapa Dipercaya */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#003631]">Mengapa SolarWise Dipercaya?</h2>
            <p className="text-lg text-[#003631]/70">Empat fondasi kepercayaan yang kami bangun:</p>
          </div>
          
          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-blue-50/50 to-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-[#003631]\">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003631] text-xs font-bold text-[#fff6d1]\">★</span>
                Data NASA POWER — Disesuaikan Lokasi
              </h4>
              <p className="ml-8 leading-relaxed text-[#003631]/70">
                Data radiasi matahari berbasis satelit dari NASA POWER yang diproses dan disesuaikan dengan koordinat geografis spesifik rumah Anda
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-blue-50/50 to-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-[#003631]\">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003631] text-xs font-bold text-[#fff6d1]\">✓</span>
                Metodologi Terukur
              </h4>
              <p className="ml-8 leading-relaxed text-[#003631]/70">
                Pendekatan perhitungan mengacu pada praktik umum dalam analisis techno-economic energi surya dan best practices industri
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-blue-50/50 to-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-[#003631]\">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003631] text-xs font-bold text-[#fff6d1]\">⬇</span>
                Perhitungan Konservatif
              </h4>
              <p className="ml-8 leading-relaxed text-[#003631]/70">
                Menggunakan asumsi pesimis untuk menghindari overestimasi — hasil sebenarnya bisa lebih baik
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-blue-50/50 to-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-[#003631]\">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003631] text-xs font-bold text-[#fff6d1]\">◊</span>
                Transparan — Bukan Black Box
              </h4>
              <p className="ml-8 leading-relaxed text-[#003631]/70">
                <strong>Berbeda dari kalkulator konvensional</strong>, SolarWise menjelaskan bagaimana keputusan dibuat, bukan hanya menampilkan hasil akhir — Anda bisa memverifikasi setiap angka dan asumsi yang digunakan
              </p>
            </div>
          </div>
        </section>

        {/* Status Prototype */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#003631]">Status & Evolusi</h2>
            <p className="text-lg text-[#003631]/70">Evolving Prototype dengan pendekatan iteratif berbasis data dan feedback pengguna:</p>
          </div>
          <div className="rounded-3xl border-2 border-[#003631] bg-white p-10 shadow-[0_8px_24px_rgba(0,54,49,0.08)]">
            <div className="mb-8 flex items-start gap-4 pb-8 border-b border-[#003631]/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003631] text-lg font-bold text-[#fff6d1] animate-pulse\">★</span>
              <div>
                <h3 className="mb-2 text-lg font-bold text-[#003631]\">Terus Berkembang</h3>
                <p className="leading-relaxed text-[#003631]/70">
                  Setiap versi dirancang untuk lebih akurat, lebih transparan, dan lebih membantu keputusan Anda
                </p>
              </div>
            </div>
            <p className="leading-relaxed text-[#003631]/70">
              <strong>Disclaimer:</strong> Hasil analisis adalah estimasi untuk keperluan pre-feasibility screening. Untuk keputusan investasi final, konsultasikan dengan profesional solar lokal dan lakukan survei teknis lapangan.
            </p>
          </div>
        </section>

        {/* Contact & Feedback */}
        <section className="mb-16">
          <h2 className="mb-2 text-3xl font-bold text-[#003631]">Hubungi Kami</h2>
          <p className="mb-8 text-[#003631]/70">Kami ingin mendengar pertanyaan, saran, dan feedback Anda:</p>
          
          <div className="rounded-3xl border-2 border-[#003631] bg-[#003631] p-8 text-center text-[#fff6d1] shadow-[0_18px_50px_rgba(0,54,49,0.15)]">
            <p className="mb-6">
              Punya pertanyaan atau ingin memberikan feedback? Hubungi kami!
            </p>
            <a
              href="mailto:hello@solarwise.id"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fff6d1] px-8 py-3.5 font-bold text-[#003631] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,54,49,0.2)] hover:scale-105"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@solarwise.id
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <div className="rounded-4xl border-2 border-[#003631] bg-[#003631] p-8 text-center text-[#fff6d1] shadow-[0_18px_50px_rgba(0,54,49,0.15)] sm:p-12">
          <h3 className="mb-2 text-2xl font-bold sm:text-3xl">Siap Mengenal Potensi Rumah Anda?</h3>
          <p className="mb-8 text-[#fff6d1]/80">Mari analisis kelayakan panel surya untuk rumah Anda sekarang</p>
          <Link
            href="/home"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fff6d1] px-8 py-3.5 font-bold text-[#003631] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,54,49,0.2)] hover:scale-105"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Mulai Cek Kelayakan
          </Link>
        </div>
      </div>
    </div>
  );
}