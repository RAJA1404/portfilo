"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/portfolioData";

type FeaturedProjectProps = {
  project: Project;
};

const architecture = [
  "Citizen Portal",
  "Secure API Layer",
  "Role Dashboards",
  "MongoDB + Cloud Storage",
];

const stackGroups = [
  { label: "Frontend", items: ["React.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js"] },
  { label: "Database", items: ["MongoDB"] },
  { label: "Cloud", items: ["AWS S3"] },
  { label: "Services", items: ["Twilio", "Nodemailer"] },
];

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-blue-950/20 backdrop-blur">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            Featured Project
          </div>
          <h3 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
            RightToKnow - RTI Management System
          </h3>
          <p className="mt-4 text-lg font-medium text-zinc-200">
            A Full Stack RTI Management Platform for Citizens and Government
            Departments.
          </p>
          <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
            {project.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(139,92,246,0.12)),#07070a] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <p className="text-sm font-semibold uppercase text-violet-200">
            Architecture
          </p>
          <div className="mt-6 space-y-4">
            {architecture.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-4"
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/15 text-sm font-semibold text-blue-200">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-white">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-300">
              Platform Features
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {project.highlights.map((feature) => (
                <motion.div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-medium text-zinc-200 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-violet-300">
              Technology Stack
            </p>
            <div className="mt-5 space-y-3">
              {stackGroups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-2xl border border-white/10 bg-black/25 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {group.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
