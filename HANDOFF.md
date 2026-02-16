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

| # | ページ | URL | 状態 | カンプ差分 |
|---|--------|-----|------|-----------|
| 1 | TOP | / | 完了 | なし |
| 2 | About | /about | 完了 | なし |
| 3 | Company | /company | 完了 | 修正済み（沿革に横バー追加） |
| 4 | Business | /business | 完了 | 修正済み（Hero 2分割、緑背景連続化） |
| 5 | 施工実績 | /business/cases | 完了 | なし |
| 6 | Recruit | /recruit | 完了 | 修正済み（Hero高さ 50vh） |
| 7 | アクセス | /access | 完了 | なし |

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
| docs/DESIGN_DIFF_REPORT.md | カンプ差分レポート（要修正項目一覧） |
| data/composition.md | カンプ分析結果 |
| data/hearing.json | ヒアリング抽出JSON |
| data/site.json | サイト設定JSON |
| SEO_LLMO_GUIDE.md | SEO・LLMO実装ガイド |

## カンプ差分修正: 完了済み

**修正完了日:** 2026-02-15

### カンプ画像とページ対応表

| カンプ画像 | 対応ページ | 対応ファイル |
|-----------|-----------|-------------|
| 1.png | TOP | `src/app/page.tsx` |
| 2.png | About | `src/app/about/page.tsx` |
| 3.png | Company | `src/app/company/page.tsx` |
| 4.png | Business | `src/app/business/page.tsx` |
| 5.png | 施工実績 | `src/app/business/cases/page.tsx` |
| 6.png | Recruit | `src/app/recruit/page.tsx` |
| 7.png | （空白/未使用） | - |
| 8.png | アクセス | `src/app/access/page.tsx` |

### 修正作業手順

**各ページの修正時は必ず以下の手順で行うこと:**

1. **カンプ画像を読み込む** - `Read` ツールで該当のカンプ画像を開く
2. **実装コードを読み込む** - 対応する page.tsx を開く
3. **セクションごとに比較** - カンプと実装を見比べ、差分を特定
4. **修正を実施** - 1セクションずつ修正し、次のセクションへ

---

### 修正タスク詳細

#### ✅ 【完了】タスク1 - Company/沿革セクション

**カンプ参照:** `3.png` の「沿革」セクション

| 項目 | 内容 |
|------|------|
| ファイル | `src/app/company/page.tsx` |
| 対象関数 | `HistorySection` |
| 現状 | シンプルなテーブル形式（年度+テキストのみ） |
| カンプ | 年度の右側に横バー（プログレスバー風）があるビジュアルデザイン |

**修正手順:**
1. `3.png` を読み込み、沿革セクションのデザインを確認
2. `src/app/company/page.tsx` の `HistorySection` を読み込む
3. 年度の右側にグレーの横バー（プログレスバー風）を追加
4. バーの長さはカンプを参考に固定またはランダム

---

#### ✅ 【完了】タスク2 - Business/Heroセクション

**カンプ参照:** `4.png` のHeroセクション

| 項目 | 内容 |
|------|------|
| ファイル | `src/app/business/page.tsx` |
| 対象関数 | `HeroSection` |
| 現状 | 1枚のフル幅画像 |
| カンプ | 2枚の画像を左右に配置（左：重機、右：作業員） |

**修正手順:**
1. `4.png` を読み込み、Heroの2分割レイアウトを確認
2. `src/app/business/page.tsx` の `HeroSection` を読み込む
3. 画像を2枚に分割（左右50%ずつ、またはカンプ比率に合わせる）
4. タイトル「Business」の配置を調整

---

#### ✅ 【完了】タスク3 - Business/緑背景セクション連続化

**カンプ参照:** `4.png` の下部（太陽光発電〜清掃活動）

| 項目 | 内容 |
|------|------|
| ファイル | `src/app/business/page.tsx` |
| 対象関数 | `SolarPowerSection`, `SiteVisitSection`, `CleaningSection` |
| 現状 | 各セクションに `py-16 lg:py-24` があり間隔が開いている |
| カンプ | 3セクションが連続した緑背景（区切りなし） |

