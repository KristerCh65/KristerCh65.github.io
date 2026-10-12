import Section from "@/app/components/section";
import { experienceData } from "@/app/data/experience";
import { useLanguage } from "@/app/i18n/language";

const Experience = () => {
  const { t, l } = useLanguage();

  return (
    <Section id="experience" label={t.experience.label} subtitle={t.experience.subtitle} alt>
      <ol className="flex flex-col gap-8">
        {experienceData.map((job) => (
          <li
            key={job.id}
            className="rounded-xl bg-white dark:bg-gray-800 shadow-md p-6 md:p-8 md:grid md:grid-cols-[11rem_1fr_auto] md:gap-8"
          >
            {/* Company */}
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold text-teal-700 dark:text-teal-400">{job.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
            </div>

            {/* Role and highlights */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{l(job.title)}</h3>
                <time className="md:hidden text-sm text-gray-500 dark:text-gray-400">{l(job.date)}</time>
              </div>
              <ul className="mt-3 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-300 marker:text-teal-500">
                {job.highlights.map((highlight) => (
                  <li key={highlight.en}>{l(highlight)}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <li key={l(skill)} className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                    {l(skill)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dates (desktop) */}
            <time className="hidden md:block text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{l(job.date)}</time>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
