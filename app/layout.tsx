import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darusoft - 더 안정적으로, 더 스마트하게",
  description: "공공 · 기관과 의료 분야의 디지털 인프라를 구축하 고, RPA·AI 기반 혁신으로 더 나은 업무 환경을 만듭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-pretendard">{children}</body>
    </html>
  );
}
