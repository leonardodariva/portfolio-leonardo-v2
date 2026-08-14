"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export type Locale = "pt-BR" | "en";

export const translations = {
  "pt-BR": {
    navigation: { home: "Início", about: "Sobre", projects: "Projetos", skills: "Skills", contact: "Contato", resume: "Currículo", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
    home: { available: "Disponível para oportunidades", hero1: "Design com intenção.", hero2: "Código com propósito.", introStart: "Sou Leonardo Dariva,", introRole: "UI/UX Designer & Front-end Developer.", introEnd: "Transformo problemas complexos em experiências digitais claras, funcionais e bem construídas.", viewProjects: "Ver projetos", contact: "Entrar em contato", scroll: "ROLE PARA EXPLORAR", aboutLabel: "01 / SOBRE", about1: "Eu projeto experiências e entendo", about2: "como elas ganham vida no código.", aboutText: "Atuo na interseção entre design e desenvolvimento, combinando pensamento centrado no usuário, clareza visual e conhecimento técnico para criar produtos digitais consistentes. Acredito que boas interfaces vão além da estética: resolvem problemas, reduzem fricção e tornam a tecnologia mais humana.", viewResume: "Ver currículo", projectsLabel: "02 / PROJETOS", allProjects: "Ver todos os projetos", skillsLabel: "03 / SKILLS", contactLabel: "04 / CONTATO", contact1: "Vamos construir", contact2: "algo que faça sentido?", contactText: "Estou aberto a oportunidades, projetos e boas conversas sobre design e tecnologia. Conte um pouco sobre o que você tem em mente." },
    projects: { portfolio: "PORTFÓLIO", all: "Todos os projetos", access: "Acessar", category: "CATEGORIA", technologies: "TECNOLOGIAS", period: "PERÍODO", status: "STATUS", context: "Contexto", role: "Meu papel", process: "Processo", solution: "Solução", learnings: "Aprendizados", gallery: "Galeria de", enlargeMain: "Ampliar mockup principal de", enlarge: "Ampliar mockup", enlarged: "Mockup ampliado de", close: "Fechar visualização ampliada" },
    form: { name: "Nome *", company: "Empresa", optional: "Opcional", email: "E-mail *", message: "Mensagem *", namePlaceholder: "Como você se chama?", companyPlaceholder: "Onde você trabalha?", emailPlaceholder: "voce@exemplo.com", messagePlaceholder: "Fale sobre sua ideia, projeto ou oportunidade.", submit: "Enviar mensagem", nameError: "Informe seu nome.", emailError: "Informe um e-mail válido.", messageError: "Escreva uma mensagem.", feedback: "Mensagem pronta para envio. Integração em configuração." },
    resume: { location: "Apucarana, Paraná", phone: "Telefone a adicionar", download: "Baixar currículo", summary: "Resumo profissional", professional: "Competências profissionais", experience: "Experiência profissional", experiencePending: "Experiências profissionais em atualização.", education: "Formação e estudos", educationPending: "Informações de formação em atualização.", technical: "Competências técnicas" },
    footer: { rights: "Todos os direitos reservados.", email: "Enviar e-mail para Leonardo Dariva" },
  },
  en: {
    navigation: { home: "Home", about: "About", projects: "Projects", skills: "Skills", contact: "Contact", resume: "Resume", openMenu: "Open menu", closeMenu: "Close menu" },
    home: { available: "Available for opportunities", hero1: "Design with intention.", hero2: "Code with purpose.", introStart: "I'm Leonardo Dariva,", introRole: "UI/UX Designer & Front-end Developer.", introEnd: "I turn complex problems into clear, functional, and well-built digital experiences.", viewProjects: "View projects", contact: "Get in touch", scroll: "SCROLL TO EXPLORE", aboutLabel: "01 / ABOUT", about1: "I design experiences and understand", about2: "how they come to life in code.", aboutText: "I work at the intersection of design and development, combining user-centered thinking, visual clarity, and technical knowledge to create consistent digital products. I believe good interfaces go beyond aesthetics: they solve problems, reduce friction, and make technology more human.", viewResume: "View resume", projectsLabel: "02 / PROJECTS", allProjects: "View all projects", skillsLabel: "03 / SKILLS", contactLabel: "04 / CONTACT", contact1: "Let's build", contact2: "something meaningful?", contactText: "I'm open to opportunities, projects, and good conversations about design and technology. Tell me a little about what you have in mind." },
    projects: { portfolio: "PORTFOLIO", all: "All projects", access: "View", category: "CATEGORY", technologies: "TECHNOLOGIES", period: "PERIOD", status: "STATUS", context: "Context", role: "My role", process: "Process", solution: "Solution", learnings: "Learnings", gallery: "Gallery of", enlargeMain: "Enlarge main mockup of", enlarge: "Enlarge mockup", enlarged: "Enlarged mockup of", close: "Close enlarged view" },
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
