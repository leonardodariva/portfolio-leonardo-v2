import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MessageSquare,
  UserRound,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ResumeDownloadButton from "../components/ResumeDownloadButton";
import { T, TranslatedText } from "../i18n";

export const metadata: Metadata = {
  title: "Currículo | Leonardo Dariva",
  description:
    "Currículo profissional de Leonardo Dariva, UI/UX Designer e Front-end Developer.",
};

const professionalSummary =
  "UI/UX Designer & Front-end Developer com experiência na criação de interfaces e experiências digitais para diferentes contextos de negócio. Combino organização visual, pensamento centrado no usuário e conhecimentos de HTML, CSS e JavaScript para contribuir com soluções claras, consistentes e bem estruturadas.";

type ResumeExperience = {
  title: string;
  organization: string;
  period: string;
  descriptions: readonly string[];
  contributions: readonly string[];
  projects?: readonly { label: string; href: string }[];
  additionalNote?: { title: string; description: string };
};

type EducationEntry = {
  title: string;
  institution: string;
  period?: string;
};

const professionalExperiences: readonly ResumeExperience[] = [
  {
    title: "UI/UX Designer",
    organization: "Futuro Corp · Freelance",
    period: "2024 – jul. 2025",
    descriptions: [
      "Atuação freelance no desenho e evolução dos produtos do Oráculo, sistemas voltados a planejadores financeiros. Participei de etapas de entendimento, pesquisa, definição de interfaces, validação e refinamento das soluções.",
    ],
    contributions: [
      "Pesquisa e conversas com usuários e stakeholders para compreender necessidades do produto.",
      "Participação em reuniões de alinhamento, apresentação de soluções e coleta de feedback.",
      "Criação de arquiteturas de informação, wireframes, protótipos e interfaces.",
      "Testes e refinamento contínuo das soluções para melhorar clareza e usabilidade.",
    ],
    projects: [
      { label: "Ver case do Oráculo", href: "/projetos/Sistema Oráculo - Futuro Corp" },
    ],
  },
  {
    title: "UI/UX Designer & Desenvolvedor Web",
    organization: "Glass Aplicativos e Softwares · Tempo integral · Apucarana, PR",
    period: "nov. 2020 – fev. 2024",
    descriptions: [
      "Atuei em UI/UX Design e desenvolvimento web para diferentes produtos digitais. Participei do processo de produto desde a pesquisa e entendimento das necessidades até o desenho, validação e implementação de interfaces e páginas web.",
    ],
    contributions: [
      "Pesquisa com usuários, briefings e reuniões de alinhamento para compreender necessidades e requisitos.",
      "Criação de arquiteturas de informação, wireframes, protótipos e interfaces para aplicativos, dashboards e páginas web.",
      "Apresentação de soluções, coleta de feedback e testes de usabilidade para orientar refinamentos.",
      "Participação em testes A/B e validações de alternativas de interface.",
      "Desenvolvimento e implementação de páginas e interfaces web em colaboração com design e tecnologia.",
      "Atuação em produtos dos segmentos de seguros, fidelidade, gestão comercial e agronegócio.",
    ],
    additionalNote: {
      title: "Outros projetos e entregas",
      description: "Outras experiências profissionais podem ser apresentadas em conversa.",
    },
  },
];

const educationEntries: readonly EducationEntry[] = [];

const resumeSkillGroups = [
  {
    label: "Design & UI/UX",
    items: [
      "Design de Interfaces",
      "Arquitetura da Informação",
      "Wireframes",
      "Prototipação",
      "Design de Interação",
      "Acessibilidade",
      "Testes de Usabilidade",
    ],
  },
  {
    label: "Front-end",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Design Responsivo",
      "React — em aprendizado",
      "TypeScript — em aprendizado",
    ],
  },
  {
    label: "Ferramentas",
    items: [
      "Figma",
      "Adobe XD",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "VS Code",
      "Git",
      "GitHub",
      "IA aplicada ao processo",
    ],
  },
];

const professionalSkills = [
  {
    title: "Pensamento de produto",
    description:
      "Considero objetivos de negócio, necessidades dos usuários, pesquisas, feedbacks e viabilidade da interface para apoiar decisões mais consistentes.",
  },
  {
    title: "Comunicação e clareza",
    description:
      "Conduzo briefings, alinhamentos e apresentações para transformar necessidades e feedbacks em decisões de interface mais claras.",
  },
  {
    title: "Resolução de problemas",
    description:
      "Organizo informações, identifico prioridades e transformo desafios em experiências digitais mais claras e funcionais.",
  },
  {
    title: "Colaboração multidisciplinar",
    description:
      "Atuo em parceria com clientes, design e desenvolvimento, conectando objetivos de negócio, experiência e viabilidade técnica.",
  },
  {
    title: "Validação e refinamento",
    description:
      "Apresento soluções, reúno feedbacks e realizo testes para aprimorar interfaces e apoiar decisões de produto.",
  },
  {
    title: "Aprendizado contínuo",
    description:
      "Mantenho uma rotina constante de evolução em design, desenvolvimento e produtos digitais, unindo prática profissional e estudo.",
  },
];

