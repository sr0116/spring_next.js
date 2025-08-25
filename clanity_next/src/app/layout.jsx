// app/layout.tsx
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function RootLayout({ children }) {
  return (
      <html lang="ko">
      <body className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <Footer />
      </body>
      </html>
  );
}