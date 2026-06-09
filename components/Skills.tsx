"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  techSkills,
  skillCategoryOrder,
  type TechSkill,
  type SkillCategoryName,
} from "@/data/portfolioData";
import MotionSection from "./MotionSection";
import SectionHeading from "./SectionHeading";
import SkillDetailDrawer from "./SkillDetailDrawer";

const categoryAccents: Record<SkillCategoryName, string> = {
  Frontend: "from-blue-500/20 to-cyan-400/5",
  Backend: "from-emerald-500/20 to-blue-400/5",
  "AI / ML": "from-violet-500/20 to-fuchsia-400/5",
  Tools: "from-amber-500/15 to-violet-400/5",
};

const categoryIcons: Record<SkillCategoryName, string> = {
  Frontend: "◆",
  Backend: "◈",
  "AI / ML": "◇",
  Tools: "▣",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategoryName | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<TechSkill | null>(null);

  const filteredSkills = useMemo(() => {
    if (!activeCategory) return techSkills;
    return techSkills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const groupedSkills = useMemo(() => {
    const groups: Partial<Record<SkillCategoryName, TechSkill[]>> = {};
    for (const skill of filteredSkills) {
      if (!groups[skill.category]) groups[skill.category] = [];
      groups[skill.category]!.push(skill);
    }
    return groups;
  }, [filteredSkills]);

  return (
    <MotionSection id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A sharp toolkit for intelligent products."
        description="Technologies I use to build production-ready full-stack systems, AI workflows, and IoT prototypes."
      />

      {/* Category Filter Tabs */}
      <div className="mb-8 flex flex-wrap gap-2 sm:mb-10">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm ${
            activeCategory === null
              ? "border-blue-400/40 bg-blue-500/15 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
              : "border-white/10 bg-white/[0.03] text-zinc-500 hover:border-white/20 hover:text-zinc-300"
          }`}
        >
          All
        </button>
        {skillCategoryOrder.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() =>
              setActiveCategory(activeCategory === cat ? null : cat)
            }
            className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm ${
              activeCategory === cat
                ? "border-blue-400/40 bg-blue-500/15 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                : "border-white/10 bg-white/[0.03] text-zinc-500 hover:border-white/20 hover:text-zinc-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Grid by Category */}
      <div className="space-y-8 sm:space-y-10">
        <AnimatePresence mode="wait">
          {skillCategoryOrder
            .filter((cat) => groupedSkills[cat])
            .map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Category Header */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-sm text-blue-400/60">
                    {categoryIcons[category]}
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    {category}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-zinc-600">
                    {groupedSkills[category]!.length}
                  </span>
                </div>

                {/* Technology Cards Grid */}
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {groupedSkills[category]!.map((skill, idx) => (
                    <motion.button
                      key={skill.name}
                      type="button"
                      onClick={() => setSelectedSkill(skill)}
                      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 text-left backdrop-blur-sm transition-all duration-200 hover:border-blue-400/30 hover:bg-white/[0.06] sm:p-4`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                        delay: idx * 0.04,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ y: -3 }}
                    >
                      {/* Subtle gradient overlay on hover */}
                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${categoryAccents[category]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                      />

                      <div className="relative flex items-center gap-3">
                        {/* Logo */}
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] p-1.5 transition-all duration-200 group-hover:border-white/15 group-hover:bg-white/[0.08] sm:h-10 sm:w-10">
                          <Image
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            width={28}
                            height={28}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </div>

                        {/* Name + count */}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-white/90 transition-colors group-hover:text-white">
                            {skill.name}
                          </p>
                          <p className="mt-0.5 text-[11px] text-zinc-600 transition-colors group-hover:text-zinc-500">
                            {skill.projectsUsedIn.length} project
                            {skill.projectsUsedIn.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Skill Detail Drawer */}
      <SkillDetailDrawer
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </MotionSection>
  );
}
