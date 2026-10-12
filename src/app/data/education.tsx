import { Text } from "@/app/i18n/language";

export type EducationItem = {
  id: number;
  title: Text;
  institution: Text;
  date: string;
};

export type CertificationItem = {
  id: number;
  // Official certificate names, shown as issued in both languages
  name: string;
  issuer: string;
};

export type LanguageItem = {
  name: Text;
  level: Text;
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: { en: "B.S. Computer Engineering", es: "Ingeniería Informática" },
    institution: "CEUTEC",
    date: "2017 – 2022",
  },
  {
    id: 2,
    title: { en: "Cloud Computing", es: "Computación en la Nube" },
    institution: "Junior Achievement",
    date: "2024",
  },
];

export const certificationData: CertificationItem[] = [
  { id: 1, name: "EF SET English Certificate — C1 Advanced", issuer: "EF SET" },
  { id: 2, name: "Micro-Certification - Predictive Intelligence", issuer: "ServiceNow" },
  { id: 3, name: "Micro-Certification - Configure the CMDB", issuer: "ServiceNow" },
  { id: 4, name: "Machine Learning Pipelines with Azure ML Studio", issuer: "Coursera" },
  { id: 5, name: "Foundations of User Experience (UX) Design", issuer: "Google" },
  { id: 6, name: "Seguridad Informática: Defensa contra las artes oscuras digitales", issuer: "Google" },
];

export const languageData: LanguageItem[] = [
  { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
  { name: { en: "English", es: "Inglés" }, level: "C1 – EF SET" },
];
