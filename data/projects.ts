export type ProjectTone = "violet" | "blue" | "green" | "orange";

export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: readonly string[];
  cover: {
    tone: ProjectTone;
    label: string;
  };
  year: number;
  challenge?: string;
  process?: string;
  solution?: string;
  result?: string;
};

export const projects: readonly Project[] = [
  {
    slug: "projeto-01",
    number: "01",
    category: "UI/UX · Product Design",
    title: "Nome do projeto",
    description:
      "Breve descrição do projeto, seu objetivo e o principal desafio trabalhado.",
    technologies: ["Figma", "Pesquisa", "Prototipação"],
    cover: { tone: "violet", label: "Mockup / Preview" },
    year: 2026,
  },
  {
    slug: "projeto-02",
    number: "02",
    category: "Front-end · Web",
    title: "Nome do projeto",
    description:
      "Breve descrição do projeto, seu objetivo e o principal desafio trabalhado.",
    technologies: ["React", "TypeScript", "CSS"],
    cover: { tone: "blue", label: "Mockup / Preview" },
    year: 2026,
  },
  {
    slug: "projeto-03",
    number: "03",
    category: "UX · Case Study",
    title: "Nome do projeto",
    description:
      "Breve descrição do projeto, seu objetivo e o principal desafio trabalhado.",
    technologies: ["Discovery", "Wireframes", "Testes"],
    cover: { tone: "green", label: "Mockup / Preview" },
    year: 2026,
  },
  {
    slug: "projeto-04",
    number: "04",
    category: "Front-end · Interface",
    title: "Nome do projeto",
    description:
      "Breve descrição do projeto, seu objetivo e o principal desafio trabalhado.",
    technologies: ["JavaScript", "Acessibilidade"],
    cover: { tone: "orange", label: "Mockup / Preview" },
    year: 2026,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  if (currentIndex < 0) return undefined;
  return projects[(currentIndex + 1) % projects.length];
}
