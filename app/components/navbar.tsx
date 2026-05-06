"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const showBackButton = pathname === "/result";

  return (
    <>
      <nav className="sticky top-0 z-9999 w-full bg-transparent px-4 py-4 sm:px-8 sm:py-5">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          {showBackButton ? (
            <Link
              href="/home"
              aria-label="Kembali ke halaman input"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003631] text-[#fff6d1] transition-colors duration-500 hover:opacity-90"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          ) : null}

          <div className="flex flex-1 items-center justify-between rounded-full bg-[#003631] px-6 py-3 text-[#fff6d1] transition-colors duration-500 sm:px-8 sm:py-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-flex shrink-0 items-center">
                <img
                  src="/images/branding/logoTerang.png"
                  alt="SolarWise"
                  className="h-8 w-auto sm:h-9"
                />
              </Link>
            </div>

            <div className="hidden items-center gap-6 sm:flex ml-auto mr-1">
              <Link href="/home" className="text-sm font-medium transition-opacity hover:opacity-80">
                Cek Kelayakan
              </Link>
              <Link href="/cara-kerja" className="text-sm font-medium transition-opacity hover:opacity-80">
                Cara Kerja
              </Link>
              <Link href="/simulasi" className="text-sm font-medium transition-opacity hover:opacity-80">
                Simulasi
              </Link>
              <Link href="/tentang" className="text-sm font-medium transition-opacity hover:opacity-80">
                Tentang
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <button
                aria-label="Open menu"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff6d1]/10 transition-colors duration-500 hover:bg-[#fff6d1]/15 sm:hidden"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {open ? (
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {open ? (
          <div className="mt-2 sm:hidden">
            <div className="flex flex-col gap-1 rounded-2xl bg-[#003631] px-6 py-3 text-[#fff6d1] transition-colors duration-500">
              <Link href="/home" className="py-2 text-sm transition-opacity hover:opacity-80">
                Cek Kelayakan
              </Link>
              <Link href="/cara-kerja" className="py-2 text-sm transition-opacity hover:opacity-80">
                Cara Kerja
              </Link>
              <Link href="/simulasi" className="py-2 text-sm transition-opacity hover:opacity-80">
                Simulasi
              </Link>
              <Link href="/tentang" className="py-2 text-sm transition-opacity hover:opacity-80">
                Tentang
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
}
