import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { categoryLabels } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function getCategoryStyle(category: Project["category"]) {
  switch (category) {
    case "dev":
      return {
        gradient: "from-blue-50 to-blue-100",
        dot: "bg-accent-dev",
        tagBg: "bg-blue-50 text-blue-700",
      };
    case "design":
      return {
        gradient: "from-purple-50 to-purple-100",
        dot: "bg-accent-design",
        tagBg: "bg-purple-50 text-purple-700",
      };
    case "both":
      return {
        gradient: "from-blue-50 via-purple-50 to-purple-100",
        dot: "bg-gradient-to-r from-accent-dev to-accent-design",
        tagBg: "bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700",
      };
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const style = getCategoryStyle(project.category);

  return (
    <Link to={`/project/${project.id}`} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg">
        {/* Image placeholder */}
        <div
          className={`flex h-48 items-center justify-center bg-gradient-to-br ${style.gradient}`}
        >
          <span className="text-4xl font-bold text-primary/15">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block h-2 w-2 rounded-full ${style.dot}`}
            />
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              {categoryLabels[project.category]}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-primary group-hover:text-accent-dev transition-colors">
            {project.title}
          </h3>

          <p className="flex-1 text-sm leading-relaxed text-secondary">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-xs font-medium ${style.tagBg}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
