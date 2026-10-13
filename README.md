# Krister Munguia — Portfolio

My personal portfolio site: **https://kristerch65.github.io**

I'm a Software Analyst and Full-Stack Developer from San Pedro Sula, Honduras. I have 5+ years in IT and work mainly with C#, .NET, Angular and JavaScript. The site covers my experience, skills, projects and education, and has a link to download my CV.

## Features

- **English / Spanish:** picks up the browser language and remembers the choice
- **Light / dark theme** with `next-themes`
- **Sticky navbar** that highlights the current section, with an accessible mobile menu
- **Responsive layout** built with Tailwind CSS
- **Static export** deployed to GitHub Pages with GitHub Actions

## Tech stack

- [Next.js 14](https://nextjs.org/) (Pages Router) + React 18
- TypeScript
- Tailwind CSS
- GitHub Pages + GitHub Actions

## Getting started

Requires Node.js 20.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command      | Description                   |
| ------------ | ----------------------------- |
| `yarn dev`   | Start the development server  |
| `yarn build` | Build the production site     |
| `yarn lint`  | Run ESLint                    |

## Project structure

```
src/
├── pages/            # Next.js pages (index, 404, _app, _document)
└── app/
    ├── components/   # Page sections: hero, about, skills, experience, projects...
    ├── data/         # Content: experience, projects, skills, education
    ├── i18n/         # Language provider and EN/ES strings
    ├── images/
    └── styles/
public/               # CV (PDF) and skill icons
```

## Updating content

All content lives in `src/app/data/` and `src/app/i18n/strings.ts`, so you don't need to touch the components.

**Add a project:** add an entry to `projectData` in [`src/app/data/projects.tsx`](src/app/data/projects.tsx):

```tsx
{
  id: 3,
  title: "My Project",
  description: {
    en: "What it does, in English.",
    es: "Qué hace, en español.",
  },
  technologies: ["React", "TypeScript"],
  gitHubLink: "https://github.com/KristerCh65/my-project", // optional
  previewLink: "https://example.com",                       // optional
  // image: myProjectImg,  // optional: a screenshot imported from src/app/images
}
```

Leave out `gitHubLink` for client work whose source can't be public. The card will then show only the live preview link.

Every user-facing text has an `en` and an `es` version. UI labels are in `src/app/i18n/strings.ts`.

## Deployment

Every push to `master` triggers [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml). It builds a static export and publishes it to GitHub Pages.

## Contact

- Portfolio: https://kristerch65.github.io
- GitHub: [@KristerCh65](https://github.com/KristerCh65)
