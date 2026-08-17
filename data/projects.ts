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
  context?: string;
  role?: string;
  process?: string;
  solution?: string;
  learnings?: string;
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
    slug: "cresol-seguros",
    number: "02",
    category: "Produto digital · UI/UX Design · Desenvolvimento web",
    title: "Cresol Seguros",
    description:
      "Atuação em UI/UX Design e desenvolvimento web na versão inicial do Cresol Seguros, uma solução digital para comparação, contratação e gerenciamento de seguros.",
    technologies: ["UI Design", "UX Design", "Desenvolvimento web"],
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
    context:
      "O Cresol Seguros foi desenvolvido para facilitar o acesso dos usuários a serviços de seguro em uma experiência digital mais clara e prática. Minha participação ocorreu durante a versão inicial do produto, contribuindo para a experiência das interfaces e para o desenvolvimento de partes web relacionadas à solução.",
    role:
      "Atuei em UI/UX Design, colaborando na construção e organização das interfaces, além de contribuir com o desenvolvimento de partes web sob minha responsabilidade.",
    process:
      "O trabalho envolveu transformar necessidades do produto em interfaces claras e consistentes, considerando a organização das informações, os fluxos de navegação e os diferentes pontos de contato digitais da experiência.",
    solution:
      "A contribuição resultou em interfaces e elementos web voltados a tornar a jornada de consulta e contratação de seguros mais compreensível e acessível para os usuários.",
    learnings:
      "O projeto ampliou minha experiência ao conectar decisões de UI/UX com desenvolvimento web em um produto real, reforçando a importância de consistência visual, clareza de fluxos e colaboração entre design e tecnologia.",
    note:
      "Atuei na versão inicial do produto. O Cresol Seguros recebeu evoluções posteriores que não fazem parte do escopo da minha participação.",
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
    context:
      "O programa de fidelidade precisava tornar a consulta e o uso de pontos mais claros e atrativos para os cooperados. A proposta reúne o saldo disponível, o histórico de movimentações e um catálogo de recompensas em uma experiência mobile simples e alinhada à identidade da Cresol.",
    role:
      "Estruturação da experiência, arquitetura da informação, definição dos principais fluxos, UI Design e prototipação das telas do aplicativo.",
    process:
      "As jornadas foram organizadas a partir das principais necessidades do usuário: acessar sua conta, consultar a pontuação, entender como os pontos foram acumulados, pesquisar recompensas por categoria e localização e visualizar os detalhes antes do resgate.",
    solution:
      "Um aplicativo de fidelidade com painel de pontuação, histórico, busca e filtros, categorias de benefícios, recomendações personalizadas e páginas detalhadas para o resgate de brindes e experiências.",
    learnings:
      "O projeto reforçou a importância de comunicar saldo, valor e disponibilidade com clareza, além de reduzir etapas entre a descoberta de um benefício e sua decisão de resgate.",
  },
  {
    slug: "powergo",
    number: "05",
    category: "Produto digital · UI/UX Design · Desenvolvimento web",
    title: "PowerGO",
    description:
      "Atuação em UI/UX Design e no desenvolvimento da versão inicial do PowerGO, um aplicativo voltado ao apoio de equipes comerciais e à gestão de pedidos, além de algumas páginas web relacionadas ao produto.",
    technologies: [],
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
    context:
      "O PowerGO é uma solução digital voltada à operação comercial de distribuidoras. Minha participação ocorreu em UI/UX Design e no desenvolvimento da versão inicial do aplicativo, contribuindo para transformar interfaces e fluxos definidos pelo produto em uma experiência funcional para os usuários, além do desenvolvimento de algumas páginas web relacionadas ao produto.",
    role:
      "Atuei em UI/UX Design e no desenvolvimento front-end da V1 do aplicativo, implementando as interfaces e os fluxos sob minha responsabilidade. Também desenvolvi algumas páginas web relacionadas ao produto, sem participação nas evoluções posteriores ou no desenvolvimento de todo o site atual.",
    process:
      "O trabalho envolveu projetar e desenvolver as telas e componentes previstos para a versão inicial, considerando a organização das informações e a experiência de uso em dispositivos móveis, além de implementar algumas páginas web relacionadas ao produto.",
    solution:
      "A versão inicial do aplicativo reuniu recursos para apoiar a rotina comercial e a gestão de pedidos, com interfaces voltadas à consulta de informações e execução de tarefas em campo.",
    learnings:
      "O projeto ampliou minha experiência no desenvolvimento de interfaces para um produto real, reforçando a importância de consistência visual, organização de componentes e atenção aos fluxos de uso no mobile.",
    note:
      "As imagens apresentam materiais promocionais da versão inicial do aplicativo, período em que participei do projeto.",
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
    context:
      "A compra e a venda de itens ligados ao agronegócio envolvem diferentes categorias, perfis de anunciante e necessidades de localização. O BRX Agro foi pensado como uma plataforma de classificados especializada nesse mercado, reunindo anúncios relevantes em uma experiência simples e direcionada.",
    role:
      "Concepção da experiência, organização dos fluxos, arquitetura da informação, UI Design e prototipação das principais jornadas do aplicativo.",
    process:
      "O projeto foi estruturado a partir das jornadas de quem procura e de quem anuncia. Foram desenhados fluxos de acesso, busca, filtros por categoria e localização, visualização de detalhes, favoritos, contato com o anunciante e criação de novos anúncios com diferentes opções de destaque.",
    solution:
      "Um marketplace mobile que conecta compradores e vendedores do setor agro, com navegação por categorias, pesquisa regional, páginas detalhadas de anúncio e um fluxo guiado para publicação e promoção de ofertas.",
    learnings:
      "O projeto reforçou a importância de equilibrar variedade de categorias e simplicidade de navegação, além de deixar claros os dados essenciais para que compradores e anunciantes avancem com segurança durante a negociação.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
