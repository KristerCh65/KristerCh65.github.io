import { StaticImageData } from "next/image";
import { Text } from "@/app/i18n/language";

export type Project = {
  id: number;
  title: string;
  description: Text;
  image?: StaticImageData;
  technologies: string[];
  gitHubLink: string;
  previewLink?: string;
};

export const projectData: Project[] = [
  {
    id: 1,
    title: "Movies Search",
    description: {
      en: "React app that connects to the OMDb API to search movies by title, list the results and show the details of each movie.",
      es: "App en React que se conecta a la API de OMDb para buscar películas por título, listar los resultados y mostrar el detalle de cada película.",
    },
    technologies: ["React", "JavaScript", "Bulma", "OMDb API"],
    gitHubLink: "https://github.com/KristerCh65/Search-Movies",
    previewLink: "https://kristerch65.github.io/Search-Movies",
  },
];
