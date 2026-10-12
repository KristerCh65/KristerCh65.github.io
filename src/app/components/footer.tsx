import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/MK.png";
import { sectionIds } from "@/app/components/navbar";
import { socialLinks } from "@/app/components/social-links";
import { useLanguage } from "@/app/i18n/language";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-teal-500 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center mb-4 sm:mb-0 hover:opacity-80 transition-opacity">
            <Image src={logo} className="invert dark:invert-0" width={50} height={50} alt="Krister Munguia" />
          </Link>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {sectionIds.map((id) => (
              <li key={id}>
                <Link href={`#${id}`} className="hover:text-teal-700 dark:hover:text-teal-400">{t.nav[id]}</Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-300 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {year} Krister Munguia · {t.footer.madeWith} <span aria-label="love">❤️</span>
          </p>
          <div className="flex gap-5 mt-4 sm:mt-0">
            {socialLinks.map(({ name, href, Icon }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-700 dark:hover:text-teal-400" title={name}>
                <Icon className="w-4 h-4" />
                <span className="sr-only">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
