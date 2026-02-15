import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アクセス",
  description: "信藤建設の拠点情報。各拠点の住所、電話番号、アクセス方法をご確認いただけます。",

  openGraph: {
    title: "アクセス | 信藤建設",
    description: "信藤建設の拠点情報。各拠点の住所、電話番号、アクセス方法をご確認いただけます。",
    url: "https://www.shindou-kk.co.jp/access",
    siteName: "信藤建設",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "アクセス | 信藤建設",
    description: "信藤建設の拠点情報。各拠点の住所、電話番号、アクセス方法をご確認いただけます。",
  },

  alternates: {
    canonical: "/access",
  },

  other: {
    "ai:summary": "信藤建設のアクセス情報ページ。8拠点の住所、電話番号、FAX、地図リンクを掲載。",
    "ai:topics": "アクセス, 拠点情報, 地図, 三重県",
  },
};

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