export default function Curriculo() {
  return (
    <main className="resume-main">
      <SiteHeader currentPage="resume" />

      <header className="resume-hero shell">
        <div className="resume-hero-layout">
          <div className="resume-identity">
            <h1>Leonardo Dariva</h1>
            <p className="resume-role">
              UI/UX Designer &amp; Front-end Developer
            </p>
            <div
              className="resume-contact-line"
              aria-label="Informações de contato"
            >
              <span><T id="resume.location" /></span>
              <a href="mailto:leodarivask@gmail.com">leodarivask@gmail.com</a>
            </div>
            <div
              className="resume-social-links"
              aria-label="Perfis profissionais"
            >
              <a
                href="https://www.linkedin.com/in/leonardo-dariva/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <ResumeDownloadButton />
        </div>
      </header>

      <div className="resume-content shell">
        <section className="resume-block">
          <h2 className="resume-panel-title">
            <span className="resume-section-icon">
              <UserRound aria-hidden="true" size={19} />
            </span>
            <T id="resume.summary" />
          </h2>
          <p className="resume-summary"><TranslatedText>{professionalSummary}</TranslatedText></p>
        </section>

        <section className="resume-block">
          <h2 className="resume-panel-title">
            <span className="resume-section-icon">
              <MessageSquare aria-hidden="true" size={19} />
            </span>
            <T id="resume.professional" />
          </h2>
          <div className="resume-professional-grid">
            {professionalSkills.map((skill) => (
              <article className="resume-professional-item" key={skill.title}>
                <h3><TranslatedText>{skill.title}</TranslatedText></h3>
                <p><TranslatedText>{skill.description}</TranslatedText></p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-block">
          <h2 className="resume-panel-title">
            <span className="resume-section-icon">
              <BriefcaseBusiness aria-hidden="true" size={19} />
            </span>
            <T id="resume.experience" />
          </h2>
          <div>
            <div className="resume-experience-list">
              {professionalExperiences.map((experience) => (
                <article className="resume-experience-item" key={experience.title}>
                  <div className="resume-experience-heading">
                    <div>
                      <h3><TranslatedText>{experience.title}</TranslatedText></h3>
                      <p className="resume-experience-organization"><TranslatedText>{experience.organization}</TranslatedText></p>
                    </div>
                    <p className="resume-experience-period"><TranslatedText>{experience.period}</TranslatedText></p>
                  </div>
                  <div className="resume-experience-copy">
                    {experience.descriptions.map((description) => (
                      <p className="resume-experience-description" key={description}><TranslatedText>{description}</TranslatedText></p>
                    ))}
                  </div>
                  <div className="resume-contributions">
                    <h4><T id="resume.keyContributions" /></h4>
                    <ul>
                      {experience.contributions.map((contribution) => (
                        <li key={contribution}><TranslatedText>{contribution}</TranslatedText></li>
                      ))}
                    </ul>
                  </div>
                  {experience.projects && (
                    <div className="resume-project-links">
                      {experience.projects.map((project) => (
                        <Link href={project.href} key={project.href}><TranslatedText>{project.label}</TranslatedText></Link>
                      ))}
                    </div>
                  )}
                  {experience.additionalNote && (
                    <aside className="resume-additional-work">
                      <h4><TranslatedText>{experience.additionalNote.title}</TranslatedText></h4>
                      <p><TranslatedText>{experience.additionalNote.description}</TranslatedText></p>
                    </aside>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {educationEntries.length > 0 && (
          <section className="resume-block">
            <h2 className="resume-panel-title">
              <span className="resume-section-icon">
                <GraduationCap aria-hidden="true" size={20} />
              </span>
              <T id="resume.education" />
            </h2>
            <div className="resume-experience-list">
              {educationEntries.map((entry) => (
                <article className="resume-record" key={`${entry.title}-${entry.institution}`}>
                  <h3>{entry.title}</h3>
                  <p>{entry.institution}</p>
                  {entry.period && <p>{entry.period}</p>}
                </article>
              ))}
            </div>
          </section>
        )}
        <section className="resume-block">
          <h2 className="resume-panel-title">
            <span className="resume-section-icon">
              <Code2 aria-hidden="true" size={20} />
            </span>
            <T id="resume.technical" />
          </h2>
          <div className="resume-technical-grid">
            {resumeSkillGroups.map((group) => (
              <div className="resume-technical-group" key={group.label}>
                <h3 className="resume-technical-label"><TranslatedText>{group.label}</TranslatedText></h3>
                <ul className="resume-technical-list">
                  {group.items.map((item) => {
                    const [skill, learningStatus] = item.split(" — ");
                    return (
                      <li key={item}>
                        <TranslatedText>{skill}</TranslatedText>
                        {learningStatus ? (
                          <span className="skill-learning-status"> — <TranslatedText>{learningStatus}</TranslatedText></span>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
