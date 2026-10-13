import { StaticImageData } from "next/image";
import { Text } from "@/app/i18n/language";
import intesaImg from "@/app/images/intesa.jpg";
import moviesSearchImg from "@/app/images/movies-search.jpg";
import carentellImg from "@/app/images/carentell.jpg";

export type Project = {
  id: number;
  title: string;
  description: Text;
  image?: StaticImageData;
  technologies: string[];
  // Omit for client work whose source can't be shared publicly
  gitHubLink?: string;
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
    image: moviesSearchImg,
    technologies: ["React", "JavaScript", "Bulma", "OMDb API"],
    gitHubLink: "https://github.com/KristerCh65/Search-Movies",
    previewLink: "https://kristerch65.github.io/Search-Movies",
  },
  {
    id: 2,
    title: "Intesa",
    description: {
      en: "Corporate landing page for Intesa, a Honduran technology integration company. Presents the company's mission, vision, services and technology ecosystem, with a contact section.",
      es: "Landing page corporativa para Intesa, empresa hondureña de integración tecnológica. Presenta la misión, visión, servicios y ecosistema tecnológico de la empresa, con una sección de contacto.",
    },
    image: intesaImg,
    technologies: ["Astro", "Tailwind CSS"],
    previewLink: "https://intesa.hn/",
  },
  {
    id: 3,
    title: "Carentell",
    description: {
      en: "Car sales and rental marketplace built with Angular. Users can search and filter vehicles by category, make, model and color, publish their own cars with photos, book rentals on a calendar and buy monthly subscriptions. Uses JWT authentication against a REST API.",
      es: "Marketplace de venta y alquiler de vehículos construido con Angular. Los usuarios pueden buscar y filtrar autos por categoría, marca, modelo y color, publicar sus propios autos con fotos, reservar alquileres en un calendario y adquirir suscripciones mensuales. Usa autenticación JWT contra una API REST.",
    },
    image: carentellImg,
    technologies: ["Angular", "TypeScript", "Bootstrap", "JWT"],
  },
];
