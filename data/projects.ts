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
    fit?: "contain" | "cover";
    zoom?: boolean;
  };
  gallery?: string[];
  galleryLayout?: "stack" | "grid";
  period: string;
  overview: string;
  contribution: string;
  note?: string;
  status?: string;
  externalUrl?: string;
  externalLinkLabel?: string;
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
    overview:
      "O Oráculo é uma plataforma digital voltada ao planejamento financeiro, criada para ajudar usuários a organizar informações, acompanhar planejamentos e compreender jornadas financeiras de forma mais clara.",
    contribution:
      "Atuei em UI/UX Design na evolução das interfaces do produto, contribuindo para organizar informações complexas em experiências mais intuitivas, consistentes e fáceis de navegar.",
    note:
      "Minha participação corresponde a uma etapa anterior da evolução do produto. O Oráculo continuou recebendo novas versões e funcionalidades posteriormente.",
  },
  {
    slug: "cresol-seguros",
    number: "02",
    category: "Produto digital · UI/UX Design · Desenvolvimento web",
    title: "Cresol Seguros",
    description:
      "Atuação em UI/UX Design no aplicativo e na dashboard do Cresol Seguros, além de contribuições no desenvolvimento de partes web relacionadas ao produto.",
    technologies: ["Figma", "HTML", "CSS"],
    cover: {
      tone: "orange",
      label: "Aplicativo / Versão inicial",
      image: "/images/projects/cresol-seguros/home-v1.png",
      fit: "cover",
      zoom: true,
    },
    gallery: [
      "/images/projects/cresol-seguros/home-v1.png",
      "/images/projects/cresol-seguros/new-quote-v1.png",
      "/images/projects/cresol-seguros/policy-details-v1.png",
      "/images/projects/cresol-seguros/coverage-v1.png",
      "/images/projects/cresol-seguros/residential-quote-v1.png",
      "/images/projects/cresol-seguros/payment-v1.png",
    ],
    galleryLayout: "grid",
    period: "2022–2023",
    status: "Produto profissional · Versão inicial",
    overview:
      "O Cresol Seguros é uma solução digital voltada à consulta, contratação e gerenciamento de seguros. O produto reúne diferentes pontos de contato para tornar essa jornada mais prática e compreensível para os cooperados.",
    contribution:
      "Participei da versão inicial atuando no UI/UX do aplicativo e da dashboard do sistema. Também contribuí com o desenvolvimento de partes web relacionadas ao produto, sob minha responsabilidade.",
    note:
      "As imagens exibem telas do aplicativo da versão inicial em que participei. Os materiais da dashboard e das partes web não estão disponíveis neste portfólio.",
    externalUrl:
      "https://play.google.com/store/apps/details?id=com.br.glass.seguro_cresol",
    externalLinkLabel: "Ver na Google Play",
  },
  {
    slug: "saas-psicologia",
    number: "03",
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
      image: "/images/projects/saas-psicologia/002.png",
    },
    gallery: [
      "/images/projects/saas-psicologia/001.png",
      "/images/projects/saas-psicologia/002.png",
      "/images/projects/saas-psicologia/003.png",
      "/images/projects/saas-psicologia/004.png",
      "/images/projects/saas-psicologia/005.png",
      "/images/projects/saas-psicologia/006.png",
    ],
    period: "2024–2025",
    status: "Projeto pessoal · Conceitual",
    overview:
      "Projeto pessoal de uma plataforma SaaS pensada para apoiar psicólogos na gestão de pacientes, anamneses, prontuários, tarefas, documentos e informações financeiras em um único ambiente.",
    contribution:
      "Atuei na concepção de UI/UX do produto, estruturando uma experiência que prioriza organização, clareza das informações e uma navegação adequada à rotina de profissionais da área.",
  },
  {
    slug: "cresol-fidelidade",
    number: "04",
    category: "Produto digital · UI/UX Design",
    title: "Cresol Fidelidade",
    description:
      "Aplicativo de fidelidade criado para transformar pontos acumulados em brindes, benefícios e experiências para os cooperados Cresol.",
    technologies: ["Figma"],
    cover: {
      tone: "green",
      label: "Aplicativo / Fidelidade",
      image: "/images/projects/cresol - fidelidade/000.png",
    },
    gallery: [
      "/images/projects/cresol - fidelidade/000.png",
      "/images/projects/cresol - fidelidade/001.png",
    ],
    period: "A definir",
    status: "Projeto de produto digital",
    overview:
      "O Cresol Fidelidade é um aplicativo voltado à transformação de pontos acumulados em brindes, benefícios e experiências para cooperados, reunindo informações e opções de resgate em uma experiência digital.",
    contribution:
      "Atuei em UI/UX Design, contribuindo para a organização das interfaces e dos fluxos de navegação relacionados à consulta de pontos, benefícios e possibilidades de resgate.",
  },
  {
    slug: "powergo",
    number: "05",
    category: "Produto digital · UI/UX Design · Desenvolvimento web",
    title: "Go Plataforma - PowerGO",
    description:
      "Atuação em UI/UX Design na versão inicial do PowerGO e no desenvolvimento de algumas páginas web relacionadas ao produto com HTML e CSS.",
    technologies: ["Figma", "Desenvolvimento web", "HTML", "CSS"],
    cover: {
      tone: "orange",
      label: "Aplicativo mobile / V1",
      image: "/images/projects/powergo/001.png",
      fit: "cover",
    },
    gallery: [
      "/images/projects/powergo/capa-v1.webp",
      "/images/projects/powergo/clientes-v1.webp",
      "/images/projects/powergo/pedidos-produtos-v1.webp",
    ],
    galleryLayout: "grid",
    period: "2023–2024",
    status: "Produto profissional · Versão inicial",
    overview:
      "O PowerGO é uma solução digital voltada ao apoio de equipes comerciais e à gestão de pedidos, com recursos que apoiam a rotina de vendas e a consulta de informações em campo.",
    contribution:
      "Participei da versão inicial do produto em UI/UX Design, contribuindo para a experiência das interfaces do aplicativo. Também atuei no desenvolvimento de algumas páginas web relacionadas ao produto com HTML e CSS.",
    note:
      "Os materiais exibidos apresentam a versão inicial do aplicativo, período em que participei do projeto. O PowerGO continuou evoluindo posteriormente com novas versões e funcionalidades.",
    externalUrl: "https://powergo.com.br/",
  },
  {
    slug: "brx-agro",
    number: "06",
    category: "Produto digital · UI/UX Design",
    title: "BRX Agro",
    description:
      "Marketplace voltado ao agronegócio, criado para facilitar a compra, a venda e a divulgação de produtos, serviços, máquinas, animais e propriedades rurais.",
    technologies: ["Adobe XD · Figma"],
    cover: {
      tone: "green",
      label: "Aplicativo / Marketplace",
      image: "/images/projects/brxagro/001.png",
    },
    gallery: [
      "/images/projects/brxagro/001.png",
      "/images/projects/brxagro/002.png",
      "/images/projects/brxagro/003.png",
      "/images/projects/brxagro/004.png",
    ],
    period: "2023",
    status: "Finalizado",
    overview:
      "O BRX Agro é um marketplace voltado ao agronegócio, desenvolvido para facilitar a divulgação, a compra e a venda de produtos, serviços, máquinas, animais e propriedades rurais.",
    contribution:
      "Atuei em UI/UX Design, contribuindo para a organização das interfaces e da experiência de navegação de uma plataforma com diferentes categorias e tipos de oferta.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
