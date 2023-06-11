import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href='/fonts/IBMPlexSans-Bold.ttf' as="fonts" crossOrigin='anonymus'/>
        <link rel="preload" href='/fonts/IBMPlexSans-Regular.ttf' as="fonts" crossOrigin='anonymus'/>
        <link rel="preload" href='/fonts/IBMPlexSans-LightItalic.ttf' as="fonts" crossOrigin='anonymus'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
