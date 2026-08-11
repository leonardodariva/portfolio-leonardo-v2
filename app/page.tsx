import { ArrowDown, ArrowRight, Code2, PenTool, Send, Wrench } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/projects";
import ContactForm from "./components/ContactForm";
import ProjectGrid from "./components/ProjectGrid";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const Arrow = () => <span aria-hidden="true">↗</span>;

const heroSocialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/leonardodariva",
    Icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leonardo-dariva/",
    Icon: FaLinkedin,
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="inicio">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">
              <i /> Disponível para oportunidades
            </div>
            <h1>
              Design com intenção.
              <br />
              <em>Código com propósito.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                Sou Leonardo Dariva,{" "}
                <strong>UI/UX Designer & Front-end Developer.</strong> Transformo
                problemas complexos em experiências digitais claras, funcionais e
                bem construídas.
              </p>
              <div className="hero-actions">
                <a className="primary primary-action" href="#projetos">
                  Ver projetos <ArrowDown aria-hidden="true" size={14} />
                </a>
                <a className="secondary-action" href="#contato">
                  Entrar em contato <Send aria-hidden="true" size={16} />
                </a>
                {heroSocialLinks.map(({ label, href, Icon }) => (
                  <a
                    className="hero-action-social"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
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
          <span>ROLE PARA EXPLORAR</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="about shell" id="sobre">
        <div className="about-label">01 / SOBRE</div>
        <div className="about-content">
          <div className="about-portrait">
            <img
              src="/about-placeholder.png"
              alt="Composição abstrata temporária"
            />
            <div className="about-tags">
              <span>Figma</span>
              <span>UI/UX</span>
              <span>Front-end</span>
              <span>VS Code</span>
            </div>
          </div>
          <div className="about-main">
            <p className="big-copy">
              Eu projeto experiências e entendo{" "}
              <em>como elas ganham vida no código.</em>
            </p>
            <div className="about-cols">
              <p>
                Atuo na interseção entre design e desenvolvimento, combinando
                pensamento centrado no usuário, clareza visual e conhecimento
                técnico para criar produtos digitais consistentes. Acredito que
                boas interfaces vão além da estética: resolvem problemas,
                reduzem fricção e tornam a tecnologia mais humana.
              </p>
            </div>
            <div className="about-actions">
              <a className="primary primary-action" href="/curriculo">
                Ver currículo <Arrow />
              </a>
              <a className="secondary-action" href="#contato">
                Entrar em contato <Send aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="work shell" id="projetos">
        <div className="section-head">
          <span>02 / PROJETOS</span>
          <Link className="section-link" href="/projetos">
            Ver todos os projetos <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </div>
        <ProjectGrid projects={projects} />
      </section>

      <section className="skills shell" id="skills">
        <div className="section-head">
          <span>03 / SKILLS</span>
        </div>
        <div className="skills-grid">
          <article className="skill-area">
            <header className="skill-area-head">
              <div className="skill-category">
                <span className="skill-icon"><PenTool aria-hidden="true" size={17} /></span>
                <span>DESIGN &amp; UX</span>
              </div>
              <h3>Projetar com clareza.</h3>
              <p>
                Entender problemas e projetar experiências claras e funcionais.
              </p>
            </header>
            <ul className="skill-list">
              <li>UI Design</li>
              <li>UX Research</li>
              <li>Arquitetura da Informação</li>
              <li>Wireframing</li>
              <li>Prototipação</li>
              <li>Design Systems</li>
              <li>Acessibilidade</li>
            </ul>
          </article>
          <article className="skill-area">
            <header className="skill-area-head">
              <div className="skill-category">
                <span className="skill-icon"><Code2 aria-hidden="true" size={17} /></span>
                <span>FRONT-END</span>
              </div>
              <h3>Construir com propósito.</h3>
              <p>
                Transformar decisões de design em interfaces responsivas e bem
                estruturadas.
              </p>
            </header>
            <ul className="skill-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Responsive Design</li>
              <li>Componentização</li>
            </ul>
          </article>
          <article className="skill-area">
            <header className="skill-area-head">
              <div className="skill-category">
                <span className="skill-icon"><Wrench aria-hidden="true" size={17} /></span>
                <span>FERRAMENTAS</span>
              </div>
              <h3>Dar forma ao processo.</h3>
              <p>Ferramentas para criar, desenvolver e colaborar com fluidez.</p>
            </header>
            <ul className="skill-list">
              <li>Figma</li>
              <li>VS Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Adobe Creative Suite</li>
              <li>DevTools</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="contact" id="contato">
        <div className="shell">
          <span className="footer-label">04 / CONTATO</span>
          <div className="contact-layout">
            <div className="contact-heading">
              <h2>
                Vamos construir
                <br />
                algo que <em>faça sentido?</em>
              </h2>
              <p>
                Estou aberto a oportunidades, projetos e boas conversas sobre
                design e tecnologia. Conte um pouco sobre o que você tem em
                mente.
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
