import { projects } from "@/data/portfolioData";
import FeaturedProject from "./FeaturedProject";
import MotionSection from "./MotionSection";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <MotionSection id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Product-minded builds across web, AI, IoT, and Java."
        description="The portfolio highlights practical systems with clear technical decisions and real-world use cases."
      />
      <div className="space-y-6">
        <FeaturedProject project={featuredProject} />
        <div className="pt-8">
          <p className="mb-4 text-sm font-semibold uppercase text-violet-300">
            Other Projects
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
