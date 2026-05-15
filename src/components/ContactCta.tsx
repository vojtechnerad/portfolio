type ContactCtaProps = {
  className?: string;
};

export default function ContactCta({ className = "" }: ContactCtaProps) {
  return (
    <section
      className={`rounded-2xl border border-border bg-surface p-10 text-center ${className}`.trim()}
    >
      <h2 className="text-2xl font-bold text-primary">Pojďme spolupracovat</h2>
      <p className="mt-3 text-secondary">
        Máte projekt nebo nápad? Neváhejte mě kontaktovat.
      </p>
      <a
        href="mailto:nerv01@vse.cz"
        className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Napište mi
      </a>
    </section>
  );
}