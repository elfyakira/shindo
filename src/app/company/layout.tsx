import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "信藤建設の会社情報。代表あいさつ、経営理念、沿革、会社概要、アクセス情報をご紹介します。昭和13年創業、三重県四日市市。",

  openGraph: {
    title: "Company | 信藤建設",
    description: "信藤建設の会社情報。代表あいさつ、経営理念、沿革、会社概要をご紹介します。",
    url: "https://www.shindou-kk.co.jp/company",
    siteName: "信藤建設",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Company | 信藤建設",
    description: "信藤建設の会社情報。代表あいさつ、経営理念、沿革、会社概要をご紹介します。",
  },

  alternates: {
    canonical: "/company",
  },

  other: {
    "ai:summary": "信藤建設の会社情報ページ。代表あいさつ、経営理念、沿革、会社概要（設立昭和13年、従業員27名）、アクセス情報を掲載。",
    "ai:topics": "会社概要, 代表挨拶, 経営理念, 沿革, アクセス",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
