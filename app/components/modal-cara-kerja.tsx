"use client";

import { useState } from "react";

export default function ModalCaraKerja({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    /* Overlay luar warna solid */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a] px-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 text-[#003631] shadow-none">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold">Bagaimana Sistem Bekerja?</h2>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-8 text-base">
          
          {/* Prinsip Dasar */}
          <section>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">Prinsip Dasar</h3>
            <div className="space-y-3">
              {[
                { title: "Cakupan Konsumsi (Coverage)", desc: "Berapa % listrik bulanan yang ditutup panel surya (maks. 75%)." },
                { title: "Penghematan Bulanan", desc: "Estimasi pengurangan biaya tagihan listrik dalam Rupiah." },
                { title: "Waktu Balik Modal (ROI)", desc: "Jumlah tahun hingga penghematan menutupi biaya instalasi." }
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Langkah Perhitungan - Kotak Putih Solid */}
          <section>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">Langkah Perhitungan</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "01. DATA SATELIT", desc: "Radiasi matahari real dari NASA berdasarkan lokasi." },
                { label: "02. KAPASITAS KWP", desc: "Menghitung ukuran panel paling pas untuk tagihanmu." },
                { label: "03. BATAS RESIDENSIAL", desc: "Maksimal 5.0 kWp untuk standar keamanan rumah." },
                { label: "04. ESTIMASI ROI", desc: "Proyeksi finansial hingga 15 tahun ke depan." }
              ].map((step, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-bold text-[#003631] mb-1">{step.label}</p>
                  <p className="text-sm text-gray-600 leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Kategori Kelayakan */}
          <section>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">Kategori Kelayakan</h3>
            <div className="space-y-2">
              <div className="flex justify-between rounded-lg border border-gray-200 bg-white p-3">
                <span className="font-medium">Sangat Layak</span>
                <span className="font-bold text-green-600">&lt; 7 Tahun</span>
              </div>
              <div className="flex justify-between rounded-lg border border-gray-200 bg-white p-3">
                <span className="font-medium">Layak</span>
                <span className="font-bold text-yellow-600">7 – 10 Tahun</span>
              </div>
              <div className="flex justify-between rounded-lg border border-gray-200 bg-white p-3">
                <span className="font-medium">Tidak Layak</span>
                <span className="font-bold text-red-600">&gt; 10 Tahun</span>
              </div>
            </div>
          </section>

          {/* Asumsi - Solid Light Gray untuk Kontras */}
          <section className="rounded-xl bg-gray-100 p-6">
            <h3 className="mb-3 text-xs font-bold uppercase text-gray-500 italic">Asumsi Dasar Perhitungan</h3>
            <div className="grid grid-cols-2 gap-y-3 text-xs font-semibold text-[#003631]">
              <p>• Tarif: Rp 1.444/kWh</p>
              <p>• Efisiensi: 75%</p>
              <p>• Biaya: Rp 15jt/kWp</p>
              <p>• Max Offset: 75%</p>
            </div>
          </section>

          <p className="text-center text-[10px] uppercase tracking-widest text-gray-400">
            *Hasil perhitungan adalah estimasi awal non-binding
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-lg bg-[#003631] px-6 py-4 font-bold text-white transition-colors hover:bg-black uppercase tracking-wider"
        >
          Mengerti
        </button>
      </div>
    </div>
  );
}