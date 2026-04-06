import { useParams, Link } from "react-router-dom";
import { projects, categoryLabels } from "../data/projects";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="text-4xl font-bold text-primary">
          Projekt nenalezen
        </h1>
        <p className="mt-4 text-secondary">
          Tento projekt neexistuje nebo byl odstraněn.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Zpět na hlavní stránku
        </Link>
      </div>
    );
  }

  const categoryColor =
    project.category === "dev"
      ? "text-accent-dev"
      : project.category === "design"
        ? "text-accent-design"
        : "bg-gradient-to-r from-accent-dev to-accent-design bg-clip-text text-transparent";

  const dotStyle =
    project.category === "both"
      ? "bg-gradient-to-r from-accent-dev to-accent-design"
      : project.category === "dev"
        ? "bg-accent-dev"
        : "bg-accent-design";

  const gradientBg =
    project.category === "dev"
      ? "from-blue-50 to-blue-100"
      : project.category === "design"
        ? "from-purple-50 to-purple-100"
        : "from-blue-50 via-purple-50 to-purple-100";

  const tagStyle =
    project.category === "dev"
      ? "bg-blue-50 text-blue-700"
      : project.category === "design"
        ? "bg-purple-50 text-purple-700"
        : "bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700";

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-secondary">
        <Link to="/" className="hover:text-primary transition-colors">
          Domů
        </Link>
        <span>/</span>
        <Link
          to={`/projekty${project.category !== "both" ? `?filter=${project.category}` : ""}`}
          className="hover:text-primary transition-colors"
        >
          Projekty
        </Link>
        <span>/</span>
        <span className="text-primary">{project.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <span className={`inline-block h-2.5 w-2.5 rounded-full ${dotStyle}`} />
          <span className={`text-sm font-semibold uppercase tracking-wider ${categoryColor}`}>
            {categoryLabels[project.category]}
          </span>
          {project.year && (
            <>
              <span className="text-border">•</span>
              <span className="text-sm text-secondary">{project.year}</span>
            </>
          )}
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-4 text-xl leading-relaxed text-secondary">
          {project.description}
        </p>

        {project.role && (
          <p className="mt-4 text-sm text-secondary">
            <span className="font-semibold text-primary">Role:</span>{" "}
            {project.role}
          </p>
        )}

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${tagStyle}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Hero image placeholder */}
      <div
        className={`mb-16 flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br md:h-96 ${gradientBg}`}
      >
        <span className="text-6xl font-bold text-primary/10">
          {project.title.slice(0, 3).toUpperCase()}
        </span>
      </div>

      {/* Overview */}
      {project.overview && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-primary">
            O projektu
          </h2>
          <p className="text-lg leading-relaxed text-secondary">
            {project.overview}
          </p>
          {project.subject && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm">
              <span className="font-semibold text-primary">Předmět:</span>
              <span className="text-secondary">{project.subject}</span>
            </div>
          )}
        </section>
      )}

      {/* Process */}
      {project.process && project.process.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary">Proces</h2>
          <ol className="space-y-4">
            {project.process.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${dotStyle}`}
                >
                  {i + 1}
                </span>
                <p className="pt-1 text-secondary">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Result */}
      {project.result && (
        <section className="mb-12 rounded-2xl border border-border bg-surface p-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">Výsledek</h2>
          <p className="text-lg leading-relaxed text-secondary">
            {project.result}
          </p>
        </section>
      )}

      {/* Links */}
      {(project.link || project.github) && (
        <div className="mb-12 flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Živá ukázka ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface"
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}

      {/* Back link */}
      <div className="border-t border-border pt-8">
        <Link
          to="/"
          className="text-sm font-semibold text-secondary transition-colors hover:text-primary"
        >
          ← Zpět na všechny projekty
        </Link>
      </div>
    </article>
  );
}
