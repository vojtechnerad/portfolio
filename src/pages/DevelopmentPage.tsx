import ProjectGrid from "../components/ProjectGrid";
import { projects, hasCategory } from "../data/projects";

export default function DevelopmentPage() {
  const devProjects = projects.filter((p) => hasCategory(p, "dev"));

  return (
    <div className="mx-auto max-w-6xl px-6">
      <ProjectGrid
        projects={devProjects}
        title="Development projekty"
        description="Frontend a full-stack projekty postavené na moderních technologiích. Každý projekt je ukázkou čistého kódu, promyšlené architektury a pozornosti k detailu."
      />
    </div>
  );
}
