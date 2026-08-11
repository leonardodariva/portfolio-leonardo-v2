import { projects } from "../../data/projects";
import ProjectGrid from "../components/ProjectGrid";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function Projetos() {
  return (
    <main>
      <SiteHeader currentPage="projects" />
      <section className="projects-page-hero shell">
        <h1>PORTFÓLIO</h1>
      </section>
      <section className="projects-page-list shell" aria-label="Todos os projetos">
        <ProjectGrid projects={projects} />
      </section>
      <SiteFooter />
    </main>
  );
}
