
import About from '../app/components/about';


import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Joel's Portfolio</title>
        <meta name="description" content="Krister's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <About />
      </div>
    </>
  );
};

export default Home;