import { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  description: string;
  image?: StaticImageData;
  technologies: string[];
  gitHubLink: string;
  previewLink?: string;
};

export const projectData: Project[] = [
  {
    id: 1,
    title: "Movies Search",
    description:
      "React app that connects to the OMDb API to search movies by title, list the results and show the details of each movie.",
    technologies: ["React", "JavaScript", "Bulma", "OMDb API"],
    gitHubLink: "https://github.com/KristerCh65/Search-Movies",
    previewLink: "https://kristerch65.github.io/Search-Movies",
  },
];
