import { useState, type FormEvent } from "react";

type ContactCtaProps = {
  className?: string;
};

type FormFields = {
  contact: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

export default function ContactCta({ className = "" }: ContactCtaProps) {
  const [formData, setFormData] = useState<FormFields>({
    contact: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [feedback, setFeedback] = useState("");

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (formData.contact.trim().length < 1) {
      nextErrors.contact = "Kontakt musí být vyplněn.";
    }

    if (formData.message.trim().length < 1) {
      nextErrors.message = "Zpráva musí být vyplněna.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFeedback("Vyplňte prosím obě pole.");
      return;
    }

    setFeedback("Formulář je pouze ukázkový a nic se neodesílá.");
  };

  const handleFieldChange = (field: keyof FormFields, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
    setFeedback("");
  };

  return (
    <section
      className={`rounded-2xl border border-border bg-surface p-10 text-center ${className}`.trim()}
    >
      <h2 className="text-2xl font-bold text-primary">Pojďme spolupracovat</h2>
      <p className="mt-3 text-secondary">
        Máte projekt nebo nápad? Napište mi přes formulář níže.
      </p>

      <form className="mt-8 space-y-5 text-left" onSubmit={handleSubmit} noValidate>
        <div>
          <label
            htmlFor="contact"
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Kontakt
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            value={formData.contact}
            onChange={(event) => handleFieldChange("contact", event.target.value)}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "contact-error" : undefined}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-primary outline-none transition-colors placeholder:text-secondary/70 focus:border-primary"
            placeholder="E-mail, telefon nebo jiný kontakt"
          />
          {errors.contact ? (
            <p id="contact-error" className="mt-2 text-sm text-red-600">
              {errors.contact}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Zpráva
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(event) => handleFieldChange("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-primary outline-none transition-colors placeholder:text-secondary/70 focus:border-primary"
            placeholder="Napište krátkou zprávu"
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Odeslat
          </button>
        </div>

        {feedback ? <p className="text-sm text-primary">{feedback}</p> : null}
      </form>
    </section>
  );
}