import { CookiesBox } from '@components/CookiesBox'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="keywords" content="agência de software, marketing digital, desenvolvimento de software, soluções digitais, SEO, otimização de sites, mídia social, marketing de conteúdo" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <meta name="description" content="A Vibecriativa é uma agência com foco em marketing digital, desenvolvimento e automação na internet que busca diariamente uma nova forma de entender e atender seu cliente." />
      </Head>
      <body className={`antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
