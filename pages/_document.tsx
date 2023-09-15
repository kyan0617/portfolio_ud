import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/icon-16x16.png" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="description" content="愛知県名古屋市を拠点にフリーランスで活動している西田遥香と申します。Liquidを使用したShopify構築やWordPressのオリジナルテーマ制作などをメインにWEBコーダーのお仕事をしております。" />
        <meta name="twitter:description" content="愛知県名古屋市を拠点にフリーランスで活動している西田遥香と申します。Liquidを使用したShopify構築やWordPressのオリジナルテーマ制作などをメインにWEBコーダーのお仕事をしております。" />
        <meta property="og:title" content="Haruka Nishida Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="愛知県名古屋市を拠点にフリーランスで活動している西田遥香と申します。Liquidを使用したShopify構築やWordPressのオリジナルテーマ制作などをメインにWEBコーダーのお仕事をしております。" />
        <meta property="og:image" content="/src/img/ogp.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
