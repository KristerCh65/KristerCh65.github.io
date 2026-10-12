import Image from "next/image";
import hero from "@/app/images/hero.jpg";
import { useLanguage } from "@/app/i18n/language";
import { EMAIL, MailIcon, socialLinks } from "@/app/components/social-links";

const buttonClass =
  "px-4 py-2 border rounded-lg text-gray-900 border-gray-900 dark:text-white dark:border-white dark:hover:bg-white hover:border-transparent dark:hover:text-teal-700 hover:text-teal-400 hover:bg-gray-900 transition-colors inline-flex items-center gap-2";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col-reverse md:flex-row md:items-center gap-12 md:gap-16">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">{t.hero.greeting}&nbsp;👋</h1>
          <p className="mt-3 text-lg font-semibold text-teal-700 dark:text-teal-400">{t.hero.role}</p>
          <p className="mt-6 text-base text-gray-600 dark:text-gray-300 max-w-prose">{t.hero.summary}</p>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
            {t.hero.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className={buttonClass}>
              <MailIcon className="w-4 h-4" />
              {t.hero.contactMe}
            </a>
            {socialLinks.map(({ name, href, Icon }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                <Icon className="w-4 h-4" />
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Photo with an offset block behind it */}
        <div className="shrink-0 self-center md:self-auto">
          <div className="relative w-56 h-64 md:w-72 md:h-80">
            <div className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 bg-teal-100 dark:bg-teal-900" aria-hidden="true"></div>
            <Image
              src={hero}
              alt={t.hero.photoAlt}
              fill
              sizes="(min-width: 768px) 288px, 224px"
              className="relative object-cover border-8 border-white dark:border-gray-800 shadow-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
