import SkillItem from "../components/SkillItem";

const developmentSkills = [
  { label: "Angular", level: 90 },
  { label: "React", level: 80 },
  { label: "TypeScript", level: 80 },
  { label: "Tailwind CSS", level: 70 },
  { label: "Node.js", level: 40 },
  { label: "Git & CI/CD", level: 70 },
];

const designSkills = [
  { label: "Figma", level: 84 },
  { label: "Wireframing & Prototyping", level: 80 },
  { label: "Design Systems", level: 80 },
  { label: "User Research", level: 60 },
  { label: "Usability Testing", level: 60 },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
        O mně
      </h1>

      <div className="mt-10 grid gap-12 md:grid-cols-3">
        {/* Photo placeholder */}
        <div className="flex items-start justify-center">
          <div className="flex h-56 w-56 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-dev/20 to-accent-design/20 overflow-hidden">
            <img src="vojtech-nerad.png" alt="Vojtěch Nerad" width="100%" className="opacity-[.85]" />
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <p className="text-lg leading-relaxed text-secondary">
            Jsem Vojtěch Nerad — frontend developer s přesahem do UX/UI
            designu. Studuji na univerzitě a zaměřuji se na propojení
            technického řemesla s promyšleným návrhem uživatelských rozhraní.
          </p>
          <p className="text-lg leading-relaxed text-secondary">
            Věřím, že nejlepší digitální produkty vznikají na průsečíku kódu a
            designu. Proto se věnuji oběma disciplínám — od user research a
            wireframů přes prototypy až po pixelperfektní implementaci v Reactu.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="grid gap-6 pt-15 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-dev">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-dev" />
            Development
          </h3>
          <ul className="space-y-4">
            {developmentSkills.map((skill) => (
              <SkillItem
                key={skill.label}
                label={skill.label}
                level={skill.level}
                accent="dev"
              />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-design">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-design" />
            UX/UI Design
          </h3>
          <ul className="space-y-4">
            {designSkills.map((skill) => (
              <SkillItem
                key={skill.label}
                label={skill.label}
                level={skill.level}
                accent="design"
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Contact CTA */}
      <section className="mt-20 rounded-2xl border border-border bg-surface p-10 text-center">
        <h2 className="text-2xl font-bold text-primary">Pojďme spolupracovat</h2>
        <p className="mt-3 text-secondary">
          Máte projekt nebo nápad? Neváhejte mě kontaktovat.
        </p>
        <a
          href="mailto:info@example.com"
          className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Napište mi
        </a>
      </section>
    </div>
  );
}
