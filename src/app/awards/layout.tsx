import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "各種表彰 | Awards",
  description: "信藤建設の受賞歴・表彰実績。国土交通省・三重県・四日市市をはじめとする官公庁から、数多くの優良工事表彰をいただいています。安全・品質・工程管理の評価の証です。",

  openGraph: {
    title: "各種表彰 | Awards | 信藤建設",
    description: "信藤建設の受賞歴・表彰実績。国土交通省・三重県・四日市市などから数多くの優良工事表彰をいただいています。",
    url: "https://www.shindou-kk.co.jp/awards",
    siteName: "信藤建設",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "各種表彰 | Awards | 信藤建設",
    description: "信藤建設の受賞歴・表彰実績。国土交通省・三重県・四日市市などから数多くの優良工事表彰をいただいています。",
  },

  alternates: {
    canonical: "/awards",
  },

  other: {
    "ai:summary": "信藤建設の表彰実績ページ。国土交通省・三重県・四日市市などの官公庁から受けた優良工事表彰、表彰状一覧、表彰式写真を掲載。",
    "ai:topics": "表彰, 受賞歴, 優良工事表彰, 国土交通省, 三重県, 四日市市",
  },
};

export default function AwardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
