import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../../data/projects";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import CaseGallery from "./CaseGallery";
import { T, TranslatedText } from "../../i18n";

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
    description: project.summary ?? project.description,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const optionalSections = [
    { title: "projects.context", content: project.context },
    { title: "projects.role", content: project.role },
    { title: "projects.process", content: project.process },
    { title: "projects.solution", content: project.solution },
    { title: "projects.learnings", content: project.learnings },
  ].filter(({ content }) => Boolean(content));

  return (
    <main>
      <SiteHeader currentPage="projects" />
      <div className="project-navigation shell">
        <nav className="project-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/"><T id="navigation.home" /></Link>
            </li>
            <li>
              <Link href="/projetos"><T id="navigation.projects" /></Link>
            </li>
            <li aria-current="page"><TranslatedText>{project.title}</TranslatedText></li>
          </ol>
        </nav>
        <Link className="case-back-link" href="/projetos">
          <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />
          <span><T id="projects.all" /></span>
        </Link>
      </div>

      <section className="project-overview shell" aria-labelledby="project-title">
        <header className="project-overview-heading">
          <h1 id="project-title"><TranslatedText>{project.title}</TranslatedText></h1>
        </header>
        <div className="project-overview-content">
          <p><TranslatedText>{project.summary ?? project.description}</TranslatedText></p>
          <dl className="project-meta-grid">
            <div>
              <dt><T id="projects.category" /></dt>
              <dd><TranslatedText>{project.category}</TranslatedText></dd>
            </div>
            <div>
              <dt><T id="projects.technologies" /></dt>
              <dd><TranslatedText>{project.technologies.join(" · ")}</TranslatedText></dd>
            </div>
            <div>
              <dt><T id="projects.period" /></dt>
              <dd><TranslatedText>{project.period}</TranslatedText></dd>
            </div>
            {project.status && (
              <div>
                <dt><T id="projects.status" /></dt>
                <dd><TranslatedText>{project.status}</TranslatedText></dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <CaseGallery
        images={project.gallery}
        label={project.cover.label}
        title={project.title}
        tone={project.cover.tone}
        hasFollowingSections={optionalSections.length > 0}
      />

      {optionalSections.length > 0 && (
        <div className="project-case-sections shell">
          {optionalSections.map((section) => (
            <section className="project-case-section" key={section.title}>
              <h2><T id={section.title} /></h2>
              <p><TranslatedText>{section.content ?? ""}</TranslatedText></p>
            </section>
          ))}
        </div>
      )}

      <SiteFooter />
    </main>
  );
}
