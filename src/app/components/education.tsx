import Section from "@/app/components/section";
import { certificationData, educationData, languageData } from "@/app/data/education";
import { useLanguage } from "@/app/i18n/language";

const cardClass = "rounded-xl bg-white dark:bg-gray-800 shadow-md";

const Education = () => {
  const { t, l } = useLanguage();

  return (
    <Section id="education" label={t.education.label} subtitle={t.education.subtitle} alt>
      <ul className="grid gap-6 sm:grid-cols-2">
        {educationData.map((item) => (
          <li key={item.id} className={`${cardClass} border-l-4 border-teal-500 p-6`}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{l(item.title)}</h3>
            <p className="text-teal-700 dark:text-teal-400 font-medium">{l(item.institution)}</p>
            {item.date && <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>}
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-12 mb-4">{t.education.certifications}</h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {certificationData.map((certification) => (
          <li key={certification.id} className={`${cardClass} flex items-start gap-3 px-5 py-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5 shrink-0 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM8.2 13.9 7 22l5-3 5 3-1.2-8.1" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{certification.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{certification.issuer}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-12 mb-4">{t.education.languages}</h3>
      <ul className="flex flex-wrap gap-3">
        {languageData.map((language) => (
          <li key={l(language.name)} className={`${cardClass} text-sm px-5 py-2`}>
            <span className="font-semibold text-gray-900 dark:text-white">{l(language.name)}</span>
            <span className="text-gray-500 dark:text-gray-400"> · {l(language.level)}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Education;
