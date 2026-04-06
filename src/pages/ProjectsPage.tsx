import { useSearchParams } from "react-router-dom";
import ProjectGrid from "../components/ProjectGrid";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter");

  return (
    <div className="mx-auto max-w-6xl px-6">
      <ProjectGrid
        projects={projects}
        title="Projekty"
        description="Všechny moje univerzitní projekty — od čistého kódu přes návrh rozhraní až po projekty propojující obojí."
        initialFilter={
          initialFilter === "dev" ||
          initialFilter === "design" ||
          initialFilter === "both"
            ? initialFilter
            : undefined
        }
      />
    </div>
  );
}
