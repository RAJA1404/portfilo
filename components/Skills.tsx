"use client";

import { useState, useMemo } from "react";
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
        title="A sharp toolkit for intelligent products."
        description="Technologies I use to build production-ready full-stack systems, AI workflows, and IoT prototypes."
      />

      <div className="mb-8 flex flex-wrap gap-2 sm:mb-12">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors sm:text-sm ${
            activeCategory === null
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-transparent text-muted hover:bg-border/30 hover:text-foreground"
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
            className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors sm:text-sm ${
              activeCategory === cat
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-transparent text-muted hover:bg-border/30 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {skillCategoryOrder
          .filter((cat) => groupedSkills[cat])
          .map((category) => (
            <div key={category}>
              <div className="mb-5 flex items-center gap-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs font-medium text-muted">
                  {groupedSkills[category]!.length}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {groupedSkills[category]!.map((skill) => (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setSelectedSkill(skill)}
                    className="group flex flex-col justify-center gap-3 overflow-hidden rounded-xl border border-border bg-transparent p-4 text-left transition-colors hover:border-primary/50 hover:bg-border/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background p-2 grayscale transition-all group-hover:border-primary/30 group-hover:grayscale-0">
                        <Image
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          width={24}
                          height={24}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                          {skill.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted">
                          {skill.projectsUsedIn.length} project{skill.projectsUsedIn.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>

      <SkillDetailDrawer
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </MotionSection>
  );
}
