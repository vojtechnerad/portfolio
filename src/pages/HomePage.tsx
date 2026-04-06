import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects, hasCategory } from "../data/projects";

export default function HomePage() {
  const devOnly = projects.filter((p) => p.category === "dev").slice(0, 1);
  const designOnly = projects
    .filter((p) => p.category === "design")
    .slice(0, 1);
  const bothProjects = projects
    .filter((p) => p.category === "both")
    .slice(0, 2);
  const featured = [...bothProjects, ...devOnly, ...designOnly];

  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center md:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-secondary">
          Frontend Developer &amp; UX/UI Designer
        </p>
        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-primary md:text-7xl">
          Vojtěch{" "}
          <span className="bg-gradient-to-r from-accent-dev to-accent-design bg-clip-text text-transparent">
            Nerad
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary">
          Propojuji kód s designem. Tvořím moderní webové aplikace s důrazem na
          uživatelský zážitek, přístupnost a čistou architekturu.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/projekty?filter=dev"
            className="rounded-full bg-accent-dev px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Development projekty
          </Link>
          <Link
            to="/projekty?filter=design"
            className="rounded-full bg-accent-design px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            UX/UI Design projekty
          </Link>
        </div>
      </section>

      {/* Rozdělovač – tři oblasti */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {/* Dev card */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-white p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-dev/10">
              <span className="text-xl">⌨️</span>
            </div>
            <h2 className="text-xl font-bold text-primary">Development</h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              React, TypeScript, Next.js a moderní frontend stack.
            </p>
            <p className="mt-2 text-xs text-secondary">
              {projects.filter((p) => hasCategory(p, "dev")).length} projektů
            </p>
            <Link
              to="/projekty?filter=dev"
              className="mt-5 inline-block text-sm font-semibold text-accent-dev hover:underline"
            >
              Zobrazit →
            </Link>
          </div>

          {/* Both card */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-blue-50 via-purple-50 to-white p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-accent-dev/10 to-accent-design/10">
              <span className="text-xl">🔗</span>
            </div>
            <h2 className="text-xl font-bold text-primary">
              Design &amp; Implementace
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              Projekty, kde jsem navrhl i implementoval — od výzkumu po kód.
            </p>
            <p className="mt-2 text-xs text-secondary">
              {projects.filter((p) => p.category === "both").length} projektů
            </p>
            <Link
              to="/projekty?filter=both"
              className="mt-5 inline-block text-sm font-semibold bg-gradient-to-r from-accent-dev to-accent-design bg-clip-text text-transparent hover:underline"
            >
              Zobrazit →
            </Link>
          </div>

          {/* Design card */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-purple-50 to-white p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-design/10">
              <span className="text-xl">🎨</span>
            </div>
            <h2 className="text-xl font-bold text-primary">UX/UI Design</h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              User research, wireframing, prototypování a design systémy.
            </p>
            <p className="mt-2 text-xs text-secondary">
              {projects.filter((p) => hasCategory(p, "design")).length} projektů
            </p>
            <Link
              to="/projekty?filter=design"
              className="mt-5 inline-block text-sm font-semibold text-accent-design hover:underline"
            >
              Zobrazit →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-primary">
            Vybrané projekty
          </h2>
          <p className="mb-12 text-lg text-secondary">
            Průřez mou prací z obou oblastí.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
