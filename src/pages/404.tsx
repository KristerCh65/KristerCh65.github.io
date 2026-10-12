import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/MK.png";
import { useLanguage } from "@/app/i18n/language";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white dark:bg-gray-800">
      <Head>
        <title>{`404 · ${t.notFound.title}`}</title>
      </Head>
      <Image src={logo} className="invert dark:invert-0" alt="Krister Munguia" width={64} height={64} />
      <p className="mt-8 text-7xl font-bold text-teal-700 dark:text-teal-400">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">{t.notFound.title}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md">{t.notFound.message}</p>
      <Link
        href="/"
        className="mt-8 px-5 py-2 rounded-lg font-medium bg-gray-900 text-white hover:bg-teal-700 dark:bg-white dark:text-gray-900 dark:hover:bg-teal-400 transition-colors"
      >
        {t.notFound.back}
      </Link>
    </main>
  );
};

export default NotFound;
