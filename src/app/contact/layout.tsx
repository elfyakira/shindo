import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { site, company } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "お問い合わせ｜工事のご相談・採用について",
  description: `${company.name}へのお問い合わせはこちら。ご質問、ご相談、お見積りなど、お気軽にお問い合わせください。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: "お問い合わせ｜工事のご相談・採用について | 信藤建設",
    description: `${company.name}へのお問い合わせはこちら。ご質問、ご相談、お見積りなど。`,
    url: `${site.seo.siteUrl}/contact`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ｜工事のご相談・採用について | 信藤建設",
    description: `${company.name}へのお問い合わせはこちら。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/contact",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}のお問い合わせページ。ご質問、ご相談、お見積りを受け付け。`,
    "ai:topics": "お問い合わせ, 相談, 見積り, 連絡先",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "お問い合わせ", path: "/contact" }])} />
      {children}
    </>
  );
}
