import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "地域貢献活動 | Community",
  description: "信藤建設の地域貢献活動。現場見学会・出前授業による次世代への技術継承、清掃活動などの環境保全・地域美化活動を通じて、三重県四日市市の地域社会とともに歩んでいます。",

  openGraph: {
    title: "地域貢献活動 | Community | 信藤建設",
    description: "信藤建設の地域貢献活動。現場見学会・出前授業、清掃活動など、地域社会とともに歩む取り組みをご紹介します。",
    url: "https://www.shindou-kk.co.jp/community",
    siteName: "信藤建設",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "地域貢献活動 | Community | 信藤建設",
    description: "信藤建設の地域貢献活動。現場見学会・出前授業、清掃活動など、地域社会とともに歩む取り組みをご紹介します。",
  },

  alternates: {
    canonical: "/community",
  },

  other: {
    "ai:summary": "信藤建設の地域貢献活動ページ。現場見学会・出前授業による技術継承、清掃活動などの環境保全・地域美化活動を紹介。",
    "ai:topics": "地域貢献, 現場見学会, 出前授業, 清掃活動, 環境保全, 四日市市",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "地域貢献活動", path: "/community" }])} />
      {children}
    </>
  );
}
