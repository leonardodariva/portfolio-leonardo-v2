import Link from "next/link";
import Image from "next/image";
import type { Project } from "../../data/projects";
import { T, TranslatedText } from "../i18n";

type ProjectCardProps = {
  project: Project;
  total: number;
};

export default function ProjectCard({ project, total }: ProjectCardProps) {
  return (
    <article className="card">
      <div className={`card-image ${project.cover.tone}`}>
        {project.cover.image ? (
          <Image
            className="project-card-cover"
            src={project.cover.image}
            alt={`${project.title} — ${project.cover.label}`}
            width={0}
            height={0}
            sizes="(max-width: 800px) 100vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="mini-ui">
            <i />
            <b />
            <b />
            <b />
          </div>
        )}
        <span>{project.number}</span>
        <small>{project.cover.label}</small>
      </div>
      <div className="card-meta">
        <span><TranslatedText>{project.category}</TranslatedText></span>
        <span>{project.number} / {String(total).padStart(2, "0")}</span>
      </div>
      <h3><TranslatedText>{project.title}</TranslatedText></h3>
      <p><TranslatedText>{project.description}</TranslatedText></p>
      <div className="card-foot">
        <span><TranslatedText>{project.technologies.join(" · ")}</TranslatedText></span>
        <Link className="card-link" href={`/projetos/${project.slug}`}>
          <T id="projects.access" />
        </Link>
      </div>
    </article>
  );
}
