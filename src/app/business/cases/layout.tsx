import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "施工実績",
  description: "信藤建設の施工実績。河川護岸工事、道路舗装工事、上下水道工事など、公共事業を中心とした実績をご紹介します。",

  openGraph: {
    title: "施工実績 | 信藤建設",
    description: "信藤建設の施工実績。公共事業を中心とした実績をご紹介します。",
    url: "https://www.shindou-kk.co.jp/business/cases",
    siteName: "信藤建設",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "施工実績 | 信藤建設",
    description: "信藤建設の施工実績。公共事業を中心とした実績をご紹介します。",
  },

  alternates: {
    canonical: "/business/cases",
  },

  other: {
    "ai:summary": "信藤建設の施工実績一覧ページ。河川護岸工事、道路舗装工事、上下水道工事などの公共事業実績を掲載。",
    "ai:topics": "施工実績, 公共事業, 河川護岸, 道路舗装, 上下水道",
  },
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
