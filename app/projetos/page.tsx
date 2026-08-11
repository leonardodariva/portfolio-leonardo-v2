import Link from "next/link";
import { projects } from "../../data/projects";
import InternalFooter from "../components/InternalFooter";
import InternalHeader from "../components/InternalHeader";

export default function Projetos() {
  const total = String(projects.length).padStart(2, "0");

  return (
    <main>
      <InternalHeader />
      <section className="inner-hero shell">
        <span>PROJETOS / 2026</span>
        <h1>
          Trabalhos selecionados
          <br />
          <em>e processos.</em>
        </h1>
        <div>
          <p>
            Uma coleção de projetos em design de experiência e desenvolvimento
            front-end. Cada case apresenta o problema, as decisões e o caminho
            até a solução.
          </p>
          <small>{total} PROJETOS · CONTEÚDO EM CONSTRUÇÃO</small>
        </div>
      </section>
      <section className="project-index shell" aria-label="Todos os projetos">
        {projects.map((project) => (
          <Link
            className="index-project"
            href={`/projetos/${project.slug}`}
            key={project.slug}
          >
            <div className={`index-visual ${project.cover.tone}`}>
              <span>{project.number}</span>
              <div className="mini-ui">
                <i />
                <b />
                <b />
                <b />
              </div>
              <small>{project.cover.label}</small>
            </div>
            <div className="index-info">
              <div>
                <span>{project.category}</span>
                <span>{project.number} / {total}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="index-foot">
                <span>{project.technologies.join(" · ")}</span>
                <b>Acessar projeto</b>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <InternalFooter />
    </main>
  );
}
