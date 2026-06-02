import { education, focusAreas, profile } from "@/data/portfolioData";
import MotionSection from "./MotionSection";
import SectionHeading from "./SectionHeading";

const stats = [
  { label: "CGPA", value: education.cgpa },
  { label: "Graduating", value: "2027" },
  { label: "Core Project", value: "RTI SaaS" },
];

export default function About() {
  return (
    <MotionSection id="about">
      <SectionHeading
        eyebrow="About"
        title="A developer profile shaped around product thinking."
        description="Raja combines full-stack engineering with AI and data science fundamentals to build useful, recruiter-friendly software with practical impact."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
          <p className="text-lg leading-8 text-zinc-300">
            I am {profile.name}, a B.Tech Artificial Intelligence and Data
            Science student at {education.institution}, {education.location}.
            I focus on building reliable web applications, REST APIs, and AI
            powered systems using modern JavaScript, backend services, and
            machine learning workflows.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-black/30 p-4"
              >
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
          <h3 className="text-lg font-semibold text-white">Specializations</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
