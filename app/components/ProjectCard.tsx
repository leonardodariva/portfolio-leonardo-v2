import Link from "next/link";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  total: number;
};

export default function ProjectCard({ project, total }: ProjectCardProps) {
  return (
    <article className="card">
      <div className={`card-image ${project.cover.tone}`}>
        <span>{project.number}</span>
        <div className="mini-ui">
          <i />
          <b />
          <b />
          <b />
        </div>
        <small>{project.cover.label}</small>
      </div>
      <div className="card-meta">
        <span>{project.category}</span>
        <span>{project.number} / {String(total).padStart(2, "0")}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="card-foot">
        <span>{project.technologies.join(" · ")}</span>
        <Link className="card-link" href={`/projetos/${project.slug}`}>
          Acessar projeto
        </Link>
      </div>
    </article>
  );
}
