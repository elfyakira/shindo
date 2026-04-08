import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seo, company, contact, locations } from "@/lib/site";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto",
});

// JSON-LD構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.shindou-kk.co.jp/#organization",
  name: "信藤建設",
  alternateName: "Shindo Construction",
  description: "三重県四日市市の信藤建設。昭和13年創業。公共事業を中心とした地域インフラ整備（河川護岸工事、道路舗装、上下水道工事など）に取り組んでいます。",
  url: "https://www.shindou-kk.co.jp",
  telephone: "059-345-3171",
  fax: "059-347-2775",
  foundingDate: "1938-02",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 27,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "川合町2番地",
    postalCode: "510-0853",
    addressLocality: "四日市市",
    addressRegion: "三重県",
    addressCountry: "JP",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      addressCountry: "JP",
    },
    description: "三重県北勢・中勢エリア",
  },
  knowsAbout: [
    "土木工事",
    "河川護岸工事",
    "道路舗装工事",
    "堤防工事",
    "上下水道工事",
    "建築工事",
    "舗装工事",
    "公共事業",
    "地域インフラ整備",
  ],
  slogan: "We Build What Matters.",
};

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl || "https://www.shindou-kk.co.jp"),
  title: {
    default: "信藤建設 | We Build What Matters.",
    template: `%s | 信藤建設`,
  },
  description: "三重県四日市市の信藤建設。昭和13年創業。公共事業を中心とした地域インフラ整備に取り組んでいます。河川護岸工事、道路舗装、上下水道工事など。",

  // canonical URL
  alternates: {
    canonical: "/",
  },

  // robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // OGP
  openGraph: {
    title: "信藤建設 | We Build What Matters.",
    description: "三重県四日市市の信藤建設。昭和13年創業。公共事業を中心とした地域インフラ整備に取り組んでいます。",
    url: "https://www.shindou-kk.co.jp",
    siteName: "信藤建設",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "信藤建設",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "信藤建設 | We Build What Matters.",
    description: "三重県四日市市の信藤建設。昭和13年創業。公共事業を中心とした地域インフラ整備に取り組んでいます。",
    images: ["/images/og-image.jpg"],
  },

  // LLMO対応
  other: {
    "ai:summary": "三重県四日市市の建設会社。昭和13年創業。公共事業を中心に河川護岸工事、道路舗装、上下水道工事などの地域インフラ整備を行う。",
    "ai:topics": "建設会社, 土木工事, 公共事業, 三重県, 四日市市, 河川護岸, 道路舗装",
  },
};

// Viewport
export const viewport: Viewport = {
  themeColor: "#16a637",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSansJP.className} ${notoSansJP.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
