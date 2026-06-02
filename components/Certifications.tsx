import { certifications } from "@/data/portfolioData";
import MotionSection from "./MotionSection";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <MotionSection id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Verified learning signals and project-backed specialization."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((certification) => (
          <article
            key={certification.title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
          >
            <p className="text-sm font-semibold text-violet-300">
              {certification.status}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {certification.title}
            </h3>
            <p className="mt-3 text-sm text-zinc-400">
              {certification.issuer}
            </p>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
