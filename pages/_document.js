import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Free Online AI Email Writer" key="title"/>
        <meta property="og:description" content="Get professional emails written by AI for free in just seconds with our Online AI Email Writer. 
          Simply input your desired email content and our AI will generate a polished, professional email that is ready to send. 
          Save time and effort while still maintaining a high level of quality with our AI email writing tool." key="description"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
