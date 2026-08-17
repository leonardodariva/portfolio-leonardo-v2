"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export type Locale = "pt-BR" | "en";

export const translations = {
  "pt-BR": {
    navigation: { home: "Início", about: "Sobre", projects: "Projetos", skills: "Skills", contact: "Contato", resume: "Currículo", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
    home: { available: "Aberto a oportunidades em UI/UX e Front-end", hero1: "Design com intenção.", hero2: "Código com propósito.", introStart: "Sou Leonardo Dariva,", introRole: "UI/UX Designer & Front-end Developer.", introEnd: "Transformo necessidades de usuários e negócios em experiências digitais claras, intuitivas e bem construídas.", viewProjects: "Ver projetos", contact: "Entrar em contato", scroll: "ROLE PARA EXPLORAR", aboutLabel: "01 / SOBRE", about1: "Transformo problemas em", about2: "experiências digitais claras", about3: ", do design ao código.", aboutText: "Sou UI/UX Designer e desenvolvedor front-end em evolução. Uno visão de produto, design centrado no usuário e conhecimentos de HTML, CSS e JavaScript para criar interfaces intuitivas, consistentes e viáveis.", aboutAiLabel: "IA no processo", aboutAiText: "Também utilizo IA de forma estratégica para explorar referências, organizar ideias e acelerar etapas do processo criativo e de desenvolvimento.", viewResume: "Ver currículo", projectsLabel: "02 / PROJETOS", allProjects: "Ver todos os projetos", skillsLabel: "03 / SKILLS", contactLabel: "04 / CONTATO", contact1: "Vamos conversar e construir algo juntos!", contact2: "", contactText: "Estou aberto a oportunidades em UI/UX Design e desenvolvimento front-end, além de projetos digitais que precisem de uma experiência mais clara e bem construída." },
    workflow: { title: "Como transformo ideias em experiências digitais", support: "Um processo claro para conectar objetivos, usabilidade e interface.", steps: { understand: { title: "Descobrir", description: "Busco compreender o contexto, o público e os objetivos do projeto antes de definir uma solução. Utilizo briefing, análise de referências e concorrentes e, quando o escopo permite, conversas ou validações com usuários." }, structure: { title: "Estruturar", description: "Organizo informações, fluxos e prioridades para construir uma navegação lógica e fácil de acompanhar." }, build: { title: "Projetar e construir", description: "Crio interfaces no Figma e, quando o projeto envolve front-end, transformo as telas em experiências web responsivas." }, refine: { title: "Refinar", description: "Reviso consistência visual, responsividade e detalhes da experiência para deixar a solução mais clara e preparada para evoluir." } } },
    projects: { portfolio: "PORTFÓLIO", all: "Todos os projetos", access: "Acessar", category: "CATEGORIA", technologies: "TECNOLOGIAS", period: "PERÍODO", status: "STATUS", overview: "O projeto", contribution: "Minha contribuição", note: "Observação", visitWebsite: "Visitar site", additionalNote: "Outros projetos e experiências profissionais podem ser apresentados em conversa.", gallery: "Galeria de", enlargeImage: "Ampliar imagem", enlarged: "Imagem ampliada de", closeGallery: "Fechar galeria", previousImage: "Imagem anterior", nextImage: "Próxima imagem" },
    form: { name: "Nome *", company: "Empresa (opcional)", optional: "Opcional", email: "E-mail *", message: "Mensagem *", namePlaceholder: "Como posso te chamar?", companyPlaceholder: "Empresa ou organização", emailPlaceholder: "seuemail@empresa.com", messagePlaceholder: "Conte brevemente sobre a oportunidade, o projeto ou como posso ajudar.", submit: "Enviar mensagem", nameError: "Informe seu nome.", emailError: "Informe um e-mail válido.", messageError: "Escreva uma mensagem.", feedback: "Mensagem pronta para envio. Integração em configuração." },
    resume: { location: "Apucarana, Paraná", download: "Baixar currículo", summary: "Resumo profissional", professional: "Competências profissionais", experience: "Experiência profissional", keyContributions: "Principais contribuições", education: "Formação e estudos", technical: "Competências técnicas" },
    footer: { rights: "Todos os direitos reservados.", email: "Enviar e-mail para Leonardo Dariva" },
  },
  en: {
    navigation: { home: "Home", about: "About", projects: "Projects", skills: "Skills", contact: "Contact", resume: "Resume", openMenu: "Open menu", closeMenu: "Close menu" },
    home: { available: "Open to UI/UX and Front-end opportunities", hero1: "Design with intention.", hero2: "Code with purpose.", introStart: "I'm Leonardo Dariva,", introRole: "UI/UX Designer & Front-end Developer.", introEnd: "I turn user and business needs into clear, intuitive, and well-built digital experiences.", viewProjects: "View projects", contact: "Get in touch", scroll: "SCROLL TO EXPLORE", aboutLabel: "01 / ABOUT", about1: "I turn problems into", about2: "clear digital experiences", about3: ", from design to code.", aboutText: "I am a UI/UX Designer and a front-end developer continuing to grow. I combine product thinking, user-centered design, and knowledge of HTML, CSS, and JavaScript to create intuitive, consistent, and technically feasible interfaces.", aboutAiLabel: "AI in the process", aboutAiText: "I also use AI strategically to explore references, organize ideas, and accelerate stages of the creative and development process.", viewResume: "View resume", projectsLabel: "02 / PROJECTS", allProjects: "View all projects", skillsLabel: "03 / SKILLS", contactLabel: "04 / CONTACT", contact1: "Let's talk and build something together!", contact2: "", contactText: "I'm open to opportunities in UI/UX Design and front-end development, as well as digital projects that need a clearer, well-crafted experience." },
    workflow: { title: "How I turn ideas into digital experiences", support: "A clear process for connecting goals, usability, and interface design.", steps: { understand: { title: "Discover", description: "I seek to understand the project’s context, audience, and goals before defining a solution. I use briefs, reference and competitor analysis and, when the scope allows, conversations or validation with users." }, structure: { title: "Structure", description: "I organize information, flows, and priorities to build navigation that is logical and easy to follow." }, build: { title: "Design and build", description: "I create interfaces in Figma and, when a project involves front-end development, turn the screens into responsive web experiences." }, refine: { title: "Refine", description: "I review visual consistency, responsiveness, and experience details to make the solution clearer and ready to evolve." } } },
    projects: { portfolio: "PORTFOLIO", all: "All projects", access: "View", category: "CATEGORY", technologies: "TECHNOLOGIES", period: "PERIOD", status: "STATUS", overview: "The project", contribution: "My contribution", note: "Note", visitWebsite: "Visit website", additionalNote: "Additional projects and professional experiences can be shared in conversation.", gallery: "Gallery of", enlargeImage: "Enlarge image", enlarged: "Enlarged image of", closeGallery: "Close gallery", previousImage: "Previous image", nextImage: "Next image" },
    form: { name: "Name *", company: "Company (optional)", optional: "Optional", email: "Email *", message: "Message *", namePlaceholder: "What should I call you?", companyPlaceholder: "Company or organization", emailPlaceholder: "youremail@company.com", messagePlaceholder: "Briefly tell me about the opportunity, project, or how I can help.", submit: "Send message", nameError: "Enter your name.", emailError: "Enter a valid email address.", messageError: "Write a message.", feedback: "Message ready to send. Integration is being configured." },
    resume: { location: "Apucarana, Paraná, Brazil", download: "Download resume", summary: "Professional summary", professional: "Professional skills", experience: "Professional experience", keyContributions: "Key contributions", education: "Education and studies", technical: "Technical skills" },
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
  "Conduzo briefings, alinhamentos e apresentações para transformar necessidades e feedbacks em decisões de interface mais claras.": "I conduct briefings, alignment sessions, and presentations to turn needs and feedback into clearer interface decisions.",
  "Atuo em parceria com clientes, design e desenvolvimento, conectando objetivos de negócio, experiência e viabilidade técnica.": "I work alongside clients, design, and development, connecting business goals, user experience, and technical feasibility.",
  "Validação e refinamento": "Validation and refinement",
  "Apresento soluções, reúno feedbacks e realizo testes para aprimorar interfaces e apoiar decisões de produto.": "I present solutions, gather feedback, and conduct testing to improve interfaces and support product decisions.",
  "Considero objetivos de negócio, necessidades dos usuários, pesquisas, feedbacks e viabilidade da interface para apoiar decisões mais consistentes.": "I consider business goals, user needs, research, feedback, and interface feasibility to support more consistent decisions.",
  "Atuei em UI/UX Design e desenvolvimento web para diferentes produtos digitais. Participei desde o entendimento das necessidades com clientes até a organização, prototipação, validação e implementação de interfaces, fluxos e páginas web.": "Worked in UI/UX Design and web development for different digital products. Participated from understanding client needs to organizing, prototyping, validating, and implementing interfaces, flows, and web pages.",
  "Condução de briefings, reuniões de alinhamento e levantamento de necessidades com clientes.": "Conducted briefings, alignment meetings, and client needs assessments.",
  "Pesquisa UX, análise de referências e organização de requisitos para orientar decisões de produto.": "Performed UX research, reference analysis, and requirements organization to guide product decisions.",
  "Criação de arquiteturas de informação, wireframes e protótipos para estruturar interfaces e experiências digitais.": "Created information architectures, wireframes, and prototypes to structure interfaces and digital experiences.",
  "Desenvolvimento de interfaces e padrões de interação para aplicativos, dashboards e páginas web.": "Developed interfaces and interaction patterns for applications, dashboards, and web pages.",
  "Apresentação de soluções, coleta de feedback, testes de usabilidade e refinamento contínuo das interfaces.": "Presented solutions, gathered feedback, conducted usability testing, and continuously refined interfaces.",
  "Participação em testes A/B e validações para comparar alternativas de interface e apoiar decisões de produto.": "Participated in A/B testing and validations to compare interface alternatives and support product decisions.",
  "Colaboração entre clientes, design e desenvolvimento em produtos dos segmentos de seguros, fidelidade, gestão comercial e agronegócio.": "Collaborated across clients, design, and development on products in insurance, loyalty, sales management, and agribusiness.",
  "Pensamento de produto": "Product thinking",
  "Considero objetivos de negócio, necessidades dos usuários e viabilidade da interface para apoiar decisões mais consistentes.": "I consider business goals, user needs, and interface feasibility to support more consistent decisions.",
  "Traduzo necessidades, ideias e informações complexas em interfaces, fluxos e decisões mais fáceis de compreender.": "I translate needs, ideas, and complex information into interfaces, flows, and decisions that are easier to understand.",
  "Organizo informações, identifico prioridades e transformo desafios em experiências digitais mais claras e funcionais.": "I organize information, identify priorities, and turn challenges into clearer and more functional digital experiences.",
  "Trabalho em conjunto com clientes, times criativos e desenvolvimento, conectando necessidades de design e tecnologia.": "I work alongside clients, creative teams, and development, connecting design and technology needs.",
  "Mantenho uma rotina constante de evolução em design, desenvolvimento e produtos digitais, unindo prática profissional e estudo.": "I maintain a continuous learning routine in design, development, and digital products, combining professional practice and study.",
  "Evolução de interfaces para uma plataforma de planejamento financeiro.": "Evolved interfaces for a financial planning platform.",
  "Organização de informações e jornadas para tornar a experiência mais clara e intuitiva.": "Organized information and journeys to make the experience clearer and more intuitive.",
  "Colaboração na consistência visual e na qualidade das interfaces do produto.": "Contributed to visual consistency and interface quality across the product.",
  "Criação e evolução de interfaces para aplicativos, dashboards e páginas web.": "Created and evolved interfaces for applications, dashboards, and web pages.",
  "Organização de fluxos e informações em produtos dos segmentos de seguros, fidelidade, gestão comercial e agronegócio.": "Organized flows and information for products in insurance, loyalty, sales management, and agribusiness.",
  "Colaboração entre design e desenvolvimento na implementação de experiências digitais.": "Collaborated across design and development in the implementation of digital experiences.",
  "Aprendizado contínuo em design e desenvolvimento por meio da prática profissional e de cursos na Udemy disponibilizados pela empresa.": "Maintained continuous learning in design and development through professional practice and Udemy courses provided by the company.",
  "UI/UX Designer & Front-end Developer com experiência na criação de interfaces e experiências digitais para diferentes contextos de negócio. Combino organização visual, pensamento centrado no usuário e conhecimentos de HTML, CSS e JavaScript para contribuir com soluções claras, consistentes e bem estruturadas.": "UI/UX Designer & Front-end Developer with experience creating interfaces and digital experiences for different business contexts. I combine visual organization, a user-centered mindset, and knowledge of HTML, CSS, and JavaScript to contribute to clear, consistent, and well-structured solutions.",
  "Comunicação e clareza": "Communication and clarity",
  "Traduzo necessidades de clientes, negócios e usuários em decisões de interface e soluções fáceis de compreender.": "I translate client, business, and user needs into interface decisions and solutions that are easy to understand.",
  "Resolução de problemas": "Problem-solving",
  "Busco organizar informações, identificar prioridades e transformar desafios em experiências digitais mais claras e funcionais.": "I organize information, identify priorities, and turn challenges into clearer, more functional digital experiences.",
  "Colaboração multidisciplinar": "Cross-functional collaboration",
  "Tenho facilidade para atuar em conjunto com clientes, times criativos e desenvolvimento, conectando necessidades de design e tecnologia.": "I work effectively with clients, creative teams, and developers, connecting design and technology needs.",
  "Mantenho uma rotina constante de evolução em design, desenvolvimento e produtos digitais, unindo prática profissional e estudo.": "I maintain an ongoing learning routine in design, development, and digital products, combining professional practice with study.",
  "Atuação em UI/UX Design e desenvolvimento web para diferentes produtos digitais. Participei da criação e evolução de interfaces, fluxos e páginas web, conciliando organização visual, experiência de uso e necessidades de negócio.": "Worked in UI/UX Design and web development for different digital products. Participated in creating and evolving interfaces, flows, and web pages, balancing visual organization, user experience, and business needs.",
  "Entre os projetos que podem ser apresentados estão Cresol Seguros, Cresol Fidelidade, PowerGO e BRX Agro. Além deles, contribuí em outras entregas e projetos profissionais desenvolvidos durante o período na empresa.": "Projects that can be presented include Cresol Seguros, Cresol Fidelidade, PowerGO, and BRX Agro. In addition, I contributed to other professional projects and deliveries developed during my time at the company.",
  "Durante esse período, também mantive uma rotina de aprendizado contínuo por meio de cursos na plataforma Udemy disponibilizada pela empresa, complementando a prática diária em design e desenvolvimento.": "During this period, I also maintained a continuous learning routine through courses on the Udemy platform provided by the company, complementing daily practice in design and development.",
  "Outros projetos e entregas": "Additional projects and deliveries",
  "Outras experiências profissionais podem ser apresentadas em conversa.": "Other professional experiences can be shared in conversation.",
  "UI/UX Designer & Front-end Developer com foco em transformar problemas complexos em experiências digitais claras, funcionais e centradas nos usuários. Combino pensamento de produto, design de interfaces e conhecimentos de desenvolvimento front-end para criar soluções consistentes, acessíveis e bem estruturadas.": "UI/UX Designer & Front-end Developer focused on turning complex problems into clear, functional, and user-centered digital experiences. I combine product thinking, interface design, and front-end development knowledge to create consistent, accessible, and well-structured solutions.",
  "Designer de Interface do Usuário": "User Interface Designer",
  "2024 – jul. 2025": "2024 – Jul. 2025",
  "Atuação em UI/UX Design na evolução de interfaces e experiências digitais do produto Oráculo, uma plataforma voltada ao planejamento financeiro. Contribuí para tornar informações e jornadas complexas mais claras, organizadas e intuitivas.": "Worked in UI/UX Design on the evolution of interfaces and digital experiences for Oráculo, a financial planning platform. Contributed to making complex information and journeys clearer, more organized, and more intuitive.",
  "UI/UX Designer & Desenvolvedor Web": "UI/UX Designer & Web Developer",
  "Glass Aplicativos e Softwares · Tempo integral · Apucarana, PR": "Glass Aplicativos e Softwares · Full-time · Apucarana, PR, Brazil",
  "nov. 2020 – fev. 2024": "Nov. 2020 – Feb. 2024",
  "Atuação em UI/UX Design e desenvolvimento web para produtos digitais. Contribuí para a construção de interfaces, fluxos e páginas web em projetos como Cresol Seguros, Cresol Fidelidade, PowerGO e BRX Agro, colaborando com diferentes demandas de produto e negócio.": "Worked in UI/UX Design and web development for digital products. Contributed to building interfaces, flows, and web pages for projects such as Cresol Seguros, Cresol Fidelidade, PowerGO, and BRX Agro, collaborating across different product and business needs.",
  "Concepção de uma plataforma SaaS para apoiar psicólogos na gestão de pacientes, anamneses, prontuários, tarefas, documentos e informações financeiras.": "Concept for a SaaS platform designed to support psychologists in managing patients, intake forms, records, tasks, documents, and financial information.",
  "O Oráculo é uma plataforma digital voltada ao planejamento financeiro, criada para ajudar usuários a organizar informações, acompanhar planejamentos e compreender jornadas financeiras de forma mais clara.": "Oráculo is a digital financial planning platform designed to help users organize information, track plans, and understand financial journeys more clearly.",
  "Atuei em UI/UX Design na evolução das interfaces do produto, contribuindo para organizar informações complexas em experiências mais intuitivas, consistentes e fáceis de navegar.": "I worked in UI/UX Design on the evolution of the product's interfaces, helping organize complex information into more intuitive, consistent, and easy-to-navigate experiences.",
  "Minha participação corresponde a uma etapa anterior da evolução do produto. O Oráculo continuou recebendo novas versões e funcionalidades posteriormente.": "My contribution corresponds to an earlier stage in the product's evolution. Oráculo continued to receive new versions and features afterward.",
  "O Cresol Seguros é uma solução digital voltada à consulta, contratação e gerenciamento de seguros. O produto reúne diferentes pontos de contato para tornar essa jornada mais prática e compreensível para os cooperados.": "Cresol Seguros is a digital solution for reviewing, purchasing, and managing insurance. The product brings together different touchpoints to make this journey more practical and understandable for members.",
  "Participei da versão inicial atuando no UI/UX do aplicativo e da dashboard do sistema. Também contribuí com o desenvolvimento de partes web relacionadas ao produto, sob minha responsabilidade.": "I contributed to the initial version, working on the UI/UX of the application and system dashboard. I also contributed to the development of web components related to the product under my responsibility.",
  "As imagens exibem telas do aplicativo da versão inicial em que participei. Os materiais da dashboard e das partes web não estão disponíveis neste portfólio.": "The images show screens from the initial version of the application in which I participated. Materials from the dashboard and web components are not available in this portfolio.",
  "Projeto pessoal de uma plataforma SaaS pensada para apoiar psicólogos na gestão de pacientes, anamneses, prontuários, tarefas, documentos e informações financeiras em um único ambiente.": "A personal SaaS platform project designed to support psychologists in managing patients, intake assessments, clinical records, tasks, documents, and financial information in one environment.",
  "Atuei na concepção de UI/UX do produto, estruturando uma experiência que prioriza organização, clareza das informações e uma navegação adequada à rotina de profissionais da área.": "I worked on the product's UI/UX concept, structuring an experience that prioritizes organization, information clarity, and navigation suited to the daily work of professionals in the field.",
  "O Cresol Fidelidade é um aplicativo voltado à transformação de pontos acumulados em brindes, benefícios e experiências para cooperados, reunindo informações e opções de resgate em uma experiência digital.": "Cresol Fidelidade is an application designed to turn accumulated points into gifts, benefits, and experiences for members, bringing together information and redemption options in a digital experience.",
  "Atuei em UI/UX Design, contribuindo para a organização das interfaces e dos fluxos de navegação relacionados à consulta de pontos, benefícios e possibilidades de resgate.": "I worked in UI/UX Design, contributing to the organization of interfaces and navigation flows related to viewing points, benefits, and redemption options.",
  "O PowerGO é uma solução digital voltada ao apoio de equipes comerciais e à gestão de pedidos, com recursos que apoiam a rotina de vendas e a consulta de informações em campo.": "PowerGO is a digital solution designed to support sales teams and order management, with features that assist sales routines and access to information in the field.",
  "Participei da versão inicial do produto em UI/UX Design, contribuindo para a experiência das interfaces do aplicativo. Também atuei no desenvolvimento de algumas páginas web relacionadas ao produto com HTML e CSS.": "I contributed to the product's initial version in UI/UX Design, helping shape the experience of the application's interfaces. I also developed selected web pages related to the product using HTML and CSS.",
  "Os materiais exibidos apresentam a versão inicial do aplicativo, período em que participei do projeto. O PowerGO continuou evoluindo posteriormente com novas versões e funcionalidades.": "The materials shown present the initial version of the application, the period in which I contributed to the project. PowerGO continued to evolve afterward with new versions and features.",
  "O BRX Agro é um marketplace voltado ao agronegócio, desenvolvido para facilitar a divulgação, a compra e a venda de produtos, serviços, máquinas, animais e propriedades rurais.": "BRX Agro is an agribusiness marketplace designed to facilitate the promotion, purchase, and sale of products, services, machinery, animals, and rural properties.",
  "Atuei em UI/UX Design, contribuindo para a organização das interfaces e da experiência de navegação de uma plataforma com diferentes categorias e tipos de oferta.": "I worked in UI/UX Design, contributing to the organization of interfaces and the navigation experience of a platform with different categories and types of listings.",
  "Atuação em UI/UX Design na evolução do Oráculo, uma plataforma de planejamento financeiro criada para organizar informações, apoiar planejadores e tornar jornadas complexas mais claras para seus usuários.": "UI/UX Design work on the evolution of Oráculo, a financial planning platform created to organize information, support planners, and make complex journeys clearer for its users.",
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
  "Aplicativo de fidelidade criado para transformar pontos acumulados em brindes, benefícios e experiências para os cooperados Cresol.": "A loyalty application designed to turn accumulated points into gifts, benefits, and experiences for Cresol members.",
  "Marketplace voltado ao agronegócio, criado para facilitar a compra, a venda e a divulgação de produtos, serviços, máquinas, animais e propriedades rurais.": "An agribusiness marketplace designed to facilitate the buying, selling, and promotion of products, services, machinery, animals, and rural properties.",
  "Profissionais de psicologia precisam acompanhar informações clínicas e administrativas ao longo da jornada de cada paciente. O projeto foi desenvolvido como um exercício de produto digital para organizar esses dados em uma experiência clara, acessível e adequada à rotina profissional.": "Psychology professionals need to track clinical and administrative information throughout each patient’s journey. This project was developed as a digital product exercise focused on organizing that data into a clear, accessible experience suited to day-to-day professional practice.",
  "Concepção do produto, arquitetura da informação, definição de fluxos, UI Design e prototipação das interfaces.": "Product concept, information architecture, flow definition, UI design, and interface prototyping.",
  "A estrutura foi pensada a partir dos principais momentos da rotina de atendimento: cadastro de pacientes, acompanhamento de informações pessoais, gestão de anamneses, sessões, tarefas, documentos e financeiro. A partir desses fluxos, foram definidas hierarquias, componentes e telas para facilitar a consulta e a organização das informações.": "The structure was designed around key moments in the care workflow: patient registration, personal information tracking, intake assessment management, sessions, tasks, documents, and finances. These flows informed the hierarchy, components, and screens, making information easier to review and organize.",
  "Uma interface de gestão para psicólogos com lista de pacientes, ficha individual, organização de dados pessoais e médicos, gerenciamento de anamneses e recursos para comparar registros ao longo do acompanhamento.": "A management interface for psychologists featuring a patient list, individual profiles, structured personal and medical data, intake assessment management, and tools for comparing records throughout ongoing care.",
  "O projeto reforçou a importância de organizar informações extensas e sensíveis de forma clara, com boa hierarquia visual e acesso rápido às áreas mais importantes da rotina profissional.": "The project reinforced the importance of organizing extensive, sensitive information clearly, with a strong visual hierarchy and quick access to the areas most relevant to everyday professional practice.",
  "Produto digital · UI/UX Design · Desenvolvimento web": "Digital product · UI/UX Design · Web development",
  "Aplicativo mobile / V1": "Mobile application / V1",
  "Produto profissional · Versão inicial": "Professional product · Initial version",
  "Atuação em UI/UX Design na versão inicial do PowerGO e no desenvolvimento de algumas páginas web relacionadas ao produto com HTML e CSS.": "UI/UX Design work on the initial version of PowerGO and development of selected web pages related to the product using HTML and CSS.",
  "Figma · Desenvolvimento web · HTML · CSS": "Figma · Web development · HTML · CSS",
  "O PowerGO é uma solução digital voltada à operação comercial de distribuidoras. Minha participação ocorreu em UI/UX Design e no desenvolvimento da versão inicial do aplicativo, contribuindo para transformar interfaces e fluxos definidos pelo produto em uma experiência funcional para os usuários, além do desenvolvimento de algumas páginas web relacionadas ao produto.": "PowerGO is a digital solution designed for the commercial operations of distributors. My contribution involved UI/UX Design and development of the application's initial version, helping turn product-defined interfaces and flows into a functional user experience, as well as developing selected web pages related to the product.",
  "Atuei em UI/UX Design e no desenvolvimento front-end da V1 do aplicativo, implementando as interfaces e os fluxos sob minha responsabilidade. Também desenvolvi algumas páginas web relacionadas ao produto, sem participação nas evoluções posteriores ou no desenvolvimento de todo o site atual.": "I worked on UI/UX Design and front-end development for the application's V1, implementing the interfaces and flows under my responsibility. I also developed selected web pages related to the product, without contributing to later product developments or building the current website in its entirety.",
  "O trabalho envolveu projetar e desenvolver as telas e componentes previstos para a versão inicial, considerando a organização das informações e a experiência de uso em dispositivos móveis, além de implementar algumas páginas web relacionadas ao produto.": "The work involved designing and developing the screens and components planned for the initial version, with attention to information organization and the user experience on mobile devices, as well as implementing selected web pages related to the product.",
  "A versão inicial do aplicativo reuniu recursos para apoiar a rotina comercial e a gestão de pedidos, com interfaces voltadas à consulta de informações e execução de tarefas em campo.": "The initial version of the application brought together features to support day-to-day sales operations and order management, with interfaces designed for accessing information and completing tasks in the field.",
  "O projeto ampliou minha experiência no desenvolvimento de interfaces para um produto real, reforçando a importância de consistência visual, organização de componentes e atenção aos fluxos de uso no mobile.": "The project expanded my experience in developing interfaces for a real-world product, reinforcing the importance of visual consistency, component organization, and close attention to mobile user flows.",
  "As imagens apresentam materiais promocionais da versão inicial do aplicativo, período em que participei do projeto.": "The images present promotional materials from the initial version of the application, the period in which I contributed to the project.",
  "Aplicativo / Versão inicial": "Application / Initial version",
  "UI Design · UX Design · Desenvolvimento web": "UI Design · UX Design · Web development",
  "UI Design · UX Design · Desenvolvimento web · HTML · CSS": "UI Design · UX Design · Web development · HTML · CSS",
  "Projeto profissional": "Professional project",
  "Atuação em UI/UX Design no aplicativo e na dashboard do Cresol Seguros, além de contribuições no desenvolvimento de partes web relacionadas ao produto.": "UI/UX Design work on the Cresol Seguros application and system dashboard, along with contributions to the development of web components related to the product.",
  "O Cresol Seguros foi desenvolvido para tornar o acesso a serviços de seguro mais claro e prático. Minha participação ocorreu durante a versão inicial do produto, contribuindo para a experiência das interfaces do aplicativo, da dashboard do sistema e para o desenvolvimento de partes web relacionadas à solução.": "Cresol Seguros was developed to make access to insurance services clearer and more practical. My contribution took place during the product's initial version, focusing on the interface experience of the application and system dashboard, as well as the development of web components related to the solution.",
  "Atuei em UI/UX Design na construção e organização das interfaces do aplicativo e da dashboard do sistema. Também contribuí com o desenvolvimento de partes web sob minha responsabilidade.": "I worked in UI/UX Design, building and organizing the interfaces for the application and system dashboard. I also contributed to the development of web components under my responsibility.",
  "O trabalho envolveu transformar necessidades do produto em interfaces claras e consistentes para diferentes pontos de contato digitais, considerando organização das informações, fluxos de navegação e experiência de uso. Durante o processo, também participei do desenvolvimento de partes web relacionadas ao produto.": "The work involved translating product needs into clear and consistent interfaces across different digital touchpoints, considering information organization, navigation flows, and the user experience. During the process, I also contributed to the development of web components related to the product.",
  "A contribuição envolveu a construção de interfaces para o aplicativo e a dashboard do sistema, além de elementos web de apoio ao produto, buscando tornar a jornada de consulta e contratação de seguros mais compreensível e acessível.": "My contribution included building interfaces for the application and system dashboard, as well as supporting web elements for the product, with the goal of making the insurance consultation and purchasing journey more understandable and accessible.",
  "O projeto ampliou minha experiência ao conectar decisões de UI/UX entre aplicativo, dashboard e desenvolvimento web em um produto real, reforçando a importância de consistência visual, clareza de fluxos e colaboração entre design e tecnologia.": "The project expanded my experience in connecting UI/UX decisions across an application, dashboard, and web development within a real-world product, reinforcing the importance of visual consistency, clear user flows, and collaboration between design and technology.",
  "As imagens deste case apresentam telas do aplicativo da versão inicial em que participei. Também atuei no UI/UX da dashboard e em partes web relacionadas ao produto, cujos materiais visuais não estão disponíveis neste portfólio.": "The images in this case study show screens from the initial version of the application in which I participated. I also worked on the dashboard's UI/UX and on web components related to the product, for which visual materials are not available in this portfolio.",
  "Ver na Google Play": "View on Google Play",
  "Nome do projeto": "Project name",
  "Breve descrição do projeto, seu objetivo e o principal desafio trabalhado.": "Brief project description, its goal, and the main challenge addressed.",
  "Em desenvolvimento": "In development",
  "UI/UX Designer & Front-end Developer com foco em transformar problemas complexos em experiências digitais claras, funcionais e centradas nas pessoas. Combino pensamento de produto, design de interfaces e desenvolvimento front-end para criar soluções consistentes, acessíveis e bem estruturadas.": "UI/UX Designer & Front-end Developer focused on turning complex problems into clear, functional, people-centered digital experiences. I combine product thinking, interface design, and front-end development to create consistent, accessible, and well-structured solutions.",
  "Comunicação clara": "Clear communication", "Capacidade de traduzir necessidades, ideias e decisões de produto em soluções compreensíveis.": "Ability to translate needs, ideas, and product decisions into understandable solutions.",
  "Pensamento centrado no usuário": "User-centered thinking", "Atenção ao contexto, à usabilidade e à clareza em cada etapa da experiência.": "Attention to context, usability, and clarity at every stage of the experience.",
  "Colaboração": "Collaboration", "Facilidade para trabalhar em conjunto com clientes, times criativos e desenvolvimento.": "Ability to work closely with clients, creative teams, and developers.",
  "Aprendizado contínuo": "Continuous learning", "Interesse constante em aprimorar repertório de design, tecnologia e produtos digitais.": "Ongoing interest in expanding knowledge of design, technology, and digital products.",
  "Design de Interfaces": "Interface Design", "Pesquisa UX": "UX Research", "Arquitetura da Informação": "Information Architecture", "Wireframes": "Wireframing", "Prototipação": "Prototyping", "Design de Interação": "Interaction Design", "Sistemas de Design": "Design Systems", "Acessibilidade": "Accessibility", "Escrita UX": "UX Writing", "Testes de Usabilidade": "Usability Testing", "Testes A/B": "A/B Testing", "Componentização": "Componentization", "Design Responsivo": "Responsive Design", "Ferramentas": "Tools", "FERRAMENTAS": "TOOLS", "em aprendizado": "currently learning", "IA aplicada ao processo": "AI-assisted workflow",
  "Projetar experiências com clareza.": "Design clear experiences.", "Organizar interfaces e fluxos digitais com foco em clareza, consistência e usabilidade.": "Organize digital interfaces and flows with a focus on clarity, consistency, and usability.",
  "Construir interfaces funcionais.": "Build functional interfaces.", "Transformar decisões de design em experiências web responsivas, bem estruturadas e em evolução contínua.": "Turn design decisions into responsive, well-structured web experiences through continuous growth.",
  "Dar forma ao processo.": "Shape the process.", "Ferramentas para projetar, desenvolver e organizar a entrega com mais fluidez.": "Tools for designing, developing, and organizing delivery more smoothly.",
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
