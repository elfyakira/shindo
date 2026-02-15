# 信藤建設 HP制作 HANDOFF

## プロジェクト情報

| 項目 | 内容 |
|------|------|
| 企業名 | 信藤建設 |
| 企業名（英語） | Shindo Construction |
| 使用テンプレート | template-standard |
| 作成日 | 2026-02-15 |
| 制作方式 | カンプ版（デザインカンプから実装） |
| カンプフォルダ | C:\Users\tench\Downloads\信藤建設HPデザイン |
| GitHubリポジトリ | https://github.com/elfyakira/shindo |
| 本番URL（予定） | https://www.shindou-kk.co.jp |

## カンプ版 厳守事項

1. **文言の捏造禁止**: カンプに見えない文言を勝手に作らない
2. **プレースホルダー維持**: 「aaaa」等はそのまま実装
3. **デザイン忠実再現**: カンプの見た目を100%再現
4. **虚偽情報禁止**: 推測で情報を追加しない

## 企業基本情報

| 項目 | 内容 |
|------|------|
| 設立 | 昭和13年2月 |
| 所在地 | 〒510-0853 三重県四日市市川合町2番地 |
| 電話番号 | 059-345-3171 |
| FAX | 059-347-2775 |
| 従業員数 | 27名 |
| 事業内容 | 土木工事一式、建築工事一式、舗装工事一式 |
| 事業エリア | 三重県北勢・中勢エリア |

## ブランドカラー

| 項目 | コード | 用途 |
|------|--------|------|
| メインカラー | #1B5E3A | ヘッダー、フッター、見出し等 |
| アクセントカラー | #8BC34A | CTA、ボタン等 |
| サブカラー | #C5D3DC | アクセスページ背景 |
| テキスト（濃） | #333333 | 本文 |
| テキスト（淡） | #666666 | 補足テキスト |

## ページ構成

| # | ページ | URL | 状態 |
|---|--------|-----|------|
| 1 | TOP | / | 完了 |
| 2 | About | /about | 完了 |
| 3 | Company | /company | 完了 |
| 4 | Business | /business | 完了 |
| 5 | 施工実績 | /business/cases | 完了 |
| 6 | Recruit | /recruit | 完了 |
| 7 | アクセス | /access | 完了 |

## 各ページの実装内容

### TOP（/）
- Hero: 「Home Matters」「We Build What Matters.」
- About紹介セクション
- Business: 4つの事業カード
- Awards: 表彰状4件
- Cases: 施工実績3件
- Company: 会社紹介
- Recruit: 「Join our team」
- Blog: 3件

### About（/about）
- Hero
- 「地域にとって本当に必要な公共事業に、誠実に向き合う建設会社です。」
- 信藤建設の強み（3項目）
- Awards: 6件
- Blog: 3件

### Company（/company）
- Hero
- 代表あいさつ
- 経営理念
- 沿革（プレースホルダー）
- 会社概要（実データ使用）
- Access

### Business（/business）
- Hero
- 公共事業説明
- 太陽光発電事業
- 現場見学・出前授業
- 清掃活動

### 施工実績（/business/cases）
- Hero
- 9件のカードグリッド（プレースホルダー）

### Recruit（/recruit）
- Hero: 「RECRUIT」
- メッセージ
- 「Join our team」セクション
- 募集要項（新卒・中途）
- FAQ
- CTA

### アクセス（/access）
- 8拠点すべてプレースホルダー（aaaa等）
- 背景色: #C5D3DC
- Google mapボタン

## SEO・LLMO対策

- [x] robots.txt
- [x] sitemap.ts
- [x] 全ページにmetadata（title, description）
- [x] 全ページにOpenGraph
- [x] 全ページにTwitter Card
- [x] 全ページにLLMO用メタデータ（ai:summary, ai:topics）
- [x] JSON-LD構造化データ
- [x] 型チェック完了

## 参照ファイル

| ファイル | 用途 |
|---------|------|
| data/composition.md | カンプ分析結果 |
| data/hearing.json | ヒアリング抽出JSON |
| data/site.json | サイト設定JSON |
| SEO_LLMO_GUIDE.md | SEO・LLMO実装ガイド |

## 残作業（クライアント確認後）

### 1. プレースホルダーの置き換え
- [ ] アクセスページ: 8拠点の情報
- [ ] 代表者名（現在aaaa）
- [ ] 沿革（現在aaaa）
- [ ] 施工実績（現在aaaa）

### 2. 画像の差し替え
- [ ] ロゴ画像（/images/logo.png）
- [ ] ヒーロー画像
- [ ] 表彰状画像
- [ ] 施工実績画像
- [ ] 代表者写真

### 3. Google Maps埋め込み
- [ ] アクセスページの各拠点

### 4. OGP画像
- [ ] /images/og-image.jpg の作成

## 開発コマンド

```bash
# 開発サーバー起動
cd /mnt/c/client_hp/shindo
npm run dev

# 型チェック
npx tsc --noEmit

# ビルド
npm run build

# Git push（elfyakiraアカウント）
git push origin main
```

## Git設定

```bash
# リモートURL
git remote set-url origin git@github-elfyakira:elfyakira/shindo.git
```
