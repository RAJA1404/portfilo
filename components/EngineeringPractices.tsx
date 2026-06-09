"use client";

import { motion } from "framer-motion";
import MotionSection from "./MotionSection";
import SectionHeading from "./SectionHeading";

const practices = [
  "Git Version Control",
  "GitHub Workflow",
  "CI/CD Pipeline",
  "Automated Deployment",
  "Responsive Design",
  "Performance Optimization",
];

const workflowSteps = [
  "Code",
  "GitHub",
  "Build & Validation",
  "Vercel Deployment",
  "Live Website",
];

export default function EngineeringPractices() {
  return (
    <MotionSection id="engineering-practices">
      <SectionHeading
        eyebrow="Engineering Practices"
        title="Modern delivery habits behind the portfolio."
        description="A lightweight development workflow focused on version control, validation, deployment, responsive UI, and performance-aware delivery."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.article
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="inline-flex max-w-full rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-blue-200 sm:tracking-[0.18em]">
            Automated Deployment via GitHub Actions / Vercel
          </span>
          <p className="mt-6 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Portfolio updates follow a GitHub-first workflow with build
            verification before deployment and automatic publishing when changes
            are pushed to the main branch on Vercel.
          </p>
        </motion.article>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {practices.map((practice) => (
            <div
              key={practice}
              className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-semibold text-zinc-200 transition hover:border-blue-400/40 hover:bg-white/[0.06] sm:p-5"
            >
              {practice}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur sm:p-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid gap-3 md:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <div key={step} className="relative">
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm font-semibold text-white">
                {step}
              </div>
              {index < workflowSteps.length - 1 ? (
                <div className="mx-auto my-2 h-6 w-px bg-gradient-to-b from-blue-400 to-violet-400 md:absolute md:-right-3 md:top-1/2 md:mx-0 md:my-0 md:h-px md:w-6 md:-translate-y-1/2 md:bg-gradient-to-r" />
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>
    </MotionSection>
  );
}
