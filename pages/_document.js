import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="title" content="Carvalhaço Reciclagem" />
          <meta name="description" content="A Carvalhaço Reciclagem atua no ramo de compra e venda de materiais recicláveis e seus serviços. Transporte de cargas, coleta descarte de resíduos e etc..." />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Carvalhaço Reciclagem" />
          <meta property="og:description" content="A Carvalhaço Reciclagem atua no ramo de compra e venda de materiais recicláveis e seus serviços. Transporte de cargas, coleta descarte de resíduos e etc..." />
          <meta property="og:image" content="https://i.ibb.co/zGfYDFF/carvalhaco-metatag.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Carvalhaço Reciclagem" />
          <meta property="twitter:description" content="A Carvalhaço Reciclagem atua no ramo de compra e venda de materiais recicláveis e seus serviços. Transporte de cargas, coleta descarte de resíduos e etc..." />
          <meta property="twitter:image" content="https://i.ibb.co/zGfYDFF/carvalhaco-metatag.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument