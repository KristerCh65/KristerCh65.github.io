import '@/styles/globals.css';
import Layout from '../app/layout';

export default function Home({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
