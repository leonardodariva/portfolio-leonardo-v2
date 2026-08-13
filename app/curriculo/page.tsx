import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  MessageSquare,
  UserRound,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { T, TranslatedText } from "../i18n";

export const metadata: Metadata = {
  title: "Currículo | Leonardo Dariva",
  description:
    "Currículo profissional de Leonardo Dariva, UI/UX Designer e Front-end Developer.",
};

const professionalSummary =
  "UI/UX Designer & Front-end Developer com foco em transformar problemas complexos em experiências digitais claras, funcionais e centradas nas pessoas. Combino pensamento de produto, design de interfaces e desenvolvimento front-end para criar soluções consistentes, acessíveis e bem estruturadas.";

const professionalPhone: string | null = null;

const resumeSkillGroups = [
  {
    label: "Design & UI/UX",
    items: [
      "UI Design",
      "UX Research",
      "Arquitetura da Informação",
      "Wireframing",
      "Prototipação",
      "Design Systems",
      "Acessibilidade",
    ],
  },
  {
    label: "Front-end",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Responsive Design",
      "Componentização",
    ],
  },
  {
    label: "Ferramentas",
    items: [
      "Figma",
      "VS Code",
      "Adobe XD",
      "GitHub",
      "Adobe Creative Suite",
      "DevTools",
    ],
  },
];

const professionalSkills = [
  {
    title: "Comunicação clara",
    description:
      "Capacidade de traduzir necessidades, ideias e decisões de produto em soluções compreensíveis.",
  },
  {
    title: "Pensamento centrado no usuário",
    description:
      "Atenção ao contexto, à usabilidade e à clareza em cada etapa da experiência.",
  },
  {
    title: "Colaboração",
    description:
      "Facilidade para trabalhar em conjunto com clientes, times criativos e desenvolvimento.",
  },
  {
    title: "Aprendizado contínuo",
    description:
      "Interesse constante em aprimorar repertório de design, tecnologia e produtos digitais.",
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
              {professionalPhone ? (
                <a href={`tel:${professionalPhone}`}>{professionalPhone}</a>
              ) : (
                <span><T id="resume.phone" /></span>
              )}
            </div>
            <div
              className="resume-social-links"
              aria-label="Perfis profissionais"
            >
              <a
                href="https://github.com/leonardodariva"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leonardo-dariva/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <a
            className="resume-download"
            href="/curriculo-leonardo-dariva.pdf"
            download
          >
            <T id="resume.download" /> <Download aria-hidden="true" size={16} />
          </a>
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
          <div className="resume-record">
            <p className="resume-status">
              <T id="resume.experiencePending" />
            </p>
          </div>
        </section>

        <section className="resume-block">
          <h2 className="resume-panel-title">
            <span className="resume-section-icon">
              <GraduationCap aria-hidden="true" size={20} />
            </span>
            <T id="resume.education" />
          </h2>
          <div className="resume-record">
            <p className="resume-status">
              <T id="resume.educationPending" />
            </p>
          </div>
        </section>
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
                  {group.items.map((item) => <li key={item}><TranslatedText>{item}</TranslatedText></li>)}
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
