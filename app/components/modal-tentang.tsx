"use client";

export default function ModalTentang({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="max-h-screen w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#fff6d1] p-8 text-[#003631] shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Tentang SolarWise</h2>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#003631]/10 hover:bg-[#003631]/20 transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h3 className="mb-3 text-xl font-bold text-[#003631]">Apa Itu SolarWise?</h3>
            <p>
              SolarWise adalah sistem pendukung keputusan yang membantu rumah tangga dan UMKM mengevaluasi kelayakan investasi panel surya (solar rooftop) dengan cepat dan akurat. Kami mengubah data lokasi dan tagihan listrik menjadi rekomendasi teknis dan proyeksi keuangan yang terukur.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-bold text-[#003631]">Masalah Apa yang Kami Selesaikan?</h3>
            <div className="space-y-3">
              <div className="rounded-lg border-l-4 border-[#003631] bg-[#003631]/5 p-3">
                <p className="font-semibold">❌ Informasi yang Membingungkan</p>
                <p className="mt-1 text-sm">Banyak orang tidak tahu apakah panel surya cocok untuk rumah mereka. Iklan sering over-promise tanpa dasar teknis yang jelas.</p>
              </div>
              <div className="rounded-lg border-l-4 border-[#003631] bg-[#003631]/5 p-3">
                <p className="font-semibold">❌ Analisis Manual yang Rumit</p>
                <p className="mt-1 text-sm">Perhitungan manual (radiasi, efisiensi, ROI) membutuhkan keahlian teknis dan waktu berbulan-bulan untuk survei dan simulasi.</p>
              </div>
              <div className="rounded-lg border-l-4 border-[#003631] bg-[#003631]/5 p-3">
                <p className="font-semibold">❌ Data Lokal yang Tidak Akurat</p>
                <p className="mt-1 text-sm">Model sederhana tidak mempertimbangkan variasi radiasi, iklim, atau kondisi atap spesifik lokasi Anda.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-bold text-[#003631]">Mengapa Ini Penting?</h3>
            <ul className="space-y-2 text-sm">
              <li>🌍 <strong>Dampak Lingkungan:</strong> Energi terbarukan mengurangi emisi karbon dan ketergantungan pada listrik konvensional.</li>
              <li>💰 <strong>Efisiensi Biaya:</strong> Panel surya dapat menghemat jutaan rupiah dalam 20 tahun ke depan.</li>
              <li>🏠 <strong>Kemandirian Energi:</strong> Rumah menjadi lebih mandiri dan terlindungi dari kenaikan tarif listrik.</li>
              <li>📊 <strong>Keputusan Berdasarkan Data:</strong> Membantu Anda membuat keputusan investasi yang terukur, bukan berdasarkan hype.</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-bold text-[#003631]">Mengapa Bisa Dipercaya?</h3>
            <div className="space-y-3">
              <div className="rounded-lg bg-green-50 p-3">
                <p className="font-semibold text-green-900">📡 Data Satelit NASA</p>
                <p className="mt-1 text-sm text-green-800">Kami menggunakan data radiasi matahari dari NASA POWER—source yang sama digunakan oleh peneliti energi terbarukan di seluruh dunia.</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <p className="font-semibold text-green-900">📋 Standar Industri</p>
                <p className="mt-1 text-sm text-green-800">Semua asumsi (efisiensi panel, biaya instalasi, tarif listrik) mengikuti praktik terbaik industri PV global dan disesuaikan untuk pasar Indonesia.</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <p className="font-semibold text-green-900">🔍 Konservatif & Transparan</p>
                <p className="mt-1 text-sm text-green-800">Kami sengaja menggunakan asumsi yang "safety first" (tidak over-optimistic) agar estimasi lebih realistis dan tidak mengecewakan.</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <p className="font-semibold text-green-900">🧮 Dapat Diverifikasi</p>
                <p className="mt-1 text-sm text-green-800">Setiap angka dalam laporan dapat ditelusuri ke kalkulasi spesifik—tidak ada "black box". Kami siap menjelaskan setiap metrik.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-bold text-[#003631]">Versi Prototype</h3>
            <p className="text-sm text-[#003631]/70">
              SolarWise saat ini adalah <strong>prototipe</strong> yang dikembangkan untuk menunjukkan konsep dan memvalidasi model dengan pengguna awal. Feedback Anda sangat berharga untuk perbaikan produk di masa depan.
            </p>
          </section>

          <div className="rounded-lg bg-[#003631] p-4 text-[#fff6d1]">
            <p className="mb-3 font-semibold">Ada pertanyaan atau feedback?</p>
            <p className="text-sm">
              Hubungi tim kami di{" "}
              <a href="mailto:hello@solarwise.id" className="underline hover:opacity-80">
                hello@solarwise.id
              </a>
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-full bg-[#003631] px-6 py-3 font-semibold text-[#fff6d1] hover:opacity-90 transition-opacity"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
