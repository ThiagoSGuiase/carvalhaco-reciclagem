import Layout from '../components/Layout';
import { WhatsApp } from '../components/WhatsApp';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <WhatsApp />
    </>
  )
}

export default MyApp
