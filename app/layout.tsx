import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SolarWise | Energy Decision Support System",
  description:
    "SolarWise membantu rumah tangga dan UMKM mengevaluasi kelayakan investasi solar rooftop melalui simulasi finansial berbasis lokasi.",
  icons: {
    icon: "/images/branding/faviconsw.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#fff6d1] text-[#003631] flex flex-col font-montserrat">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
