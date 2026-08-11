import type { Project } from "../../data/projects";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: readonly Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="work-grid">
      {projects.map((project) => (
        <ProjectCard project={project} total={projects.length} key={project.slug} />
      ))}
    </div>
  );
}
