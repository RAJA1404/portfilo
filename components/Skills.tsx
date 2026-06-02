"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolioData";
import MotionSection from "./MotionSection";
import SectionHeading from "./SectionHeading";

const categoryMeta: Record<string, { code: string; accent: string }> = {
  Programming: { code: "01", accent: "from-blue-500/25 to-cyan-400/10" },
  Frontend: { code: "02", accent: "from-violet-500/25 to-blue-400/10" },
  Backend: { code: "03", accent: "from-emerald-500/20 to-blue-400/10" },
  Database: { code: "04", accent: "from-green-500/20 to-zinc-400/10" },
  "AI & ML": { code: "05", accent: "from-fuchsia-500/20 to-blue-400/10" },
  Tools: { code: "06", accent: "from-amber-500/20 to-violet-400/10" },
};

export default function Skills() {
  return (
    <MotionSection id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A focused stack for full-stack and AI product work."
        description="Grouped capabilities across frontend, backend, tooling, and machine learning."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-blue-400/40 hover:bg-white/[0.06]"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <div
              className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${
                categoryMeta[category.title]?.accent ?? "from-blue-500/20 to-white/5"
              } opacity-70 transition group-hover:opacity-100`}
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-blue-300">
                  {categoryMeta[category.title]?.code ?? "00"}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-zinc-400">
                {category.skills.length} skills
              </div>
            </div>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-sm text-zinc-300 transition group-hover:border-white/20 group-hover:text-white"
                  whileHover={{ y: -3, scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
