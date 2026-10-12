import Image from "next/image";
import aboutPhoto from "@/app/images/about.jpg";
import Section from "@/app/components/section";
import { useLanguage } from "@/app/i18n/language";

const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" label={t.about.label} alt>
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 md:items-start">
        {/* Photo with an offset block behind it */}
        <div className="shrink-0 self-center md:self-start">
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 md:-translate-x-6 md:translate-y-6 bg-teal-100 dark:bg-teal-900" aria-hidden="true"></div>
            <Image
              src={aboutPhoto}
              alt={t.about.photoAlt}
              fill
              sizes="(min-width: 768px) 320px, 256px"
              className="relative object-cover object-top border-8 border-white dark:border-gray-800 shadow-md"
            />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">{t.about.heading}</h3>
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-4 text-base text-gray-600 dark:text-gray-300">
              {paragraph}
            </p>
          ))}

          <p className="mt-6 text-base text-gray-600 dark:text-gray-300">{t.about.factsIntro}</p>
          <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 list-disc ps-5 text-base text-gray-600 dark:text-gray-300 marker:text-teal-500">
            {t.about.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <p className="mt-6 text-base text-gray-600 dark:text-gray-300">
            {t.about.closing}{" "}
            <a href="#contact" className="font-medium text-teal-700 dark:text-teal-400 underline underline-offset-4 hover:text-teal-900 dark:hover:text-teal-300">
              {t.about.closingLink}
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
