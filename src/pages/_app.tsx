import type { AppProps } from 'next/app';
import RootLayout from '@/app/components/root-layout';
// These styles apply to every route in the application
import '@/app/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
