import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 旧テンプレートの事業内容ページ → 正式な事業内容ページへ恒久転送
      { source: "/service", destination: "/business", permanent: true },
    ];
  },
};

export default nextConfig;
