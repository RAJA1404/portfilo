"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/portfolioData";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      className={`group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-blue-400/40 hover:bg-white/[0.06] ${
        featured ? "lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:p-8" : ""
      }`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-transparent opacity-80 transition group-hover:opacity-100" />
      <div
        className={`relative mb-6 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.22),rgba(139,92,246,0.16)),#0a0a0a] p-5 ${
          featured ? "lg:mb-0" : ""
        }`}
      >
        <p className="text-sm font-medium text-blue-200">{project.type}</p>
        <div className="mt-12 grid h-24 place-items-center rounded-xl border border-white/10 bg-black/25">
          <span className="text-3xl font-semibold text-white">
            {project.title
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")}
          </span>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col">
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
        <ul className="mt-5 space-y-3 text-sm text-zinc-300">
          {project.highlights.slice(0, featured ? 4 : 2).map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-7">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20"
            >
              View GitHub
            </a>
          ) : (
            <span className="inline-flex rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-400">
              Case study available on request
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
