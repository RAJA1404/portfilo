"use client";

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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/50 sm:p-6">
      <div className="relative mb-5 overflow-hidden rounded-lg border border-border bg-black/10 p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <p className="text-sm font-medium text-primary">{project.type}</p>
          {project.status ? (
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
              {project.status}
            </span>
          ) : null}
        </div>
        <div className="relative mt-4 h-32 overflow-hidden rounded-lg border border-border bg-background/50 sm:mt-5 sm:h-36">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.imageAlt ?? `${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
          ) : null}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col">
        {project.badge ? (
          <span className="mb-4 w-fit rounded-full border border-border bg-transparent px-3 py-1 text-[10px] font-bold tracking-widest text-foreground uppercase">
            {project.badge}
          </span>
        ) : null}
        <h3 className="text-xl font-bold text-foreground font-display tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-base text-muted leading-relaxed">
          {project.tagline}
        </p>

        {project.role ? (
          <p className="mt-5 text-sm text-muted">
            Role:{" "}
            <span className="font-semibold text-foreground">{project.role}</span>
          </p>
        ) : null}
        {project.status ? (
          <p className="mt-2 text-sm text-muted">
            Status:{" "}
            <span className="font-semibold text-primary">
              {project.status}
            </span>
          </p>
        ) : null}

        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted">
          Tech Stack
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {visibleTech.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-border bg-transparent px-2.5 py-1 text-xs font-medium text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-full border border-border bg-transparent px-5 text-sm font-semibold text-foreground transition-colors hover:bg-border/30 sm:w-fit"
          onClick={() => onViewCaseStudy(project)}
        >
          View Case Study
        </button>
      </div>
    </article>
  );
}
