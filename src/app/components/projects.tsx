import Image from "next/image";
import { projectData } from "@/app/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 md:px-8 py-16 scroll-mt-8">
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        </svg>
        Projects
      </h2>

      <div className="flex flex-col gap-16">
        {projectData.map((project) => (
          <article key={project.id} className="flex flex-col md:flex-row gap-8">
            {/* Preview image */}
            <div className="w-full md:w-1/2 shrink-0">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 md:hover:scale-105"
                />
              ) : (
                <div className="aspect-video rounded-xl shadow-lg bg-gradient-to-br from-teal-400 to-gray-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{project.title}</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              <ul className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <li key={tech} className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                    {tech}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 max-w-prose">{project.description}</p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border rounded text-black border-black dark:text-white dark:border-white dark:hover:bg-white hover:border-transparent dark:hover:text-teal-500 hover:text-teal-500 hover:bg-black transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                  </svg>
                  Code
                </a>
                {project.previewLink && (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border rounded text-black border-black dark:text-white dark:border-white dark:hover:bg-white hover:border-transparent dark:hover:text-teal-500 hover:text-teal-500 hover:bg-black transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7M10 14 21 3M21 14v7H3V3h7" />
                    </svg>
                    Preview
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
