"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { useLocale } from "../i18n";

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

const submittedFieldNames: Record<FieldName, string> = {
  name: "nome",
  email: "email",
  message: "mensagem",
};

export default function ContactForm() {
  const { t } = useLocale();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    };
  }, []);

  function validate(form: HTMLFormElement) {
    const nextErrors: FieldErrors = {};
    const fields = form.elements.namedItem.bind(form.elements);

    (["name", "email", "message"] as FieldName[]).forEach((name) => {
      const field = fields(submittedFieldNames[name]) as HTMLInputElement | HTMLTextAreaElement;
      if (!field.validity.valid) nextErrors[name] = t(`form.${name}Error`);
    });

    return nextErrors;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setFeedback("");

    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);

    try {
      const body = new URLSearchParams();
      new FormData(form).forEach((value, key) => body.append(key, String(value)));
      body.set("form-name", "contato");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Contact form submission failed");

      form.reset();
      setErrors({});
      setFeedback(t("form.success"));
    } catch {
      setFeedback(t("form.error"));
    } finally {
      setIsSubmitting(false);
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
      feedbackTimer.current = setTimeout(() => setFeedback(""), 6000);
    }
  }

  function clearValidError(
    name: FieldName,
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = event.currentTarget;
    if (errors[name] && field.validity.valid) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  function fieldProps(name: FieldName) {
    const hasError = Boolean(errors[name]);
    return {
      name: submittedFieldNames[name],
      "aria-invalid": hasError,
      "aria-describedby": hasError ? `${name}-error` : undefined,
      onInput: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => clearValidError(name, event),
    };
  }

  return (
    <form
      className="contact-form"
      name="contato"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      noValidate
    >
      <input type="hidden" name="form-name" value="contato" />
      <p className="netlify-honeypot" aria-hidden="true">
        <label htmlFor="contact-bot-field">Não preencha este campo</label>
        <input id="contact-bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
      </p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="contact-name">{t("form.name")}</label>
          <input
            id="contact-name"
            required
            placeholder={t("form.namePlaceholder")}
            {...fieldProps("name")}
          />
          {errors.name && (
            <p className="contact-field-error" id="name-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="contact-company">
            {t("form.company")}
          </label>
          <input
            id="contact-company"
            name="empresa"
            placeholder={t("form.companyPlaceholder")}
          />
        </div>
        <div className="field field-wide">
          <label htmlFor="contact-email">{t("form.email")}</label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder={t("form.emailPlaceholder")}
            {...fieldProps("email")}
          />
          {errors.email && (
            <p className="contact-field-error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="field field-wide">
          <label htmlFor="contact-message">{t("form.message")}</label>
          <textarea
            id="contact-message"
            required
            rows={6}
            placeholder={t("form.messagePlaceholder")}
            {...fieldProps("message")}
          />
          {errors.message && (
            <p className="contact-field-error" id="message-error">
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button className="primary-action contact-submit" type="submit" disabled={isSubmitting}>
          {t(isSubmitting ? "form.sending" : "form.submit")} <Send aria-hidden="true" size={15} />
        </button>
      </div>
      <p className="contact-form-feedback" role="status" aria-live="polite">
        {feedback}
      </p>
    </form>
  );
}
