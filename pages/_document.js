import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="مرکز مشاوره عمومی آفرینش" />
        <meta name="description" content="بهترین مرکز مشاوره عمومی با برخورداری از باتجربه ترین روانشناسان درمانگران و مشاوران و مربی های تربیتی برای تمامی رده های سنی کودکان نوجوانان جوانان و بزرگسالان با بهترین کیفیت و مناسبترین قیمت."/>
        <meta property="og:title" content="مرکز مشاوره و روانشناسی آفرینش" />
        <meta property="og:description" content="بهبود کیفیت زندگی و سلامت روان شما با خدمات مشاوره حرفه‌ای." />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
