import { education, focusAreas, profile } from "@/data/portfolioData";
import MotionSection from "./MotionSection";
import SectionHeading from "./SectionHeading";

const metrics = [
  { label: "Internships", value: "2" },
  { label: "Major Projects", value: "3" },
  { label: "Team Leader", value: "Admin" },
  { label: "Stack", value: "MERN" },
];

export default function About() {
  return (
    <MotionSection id="about">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          eyebrow="About"
          title="Engineering AI, web, and IoT solutions for real problems."
          description="Raja K C is an Artificial Intelligence and Data Science student building MERN stack applications, AI-assisted workflows, and IoT systems with clear product use cases."
        />
        <div className="space-y-6">
          <p className="text-xl leading-relaxed text-white sm:text-3xl">
            I build software around practical problems: full-stack dashboards,
            REST APIs, AI prototypes, and IoT systems that connect data,
            devices, and users.
          </p>
          <p className="max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Currently pursuing {education.degree} at {education.institution},
            {` ${education.location}`}. My work is centered on React, Node.js,
            Express, MongoDB, TensorFlow, and embedded systems, with
            RightToKnow as my flagship full-stack platform and the College LMS
            Portal showing MERN team leadership.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6"
              >
                <p className="text-3xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
              >
                {area}
              </span>
            ))}
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-12 w-full justify-center rounded-full border border-blue-400/40 bg-blue-500/10 px-6 py-3 text-sm font-semibold text-blue-200 transition hover:-translate-y-1 hover:bg-blue-500/20 sm:w-auto"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
