"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";
import { site } from "@/lib/site";

const BLOG_FALLBACK_IMAGE = "/images/generated/completed_building_sky.jpg";

// 新着順に件数分（date は "YYYY.MM.DD" 形式なので文字列比較で並べ替え可能）
function getLatestPosts(count: number) {
  return [...site.news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

export default function LatestBlogPosts({ count = 3 }: { count?: number }) {
  const posts = getLatestPosts(count);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <FadeInUp key={post.slug} delay={index * 0.1}>
          <Link href={`/news/${post.slug}`} className="block group">
            <div className="relative aspect-square rounded overflow-hidden mb-4 bg-gray-100">
              <Image
                src={post.image?.src ?? BLOG_FALLBACK_IMAGE}
                alt={post.image?.alt ?? post.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-xs text-text-secondary mb-2">{post.date}</p>
            <h3 className="text-[15px] font-medium text-text-primary group-hover:text-primary transition-colors">
              {post.title}
            </h3>
          </Link>
        </FadeInUp>
      ))}
    </div>
  );
}
