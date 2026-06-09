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
        title="A sharp toolkit for intelligent products."
        description="Skills are grouped as product-building systems: code, interface, backend, data, AI, and delivery tools."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <motion.article
            key={category.title}
            className="group relative min-h-56 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:border-blue-400/40 hover:bg-white/[0.07]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
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
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-zinc-400">
                {category.skills.length} skills
              </div>
            </div>
            <div className="relative mt-6 grid gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="rounded-2xl border border-white/10 bg-black/35 p-4 transition group-hover:border-white/20"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: skillIndex * 0.1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ y: -3, scale: 1.04 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-xs font-bold text-blue-200">
                      {skill.logo}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {skill.name}
                      </h4>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                        Used in
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skill.usedIn.map((usage) => (
                      <span
                        key={usage}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400"
                      >
                        {usage}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="relative mt-5 text-sm leading-6 text-zinc-400">
              {category.usedIn}
            </p>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
