import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, jobPostingsJsonLd } from "@/lib/structured-data";
import { RECRUIT_FAQS } from "@/lib/recruit";

export const metadata: Metadata = {
  title: "採用情報｜四日市市の土木作業員・施工管理の求人",
  description: "信藤建設の採用情報。地域のインフラを支える仕事に、あなたも参加しませんか。募集職種、待遇、よくある質問をご紹介します。",

  openGraph: {
    title: "採用情報｜四日市市の土木作業員・施工管理の求人 | 信藤建設",
    description: "信藤建設の採用情報。地域のインフラを支える仕事に、あなたも参加しませんか。",
    url: "https://www.shindou-kk.co.jp/recruit",
    siteName: "信藤建設",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "採用情報｜四日市市の土木作業員・施工管理の求人 | 信藤建設",
    description: "信藤建設の採用情報。地域のインフラを支える仕事に、あなたも参加しませんか。",
  },

  alternates: {
    canonical: "/recruit",
  },

  other: {
    "ai:summary": "信藤建設の採用情報ページ。新卒・中途採用の募集要項、FAQ、エントリー方法を掲載。土木施工管理職を募集中。",
    "ai:topics": "採用情報, 求人, 募集職種, 土木施工管理, エントリー",
  },
};

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "採用情報", path: "/recruit" }])} />
      <JsonLd data={jobPostingsJsonLd()} />
      <JsonLd data={faqJsonLd(RECRUIT_FAQS)} />
      {children}
    </>
  );
}
