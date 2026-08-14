export type ProjectTone = "violet" | "blue" | "green" | "orange";

export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  summary?: string;
  technologies: readonly string[];
  cover: {
    tone: ProjectTone;
    label: string;
  };
  gallery?: string[];
  period: string;
  context?: string;
  role?: string;
  process?: string;
  solution?: string;
  learnings?: string;
  status?: string;
};

export const projects: readonly Project[] = [
  {
    slug: "Sistema Oráculo - Futuro Corp",
    number: "01",
    category: "Produto digital · UI/UX Design",
    title: "Oráculo · Futuro Corp",
    description:
      "Atuação em UI/UX Design na evolução do Oráculo, uma plataforma de planejamento financeiro criada para organizar informações, apoiar planejadores e tornar jornadas complexas mais claras para seus usuários.",
    technologies: ["Figma", "Pesquisa", "Prototipação"],
    cover: { tone: "violet", label: "Mockup / Preview" },
    period: "2024–2025",
    status: "Projeto profissional · Em desenvolvimento",
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
    period: "2026",
    status: "Em desenvolvimento",
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
    period: "2026",
    status: "Em desenvolvimento",
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
    period: "2026",
    status: "Em desenvolvimento",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
