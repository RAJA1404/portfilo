"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";
import type { TechSkill } from "@/data/portfolioData";

type SkillDetailDrawerProps = {
  skill: TechSkill | null;
  onClose: () => void;
};

export default function SkillDetailDrawer({
  skill,
  onClose,
}: SkillDetailDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef(0);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!skill) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.__portfolioLenis?.stop();
    window.addEventListener("keydown", closeOnEscape);

    const focusFrame = requestAnimationFrame(() => {
      drawerRef.current?.focus({ preventScroll: true });
    });

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = originalOverflow;
      window.__portfolioLenis?.start();
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [handleClose, skill]);

  return (
    <AnimatePresence>
      {skill ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-black/60 backdrop-blur-sm"
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="presentation"
          onMouseDown={handleClose}
        >
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${skill.name} details`}
            tabIndex={0}
            className="relative w-full max-w-2xl overflow-hidden rounded-t-[1.5rem] border border-b-0 border-white/10 bg-[#0a0a0f] shadow-2xl shadow-blue-950/40 outline-none sm:rounded-t-[2rem]"
            style={{ maxHeight: "70dvh" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onMouseDown={(e) => e.stopPropagation()}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragStart={(_, info) => {
              dragStartY.current = info.point.y;
            }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                handleClose();
              }
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pb-1 pt-3">
              <div className="h-1 w-10 rounded-full bg-white/20" />
            </div>

            {/* Scrollable content */}
            <div
              className="overflow-y-auto overscroll-contain px-5 pb-8 pt-4 sm:px-8 sm:pb-10"
              data-lenis-prevent
              style={{ maxHeight: "calc(70dvh - 2rem)" }}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] p-2.5 sm:h-16 sm:w-16">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {skill.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {skill.category}
                    <span className="mx-2 text-white/10">·</span>
                    {skill.projectsUsedIn.length} project
                    {skill.projectsUsedIn.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <button
                  type="button"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close skill details"
                  onClick={handleClose}
                >
                  ✕
                </button>
              </div>

              {/* Projects Used In */}
              <section className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Projects Used In
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skill.projectsUsedIn.map((project) => (
                    <span
                      key={project}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-200"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </section>

              {/* Key Concepts */}
              <section className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                  Key Concepts
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skill.keyConcepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-full border border-violet-400/15 bg-violet-500/8 px-3.5 py-1.5 text-xs font-medium text-violet-200"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Bottom gradient fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
