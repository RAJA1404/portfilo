"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import type { MouseEvent } from "react";
import type { Project } from "@/data/portfolioData";

type FeaturedProjectProps = {
  project: Project;
};

const architecture = [
  { label: "Citizen Portal", detail: "Request filing and tracking" },
  { label: "API Gateway", detail: "JWT auth and RBAC checks" },
  { label: "Department Layer", detail: "HOD, department, and admin flows" },
  { label: "Service Layer", detail: "S3, Twilio, Nodemailer" },
];

const stackGroups = [
  { label: "Frontend", items: ["React.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js"] },
  { label: "Database", items: ["MongoDB"] },
  { label: "Cloud", items: ["AWS S3"] },
  { label: "Services", items: ["Twilio", "Nodemailer"] },
];

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const reducedMotion = useReducedMotion();
  const glowX = useMotionValue("50%");
  const glowY = useMotionValue("50%");
  const glow = useMotionTemplate`radial-gradient(38rem circle at ${glowX} ${glowY}, rgba(59,130,246,0.16), transparent 42%)`;

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    glowX.set(`${event.clientX - rect.left}px`);
    glowY.set(`${event.clientY - rect.top}px`);
  }

  return (
    <motion.article
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-blue-950/20 backdrop-blur"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative grid gap-0 lg:grid-cols-[1fr_1fr]">
        <div className="p-7 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase text-blue-300">
            Product Launch / {project.status}
          </p>
          <h3 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            RightToKnow - RTI Management System
          </h3>
          <p className="mt-6 text-xl font-medium text-zinc-200">
            A Full Stack RTI Management Platform for Citizens and Government
            Departments.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {project.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-violet-300">Problem</p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {project.problem}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-blue-300">Solution</p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {project.solution}
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm text-zinc-400">
            Role:{" "}
            <span className="font-semibold text-zinc-200">{project.role}</span>
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-blue-500 px-7 py-4 text-center text-sm font-semibold text-white shadow-2xl shadow-blue-500/25"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white hover:bg-white/10"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </div>

        <div className="relative min-h-[36rem] overflow-hidden border-t border-white/10 bg-[#07070a] p-6 sm:p-10 lg:border-l lg:border-t-0">
          <motion.div
            className="absolute inset-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.18),transparent_35%),rgba(255,255,255,0.035)]"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={project.imageAlt ?? `${project.title} preview`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
            <motion.div
              className="absolute bottom-8 left-6 right-6 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur"
              animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm font-semibold text-white">
                AI Assisted Query Builder
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Helps citizens frame clear RTI requests with guided prompts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-white/10 p-7 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-violet-300">
              Animated Architecture
            </p>
            <div className="mt-6 space-y-4">
              {architecture.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="relative rounded-2xl border border-white/10 bg-black/25 p-5"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/15 text-sm font-semibold text-blue-200">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="mt-1 text-sm text-zinc-500">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase text-blue-300">
              Impact
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-medium text-zinc-200"
                  style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ y: -5, borderColor: "rgba(59,130,246,0.45)" }}
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-sm font-semibold uppercase text-violet-300">
            Technology Stack
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {stackGroups.map((group, index) => (
              <motion.div
                key={group.label}
                className="rounded-2xl border border-white/10 bg-black/25 p-5"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <p className="text-sm font-semibold text-white">
                  {group.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
