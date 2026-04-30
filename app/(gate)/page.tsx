import Link from "next/link";

export default function GatePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Ambient glows */}
      <div className="hero-glow hero-glow-left" aria-hidden />
      <div className="hero-glow hero-glow-right" aria-hidden />

      {/* Decorative grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 backdrop-blur-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-teal-500" />
              <span className="text-xs font-medium tracking-wide text-slate-700 uppercase">
                Energy Decision Platform
              </span>
            </div>

            {/* Main Headline */}
            <div className="text-center">
              <h1 className="text-balance bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
                Transformasi Energi Dimulai dari Keputusan yang Tepat
              </h1>
              <p className="mt-6 text-balance text-base leading-relaxed text-slate-700 sm:text-lg">
                SolarWise mengubah kompleksitas analisis teknis menjadi rekomendasi investasi yang jelas, 
                berbasis data lokasi, finansial, dan proyeksi ROI yang transparan. 
                Untuk rumah tangga dan UMKM yang ingin mengambil langkah nyata.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/home"
                className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 px-8 text-base font-semibold text-white shadow-lg shadow-teal-500/30 transition-all hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-1 active:translate-y-0"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Mulai Evaluasi Investasi
              </Link>
              <p className="text-xs text-slate-500">Gratis • Tidak ada komitmen • Hasil instan</p>
            </div>

            {/* Value Props Grid */}
            <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              <article className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm transition-all hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Analisis Berbasis Lokasi</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Radiasi matahari, cuaca, dan potensi energi dihitung akurat dari profil geografis kota kamu.
                  </p>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm transition-all hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.16 2.75a1 1 0 11-1.32 1.5l-.82-.82a.75.75 0 01.53-1.28h.81zm3.68 0a.75.75 0 01.53 1.28l-.82.82a1 1 0 11-1.32-1.5h.81zM10 3a1 1 0 011 1v5h4a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 012-2h4V4a1 1 0 011-1z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Simulasi Finansial Terpercaya</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Kapasitas sistem, biaya instalasi, penghematan tahunan, dan ROI dihitung dari parameter yang transparan.
                  </p>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm transition-all hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Rekomendasi Mudah Dipahami</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Sistem mengubah data teknis menjadi insight &quot;Sangat Layak&quot;, &quot;Layak&quot;, atau &quot;Kurang Layak&quot; dengan penjelasan jelas.
                  </p>
                </div>
              </article>
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-slate-200/50 bg-white/40 backdrop-blur-sm p-4 text-center">
                <p className="text-2xl font-bold text-slate-950">8+</p>
                <p className="mt-1 text-xs text-slate-600">Kota di Indonesia</p>
              </div>
              <div className="rounded-xl border border-slate-200/50 bg-white/40 backdrop-blur-sm p-4 text-center">
                <p className="text-2xl font-bold text-slate-950">Instan</p>
                <p className="mt-1 text-xs text-slate-600">Hasil analisis</p>
              </div>
              <div className="rounded-xl border border-slate-200/50 bg-white/40 backdrop-blur-sm p-4 text-center">
                <p className="text-2xl font-bold text-slate-950">100%</p>
                <p className="mt-1 text-xs text-slate-600">Transparan</p>
              </div>
              <div className="rounded-xl border border-slate-200/50 bg-white/40 backdrop-blur-sm p-4 text-center">
                <p className="text-2xl font-bold text-slate-950">Gratis</p>
                <p className="mt-1 text-xs text-slate-600">Tanpa biaya</p>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-16 pt-8 border-t border-slate-200/50 text-center">
              <p className="text-xs text-slate-500">
                SolarWise v0.1 Beta • Powered by Solar Decision Engine • Data dari NASA POWER & Geocoding APIs
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
