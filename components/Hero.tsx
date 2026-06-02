"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolioData";

const socialLinks = [
  { label: "GitHub", href: profile.githubUrl },
  { label: "LinkedIn", href: profile.linkedinUrl },
  { label: "Email", href: `mailto:${profile.email}` },
];

const signalCards = [
  { label: "Frontend", value: "React + Next" },
  { label: "Backend", value: "Node + APIs" },
  { label: "AI/ML", value: "TensorFlow" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 shadow-lg shadow-blue-950/20">
            AI systems. Full-stack products. Clean execution.
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            RAJA K C
          </h1>
          <p className="mt-5 max-w-2xl text-2xl font-semibold text-zinc-100 sm:text-3xl">
            AI & Full Stack Developer
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Building intelligent applications and scalable web solutions using
            AI, Machine Learning, and modern web technologies.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-xl"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <motion.div
            className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs uppercase text-zinc-500">Current focus</p>
            <p className="mt-1 text-sm font-semibold text-white">
              Intelligent web apps
            </p>
          </motion.div>
          <motion.div
            className="absolute -right-2 bottom-12 hidden rounded-2xl border border-violet-400/20 bg-violet-500/10 px-5 py-4 shadow-2xl shadow-violet-950/30 backdrop-blur md:block"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs uppercase text-violet-200/70">Stack</p>
            <p className="mt-1 text-sm font-semibold text-white">
              AI + Full Stack
            </p>
          </motion.div>
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-blue-950/30 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-[#08080b] p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-zinc-500">Developer Card</p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    Raja K C
                  </p>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-500/25">
                  RK
                </div>
              </div>
              <div className="py-8">
                <div className="mx-auto grid h-40 w-40 place-items-center rounded-full border border-blue-400/25 bg-[radial-gradient(circle,rgba(59,130,246,0.28),rgba(139,92,246,0.12),transparent_70%)]">
                  <motion.div
                    className="grid h-24 w-24 place-items-center rounded-3xl border border-white/10 bg-white/[0.06] text-4xl font-semibold text-white shadow-xl shadow-black/30"
                    animate={{ rotate: [0, 2, -2, 0], y: [0, -6, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    AI
                  </motion.div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {signalCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-xs text-zinc-500">{card.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