**修正手順:**
1. `4.png` を読み込み、緑背景セクションの連続性を確認
2. 3つのセクションを1つの `<section>` にまとめる
3. または各セクションの `py` を削除/調整して連続表示

---

#### ✅ 【完了】タスク4 - Recruit/Hero高さ

**カンプ参照:** `6.png`

| 項目 | 内容 |
|------|------|
| ファイル | `src/app/recruit/page.tsx` |
| 対象関数 | `HeroSection` |
| 現状 | `h-[70vh] min-h-[500px]` |
| カンプ | 画面の約50%程度 |

**修正手順:**
1. `6.png` を読み込み、Hero高さを確認
2. 必要に応じて `h-[50vh]` 程度に調整

---

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

## 必要素材リスト

```json
{
  "projectName": "信藤建設",
  "extractedAt": "2026-02-15",
  "assets": [
    {
      "id": "logo-main",
      "fileName": "logo.png",
      "destPath": "public/images/logo.png",
      "page": "共通",
      "usage": "ヘッダー・フッターロゴ",
      "shootingNote": "企業ロゴ（横長）",
      "size": "180x45px推奨"
    },
    {
      "id": "og-image",
      "fileName": "og-image.jpg",
      "destPath": "public/images/og-image.jpg",
      "page": "共通",
      "usage": "OGP画像（SNSシェア用）",
      "shootingNote": "企業イメージ画像",
      "size": "1200x630px"
    },
    {
      "id": "hero-top",
      "fileName": "hero_top.jpg",
      "destPath": "public/images/hero_top.jpg",
      "page": "TOP",
      "usage": "TOPページHero背景",
      "shootingNote": "建設現場全景（迫力ある構図）",
      "size": "1920x1080px推奨"
    },
    {
      "id": "business-civil",
      "fileName": "business_civil.jpg",
      "destPath": "public/images/business_civil.jpg",
      "page": "TOP",
      "usage": "事業内容カード - 土木工事",
      "shootingNote": "河川護岸・道路舗装などの施工風景",
      "size": "800x600px"
    },
    {
      "id": "business-building",
      "fileName": "business_building.jpg",
      "destPath": "public/images/business_building.jpg",
      "page": "TOP",
      "usage": "事業内容カード - 建築工事",
      "shootingNote": "公共施設・商業施設の建築現場",
      "size": "800x600px"
    },
    {
      "id": "business-paving",
      "fileName": "business_paving.jpg",
      "destPath": "public/images/business_paving.jpg",
      "page": "TOP",
      "usage": "事業内容カード - 舗装工事",
      "shootingNote": "道路舗装・駐車場整備の作業風景",
      "size": "800x600px"
    },
    {
      "id": "business-other",
      "fileName": "business_other.jpg",
      "destPath": "public/images/business_other.jpg",
      "page": "TOP",
      "usage": "事業内容カード - その他",
      "shootingNote": "上下水道工事・プラント土木の様子",
      "size": "800x600px"
    },
    {
      "id": "award-01",
      "fileName": "award_01.jpg",
      "destPath": "public/images/awards/award_01.jpg",
      "page": "TOP, About",
      "usage": "表彰状1",
      "shootingNote": "表彰状の写真撮影",
      "size": "600x800px（縦長）"
    },
    {
      "id": "award-02",
      "fileName": "award_02.jpg",
      "destPath": "public/images/awards/award_02.jpg",
      "page": "TOP, About",
      "usage": "表彰状2",
      "shootingNote": "表彰状の写真撮影",
      "size": "600x800px（縦長）"
    },
    {
      "id": "award-03",
      "fileName": "award_03.jpg",
      "destPath": "public/images/awards/award_03.jpg",
      "page": "TOP, About",
      "usage": "表彰状3",
      "shootingNote": "表彰状の写真撮影",
      "size": "600x800px（縦長）"
    },
    {
      "id": "award-04",
      "fileName": "award_04.jpg",
      "destPath": "public/images/awards/award_04.jpg",
      "page": "TOP, About",
      "usage": "表彰状4",
      "shootingNote": "表彰状の写真撮影",
      "size": "600x800px（縦長）"
    },
    {
      "id": "award-05",
      "fileName": "award_05.jpg",
      "destPath": "public/images/awards/award_05.jpg",
      "page": "About",
      "usage": "表彰状5",
      "shootingNote": "表彰状の写真撮影",
      "size": "600x800px（縦長）"
    },
    {
      "id": "award-06",
      "fileName": "award_06.jpg",
      "destPath": "public/images/awards/award_06.jpg",
      "page": "About",
      "usage": "表彰状6",
      "shootingNote": "表彰状の写真撮影",
      "size": "600x800px（縦長）"
    },
    {
      "id": "case-01",
      "fileName": "case_01.jpg",
      "destPath": "public/images/cases/case_01.jpg",
      "page": "TOP, 施工実績",
      "usage": "施工実績1",
      "shootingNote": "完成した工事の写真",
      "size": "800x600px"
    },
    {
      "id": "case-02",
      "fileName": "case_02.jpg",
      "destPath": "public/images/cases/case_02.jpg",
      "page": "TOP, 施工実績",
      "usage": "施工実績2",
      "shootingNote": "完成した工事の写真",
      "size": "800x600px"
    },
    {
      "id": "case-03",
      "fileName": "case_03.jpg",
      "destPath": "public/images/cases/case_03.jpg",
      "page": "TOP, 施工実績",
      "usage": "施工実績3",
      "shootingNote": "完成した工事の写真",
      "size": "800x600px"
    },
    {
      "id": "case-04",
      "fileName": "case_04.jpg",
      "destPath": "public/images/cases/case_04.jpg",
      "page": "施工実績",
      "usage": "施工実績4",
      "shootingNote": "完成した工事の写真",
      "size": "800x600px"
    },
    {
      "id": "case-05",
      "fileName": "case_05.jpg",
      "destPath": "public/images/cases/case_05.jpg",
      "page": "施工実績",
      "usage": "施工実績5",
      "shootingNote": "完成した工事の写真",
      "size": "800x600px"
    },
    {
      "id": "case-06",
      "fileName": "case_06.jpg",
      "destPath": "public/images/cases/case_06.jpg",
      "page": "施工実績",
      "usage": "施工実績6",
      "shootingNote": "完成した工事の写真",
      "size": "800x600px"
    },
    {
      "id": "case-07",
      "fileName": "case_07.jpg",
      "destPath": "public/images/cases/case_07.jpg",
      "page": "施工実績",
      "usage": "施工実績7",
      "shootingNote": "完成した工事の写真",
      "size": "800x600px"
    },
    {
      "id": "case-08",
      "fileName": "case_08.jpg",
      "destPath": "public/images/cases/case_08.jpg",
      "page": "施工実績",
      "usage": "施工実績8",
      "shootingNote": "完成した工事の写真",
      "size": "800x600px"
    },
    {
      "id": "case-09",
      "fileName": "case_09.jpg",
      "destPath": "public/images/cases/case_09.jpg",
      "page": "施工実績",
      "usage": "施工実績9",
      "shootingNote": "完成した工事の写真",
      "size": "800x600px"
    },
    {
      "id": "ceo-portrait",
      "fileName": "ceo_portrait.jpg",
      "destPath": "public/images/ceo_portrait.jpg",
      "page": "TOP, About, Company",
      "usage": "代表者写真・会社イメージ",
      "shootingNote": "代表取締役のポートレート写真",
      "size": "800x600px"
    },
    {
      "id": "team-photo",
      "fileName": "team_photo.jpg",
      "destPath": "public/images/team_photo.jpg",
      "page": "TOP, Business, Recruit",
      "usage": "社員集合写真・採用ページ背景",
      "shootingNote": "社員全員または代表的なメンバーの集合写真",
      "size": "1920x1080px"
    },
    {
      "id": "interview-young",
      "fileName": "interview_young.jpg",
      "destPath": "public/images/interview_young.jpg",
      "page": "TOP",
      "usage": "採用セクション - 若手社員",
      "shootingNote": "若手社員のインタビュー風景",
      "size": "600x750px（縦長）"
    },
    {
      "id": "interview-midcareer",
      "fileName": "interview_midcareer.jpg",
      "destPath": "public/images/interview_midcareer.jpg",
      "page": "TOP",
      "usage": "採用セクション - 中途社員",
      "shootingNote": "中堅・中途社員のインタビュー風景",
      "size": "600x750px（縦長）"
    },
    {
      "id": "hero-about",
      "fileName": "hero_about.jpg",
      "destPath": "public/images/hero_about.jpg",
      "page": "About",
      "usage": "AboutページHero背景",
      "shootingNote": "会社の雰囲気が伝わる写真",
      "size": "1920x600px"
    },
    {
      "id": "hero-company",
      "fileName": "hero_company.jpg",
      "destPath": "public/images/hero_company.jpg",
      "page": "Company",
      "usage": "CompanyページHero背景",
      "shootingNote": "建設現場の全景",
      "size": "1920x600px"
    },
    {
      "id": "hero-business-left",
      "fileName": "hero_business_left.jpg",
      "destPath": "public/images/hero_business_left.jpg",
      "page": "Business",
      "usage": "BusinessページHero左側",
      "shootingNote": "重機作業の写真",
      "size": "960x600px"
    },
    {
      "id": "hero-business-right",
      "fileName": "hero_business_right.jpg",
      "destPath": "public/images/hero_business_right.jpg",
      "page": "Business",
      "usage": "BusinessページHero右側",
      "shootingNote": "作業員の写真",
      "size": "960x600px"
    },
    {
      "id": "business-main",
      "fileName": "business_main.jpg",
      "destPath": "public/images/business_main.jpg",
      "page": "Business",
      "usage": "事業内容メイン画像",
      "shootingNote": "公共事業の施工風景（ワイド）",
      "size": "1920x800px"
    },
    {
      "id": "solar-power",
      "fileName": "solar_power.jpg",
      "destPath": "public/images/solar_power.jpg",
      "page": "Business",
      "usage": "太陽光発電事業",
      "shootingNote": "太陽光パネル設置の様子",
      "size": "800x600px"
    },
    {
      "id": "site-visit",
      "fileName": "site_visit.jpg",
      "destPath": "public/images/site_visit.jpg",
      "page": "Business, Recruit",
      "usage": "現場見学・出前授業",
      "shootingNote": "学生への説明・指導風景",
      "size": "800x600px"
    },
    {
      "id": "cleaning-activity",
      "fileName": "cleaning_activity.jpg",
      "destPath": "public/images/cleaning_activity.jpg",
      "page": "Business",
      "usage": "清掃活動",
      "shootingNote": "地域清掃活動の様子",
      "size": "800x600px"
    },
    {
      "id": "hero-cases",
      "fileName": "hero_cases.jpg",
      "destPath": "public/images/hero_cases.jpg",
      "page": "施工実績",
      "usage": "施工実績ページHero背景",
      "shootingNote": "代表的な完成工事",
      "size": "1920x600px"
    },
    {
      "id": "hero-recruit",
      "fileName": "hero_recruit.jpg",
      "destPath": "public/images/hero_recruit.jpg",
      "page": "Recruit",
      "usage": "RecruitページHero背景",
      "shootingNote": "社員が働く姿",
      "size": "1920x600px"
    },
    {
      "id": "blog-01",
      "fileName": "blog_01.jpg",
      "destPath": "public/images/blog/blog_01.jpg",
      "page": "TOP, About",
      "usage": "ブログサムネイル1",
      "shootingNote": "お知らせ用画像",
      "size": "800x500px"
    },
    {
      "id": "blog-02",
      "fileName": "blog_02.jpg",
      "destPath": "public/images/blog/blog_02.jpg",
      "page": "TOP, About",
      "usage": "ブログサムネイル2",
      "shootingNote": "お知らせ用画像",
      "size": "800x500px"
    },
    {
      "id": "blog-03",
      "fileName": "blog_03.jpg",
      "destPath": "public/images/blog/blog_03.jpg",
      "page": "TOP, About",
      "usage": "ブログサムネイル3",
      "shootingNote": "お知らせ用画像",
      "size": "800x500px"
    }
  ],
  "summary": {
    "totalAssets": 40,
    "categories": {
      "ロゴ・OGP": 2,
      "Hero画像": 7,
      "事業内容": 8,
      "表彰状": 6,
      "施工実績": 9,
      "人物写真": 5,
      "ブログ": 3
    }
  }
}
```

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
