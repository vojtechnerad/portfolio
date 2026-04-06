export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
        O mně
      </h1>

      <div className="mt-10 grid gap-12 md:grid-cols-3">
        {/* Photo placeholder */}
        <div className="flex items-start justify-center">
          <div className="flex h-56 w-56 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-dev/20 to-accent-design/20">
            <span className="text-5xl font-bold text-primary/20">VN</span>
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

          {/* Skills */}
          <div className="grid gap-6 pt-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-dev">
                <span className="inline-block h-2 w-2 rounded-full bg-accent-dev" />
                Development
              </h3>
              <ul className="space-y-1 text-sm text-secondary">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Git & CI/CD</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-design">
                <span className="inline-block h-2 w-2 rounded-full bg-accent-design" />
                UX/UI Design
              </h3>
              <ul className="space-y-1 text-sm text-secondary">
                <li>Figma</li>
                <li>User Research</li>
                <li>Wireframing & Prototyping</li>
                <li>Design Systems</li>
                <li>Usability Testing</li>
              </ul>
            </div>
          </div>
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
