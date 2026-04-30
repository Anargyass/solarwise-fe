"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
        {/* Left: logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/branding/logo.png"
            alt="SolarWise"
            width={200}
            height={50}
            className="block object-contain"
          />
        </Link>

        {/* Right: navigation links (desktop) */}
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/home#cek-kelayakan" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Cek Kelayakan
          </Link>
          <Link href="/home#cara-kerja" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Cara Kerja
          </Link>
          <Link href="/home#simulasi" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Simulasi
          </Link>
          <Link href="/home#tentang" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Tentang
          </Link>
        </div>

        {/* Right: hamburger (mobile) */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 transition"
        >
          <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {open ? (
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="sm:hidden border-t border-slate-100 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:px-8">
            <Link href="/home#cek-kelayakan" className="py-2 text-sm text-slate-700">
              Cek Kelayakan
            </Link>
            <Link href="/home#cara-kerja" className="py-2 text-sm text-slate-700">
              Cara Kerja
            </Link>
            <Link href="/home#simulasi" className="py-2 text-sm text-slate-700">
              Simulasi
            </Link>
            <Link href="/home#tentang" className="py-2 text-sm text-slate-700">
              Tentang
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
