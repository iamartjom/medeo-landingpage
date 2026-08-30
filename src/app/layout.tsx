import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medeo Coffee — кофе, хот-доги и десерты с собой",
  description: "Medeo Coffee — маленькое место с большой душой. Кофе, хот-доги, десерты и сезонные новинки с собой.",
  keywords: ["Medeo Coffee", "кофе с собой", "хот-доги", "десерты", "городская кофейня", "спешелти кофе"],
  openGraph: {
    title: "Medeo Coffee — кофе, хот-доги и десерты с собой",
    description: "Маленькое место с большой душой. Городской кофейный спот с собой.",
    type: "website",
    locale: "ru_RU",
    siteName: "MEDEO Coffee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#111111] text-[#111111] selection:bg-[#FFC700] selection:text-[#111111]">
        {children}
      </body>
    </html>
  );
}
