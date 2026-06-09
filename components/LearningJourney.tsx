import { LearningJourney } from "@/data/portfolioData";
import MotionSection from "./MotionSection";
import SectionHeading from "./SectionHeading";

interface LearningJourneyProps {
  items: LearningJourney[];
}

export default function LearningJourneySection({ items }: LearningJourneyProps) {
  return (
    <MotionSection id="learning-journey">
      <SectionHeading
        eyebrow="Growth Track"
        title="Learning Journey"
        description="Academic focus, project-based practice, and hands-on implementation connected to real portfolio work."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-7"
            style={{ transform: `translateY(${index * 18}px)` }}
          >
            <p className="text-sm font-semibold text-violet-300">
              {item.status}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-zinc-400">
              {item.issuer}
            </p>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
