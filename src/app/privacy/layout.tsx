import type { Metadata } from "next";

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
  return children;
}
