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
  "Programming Languages": "from-amber-500/20 to-orange-400/5",
  "Core Computing Fundamentals": "from-violet-500/20 to-fuchsia-400/5",
  "Backend, APIs & Databases": "from-emerald-500/20 to-blue-400/5",
  "Frontend Development": "from-blue-500/20 to-cyan-400/5",
  "DevOps & infrastructure": "from-rose-500/20 to-pink-400/5",
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
        eyebrow="Expertise"
        title="A sharp toolkit for intelligent products."
        description="Technologies I use to build production-ready full-stack systems, AI workflows, and IoT prototypes."
      />

      <div className="mb-8 flex flex-wrap gap-2 sm:mb-12">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors sm:text-sm ${
            activeCategory === null
              ? "bg-white text-black"
              : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
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
            className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors sm:text-sm ${
              activeCategory === cat
                ? "bg-white text-black"
                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        <AnimatePresence mode="popLayout">
          {skillCategoryOrder
            .filter((cat) => groupedSkills[cat])
            .map((category) => (
              <motion.div
                key={category}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                    {category}
                  </h3>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs font-medium text-zinc-500">
                    {groupedSkills[category]!.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {groupedSkills[category]!.map((skill, index) => (
                    <motion.button
                      key={skill.name}
                      type="button"
                      onClick={() => setSelectedSkill(skill)}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex flex-col justify-center gap-3 overflow-hidden rounded-2xl bg-white/5 p-4 text-left shadow-lg outline outline-1 outline-white/5 transition-all hover:bg-white/10 hover:outline-white/20"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${categoryAccents[category]}`}
                      />
                      <div className="relative flex items-center gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-black/40 p-2">
                          <Image
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            width={24}
                            height={24}
                            className="h-full w-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                            loading="lazy"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-zinc-200 group-hover:text-white">
                            {skill.name}
                          </p>
                          <p className="mt-0.5 text-xs text-zinc-500">
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

      <SkillDetailDrawer
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </MotionSection>
  );
}
