"use client";

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-8 sm:pt-4 transition-all duration-300">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border border-border bg-background/80 px-2.5 shadow-sm backdrop-blur-md sm:h-16 sm:px-3">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-full px-2 sm:gap-3 transition-opacity hover:opacity-80"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-bold text-background font-display sm:h-10 sm:w-10">
            RK
          </span>
          <span className="hidden text-sm font-bold text-foreground font-display sm:inline">
            {profile.name}
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id
                  ? "bg-border/50 text-foreground"
                  : "text-muted hover:bg-border/20 hover:text-foreground"
              }`}
            >
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Contact
        </a>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-transparent text-foreground hover:bg-border/30 md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-foreground transition-all duration-200 ${
                isMenuOpen ? "top-2 rotate-45" : "top-0 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-foreground transition-all duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-foreground transition-all duration-200 ${
                isMenuOpen ? "bottom-1.5 -rotate-45" : "bottom-0 rotate-0"
              }`}
            />
          </span>
        </button>
      </nav>
      {isMenuOpen ? (
        <div
          id="mobile-navigation-menu"
          className="mx-auto mt-3 max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto overscroll-contain rounded-2xl border border-border bg-background/95 p-3 shadow-md backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="grid gap-1">
            {mobileNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative min-h-11 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "bg-border/50 text-foreground"
                    : "text-muted hover:bg-border/20 hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
