import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "信藤建設のプライバシーポリシー（個人情報保護方針）。お客様からお預かりした個人情報の取り扱いについてご説明します。",

  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "プライバシーポリシー", path: "/privacy" }])} />
      {children}
    </>
  );
}
