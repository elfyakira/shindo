import Link from "next/link";
import type { Metadata } from "next";
import { site, company } from "@/lib/site";
import { FadeInUp } from "@/components/animations";

// ============================================================
// 📝 コンテンツデータ（構成案に基づいて編集してください）
// ============================================================

// サンプルニュースデータ（実際はCMSやsite.jsonから取得）
const newsData: Record<
  string,
  { date: string; category: string; categoryLabel: string; title: string; content: string }
> = {
  "1": {
    date: "2024.01.15",
    category: "news",
    categoryLabel: "お知らせ",
    title: "ホームページをリニューアルしました",
    content: `この度、ホームページをリニューアルいたしました。

より見やすく、使いやすいサイトを目指して、
デザインと構成を一新しました。

当社の事業内容、採用情報など、
最新の情報をわかりやすくお届けしてまいります。

今後ともよろしくお願いいたします。`,
  },
  "2": {
    date: "2024.01.10",
    category: "works",
    categoryLabel: "実績",
    title: "〇〇プロジェクトが完了しました",
    content: `〇〇プロジェクトが完了いたしました。

詳細はこちらのページをご覧ください。

今後とも、お客様のご期待に応えられるよう、
品質の高いサービスをお届けしてまいります。`,
  },
  "3": {
    date: "2024.01.05",
    category: "recruit",
    categoryLabel: "採用",
    title: "採用情報を更新しました",
    content: `採用情報を更新いたしました。

当社では、一緒に働いてくださる方を募集しています。

詳細は採用ページをご覧ください。
お気軽にお問い合わせください。`,
  },
};

// 関連リンク
const relatedLinks: Record<string, { label: string; href: string }[]> = {
  news: [
    { label: "会社概要", href: "/about" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  works: [
    { label: "事業内容", href: "/service" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  recruit: [
    { label: "採用情報", href: "/recruit" },
    { label: "エントリーフォーム", href: "/contact?type=recruit" },
  ],
};

// ============================================================
// ページ設定
// ============================================================

export async function generateStaticParams() {
  // site.jsonのnewsを使用、なければサンプルデータのslugを返す
  if (site.news.length > 0) {
    return site.news.map((item) => ({ slug: item.slug }));
  }
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // site.jsonから検索
  const siteNews = site.news.find((item) => item.slug === slug);
  if (siteNews) {
    return {
      title: `${siteNews.title}｜お知らせ｜${site.seo.titleSuffix || "企業サイト"}`,
      description: siteNews.title,
    };
  }

  // サンプルデータから検索
  const news = newsData[slug];
  if (!news) {
    return { title: "お知らせが見つかりません" };
  }
  return {
    title: `${news.title}｜お知らせ｜${site.seo.titleSuffix || "企業サイト"}`,
    description: news.content.slice(0, 100),
  };
}

// ============================================================
// ページコンポーネント
// ============================================================

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // site.jsonから検索
  const siteNews = site.news.find((item) => item.slug === slug);

  // サンプルデータから検索（site.jsonになければ）
  const news = siteNews
    ? {
        date: siteNews.date,
        category: siteNews.category,
        categoryLabel: siteNews.category === "news" ? "お知らせ" : siteNews.category === "works" ? "実績" : "採用",
        title: siteNews.title,
        content: "詳細内容はこちらに表示されます。\n\nCMSやsite.jsonでコンテンツを管理してください。",
      }
    : newsData[slug];

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            お知らせが見つかりません
          </h1>
          <Link href="/news" className="text-navy hover:underline">
            ← お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  const links = relatedLinks[news.category] || relatedLinks.news;

  return (
    <>
      {/* Page Header */}
      <section className="py-10 lg:py-[60px] bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[13px] lg:text-sm text-text-secondary">
                {news.date}
              </span>
              <span className="text-xs font-semibold text-navy px-2 py-0.5 bg-gray-100 rounded">
                {news.categoryLabel}
              </span>
            </div>
            <h1 className="text-2xl lg:text-[32px] font-bold text-text-primary leading-[1.4]">
              {news.title}
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Content */}
      <section className="pb-10 lg:pb-[60px] bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <FadeInUp delay={100} className="text-[15px] lg:text-base text-black leading-[1.9] whitespace-pre-wrap">
            {news.content}
          </FadeInUp>
        </div>
      </section>

      {/* Related Links */}
      <section className="pb-8 lg:pb-10 bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <FadeInUp delay={200} className="bg-bg-light p-6 lg:p-8 rounded-lg">
            <p className="text-sm font-semibold text-text-secondary mb-4">
              関連ページ:
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-navy hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16 lg:pb-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <Link
            href="/news"
            className="text-[15px] text-text-secondary hover:text-navy transition-colors"
          >
            ← お知らせ一覧に戻る
          </Link>
        </div>
      </section>
    </>
  );
}
