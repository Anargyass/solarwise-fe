import Link from "next/link";

export default function GatePage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#fff6d1] text-[#003631]">
      {/* Hero Section */}
      <section className="relative flex-1 px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#003631]/20 bg-white px-4 py-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#003631]" />
              <span className="text-xs font-bold uppercase tracking-wide">
                Energy Decision Platform
              </span>
            </div>

            {/* Hero Text */}
            <div className="text-center">
              <h1 className="text-balance text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Apakah Panel Surya Layak untuk Rumahmu?
              </h1>
              <p className="mt-6 text-balance text-base leading-relaxed sm:text-lg">
                Masukkan lokasi dan tagihan listrikmu untuk melihat estimasi biaya, penghematan, dan potensi ROI solar panel berdasarkan kondisi rumahmu.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/home"
                className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#003631] px-8 text-base font-semibold text-[#fff6d1] shadow-lg transition-all hover:-translate-y-1 active:translate-y-0"
              >
                Mulai Analisis
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-xs font-medium text-[#003631]/60">
                Gratis • Tanpa komitmen • Hasil instan
              </p>
            </div>

            {/* Features Grid */}
            <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              <article className="rounded-2xl border border-[#003631]/20 bg-white p-6 transition-shadow hover:shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#003631] text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold">Analisis Berdasarkan Lokasi</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Menggunakan data radiasi matahari berbasis lokasi untuk memperkirakan potensi energi surya di rumahmu.
                </p>
              </article>

              <article className="rounded-2xl border border-[#003631]/20 bg-white p-6 transition-shadow hover:shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#003631] text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.16 2.75a1 1 0 11-1.32 1.5l-.82-.82a.75.75 0 01.53-1.28h.81zm3.68 0a.75.75 0 01.53 1.28l-.82.82a1 1 0 11-1.32-1.5h.81zM10 3a1 1 0 011 1v5h4a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 012-2h4V4a1 1 0 011-1z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold">Estimasi Finansial</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Dapatkan estimasi biaya instalasi, penghematan listrik, dan waktu balik modal secara jelas.
                </p>
              </article>

              <article className="rounded-2xl border border-[#003631]/20 bg-white p-6 transition-shadow hover:shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#003631] text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold">Rekomendasi Kelayakan</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Hasil analisis disajikan secara sederhana agar lebih mudah digunakan untuk mengambil keputusan.
                </p>
              </article>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-[#003631]/20 bg-white p-4 text-center">
                <p className="text-xl font-bold">Data Lokasi</p>
                <p className="text-[10px] uppercase font-bold text-gray-400">NASA POWER</p>
              </div>
              <div className="rounded-xl border border-[#003631]/20 bg-white p-4 text-center">
                <p className="text-xl font-bold">&lt; 5 Detik</p>
                <p className="text-[10px] uppercase font-bold text-gray-400">Analisis Cepat</p>
              </div>
              <div className="rounded-xl border border-[#003631]/20 bg-white p-4 text-center">
                <p className="text-xl font-bold">Analisis Instan</p>
                <p className="text-[10px] uppercase font-bold text-gray-400">Simulasi Otomatis</p>
              </div>
              <div className="rounded-xl border border-[#003631]/20 bg-white p-4 text-center">
                <p className="text-xl font-bold">100% Gratis</p>
                <p className="text-[10px] uppercase font-bold text-gray-400">Open Access</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#003631]/10 bg-[#003631] text-[#fff6d1]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-xl space-y-4">
            <img src="/images/branding/logoTerang.png" alt="SolarWise" className="h-10 w-auto" />
            <p className="text-sm leading-relaxed text-[#fff6d1]/80">
              SolarWise membantu rumah tangga dan UMKM membuat keputusan investasi solar rooftop yang lebih jelas, cepat, dan berbasis data.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm sm:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#fff6d1]/50">Jelajahi</p>
              <div className="mt-4 space-y-3">
                <Link href="/home" className="block hover:underline">Home</Link>
                <Link href="/home#cek-kelayakan" className="block hover:underline">Cek Kelayakan</Link>
                <Link href="/home#cara-kerja" className="block hover:underline">Cara Kerja</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#fff6d1]/50">Fitur</p>
              <div className="mt-4 space-y-3 text-[#fff6d1]/80">
                <p>Data NASA Real-time</p>
                <p>Simulasi Finansial</p>
                <p>Analisis Kelayakan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#052420] py-4">
          <div className="mx-auto flex max-w-6xl flex-col justify-between px-4 text-[10px] uppercase tracking-widest text-[#fff6d1]/50 sm:px-8 sm:flex-row">
            <p>SolarWise v0.1 Beta</p>
            <p>© 2026 Powered by Solar Decision Engine</p>
          </div>
        </div>
      </footer>
    </main>
  );
}