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
    <section className="relative h-[50vh] min-h-[400px] flex items-center bg-[#16a637] overflow-visible">
      <DecoShape color="red" width={180} top="14%" right="6%" zIndex={15} />
      <DecoShape color="white" width={140} bottom="-30px" left="6%" delay={0.15} zIndex={15} className="hidden lg:block" />
      <DecoShape color="green" width={110} top="65%" right="14%" delay={0.2} zIndex={15} />
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
                  ? "bg-[#16a637] text-white font-semibold border border-transparent"
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
    <section className="relative pb-16 lg:pb-24 bg-white overflow-visible">
      <DecoShape color="green" width={300} top="-40px" right="-60px" zIndex={3} className="hidden lg:block" />
      <DecoShape color="red" width={100} top="40%" left="-50px" delay={0.1} zIndex={3} className="hidden lg:block" />
      <DecoShape color="green" width={240} bottom="-140px" right="10%" delay={0.2} zIndex={3} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <StaggerContainer as="ul">
          {filteredNews.map((item, index) => {
            const categoryLabel = CATEGORY_LABELS[item.category] || item.category;
            return (
              <li key={index} className="border-b border-gray-200">
                <Link
                  href={`/news/${item.slug}`}
                  className="flex items-center justify-between py-6 lg:py-8 hover:opacity-70 transition-opacity"
                >
                  <div className="flex items-center gap-3 lg:gap-6">
                    <span className="text-sm text-text-secondary w-[88px] flex-shrink-0">{item.date}</span>
                    <span className="text-xs font-semibold py-1 bg-gray-100 rounded-full text-text-primary text-center whitespace-nowrap flex-shrink-0 w-16 lg:w-20">
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
