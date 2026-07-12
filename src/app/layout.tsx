import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// Import background-nya ke sini
import MeshGradientBackground from "@/components/ui/MeshGradientBackground";

export const metadata: Metadata = {
  title: "LOGIKA UI 2026",
  description: "Olimpiade matematika dan komputer terbesar se-Indonesia oleh LOGIKA UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Bungkus SEMUA elemen layout dengan background gradient */}
        <MeshGradientBackground>
          <Navbar />
          {/* Tambahkan relative dan z-10 agar konten tampil di atas background */}
          <main className="flex-1 w-full relative z-10">
            {children}
          </main>
          <Footer />
        </MeshGradientBackground>
      </body>
    </html>
  );
}