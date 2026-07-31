"use client";

import Image from "next/image";
import { profile } from "@/data/portfolioData";

const title = "RAJA K C";
const subtitle = "AI & Data Science Student\nFull Stack Developer & IoT Innovator";

export default function Hero() {
  return (
    <section id="home" className="relative px-4 pb-20 pt-32 md:min-h-[85vh] md:px-8 md:pt-40 lg:px-12 flex flex-col justify-center">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
              Portfolio / AI Product Builder / 2026
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] text-foreground sm:text-7xl lg:text-[5.5rem] font-display tracking-tight">
              {title}
            </h1>
            <p className="mt-8 text-xl sm:text-2xl font-medium text-foreground leading-snug max-w-lg font-display tracking-tight">
              {subtitle.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </p>
            <p className="mt-6 text-base sm:text-lg text-muted max-w-md leading-relaxed">
              Building full stack applications, AI-powered solutions, and IoT systems that connect clean interfaces with practical engineering.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-colors hover:opacity-90">
                View Projects
              </a>
              <a href={profile.resumeUrl} className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-8 text-sm font-semibold text-foreground transition-colors hover:bg-border/30">
                Download Resume
              </a>
            </div>
            
            <div className="mt-10 flex gap-6 text-sm font-medium text-muted">
              <a href={profile.githubUrl} className="transition-colors hover:text-foreground">GitHub</a>
              <a href={profile.linkedinUrl} className="transition-colors hover:text-foreground">LinkedIn</a>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-foreground">Email</a>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] overflow-hidden rounded-2xl border border-border bg-border/20">
              <Image
                src="/raja.jpg"
                alt="Raja K C"
                fill
                className="object-cover object-[center_5%] transition-all duration-700 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
