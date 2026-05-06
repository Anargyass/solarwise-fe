"use client";

export default function ModalSimulasi({
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
          <h2 className="text-3xl font-bold">Simulasi Interaktif</h2>
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
          <div className="rounded-lg border-2 border-[#003631]/10 p-4">
            <p className="font-semibold text-[#003631]">Engine Ringkasan</p>
            <p className="mt-2 text-sm text-[#003631]/70">
              Simulator menggunakan engine multi-skenario: menguji kapasitas dari 2–8 kWp,
              menghitung produksi bulanan dari data radiasi (NASA POWER), lalu memilih skenario
              terbaik berdasarkan ROI dan coverage. Beberapa asumsi tetap dipakai untuk konsistensi.
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#003631]/70">
              <li>• Tarif PLN: Rp 1.444/kWh</li>
              <li>• Performance ratio: 0.75</li>
              <li>• Kapasitas/panel: 0.55 kWp</li>
              <li>• Luas/panel: 2.5 m²</li>
              <li>• Harga instalasi: Rp 15.000.000 / kWp</li>
              <li>• Chart ROI: 15 tahun</li>
            </ul>
          </div>
          <div className="rounded-lg bg-linear-to-br from-blue-50 to-blue-100 p-6">
            <div className="flex gap-4">
              <div className="text-3xl">🎬</div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-[#003631]">Video Demo Sedang Kami Persiapkan</h3>
                <p className="text-[#003631]/70">
                  Kami sedang membuat video interaktif yang menunjukkan langkah-demi-langkah bagaimana sistem bekerja, mulai dari input data hingga mendapatkan rekomendasi investasi.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-[#003631]">Video akan mencakup:</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Cara mengisi data lokasi dan tagihan listrik</li>
              <li>✓ Bagaimana sistem menganalisis radiasi matahari</li>
              <li>✓ Perjalanan dari input hingga hasil rekomendasi</li>
              <li>✓ Memahami grafik ROI 15 tahun</li>
              <li>✓ Tips untuk mengambil keputusan investasi</li>
            </ul>
          </div>

          <div className="rounded-lg border-2 border-[#003631]/20 p-4">
            <p className="text-sm text-[#003631]/70">
              <strong>Estimasi:</strong> Video demo akan tersedia dalam beberapa minggu mendatang. Kami akan memberitahu Anda melalui update aplikasi.
            </p>
          </div>

          <div className="rounded-lg bg-[#003631] p-4 text-[#fff6d1]">
            <p className="mb-3 font-semibold">Sementara itu, Anda bisa:</p>
            <ul className="space-y-2 text-sm">
              <li>• Coba langsung fitur "Cek Kelayakan" untuk menganalisis rumah Anda</li>
              <li>• Baca penjelasan di bagian "Bagaimana Sistem Bekerja"</li>
              <li>• Hubungi tim kami jika ada pertanyaan</li>
            </ul>
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
