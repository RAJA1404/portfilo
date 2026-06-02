"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolioData";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 px-5 backdrop-blur-xl sm:px-8 lg:px-12"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-blue-400/30 bg-blue-500/10 text-sm font-bold text-blue-300">
            RK
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            {profile.name}
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20"
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
