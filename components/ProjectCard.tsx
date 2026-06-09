"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/portfolioData";

type ProjectCardProps = {
  project: Project;
  onViewCaseStudy: (project: Project) => void;
};

export default function ProjectCard({
  project,
  onViewCaseStudy,
}: ProjectCardProps) {
  const visibleTech = project.technologies.slice(0, 4);

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-blue-400/40 hover:bg-white/[0.07]"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-transparent opacity-80 transition group-hover:opacity-100" />
      <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.22),rgba(139,92,246,0.16)),#0a0a0a] p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-blue-200">{project.type}</p>
          {project.status ? (
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-300">
              {project.status}
            </span>
          ) : null}
        </div>
        <div className="relative mt-5 h-28 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.imageAlt ?? `${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col">
        {project.badge ? (
          <span className="mb-4 w-fit rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-violet-200">
            {project.badge}
          </span>
        ) : null}
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-base font-medium text-zinc-300">
          {project.tagline}
        </p>

        {project.role ? (
          <p className="mt-5 text-sm text-zinc-400">
            Role:{" "}
            <span className="font-semibold text-zinc-200">{project.role}</span>
          </p>
        ) : null}
        {project.status ? (
          <p className="mt-2 text-sm text-zinc-400">
            Project Status:{" "}
            <span className="font-semibold text-blue-300">
              {project.status}
            </span>
          </p>
        ) : null}

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          Tech Stack
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {visibleTech.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <motion.button
          type="button"
          className="mt-7 inline-flex w-fit rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20"
          onClick={() => onViewCaseStudy(project)}
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          View Case Study
        </motion.button>
      </div>
    </motion.article>
  );
}
