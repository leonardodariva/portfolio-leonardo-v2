import { ArrowDown, ArrowRight, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { projects } from "../data/projects";
import ContactForm from "./components/ContactForm";
import ProjectGrid from "./components/ProjectGrid";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import TechnicalSkills from "./components/TechnicalSkills";
import { T } from "./i18n";

const Arrow = () => <span aria-hidden="true">↗</span>;

const heroSocialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leonardo-dariva/",
    Icon: FaLinkedin,
  },
];

const workflowSteps = ["understand", "structure", "build", "refine"] as const;

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="inicio">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">
              <i /> <T id="home.available" />
            </div>
            <h1>
              <T id="home.hero1" />
              <br />
              <em><T id="home.hero2" /></em>
            </h1>
            <div className="hero-bottom">
              <p>
                <T id="home.introStart" />{" "}<strong><T id="home.introRole" /></strong>{" "}<T id="home.introEnd" />
              </p>
              <div className="hero-actions">
                <a className="primary primary-action" href="#projetos">
                  <T id="home.viewProjects" /> <ArrowDown aria-hidden="true" size={14} />
                </a>
                <a className="secondary-action" href="#contato">
                  <T id="home.contact" /> <Send aria-hidden="true" size={16} />
                </a>
                {heroSocialLinks.map(({ label, href, Icon }) => (
                  <a
                    className="hero-action-social"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} de Leonardo Dariva`}
                    title={label}
                    key={label}
                  >
                    <Icon aria-hidden="true" size={19} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="prototype-toolbar">
              <span>PROTOTYPE / 01</span>
              <div><i /><i /><i /></div>
            </div>
            <div className="prototype-canvas">
              <div className="prototype-nav"><i /><span /><span /><b /></div>
              <div className="prototype-panel">
                <span className="prototype-label">DIGITAL EXPERIENCE</span>
                <strong>Interfaces que<br />fazem sentido.</strong>
                <div className="prototype-lines"><i /><i /></div>
                <div className="prototype-button">EXPLORE <span>↗</span></div>
              </div>
              <div className="prototype-card">
                <span>UX / UI</span>
                <b>64%</b>
                <div><i /></div>
              </div>
              <div className="prototype-grid"><i /><i /><i /><i /></div>
              <span className="prototype-note">8 PT GRID</span>
            </div>
          </div>
        </div>
        <a className="hero-scroll-indicator" href="#sobre">
          <span><T id="home.scroll" /></span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="about shell" id="sobre">
        <div className="about-label"><T id="home.aboutLabel" /></div>
        <div className="about-content">
          <div className="about-portrait">
            <Image
              src="/images/about-leonardo.jpg"
              alt="Leonardo Dariva trabalhando com uma câmera"
              width={724}
              height={1086}
            />
          </div>
          <div className="about-main">
            <p className="big-copy">
              <T id="home.about1" />{" "}<em><T id="home.about2" /></em><T id="home.about3" />
            </p>
            <div className="about-cols">
              <p>
                <T id="home.aboutText" />
              </p>
            </div>
            <div className="about-ai">
              <span><T id="home.aboutAiLabel" /></span>
              <p><T id="home.aboutAiText" /></p>
            </div>
            <div className="about-tags">
              <span>UI/UX Design</span>
              <span>Figma</span>
              <span>HTML &amp; CSS</span>
              <span>JavaScript</span>
            </div>
            <div className="about-actions">
              <a className="primary primary-action" href="/curriculo">
                <T id="home.viewResume" /> <Arrow />
              </a>
              <a className="secondary-action" href="#contato">
                <T id="home.contact" /> <Send aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="work-method shell" aria-labelledby="work-method-title">
        <header className="work-method-heading">
          <h2 id="work-method-title"><T id="workflow.title" /></h2>
        </header>
        <ol className="work-method-grid">
          {workflowSteps.map((step, index) => (
            <li className="work-method-card" key={step}>
              <span className="work-method-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3><T id={`workflow.steps.${step}.title`} /></h3>
                <p><T id={`workflow.steps.${step}.description`} /></p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="work shell" id="projetos">
        <div className="section-head">
          <span><T id="home.projectsLabel" /></span>
          <Link className="section-link" href="/projetos">
            <T id="home.allProjects" /> <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </div>
        <ProjectGrid projects={projects} />
      </section>

      <section className="skills shell" id="skills">
        <div className="section-head">
          <span><T id="home.skillsLabel" /></span>
        </div>
        <TechnicalSkills />
      </section>
      <section className="contact" id="contato">
        <div className="shell">
          <span className="footer-label"><T id="home.contactLabel" /></span>
          <div className="contact-layout">
            <div className="contact-heading">
              <h2><T id="home.contact1" /></h2>
              <p>
                <T id="home.contactText" />
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
