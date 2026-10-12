import Image from "next/image";
import Section from "@/app/components/section";
import { projectData } from "@/app/data/projects";
import { useLanguage } from "@/app/i18n/language";

const linkClass =
  "px-4 py-2 border rounded-lg text-gray-900 border-gray-900 dark:text-white dark:border-white dark:hover:bg-white hover:border-transparent dark:hover:text-teal-700 hover:text-teal-400 hover:bg-gray-900 transition-colors inline-flex items-center gap-2";

const Projects = () => {
  const { t, l } = useLanguage();

  return (
    <Section id="projects" label={t.projects.label} subtitle={t.projects.subtitle}>
      <div className="flex flex-col gap-12">
        {projectData.map((project, index) => (
          <article
            key={project.id}
            className={`rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            {/* Preview image */}
            <div className="md:w-1/2 bg-gray-50 dark:bg-gray-900 p-8 md:p-12 flex items-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${t.projects.screenshotOf} ${project.title}`}
                  className="rounded-lg shadow-lg w-full h-auto object-cover transition-transform duration-300 md:hover:scale-105"
                />
              ) : (
                <div className="w-full aspect-video rounded-lg shadow-lg bg-gradient-to-br from-teal-400 to-gray-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{project.title}</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-8 md:p-12 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{project.title}</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-6">{l(project.description)}</p>

              <ul className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <li key={tech} className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                  </svg>
                  {t.projects.code}
                </a>
                {project.previewLink && (
                  <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7M10 14 21 3M21 14v7H3V3h7" />
                    </svg>
                    {t.projects.preview}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
