import { Localized, Text } from "@/app/i18n/language";

export type Experience = {
  id: number;
  title: Text;
  company: string;
  location: string;
  date: Text;
  highlights: Localized[];
  skills: Text[];
};

export const experienceData: Experience[] = [
  {
    id: 1,
    title: { en: "Software Analyst", es: "Analista de Software" },
    company: "Industrias Pacer",
    location: "Torre 101, SPS",
    date: { en: "2024 – Present", es: "2024 – Presente" },
    highlights: [
      {
        en: "Develop and maintain full-stack solutions using C# / .NET MVC Framework, building backend logic, REST API integrations, and frontend interfaces with Astro, Blazor, and jQuery.",
        es: "Desarrollo y mantengo soluciones full-stack con C# / .NET MVC Framework, construyendo lógica de backend, integraciones con APIs REST e interfaces con Astro, Blazor y jQuery.",
      },
      {
        en: "Design and implement system integrations and custom APIs, connecting internal platforms and ensuring reliable data flow across business processes.",
        es: "Diseño e implemento integraciones de sistemas y APIs personalizadas, conectando plataformas internas y asegurando un flujo de datos confiable entre los procesos del negocio.",
      },
      {
        en: "Maintain and refactor legacy .NET applications, improving code quality and long-term supportability while keeping existing systems stable for end users.",
        es: "Mantengo y refactorizo aplicaciones .NET heredadas, mejorando la calidad del código y su mantenibilidad a largo plazo sin afectar la estabilidad para los usuarios finales.",
      },
      {
        en: "Support and extend Dynamics Navision ERP, troubleshooting issues and delivering enhancements for 50+ internal users.",
        es: "Doy soporte y amplío el ERP Dynamics Navision, resolviendo incidencias y entregando mejoras para más de 50 usuarios internos.",
      },
    ],
    skills: ["C#", ".NET MVC", "REST APIs", "Astro", "Blazor", "jQuery", "Dynamics Navision"],
  },
  {
    id: 2,
    title: { en: "Technical Consultant", es: "Consultoría Técnica" },
    company: "Altiatek LLC",
    location: "Altia Business Park, SPS",
    date: "2023 – 2024",
    highlights: [
      {
        en: "Developed and executed comprehensive IT strategies and solution architectures aligned with client objectives.",
        es: "Desarrollé y ejecuté estrategias de TI y arquitecturas de soluciones alineadas con los objetivos de los clientes.",
      },
      {
        en: "Administered the ServiceNow platform end-to-end — reports, business rules, and client scripts (AngularJS / JavaScript) improving incident resolution workflows.",
        es: "Administré la plataforma ServiceNow de punta a punta —reportes, reglas de negocio y client scripts (AngularJS / JavaScript)— mejorando los flujos de resolución de incidentes.",
      },
      {
        en: "Led remote customer service operations and managed a high-performance team, promoting a collaborative and results-oriented work environment.",
        es: "Lideré operaciones remotas de servicio al cliente y gestioné un equipo de alto rendimiento, promoviendo un ambiente colaborativo y orientado a resultados.",
      },
      {
        en: "Created, managed, and implemented custom integrations based on client needs assessments, ensuring efficient resource allocation.",
        es: "Creé, gestioné e implementé integraciones personalizadas según el análisis de necesidades de cada cliente, asegurando una asignación eficiente de recursos.",
      },
    ],
    skills: [
      "ServiceNow",
      "JavaScript",
      "AngularJS",
      { en: "IT Consulting", es: "Consultoría de TI" },
      { en: "Team Leadership", es: "Liderazgo de equipos" },
    ],
  },
  {
    id: 3,
    title: { en: "IT Manager", es: "Gerente de TI" },
    company: "Feyco Hardware Store",
    location: "Bo. Medina, SPS",
    date: "2021 – 2023",
    highlights: [
      {
        en: "Managed full IT budget and infrastructure including Windows servers, Fortinet firewalls, software licenses, and integration projects.",
        es: "Administré el presupuesto completo de TI y la infraestructura, incluyendo servidores Windows, firewalls Fortinet, licencias de software y proyectos de integración.",
      },
      {
        en: "Deployed the Lynx HR management platform (2022), streamlining HR operations and reducing manual administrative overhead by an estimated 30%.",
        es: "Implementé la plataforma de gestión de recursos humanos Lynx (2022), agilizando las operaciones de RR. HH. y reduciendo la carga administrativa manual en un estimado de 30 %.",
      },
      {
        en: "Implemented BeeTrack for logistics tracking (2023), reducing route gaps and improving delivery efficiency across hardware distribution operations.",
        es: "Implementé BeeTrack para el seguimiento logístico (2023), reduciendo brechas en las rutas y mejorando la eficiencia de entregas en la distribución de ferretería.",
      },
      {
        en: "Maintained network equipment and ensured 99%+ uptime across hardware and software environments for a 30+ employee organization.",
        es: "Mantuve los equipos de red y aseguré una disponibilidad superior al 99 % en hardware y software para una organización de más de 30 empleados.",
      },
    ],
    skills: [
      "Windows Server",
      "Fortinet",
      "Active Directory",
      { en: "Network Administration", es: "Administración de redes" },
      "SQL Server",
    ],
  },
];
