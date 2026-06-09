"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolioData";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#engineering-practices", label: "Engineering", id: "engineering-practices" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#learning-journey", label: "Learning Journey", id: "learning-journey" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const mobileNavLinks = navLinks.filter((link) => link.id !== "home");

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-8 sm:pt-4"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#050505]/70 px-2.5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:h-16 sm:px-3">
        <motion.a
          href="#home"
          className="flex items-center gap-2 rounded-full px-2 sm:gap-3"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-bold text-blue-200 sm:h-10 sm:w-10">
            RK
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            {profile.name}
          </span>
        </motion.a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-4 py-2 text-sm text-zinc-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              {active === link.id ? (
                <motion.span
                  layoutId="active-nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              <span className="relative">{link.label}</span>
            </motion.a>
          ))}
        </div>
        <motion.a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black md:inline-flex"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact
        </motion.a>
        <motion.button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
          whileTap={{ scale: 0.94 }}
        >
          <span className="relative h-4 w-5">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white"
              animate={isMenuOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <motion.span
              className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-white"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-white"
              animate={isMenuOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </span>
        </motion.button>
      </nav>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation-menu"
            className="mx-auto mt-3 max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-[#050505]/90 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="grid gap-1">
              {mobileNavLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative min-h-11 rounded-2xl px-4 py-3 text-sm font-medium text-zinc-300"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.22,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {active === link.id ? (
                    <span className="absolute inset-0 rounded-2xl bg-white/10" />
                  ) : null}
                  <span className="relative">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
