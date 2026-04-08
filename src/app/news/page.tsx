"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { FadeInUp, StaggerContainer } from "@/components/animations";
import WaveTitle from "@/components/WaveTitle";
import DecoShape from "@/components/DecoShape";

// ============================================================
const CATEGORIES = [
  { id: "all" as const, label: "すべて" },
  { id: "news" as const, label: "お知らせ" },
  { id: "works" as const, label: "実績" },
  { id: "recruit" as const, label: "採用" },
];

type Category = (typeof CATEGORIES)[number]["id"];

const NEWS_FALLBACK = [
  { date: "2024.01.15", category: "news" as const, title: "ホームページをリニューアルしました", slug: "1" },
  { date: "2024.01.10", category: "works" as const, title: "〇〇プロジェクトが完了しました", slug: "2" },
  { date: "2024.01.05", category: "recruit" as const, title: "採用情報を更新しました", slug: "3" },
];

const CATEGORY_LABELS: Record<string, string> = {
  news: "お知らせ",
  works: "実績",
  recruit: "採用",
};

// ============================================================
function PageHeader() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center bg-[#16a637] overflow-hidden">
      <DecoShape color="red" width={180} height={65} top="18%" right="6%" rotate={9} direction="top-right" zIndex={6} />
      <DecoShape color="red" width={120} height={45} bottom="-25px" left="8%" rotate={-8} delay={0.2} direction="bottom-left" zIndex={6} />
      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <WaveTitle en="News" ja="お知らせ" variant="dark" />
      </div>
    </section>
  );
}

function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: Category;
  onSelect: (cat: Category) => void;
}) {
  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex gap-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`px-6 py-3 text-[15px] whitespace-nowrap transition-colors rounded-full ${
                selected === cat.id
                  ? "bg-[#16a637] text-white font-semibold"
                  : "text-text-secondary hover:text-text-primary border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsList({ category }: { category: Category }) {
  const newsItems = site.news.length > 0 ? site.news : NEWS_FALLBACK;
  const filteredNews =
    category === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === category);

  return (
    <section className="relative pb-16 lg:pb-24 bg-white overflow-hidden">
      <DecoShape color="green" width={140} height={50} bottom="-25px" right="4%" rotate={11} delay={0.15} direction="bottom-right" zIndex={5} />
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <StaggerContainer as="ul">
          {filteredNews.map((item, index) => {
            const categoryLabel = CATEGORY_LABELS[item.category] || item.category;
            return (
              <li key={index} className="border-b border-gray-200">
                <Link
                  href={`/news/${item.slug}`}
                  className="flex items-center justify-between py-6 lg:py-8 hover:opacity-70 transition-opacity"
                >
                  <div className="flex items-center gap-4 lg:gap-6">
                    <span className="text-sm text-text-secondary w-24">{item.date}</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded-full text-text-primary">
                      {categoryLabel}
                    </span>
                    <span className="text-[15px] text-text-primary">{item.title}</span>
                  </div>
                  <span className="text-text-secondary">→</span>
                </Link>
              </li>
            );
          })}
        </StaggerContainer>

        {filteredNews.length === 0 && (
          <FadeInUp>
            <p className="py-12 text-center text-black">
              該当するお知らせはありません
            </p>
          </FadeInUp>
        )}
      </div>
    </section>
  );
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  return (
    <>
      <PageHeader />
      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      <NewsList category={selectedCategory} />
    </>
  );
}
