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
    image?: string;
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
    technologies: ["Adobe XD", "Figma"],
    cover: {
      tone: "violet",
      label: "Mockup / Preview",
      image: "/images/projects/oraculo/dashboardOraculo.webp",
    },
    gallery: [
      "/images/projects/oraculo/dashboardOraculo.webp",
      "/images/projects/oraculo/diagnosticofinanceiro1.webp",
      "/images/projects/oraculo/diagnosticofinanceiro2.webp",
      "/images/projects/oraculo/linhadavida.webp",
      "/images/projects/oraculo/avaliacaodedesempenho.webp",
      "/images/projects/oraculo/reuniao1.webp",
      "/images/projects/oraculo/seleçãodeplanejadores.webp",
      "/images/projects/oraculo/sistemaokr.webp",
      "/images/projects/oraculo/todo-tela.webp",
    ],
    period: "2024–2025",
    status: "Projeto profissional · Concluído",
    context:
      "O Oráculo reunia diferentes fluxos necessários à rotina de planejamento financeiro e gestão de pessoas. O desafio era transformar informações, etapas e regras de negócio em uma experiência organizada, compreensível e eficiente para os usuários da plataforma.",
    role:
      "Atuei como UI/UX Designer na criação e evolução de interfaces para diferentes módulos do produto, contribuindo para a organização visual das informações, clareza de navegação e consistência da experiência entre os fluxos.",
    process:
      "O trabalho envolveu compreender os objetivos de cada módulo, organizar as informações prioritárias e desenhar interfaces que ajudassem os usuários a avançar pelos fluxos de maneira clara. As soluções foram evoluídas conforme as necessidades do produto e de suas diferentes jornadas.",
    solution:
      "Foram desenvolvidas e evoluídas experiências para diferentes frentes da plataforma, incluindo Dashboard Analítica, PDI — Plano de Desenvolvimento Individual, Avaliação de Desempenho do PN, reuniões 1:1, Seleção de Planejadores, Sistema OKR, Diagnóstico Financeiro, Plano Financeiro Completo, Pré-Momento X e Linha da Vida.",
    learnings:
      "A experiência reforçou a importância de estruturar sistemas com múltiplos fluxos e regras de negócio sem perder clareza. O desafio não era apenas desenhar telas, mas criar hierarquia, continuidade e contexto para diferentes momentos da jornada do usuário.",
  },
  {
    slug: "saas-psicologia",
    number: "02",
    category: "Produto digital · UI/UX Design",
    title: "SaaS Psicologia",
    description:
      "Projeto pessoal de uma plataforma SaaS para apoiar psicólogos na gestão de pacientes, anamneses, prontuários, tarefas, documentos e informações financeiras.",
    technologies: [
      "Figma",
    ],
    cover: {
      tone: "violet",
      label: "Mockup / Preview",
      image: "/images/projects/saas-psicologia/lista-pacientes.webp",
    },
    gallery: [
      "/images/projects/saas-psicologia/login.webp",
      "/images/projects/saas-psicologia/lista-pacientes.webp",
      "/images/projects/saas-psicologia/ficha-paciente.webp",
      "/images/projects/saas-psicologia/anamnese-lista.webp",
      "/images/projects/saas-psicologia/anamnese-comparacao.webp",
      "/images/projects/saas-psicologia/anamnese-detalhes.webp",
    ],
    period: "A definir",
    status: "Projeto pessoal · Conceitual",
    context:
      "Profissionais de psicologia precisam acompanhar informações clínicas e administrativas ao longo da jornada de cada paciente. O projeto foi desenvolvido como um exercício de produto digital para organizar esses dados em uma experiência clara, acessível e adequada à rotina profissional.",
    role:
      "Concepção do produto, arquitetura da informação, definição de fluxos, UI Design e prototipação das interfaces.",
    process:
      "A estrutura foi pensada a partir dos principais momentos da rotina de atendimento: cadastro de pacientes, acompanhamento de informações pessoais, gestão de anamneses, sessões, tarefas, documentos e financeiro. A partir desses fluxos, foram definidas hierarquias, componentes e telas para facilitar a consulta e a organização das informações.",
    solution:
      "Uma interface de gestão para psicólogos com lista de pacientes, ficha individual, organização de dados pessoais e médicos, gerenciamento de anamneses e recursos para comparar registros ao longo do acompanhamento.",
    learnings:
      "O projeto reforçou a importância de organizar informações extensas e sensíveis de forma clara, com boa hierarquia visual e acesso rápido às áreas mais importantes da rotina profissional.",
  },
  {
    slug: "projeto-02",
    number: "03",
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
    number: "04",
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
    number: "05",
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
