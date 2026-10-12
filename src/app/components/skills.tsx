import Image from "next/image";
import Section from "@/app/components/section";
import { platformData, softSkillData, toolData } from "@/app/data/skills";
import { Text, useLanguage } from "@/app/i18n/language";

const TagGroup = ({ title, tags }: { title: string; tags: Text[] }) => {
  const { l } = useLanguage();

  return (
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={l(tag)} className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
            {l(tag)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  return (
    <Section id="skills" label={t.skills.label} subtitle={t.skills.subtitle}>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8 gap-x-4">
        {toolData.map((tool) => (
          <li key={tool.name} className="flex flex-col items-center gap-2 group">
            {/* White tile keeps dark logos visible in dark mode */}
            <span className="flex items-center justify-center w-16 h-16 rounded-xl dark:bg-gray-100 transition-transform group-hover:-translate-y-1">
              <Image src={`/icons/${tool.icon}`} alt="" width={48} height={48} unoptimized className="w-12 h-12" />
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300 text-center">{tool.name}</span>
          </li>
        ))}
      </ul>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <TagGroup title={t.skills.platforms} tags={platformData} />
        <TagGroup title={t.skills.softSkills} tags={softSkillData} />
      </div>
    </Section>
  );
};

export default Skills;
