import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "점집 - Live Pixel Market",
  description: "한국 픽셀아트의 확장성과 자생력 강화를 위한 픽셀아트 마켓",
  keywords: ["픽셀아트", "pixel art", "도트", "마켓", "전시", "게임", "굿즈"],
  openGraph: {
    title: "점집 - Live Pixel Market",
    description: "한국 픽셀아트의 확장성과 자생력 강화를 위한 픽셀아트 마켓",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b-4 border-yellow-400">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-yellow-400 font-bold text-xl pixel-text">
              점집
            </a>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors">소개</a>
              <a href="#zones" className="text-white hover:text-yellow-400 transition-colors">구획</a>
              <a href="#info" className="text-white hover:text-yellow-400 transition-colors">참가안내</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-black border-t-4 border-yellow-400 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
            <p className="pixel-text text-yellow-400 mb-2">점집 - Live Pixel Market</p>
            <p>한국 픽셀아트의 확장성과 자생력 강화를 위해 노력합니다.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
