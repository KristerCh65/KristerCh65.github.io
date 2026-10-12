import { useState } from "react";
import Section from "@/app/components/section";
import { EMAIL, MailIcon, socialLinks } from "@/app/components/social-links";
import { useLanguage } from "@/app/i18n/language";

const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <Section id="contact" label={t.contact.label} subtitle={t.contact.subtitle}>
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3 sm:gap-4">
          <MailIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 dark:text-gray-300 shrink-0" />
          <a
            href={`mailto:${EMAIL}`}
            className="text-xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-400 transition-colors break-all"
          >
            {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shrink-0"
            aria-label={t.contact.copy}
            title={t.contact.copy}
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 8V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-3M5 8h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
              </svg>
            )}
          </button>
        </div>
        <p className="mt-2 h-5 text-sm text-teal-700 dark:text-teal-400" aria-live="polite">
          {copied ? t.contact.copied : ""}
        </p>

        <p className="mt-10 text-gray-600 dark:text-gray-300">{t.contact.platforms}</p>
        <div className="mt-4 flex gap-4">
          {socialLinks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title={name}
            >
              <Icon className="w-6 h-6" />
              <span className="sr-only">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
