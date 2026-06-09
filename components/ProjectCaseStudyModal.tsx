"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/portfolioData";

type ProjectCaseStudyModalProps = {
  project: Project | null;
  onClose: () => void;
};

type CaseStudyListProps = {
  title: string;
  items: string[];
};

function CaseStudyList({ title, items }: CaseStudyListProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/25 p-5">
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
        {title}
      </h4>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectCaseStudyModal({
  project,
  onClose,
}: ProjectCaseStudyModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.__portfolioLenis?.stop();
    window.addEventListener("keydown", closeOnEscape);
    const focusFrame = requestAnimationFrame(() => {
      scrollContainerRef.current?.focus({ preventScroll: true });
    });

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = originalOverflow;
      window.__portfolioLenis?.start();
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[90] bg-black/70 px-4 py-5 backdrop-blur-xl sm:px-6"
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onMouseDown={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-case-study-title"
            className="mx-auto flex max-h-[calc(100dvh-2.5rem)] max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] shadow-2xl shadow-blue-950/30"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="shrink-0 flex items-start justify-between gap-5 border-b border-white/10 p-6 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase text-blue-300">
                  Case Study / {project.status}
                </p>
                <h3
                  id="project-case-study-title"
                  className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl"
                >
                  {project.title}
                </h3>
                <p className="mt-3 max-w-3xl text-lg text-zinc-300">
                  {project.tagline}
                </p>
              </div>
              <button
                type="button"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-xl text-white transition hover:bg-white/10"
                aria-label="Close project case study"
                onClick={onClose}
              >
                x
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain p-6 outline-none sm:p-8"
              data-lenis-prevent
              tabIndex={0}
              aria-label="Scrollable project case study content"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-6">
                  <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                      Overview
                    </h4>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">
                      {project.caseStudy.overview}
                    </p>
                    <h4 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                      Tech Stack
                    </h4>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                        Problem
                      </h4>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">
                        {project.problem}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                        Solution
                      </h4>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">
                        {project.solution}
                      </p>
                    </div>
                  </section>

                  <CaseStudyList
                    title="Technical Architecture"
                    items={project.caseStudy.architecture}
                  />
                  <CaseStudyList
                    title="My Contributions"
                    items={project.caseStudy.contributions}
                  />
                  <CaseStudyList
                    title="Challenges Faced"
                    items={project.caseStudy.challenges}
                  />
                </div>

                <div className="space-y-6">
                  <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                    <div className="relative h-64 sm:h-80">
                      {project.caseStudy.screenshots[0] ? (
                        <Image
                          src={project.caseStudy.screenshots[0].src}
                          alt={project.caseStudy.screenshots[0].alt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                        Screenshots
                      </h4>
                      <p className="mt-3 text-sm text-zinc-400">
                        {project.caseStudy.screenshots[0]?.title ??
                          "Project preview"}
                      </p>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                      Project Metrics
                    </h4>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {project.caseStudy.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-semibold text-zinc-200"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </section>

                  <CaseStudyList
                    title="Core Features"
                    items={project.caseStudy.coreFeatures}
                  />
                  <CaseStudyList
                    title="Key Learnings"
                    items={project.caseStudy.learnings}
                  />
                  <CaseStudyList
                    title="Future Scope"
                    items={project.caseStudy.futureScope}
                  />
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
