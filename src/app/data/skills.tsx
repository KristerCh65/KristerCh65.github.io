import { Text } from "@/app/i18n/language";

export type Tool = {
  name: string;
  // File name in public/icons (logos from devicon.dev)
  icon: string;
};

// Shown as a logo grid
export const toolData: Tool[] = [
  { name: "C#", icon: "csharp-original.svg" },
  { name: ".NET", icon: "dotnetcore-original.svg" },
  { name: "JavaScript", icon: "javascript-original.svg" },
  { name: "TypeScript", icon: "typescript-original.svg" },
  { name: "Angular", icon: "angular-original.svg" },
  { name: "React", icon: "react-original.svg" },
  { name: "Astro", icon: "astro-original.svg" },
  { name: "Blazor", icon: "blazor-original.svg" },
  { name: "jQuery", icon: "jquery-original.svg" },
  { name: "PHP", icon: "php-original.svg" },
  { name: "Flutter", icon: "flutter-original.svg" },
  { name: "SQL Server", icon: "microsoftsqlserver-original.svg" },
  { name: "MySQL", icon: "mysql-original.svg" },
  { name: "PostgreSQL", icon: "postgresql-original.svg" },
  { name: "Firebase", icon: "firebase-original.svg" },
  { name: "Postman", icon: "postman-original.svg" },
];

// Shown as tags, since these have no common logo
export const platformData: Text[] = [
  "ServiceNow (Admin)",
  "Dynamics Navision",
  "Active Directory",
  "IIS",
  "File Server",
  "Fortinet",
];

export const softSkillData: Text[] = [
  { en: "Project Management", es: "Gestión de proyectos" },
  { en: "Team Leadership", es: "Liderazgo de equipos" },
  { en: "Effective Communication", es: "Comunicación efectiva" },
  { en: "Critical Thinking", es: "Pensamiento crítico" },
  { en: "Time Management", es: "Gestión del tiempo" },
  { en: "Remote Work", es: "Trabajo remoto" },
];
