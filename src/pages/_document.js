import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/SisSpiral.png`} />
        <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/SisSpiral.png`} />
        <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon2.ico`} />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}