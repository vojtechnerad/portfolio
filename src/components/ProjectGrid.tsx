import { useState } from "react";
import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

type FilterValue = "all" | "dev" | "design" | "both";

interface ProjectGridProps {
  projects: Project[];
  title: string;
  description: string;
  initialFilter?: "dev" | "design" | "both";
}

export default function ProjectGrid({
  projects,
  title,
  description,
  initialFilter,
}: ProjectGridProps) {
  const [filter, setFilter] = useState<FilterValue>(initialFilter ?? "all");

  const filtered =
    filter === "all"
      ? projects
      : filter === "both"
        ? projects.filter((p) => p.category === "both")
        : projects.filter(
            (p) => p.category === filter || p.category === "both",
          );

  const filterOptions: { value: FilterValue; label: string }[] = [
    { value: "all", label: "Všechny" },
    { value: "dev", label: "Development" },
    { value: "design", label: "UX/UI Design" },
    { value: "both", label: "Design & Implementace" },
  ];

  return (
    <section className="py-16">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-secondary">
          {description}
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              filter === opt.value
                ? "bg-primary text-white"
                : "bg-surface text-secondary hover:bg-border"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-secondary">
          Žádné projekty v této kategorii.
        </p>
      )}
    </section>
  );
}
