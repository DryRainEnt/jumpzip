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
      <body>
        {children}
      </body>
    </html>
  );
}
