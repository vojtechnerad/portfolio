import ProjectGrid from "../components/ProjectGrid";
import { projects, hasCategory } from "../data/projects";

export default function DesignPage() {
  const designProjects = projects.filter((p) => hasCategory(p, "design"));

  return (
    <div className="mx-auto max-w-6xl px-6">
      <ProjectGrid
        projects={designProjects}
        title="UX/UI Design projekty"
        description="Návrhářské projekty zaměřené na uživatelský výzkum, prototypování a tvorbu design systémů. Každý projekt prošel kompletním designovým procesem."
      />
    </div>
  );
}
