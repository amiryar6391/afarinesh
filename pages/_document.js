import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>مرکز مشاوره عمومی آفرینش</title>
      </Head>
      <body dir="rtl" className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
