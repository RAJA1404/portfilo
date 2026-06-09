"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/portfolioData";
import MotionSection from "./MotionSection";
import SectionHeading from "./SectionHeading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormState>;

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

const socialLinks = [
  { label: "GitHub", href: profile.githubUrl },
  { label: "LinkedIn", href: profile.linkedinUrl },
  { label: "Email", href: `mailto:${profile.email}` },
];

const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID"; // TODO: Replace with your Formspree form ID

function validateForm(form: FormState) {
  const errors: FormErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSent, setIsSent] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setIsSent(false);
    setFormError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    setFormError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      setIsSent(true);
      setForm(initialForm);
    } catch {
      setIsSent(false);
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <MotionSection id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="The next build starts with a message."
        description="For internships, full-stack roles, AI projects, or collaboration opportunities, contact Raja directly."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.aside
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-sm font-semibold uppercase text-blue-300">
            Contact Details
          </p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Raja K C</h3>
          <div className="mt-7 space-y-5">
            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block text-lg font-semibold text-white transition hover:text-blue-300"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Phone</p>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="mt-1 block text-lg font-semibold text-white transition hover:text-blue-300"
              >
                {profile.phone}
              </a>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm font-semibold text-zinc-300">Social Links</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-blue-400/40 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex w-full justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400"
          >
            Email Raja
          </a>
        </motion.aside>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-8"
          noValidate
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <AnimatePresence>
            {isSent ? (
              <motion.div
                className="mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-4 text-sm font-medium text-emerald-200"
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
              >
                Message validated successfully. Please send it through email to
                continue the conversation.
              </motion.div>
            ) : null}
            {formError ? (
              <motion.div
                className="mb-6 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm font-medium text-red-200"
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
              >
                {formError}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-zinc-300">Name</span>
              <input
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/60"
                placeholder="Your name"
              />
              {errors.name ? (
                <p className="mt-2 text-sm text-red-300">{errors.name}</p>
              ) : null}
            </label>
            <label className="block">
              <span className="text-sm font-medium text-zinc-300">Email</span>
              <input
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/60"
                placeholder="you@example.com"
                type="email"
              />
              {errors.email ? (
                <p className="mt-2 text-sm text-red-300">{errors.email}</p>
              ) : null}
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-medium text-zinc-300">Message</span>
            <textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="mt-2 min-h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/60"
              placeholder="Tell Raja about the role, project, or collaboration."
            />
            {errors.message ? (
              <p className="mt-2 text-sm text-red-300">{errors.message}</p>
            ) : null}
          </label>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Open Email
            </a>
          </div>
        </motion.form>
      </div>
    </MotionSection>
  );
}
