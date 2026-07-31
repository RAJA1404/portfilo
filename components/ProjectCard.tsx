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
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 p-5 sm:p-6"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-transparent opacity-80 transition group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-3xl border border-white/10 transition-colors duration-300 group-hover:border-blue-400/40" />

      <div className="relative mb-5 overflow-hidden rounded-2xl bg-black/20 p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <p className="text-sm font-medium text-blue-400">{project.type}</p>
          {project.status ? (
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
              {project.status}
            </span>
          ) : null}
        </div>
        <div className="relative mt-4 h-32 overflow-hidden rounded-xl bg-white/5 sm:mt-5 sm:h-36">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.imageAlt ?? `${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : null}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col">
        {project.badge ? (
          <span className="mb-4 w-fit rounded-full bg-blue-500/20 px-3 py-1 text-[10px] font-bold tracking-widest text-blue-300 uppercase">
            {project.badge}
          </span>
        ) : null}
        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-400">
          {project.tagline}
        </p>

        {project.role ? (
          <p className="mt-5 text-sm text-zinc-500">
            Role:{" "}
            <span className="font-semibold text-zinc-300">{project.role}</span>
          </p>
        ) : null}
        {project.status ? (
          <p className="mt-2 text-sm text-zinc-500">
            Status:{" "}
            <span className="font-semibold text-blue-400">
              {project.status}
            </span>
          </p>
        ) : null}

        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Tech Stack
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {visibleTech.map((technology) => (
            <span
              key={technology}
              className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <motion.button
          type="button"
          className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/20 sm:w-fit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onViewCaseStudy(project)}
        >
          View Case Study
        </motion.button>
      </div>
    </motion.article>
  );
}
