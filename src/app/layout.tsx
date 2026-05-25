import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarketEdge — Market Intelligence for Teams That Can't Afford $50K/yr",
  description: "Track competitors, monitor market signals, and see what AI says about your brand. 10x cheaper than Crayon, Klue, or Contify. Starting at $29/mo.",
  keywords: "market intelligence, competitive intelligence, AI citations tracking, competitor monitoring, market analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
