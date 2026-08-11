import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getNextProject,
  getProjectBySlug,
  projects,
} from "../../../data/projects";
import InternalFooter from "../../components/InternalFooter";
import InternalHeader from "../../components/InternalHeader";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Leonardo Dariva`,
    description: project.description,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const total = String(projects.length).padStart(2, "0");
  const nextProject = getNextProject(project.slug);
  const optionalSections = [
    { label: "DESAFIO", title: "O desafio.", content: project.challenge },
    { label: "PROCESSO", title: "O processo.", content: project.process },
    { label: "SOLUÇÃO", title: "A solução.", content: project.solution },
    { label: "RESULTADO", title: "O resultado.", content: project.result },
  ].filter(({ content }) => Boolean(content));

  return (
    <main>
      <InternalHeader />
      <section className="case-hero shell">
        <Link href="/projetos">← Todos os projetos</Link>
        <div className="case-meta">
          <span>{project.number} / {total}</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </section>

      <section
        className={`case-cover shell case-cover-${project.cover.tone}`}
        aria-label={`Capa de ${project.title}`}
      >
        <div className="browser" aria-hidden="true">
          <div className="browser-top">
            <i />
            <i />
            <i />
          </div>
          <div className="skeleton">
            <span />
            <b />
            <b />
            <div />
            <div />
          </div>
        </div>
        <small>{project.cover.label}</small>
      </section>

      <section className="case-summary shell">
        <div>
          <span>VISÃO GERAL</span>
          <h2>
            O projeto em
            <br />
            poucas palavras.
          </h2>
        </div>
        <div className="summary-text">
          <p>{project.description}</p>
          <dl>
            <div>
              <dt>CATEGORIA</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>TECNOLOGIAS</dt>
              <dd>{project.technologies.join(" · ")}</dd>
            </div>
            <div>
              <dt>ANO</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd>Conteúdo em construção</dd>
            </div>
          </dl>
        </div>
      </section>

      {optionalSections.length > 0 && (
        <section className="case-details shell">
          {optionalSections.map((section) => (
            <article key={section.label}>
              <span>{section.label}</span>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </article>
          ))}
        </section>
      )}

      {nextProject && (
        <section className="case-next shell">
          <span>PRÓXIMO PROJETO</span>
          <Link href={`/projetos/${nextProject.slug}`}>
            <span>{nextProject.title}</span>
            <b>{nextProject.number}</b>
          </Link>
        </section>
      )}
      <InternalFooter />
    </main>
  );
}
