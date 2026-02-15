import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business",
  description: "信藤建設の事業内容。公共事業を中心とした地域インフラ整備、太陽光発電事業、現場見学・出前授業、清掃活動などの地域貢献活動をご紹介します。",

  openGraph: {
    title: "Business | 信藤建設",
    description: "信藤建設の事業内容。公共事業を中心とした地域インフラ整備をご紹介します。",
    url: "https://www.shindou-kk.co.jp/business",
    siteName: "信藤建設",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business | 信藤建設",
    description: "信藤建設の事業内容。公共事業を中心とした地域インフラ整備をご紹介します。",
  },

  alternates: {
    canonical: "/business",
  },

  other: {
    "ai:summary": "信藤建設の事業内容ページ。公共事業（河川護岸、道路舗装、上下水道工事）、太陽光発電事業、地域貢献活動を紹介。",
    "ai:topics": "事業内容, 公共事業, 土木工事, 太陽光発電, 地域貢献",
  },
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
