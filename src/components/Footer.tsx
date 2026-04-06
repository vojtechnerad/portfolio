export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-secondary">
          &copy; {new Date().getFullYear()} Vojtěch Nerad. Všechna práva
          vyhrazena.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:info@example.com"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
