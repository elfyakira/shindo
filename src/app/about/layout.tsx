import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "信藤建設について。地域にとって本当に必要な公共事業に、誠実に向き合う建設会社です。信藤建設の強み、受賞歴をご紹介します。",

  openGraph: {
    title: "About | 信藤建設",
    description: "信藤建設について。地域にとって本当に必要な公共事業に、誠実に向き合う建設会社です。",
    url: "https://www.shindou-kk.co.jp/about",
    siteName: "信藤建設",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About | 信藤建設",
    description: "信藤建設について。地域にとって本当に必要な公共事業に、誠実に向き合う建設会社です。",
  },

  alternates: {
    canonical: "/about",
  },

  other: {
    "ai:summary": "信藤建設の企業紹介ページ。地域密着の姿勢、豊富な実績、確かな技術力の3つの強みを紹介。受賞歴も掲載。",
    "ai:topics": "会社概要, 企業理念, 強み, 受賞歴, 建設会社",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
