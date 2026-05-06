"use client";

import Link from "next/link";

export default function CaraKerjaPage() {
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
            <span className="text-xs font-bold uppercase tracking-wide">Edukasi</span>
          </div>
          <h1 className="mb-2 text-4xl font-bold sm:text-5xl">Cara Kerja SolarWise</h1>
          <p className="text-lg text-[#fff6d1]/80">Memahami logika keputusan kami dari radiasi hingga ROI investasi panel surya</p>
        </div>

        {/* Logika Keputusan */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#003631]">Logika Keputusan</h2>
            <p className="text-lg text-[#003631]/70">Rantai kausal dari radiasi matahari hingga keputusan kelayakan investasi:</p>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-3xl border-2 border-[#003631] bg-white p-6 shadow-[0_8px_24px_rgba(0,54,49,0.08)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,54,49,0.12)] hover:border-[#003631]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#003631] text-base font-bold text-[#fff6d1]">
                1
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#003631]">Radiasi Matahari</h3>
              <p className="text-sm leading-relaxed text-[#003631]/70">
                Nilai radiasi harian di lokasi Anda (kWh/m²/hari) <strong>menentukan</strong> berapa energi maksimal yang bisa diproduksi panel
              </p>
            </div>

            <div className="rounded-3xl border-2 border-[#003631] bg-white p-6 shadow-[0_8px_24px_rgba(0,54,49,0.08)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,54,49,0.12)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#003631] text-base font-bold text-[#fff6d1]">
                2
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#003631]">Energi Offset & Penghematan</h3>
              <p className="text-sm leading-relaxed text-[#003631]/70">
                Produksi energi dibandingkan dengan konsumsi listrik untuk menentukan energi yang dapat dimanfaatkan <strong>(offset)</strong>, dikonversi menjadi <strong>penghematan finansial</strong>
              </p>
            </div>

            <div className="rounded-3xl border-2 border-[#003631] bg-white p-6 shadow-[0_8px_24px_rgba(0,54,49,0.08)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,54,49,0.12)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#003631] text-base font-bold text-[#fff6d1]">
                3
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#003631]">Keputusan ROI</h3>
              <p className="text-sm leading-relaxed text-[#003631]/70">
                Penghematan tahunan dibandingkan biaya investasi untuk mendapatkan <strong>payback period</strong> — metric kelayakan final
              </p>
            </div>
          </div>
        </section>

        {/* Langkah Perhitungan */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#003631]">Langkah Perhitungan</h2>
            <p className="text-lg text-[#003631]/70">Proses analisis multi-skenario dari input hingga rekomendasi:</p>
          </div>
          
          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-white to-[#fff6d1]/30 p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  1
                </div>
                <h3 className="text-lg font-bold text-[#003631]">Analisis Lokasi</h3>
              </div>
              <p className="ml-12 leading-relaxed text-[#003631]/70">
                Data lokasi Anda digunakan untuk query data radiasi matahari berbasis satelit dari NASA POWER yang telah diproses dan disesuaikan dengan koordinat geografis spesifik Anda untuk hasil akurat per lokasi
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-white to-[#fff6d1]/30 p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-3 flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-[#003631]">Estimasi & Multi-Skenario Kapasitas</h3>
                </div>
                <p className="ml-12 leading-relaxed text-[#003631]/70">
                  Sistem mengestimasi kebutuhan energi dari tagihan lalu membangun kandidat kapasitas
                  dari 2 kWp hingga min(requiredKwp, 8 kWp) (step 1 kWp). Setiap kandidat disimulasikan
                  secara penuh (panel diskrit, luas atap, produksi bulanan, offset, penghematan, ROI).
                </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-white to-[#fff6d1]/30 p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  3
                </div>
                <h3 className="text-lg font-bold text-[#003631]\">Kalkulasi Penghematan</h3>
              </div>
              <p className="ml-12 leading-relaxed text-[#003631]/70">
                Penghematan dihitung dari energi yang efektif di-offset (maks 75% konsumsi) dikalikan
                dengan tarif PLN yang kita pakai (Rp 1.444/kWh). Dari situ dihitung penghematan tahunan
                dan ROI (estimasiBiaya ÷ savingTahunan). Skenario dengan ROI &gt; 15 tahun atau penghematan
                ≤ 0 dianggap tidak feasible.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-white to-[#fff6d1]/30 p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">
                  4
                </div>
                <h3 className="text-lg font-bold text-[#003631]\">Penilaian ROI</h3>
              </div>
              <p className="ml-12 leading-relaxed text-[#003631]/70">
                Payback period = Biaya instalasi total ÷ Penghematan tahunan. Hasil ini mewakili berapa tahun investasi Anda akan kembali. Horizon investasi kami asumsikan 25 tahun (umur panel), sehingga semakin pendek payback period semakin menguntungkan
              </p>
            </div>
          </div>
        </section>

        {/* Kategori Kelayakan */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#003631]">Kategori Kelayakan</h2>
            <p className="text-lg text-[#003631]/70">Setelah analisis, kami memberikan status berdasarkan payback period investasi Anda:</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white p-8 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#003631]">Sangat Layak</h3>
              <p className="text-sm font-semibold text-green-600 mb-3">Payback &lt; 7 tahun</p>
              <p className="text-sm leading-relaxed text-[#003631]/70">
                Investasi sangat menguntungkan dengan return yang cepat
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border-2 border-[#003631]/20 bg-white p-8 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl">→</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#003631]\">Layak</h3>
              <p className="text-sm font-semibold text-yellow-600 mb-3\">Payback 7-10 tahun</p>
              <p className="text-sm leading-relaxed text-[#003631]/70">
                Investasi menguntungkan untuk jangka panjang
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-white p-8 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <span className="text-2xl\">?</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#003631]\">Tidak Layak</h3>
              <p className="text-sm font-semibold text-red-600 mb-3">Payback &gt; 10 tahun</p>
              <p className="text-sm leading-relaxed text-[#003631]/70">
                Butuh evaluasi lebih lanjut dengan profesional
              </p>
            </div>
          </div>
        </section>

        {/* Asumsi */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#003631]">Model Constraint & Asumsi</h2>
            <p className="text-lg text-[#003631]/70">
              Setiap asumsi di bawah dipilih berdasarkan data industri terkini dan kondisi pasar Indonesia — ini bukan arbitrary, ini adalah foundation model kami:
            </p>
          </div>
          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-blue-50/50 to-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-[#003631]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003631] text-xs font-bold text-[#fff6d1]">₁</span>
                Parameter Tetap Utama
              </h4>
              <p className="ml-8 leading-relaxed text-[#003631]/70">
                Kami memakai konstanta berikut: <strong>tarifPLN = Rp 1.444/kWh</strong>, <strong>performanceRatio = 0.75</strong>,
                <strong>kapasitasPerPanel = 0.55 kWp</strong>, <strong>luasPerPanel = 2.5 m²</strong>,
                <strong>hargaPerKWp = Rp 15.000.000</strong>, dan <strong>chartYears = 15</strong> untuk grafik ROI.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-blue-50/50 to-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-[#003631]\">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003631] text-xs font-bold text-[#fff6d1]\">₂</span>
                Efisiensi Panel: 75%
              </h4>
              <p className="ml-8 leading-relaxed text-[#003631]/70">
                Potensi teoritis dikurangi 25% untuk akun variabilitas cuaca tropis (awan, hujan musiman, kelembaban tinggi), debu, dan sub-optimal mounting angle — ini refleksi kondisi real Indonesia
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-blue-50/50 to-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-[#003631]\">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003631] text-xs font-bold text-[#fff6d1]\">₃</span>
                Biaya Instalasi: Rp 15 juta/kWp
              </h4>
              <p className="ml-8 leading-relaxed text-[#003631]/70">
                Mencakup: panel premium Tier-1, inverter hybrid, struktur mounting, kabel/breaker, dan labor. Ini mid-range estimate 2024 untuk residential di Indonesia urban
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-blue-50/50 to-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-[#003631]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003631] text-xs font-bold text-[#fff6d1]">₄</span>
                Batas Simulasi & Evaluasi
              </h4>
              <p className="ml-8 leading-relaxed text-[#003631]/70">
                Batas evaluasi meliputi kapasitas kandidat 2–8 kWp, batas luas atap 40 m², offset maksimal 75%,
                dan skenario dengan ROI &gt; 15 tahun akan ditolak. Grafik ROI menampilkan 0..15 tahun.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#003631]/20 bg-linear-to-r from-blue-50/50 to-white p-7 shadow-[0_4px_12px_rgba(0,54,49,0.05)] transition-all duration-300 hover:border-[#003631]/40 hover:shadow-[0_8px_20px_rgba(0,54,49,0.1)]">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-[#003631]\">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003631] text-xs font-bold text-[#fff6d1]\">₅</span>
                Degradasi Panel: 0,5%/tahun (belum dimodelkan)
              </h4>
              <p className="ml-8 leading-relaxed text-[#003631]/70">
                Panel mengalami degradasi minimal 0.5% per tahun (industri standard). Prototype saat ini belum memodelkan degradasi eksplisit, sehingga estimasi cenderung sedikit optimistik terhadap produksi jangka panjang — hasil aktual kemungkinan lebih konservatif
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-[#003631]">Scope & Disclaimer</h2>
          
          <div className="rounded-3xl border-2 border-[#003631]/30 bg-white p-10 shadow-[0_6px_16px_rgba(0,54,49,0.08)]">
            <div className="space-y-6">
              <div className="pb-6 border-b border-[#003631]/10">
                <div className="mb-3 flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003631] text-sm font-bold text-[#fff6d1]">📋</span>
                  <div>
                    <p className="text-lg font-bold text-[#003631]">Status: Pre-Feasibility Screening</p>
                    <p className="mt-2 leading-relaxed text-[#003631]/70">
                      SolarWise dirancang untuk tahap <strong>pre-screening</strong> cepat — bukan final engineering assessment. Ini untuk menjawab "apakah worth exploring?" — bukan "ready to install?"
                    </p>
                  </div>
                </div>
              </div>

              <div className="pb-6 border-b border-[#003631]/10">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600\">✓</span>
                  <div>
                    <p className="text-lg font-bold text-[#003631]\">Semua perhitungan bersifat konservatif</p>
                    <p className="mt-2 leading-relaxed text-[#003631]/70">
                      Kami sengaja menggunakan asumsi pesimis untuk menghindari overestimation keuntungan — hasil sebenarnya bisa lebih baik
                    </p>
                  </div>
                </div>
              </div>

              <div className="pb-6 border-b border-[#003631]/10">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600\">✓</span>
                  <div>
                    <p className="text-lg font-bold text-[#003631]\">Hasil adalah estimasi berbasis data publik</p>
                    <p className="mt-2 leading-relaxed text-[#003631]/70">
                      Berdasarkan data NASA dan tarif rata-rata PLN. Kondisi spesifik rumah Anda (shadow, angle, efficiency loss) hanya bisa divalidasi via survei lapangan
                    </p>
                  </div>
                </div>
              </div>

              <div className="pb-6 border-b border-[#003631]/10">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600\">⚠</span>
                  <div>
                    <p className="text-lg font-bold text-[#003631]\">Risk factors yang tidak diperhitungkan</p>
                    <p className="mt-2 leading-relaxed text-[#003631]/70">
                      Perubahan kebijakan subsidi, akses jaringan listrik, kondisi struktural atap, cuaca ekstrem — ini semua bisa mempengaruhi hasil
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-[#003631]/40 bg-[#003631]/5 p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl\">🔍</span>
                  <div>
                    <p className="font-bold text-[#003631]\">Untuk keputusan investasi final...</p>
                    <p className="mt-2 leading-relaxed text-[#003631]/70">
                      Wajib konsultasi dengan <strong>profesional solar lokal</strong> dan lakukan <strong>survei teknis menyeluruh</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-4xl border-2 border-[#003631] bg-[#003631] p-8 text-center text-[#fff6d1] shadow-[0_18px_50px_rgba(0,54,49,0.15)] sm:p-12">
          <h3 className="mb-2 text-2xl font-bold sm:text-3xl">Sudah Paham?</h3>
          <p className="mb-8 text-[#fff6d1]/80">Cek kelayakan rumah Anda sekarang dengan data lokasi dan tagihan listrik Anda</p>
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
