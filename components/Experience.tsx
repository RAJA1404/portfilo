"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolioData";
import MotionSection from "./MotionSection";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <MotionSection id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional growth through AI and machine learning internships."
      />
      <div className="mx-auto max-w-4xl">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-400 via-violet-400 to-transparent sm:left-1/2" />
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              className={`relative mb-8 flex sm:mb-10 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="absolute left-0 top-7 z-10 grid h-8 w-8 place-items-center rounded-full border border-blue-300/40 bg-blue-500/20 shadow-lg shadow-blue-500/20 sm:left-1/2 sm:-translate-x-1/2">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-300" />
              </div>
              <article
                className={`ml-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-blue-400/40 hover:bg-white/[0.06] sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                  index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                }`}
              >
                <p className="text-sm font-semibold text-blue-300">
                  {experience.period}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {experience.company}
                </h3>
                <p className="mt-1 text-base font-medium text-zinc-200">
                  {experience.role}
                </p>
                <p className="mt-4 leading-7 text-zinc-400">
                  {experience.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
