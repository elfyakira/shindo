import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import NewsContent from "./NewsContent";

// news/layout.tsx は記事ページ（/news/[slug]）にも適用されるため、
// 一覧固有のパンくずはページ側で出力する
export default function NewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "お知らせ・ブログ", path: "/news" }])} />
      <NewsContent />
    </>
  );
}
