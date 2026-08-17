"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export type Locale = "pt-BR" | "en";

export const translations = {
  "pt-BR": {
    navigation: { home: "Início", about: "Sobre", projects: "Projetos", skills: "Skills", contact: "Contato", resume: "Currículo", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
    home: { available: "Aberto a oportunidades em UI/UX e Front-end", hero1: "Design com intenção.", hero2: "Código com propósito.", introStart: "Sou Leonardo Dariva,", introRole: "UI/UX Designer & Front-end Developer.", introEnd: "Transformo necessidades de usuários e negócios em experiências digitais claras, intuitivas e bem construídas.", viewProjects: "Ver projetos", contact: "Entrar em contato", scroll: "ROLE PARA EXPLORAR", aboutLabel: "01 / SOBRE", about1: "Transformo problemas em", about2: "experiências digitais claras", about3: ", do design ao código.", aboutText: "Sou UI/UX Designer e desenvolvedor front-end em evolução. Uno visão de produto, design centrado no usuário e conhecimentos de HTML, CSS e JavaScript para criar interfaces intuitivas, consistentes e viáveis.", viewResume: "Ver currículo", projectsLabel: "02 / PROJETOS", allProjects: "Ver todos os projetos", skillsLabel: "03 / SKILLS", contactLabel: "04 / CONTATO", contact1: "Vamos construir", contact2: "algo que faça sentido?", contactText: "Estou aberto a oportunidades, projetos e boas conversas sobre design e tecnologia. Conte um pouco sobre o que você tem em mente." },
    projects: { portfolio: "PORTFÓLIO", all: "Todos os projetos", access: "Acessar", category: "CATEGORIA", technologies: "TECNOLOGIAS", period: "PERÍODO", status: "STATUS", context: "Contexto", role: "Meu papel", process: "Processo", solution: "Solução", learnings: "Aprendizados", note: "Observação", visitWebsite: "Visitar site", additionalNote: "Outros projetos e experiências profissionais podem ser apresentados em conversa.", gallery: "Galeria de", enlargeImage: "Ampliar imagem", enlarged: "Imagem ampliada de", closeGallery: "Fechar galeria", previousImage: "Imagem anterior", nextImage: "Próxima imagem" },
    form: { name: "Nome *", company: "Empresa", optional: "Opcional", email: "E-mail *", message: "Mensagem *", namePlaceholder: "Como você se chama?", companyPlaceholder: "Onde você trabalha?", emailPlaceholder: "voce@exemplo.com", messagePlaceholder: "Fale sobre sua ideia, projeto ou oportunidade.", submit: "Enviar mensagem", nameError: "Informe seu nome.", emailError: "Informe um e-mail válido.", messageError: "Escreva uma mensagem.", feedback: "Mensagem pronta para envio. Integração em configuração." },
    resume: { location: "Apucarana, Paraná", phone: "Telefone a adicionar", download: "Baixar currículo", summary: "Resumo profissional", professional: "Competências profissionais", experience: "Experiência profissional", experiencePending: "Experiências profissionais em atualização.", education: "Formação e estudos", educationPending: "Informações de formação em atualização.", technical: "Competências técnicas" },
    footer: { rights: "Todos os direitos reservados.", email: "Enviar e-mail para Leonardo Dariva" },
  },
  en: {
    navigation: { home: "Home", about: "About", projects: "Projects", skills: "Skills", contact: "Contact", resume: "Resume", openMenu: "Open menu", closeMenu: "Close menu" },
    home: { available: "Open to UI/UX and Front-end opportunities", hero1: "Design with intention.", hero2: "Code with purpose.", introStart: "I'm Leonardo Dariva,", introRole: "UI/UX Designer & Front-end Developer.", introEnd: "I turn user and business needs into clear, intuitive, and well-built digital experiences.", viewProjects: "View projects", contact: "Get in touch", scroll: "SCROLL TO EXPLORE", aboutLabel: "01 / ABOUT", about1: "I turn problems into", about2: "clear digital experiences", about3: ", from design to code.", aboutText: "I am a UI/UX Designer and a front-end developer continuing to grow. I combine product thinking, user-centered design, and knowledge of HTML, CSS, and JavaScript to create intuitive, consistent, and technically feasible interfaces.", viewResume: "View resume", projectsLabel: "02 / PROJECTS", allProjects: "View all projects", skillsLabel: "03 / SKILLS", contactLabel: "04 / CONTACT", contact1: "Let's build", contact2: "something meaningful?", contactText: "I'm open to opportunities, projects, and good conversations about design and technology. Tell me a little about what you have in mind." },
    projects: { portfolio: "PORTFOLIO", all: "All projects", access: "View", category: "CATEGORY", technologies: "TECHNOLOGIES", period: "PERIOD", status: "STATUS", context: "Context", role: "My role", process: "Process", solution: "Solution", learnings: "Learnings", note: "Note", visitWebsite: "Visit website", additionalNote: "Additional projects and professional experiences can be shared in conversation.", gallery: "Gallery of", enlargeImage: "Enlarge image", enlarged: "Enlarged image of", closeGallery: "Close gallery", previousImage: "Previous image", nextImage: "Next image" },
    form: { name: "Name *", company: "Company", optional: "Optional", email: "Email *", message: "Message *", namePlaceholder: "What is your name?", companyPlaceholder: "Where do you work?", emailPlaceholder: "you@example.com", messagePlaceholder: "Tell me about your idea, project, or opportunity.", submit: "Send message", nameError: "Enter your name.", emailError: "Enter a valid email address.", messageError: "Write a message.", feedback: "Message ready to send. Integration is being configured." },
    resume: { location: "Apucarana, Paraná, Brazil", phone: "Phone number to be added", download: "Download resume", summary: "Professional summary", professional: "Professional skills", experience: "Professional experience", experiencePending: "Professional experience is being updated.", education: "Education and studies", educationPending: "Education information is being updated.", technical: "Technical skills" },
    footer: { rights: "All rights reserved.", email: "Send an email to Leonardo Dariva" },
  },
} as const;

type TranslationPath = string;
const localeEvent = "portfolio-locale-change";

function subscribe(callback: () => void) {
  window.addEventListener(localeEvent, callback);
  return () => window.removeEventListener(localeEvent, callback);
}

function getSnapshot(): Locale {
  return document.documentElement.lang === "en" ? "en" : "pt-BR";
}

export function useLocale() {
  const locale = useSyncExternalStore(subscribe, getSnapshot, () => "pt-BR" as Locale);
  const t = (path: TranslationPath) => {
    const value = path.split(".").reduce<unknown>((current, key) => current && typeof current === "object" ? (current as Record<string, unknown>)[key] : undefined, translations[locale]);
    return typeof value === "string" ? value : path;
  };
  const setLocale = (next: Locale) => {
    document.documentElement.lang = next;
    localStorage.setItem("portfolio-locale", next);
    window.dispatchEvent(new Event(localeEvent));
  };
  return { locale, setLocale, t };
}

export function T({ id }: { id: TranslationPath }) {
  const { t } = useLocale();
  return <>{t(id)}</>;
}

const englishContent: Record<string, string> = {
  "O Oráculo reunia diferentes fluxos necessários à rotina de planejamento financeiro e gestão de pessoas. O desafio era transformar informações, etapas e regras de negócio em uma experiência organizada, compreensível e eficiente para os usuários da plataforma.": "Oráculo brought together multiple workflows required for financial planning and people management. The challenge was to turn information, process steps, and business rules into an organized, understandable, and efficient experience for the platform’s users.",
  "Atuei como UI/UX Designer na criação e evolução de interfaces para diferentes módulos do produto, contribuindo para a organização visual das informações, clareza de navegação e consistência da experiência entre os fluxos.": "I worked as a UI/UX Designer, creating and evolving interfaces across different product modules while helping improve visual information organization, navigation clarity, and consistency across workflows.",
  "O trabalho envolveu compreender os objetivos de cada módulo, organizar as informações prioritárias e desenhar interfaces que ajudassem os usuários a avançar pelos fluxos de maneira clara. As soluções foram evoluídas conforme as necessidades do produto e de suas diferentes jornadas.": "The work involved understanding the goals of each module, organizing priority information, and designing interfaces that helped users move through each workflow clearly. The solutions evolved alongside the product’s needs and its different user journeys.",
  "Foram desenvolvidas e evoluídas experiências para diferentes frentes da plataforma, incluindo Dashboard Analítica, PDI — Plano de Desenvolvimento Individual, Avaliação de Desempenho do PN, reuniões 1:1, Seleção de Planejadores, Sistema OKR, Diagnóstico Financeiro, Plano Financeiro Completo, Pré-Momento X e Linha da Vida.": "Experiences were designed and evolved across several areas of the platform, including the Analytics Dashboard, PDI — Individual Development Plan, PN Performance Assessment, 1:1 Meetings, Planner Selection, OKR System, Financial Diagnosis, Complete Financial Plan, Pre-Moment X, and Life Timeline.",
  "A experiência reforçou a importância de estruturar sistemas com múltiplos fluxos e regras de negócio sem perder clareza. O desafio não era apenas desenhar telas, mas criar hierarquia, continuidade e contexto para diferentes momentos da jornada do usuário.": "The experience reinforced the importance of structuring systems with multiple workflows and business rules without sacrificing clarity. The challenge went beyond designing screens: it required creating hierarchy, continuity, and context across different stages of the user journey.",
  "Produto digital · UI/UX Design": "Digital product · UI/UX Design",
  "Projeto pessoal · Conceitual": "Personal project · Conceptual",
  "A definir": "To be defined",
  "Figma · UI Design · Prototipação · Arquitetura da Informação": "Figma · UI Design · Prototyping · Information Architecture",
  "Projeto pessoal de uma plataforma SaaS para apoiar psicólogos na gestão de pacientes, anamneses, prontuários, tarefas, documentos e informações financeiras.": "Personal concept project for a SaaS platform designed to help psychologists manage patients, intake assessments, clinical records, tasks, documents, and financial information.",
  "Profissionais de psicologia precisam acompanhar informações clínicas e administrativas ao longo da jornada de cada paciente. O projeto foi desenvolvido como um exercício de produto digital para organizar esses dados em uma experiência clara, acessível e adequada à rotina profissional.": "Psychology professionals need to track clinical and administrative information throughout each patient’s journey. This project was developed as a digital product exercise focused on organizing that data into a clear, accessible experience suited to day-to-day professional practice.",
  "Concepção do produto, arquitetura da informação, definição de fluxos, UI Design e prototipação das interfaces.": "Product concept, information architecture, flow definition, UI design, and interface prototyping.",
  "A estrutura foi pensada a partir dos principais momentos da rotina de atendimento: cadastro de pacientes, acompanhamento de informações pessoais, gestão de anamneses, sessões, tarefas, documentos e financeiro. A partir desses fluxos, foram definidas hierarquias, componentes e telas para facilitar a consulta e a organização das informações.": "The structure was designed around key moments in the care workflow: patient registration, personal information tracking, intake assessment management, sessions, tasks, documents, and finances. These flows informed the hierarchy, components, and screens, making information easier to review and organize.",
  "Uma interface de gestão para psicólogos com lista de pacientes, ficha individual, organização de dados pessoais e médicos, gerenciamento de anamneses e recursos para comparar registros ao longo do acompanhamento.": "A management interface for psychologists featuring a patient list, individual profiles, structured personal and medical data, intake assessment management, and tools for comparing records throughout ongoing care.",
  "O projeto reforçou a importância de organizar informações extensas e sensíveis de forma clara, com boa hierarquia visual e acesso rápido às áreas mais importantes da rotina profissional.": "The project reinforced the importance of organizing extensive, sensitive information clearly, with a strong visual hierarchy and quick access to the areas most relevant to everyday professional practice.",
  "Produto digital · UI/UX Design · Desenvolvimento web": "Digital product · UI/UX Design · Web development",
  "Aplicativo mobile / V1": "Mobile application / V1",
  "Produto profissional · Versão inicial": "Professional product · Initial version",
  "Atuação em UI/UX Design e no desenvolvimento da versão inicial do PowerGO, um aplicativo voltado ao apoio de equipes comerciais e à gestão de pedidos, além de algumas páginas web relacionadas ao produto.": "UI/UX Design and development work on the initial version of PowerGO, an application designed to support sales teams and order management, as well as selected web pages related to the product.",
  "O PowerGO é uma solução digital voltada à operação comercial de distribuidoras. Minha participação ocorreu em UI/UX Design e no desenvolvimento da versão inicial do aplicativo, contribuindo para transformar interfaces e fluxos definidos pelo produto em uma experiência funcional para os usuários, além do desenvolvimento de algumas páginas web relacionadas ao produto.": "PowerGO is a digital solution designed for the commercial operations of distributors. My contribution involved UI/UX Design and development of the application's initial version, helping turn product-defined interfaces and flows into a functional user experience, as well as developing selected web pages related to the product.",
  "Atuei em UI/UX Design e no desenvolvimento front-end da V1 do aplicativo, implementando as interfaces e os fluxos sob minha responsabilidade. Também desenvolvi algumas páginas web relacionadas ao produto, sem participação nas evoluções posteriores ou no desenvolvimento de todo o site atual.": "I worked on UI/UX Design and front-end development for the application's V1, implementing the interfaces and flows under my responsibility. I also developed selected web pages related to the product, without contributing to later product developments or building the current website in its entirety.",
  "O trabalho envolveu projetar e desenvolver as telas e componentes previstos para a versão inicial, considerando a organização das informações e a experiência de uso em dispositivos móveis, além de implementar algumas páginas web relacionadas ao produto.": "The work involved designing and developing the screens and components planned for the initial version, with attention to information organization and the user experience on mobile devices, as well as implementing selected web pages related to the product.",
  "A versão inicial do aplicativo reuniu recursos para apoiar a rotina comercial e a gestão de pedidos, com interfaces voltadas à consulta de informações e execução de tarefas em campo.": "The initial version of the application brought together features to support day-to-day sales operations and order management, with interfaces designed for accessing information and completing tasks in the field.",
  "O projeto ampliou minha experiência no desenvolvimento de interfaces para um produto real, reforçando a importância de consistência visual, organização de componentes e atenção aos fluxos de uso no mobile.": "The project expanded my experience in developing interfaces for a real-world product, reinforcing the importance of visual consistency, component organization, and close attention to mobile user flows.",
  "As imagens apresentam materiais promocionais da versão inicial do aplicativo, período em que participei do projeto.": "The images present promotional materials from the initial version of the application, the period in which I contributed to the project.",
  "Aplicativo / Versão inicial": "Application / Initial version",
  "UI Design · UX Design · Desenvolvimento web": "UI Design · UX Design · Web development",
  "Projeto profissional": "Professional project",
  "Atuação em UI/UX Design e desenvolvimento web na versão inicial do Cresol Seguros, uma solução digital para comparação, contratação e gerenciamento de seguros.": "UI/UX Design and web development work on the initial version of Cresol Seguros, a digital solution for comparing, purchasing, and managing insurance.",
  "O Cresol Seguros foi desenvolvido para facilitar o acesso dos usuários a serviços de seguro em uma experiência digital mais clara e prática. Minha participação ocorreu durante a versão inicial do produto, contribuindo para a experiência das interfaces e para o desenvolvimento de partes web relacionadas à solução.": "Cresol Seguros was developed to make insurance services easier to access through a clearer and more practical digital experience. My contribution took place during the product's initial version, supporting the interface experience and the development of web-based parts related to the solution.",
  "Atuei em UI/UX Design, colaborando na construção e organização das interfaces, além de contribuir com o desenvolvimento de partes web sob minha responsabilidade.": "I worked in UI/UX Design, collaborating on the creation and organization of the interfaces, while also contributing to the development of the web-based parts under my responsibility.",
  "O trabalho envolveu transformar necessidades do produto em interfaces claras e consistentes, considerando a organização das informações, os fluxos de navegação e os diferentes pontos de contato digitais da experiência.": "The work involved translating product needs into clear and consistent interfaces, taking into account information organization, navigation flows, and the different digital touchpoints throughout the experience.",
  "A contribuição resultou em interfaces e elementos web voltados a tornar a jornada de consulta e contratação de seguros mais compreensível e acessível para os usuários.": "The contribution resulted in interfaces and web elements designed to make the insurance consultation and purchasing journey more understandable and accessible to users.",
  "O projeto ampliou minha experiência ao conectar decisões de UI/UX com desenvolvimento web em um produto real, reforçando a importância de consistência visual, clareza de fluxos e colaboração entre design e tecnologia.": "The project expanded my experience in connecting UI/UX decisions with web development in a real-world product, reinforcing the importance of visual consistency, clear user flows, and collaboration between design and technology.",
  "Atuei na versão inicial do produto. O Cresol Seguros recebeu evoluções posteriores que não fazem parte do escopo da minha participação.": "I contributed to the product's initial version. Cresol Seguros received subsequent updates that were not part of the scope of my involvement.",
  "Ver na Google Play": "View on Google Play",
  "Nome do projeto": "Project name",
  "Breve descrição do projeto, seu objetivo e o principal desafio trabalhado.": "Brief project description, its goal, and the main challenge addressed.",
  "Em desenvolvimento": "In development",
  "UI/UX Designer & Front-end Developer com foco em transformar problemas complexos em experiências digitais claras, funcionais e centradas nas pessoas. Combino pensamento de produto, design de interfaces e desenvolvimento front-end para criar soluções consistentes, acessíveis e bem estruturadas.": "UI/UX Designer & Front-end Developer focused on turning complex problems into clear, functional, people-centered digital experiences. I combine product thinking, interface design, and front-end development to create consistent, accessible, and well-structured solutions.",
  "Comunicação clara": "Clear communication", "Capacidade de traduzir necessidades, ideias e decisões de produto em soluções compreensíveis.": "Ability to translate needs, ideas, and product decisions into understandable solutions.",
  "Pensamento centrado no usuário": "User-centered thinking", "Atenção ao contexto, à usabilidade e à clareza em cada etapa da experiência.": "Attention to context, usability, and clarity at every stage of the experience.",
  "Colaboração": "Collaboration", "Facilidade para trabalhar em conjunto com clientes, times criativos e desenvolvimento.": "Ability to work closely with clients, creative teams, and developers.",
  "Aprendizado contínuo": "Continuous learning", "Interesse constante em aprimorar repertório de design, tecnologia e produtos digitais.": "Ongoing interest in expanding knowledge of design, technology, and digital products.",
  "Arquitetura da Informação": "Information Architecture", "Prototipação": "Prototyping", "Acessibilidade": "Accessibility", "Componentização": "Componentization", "Ferramentas": "Tools",
  "Projetar com clareza.": "Design with clarity.", "Entender problemas e projetar experiências claras e funcionais.": "Understand problems and design clear, functional experiences.",
  "Construir com propósito.": "Build with purpose.", "Transformar decisões de design em interfaces responsivas e bem estruturadas.": "Turn design decisions into responsive, well-structured interfaces.",
  "Dar forma ao processo.": "Shape the process.", "Ferramentas para criar, desenvolver e colaborar com fluidez.": "Tools to create, develop, and collaborate smoothly.",
};

export function TranslatedText({ children }: { children: string }) {
  const { locale } = useLocale();
  return <>{locale === "en" ? englishContent[children] ?? children : children}</>;
}

export function LocaleSelector() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);
  const options = [
    { locale: "pt-BR" as const, flag: "🇧🇷", label: "Português" },
    { locale: "en" as const, flag: "🇺🇸", label: "English" },
  ];
  const active = options.find((option) => option.locale === locale) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!selectorRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return <div className="locale-selector" ref={selectorRef}>
    <button
      className="locale-selector-trigger"
      type="button"
      aria-label="Selecionar idioma"
      aria-haspopup="menu"
      aria-expanded={open}
      onClick={() => setOpen((current) => !current)}
    >
      <span className="locale-flag" aria-hidden="true">{active.flag}</span>
      <span className="locale-current">{active.label}</span>
      <ChevronDown className="locale-chevron" aria-hidden="true" size={15} />
    </button>
    {open && <div className="locale-menu" role="menu" aria-label="Idiomas">
      {options.map((option) => {
        const selected = option.locale === locale;
        return <button
          className="locale-option"
          type="button"
          role="menuitemradio"
          aria-checked={selected}
          key={option.locale}
          onClick={() => {
            setLocale(option.locale);
            setOpen(false);
          }}
        >
          <Check className="locale-check" aria-hidden="true" size={16} />
          <span className="locale-flag" aria-hidden="true">{option.flag}</span>
          <span>{option.label}</span>
        </button>;
      })}
    </div>}
  </div>;
}
