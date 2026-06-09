"use client";

import { useCallback, useState } from "react";
import { projects, type Project } from "@/data/portfolioData";
import MotionSection from "./MotionSection";
import ProjectCard from "./ProjectCard";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeCaseStudy = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <MotionSection id="projects" reveal={false}>
      <SectionHeading
        eyebrow="Projects"
        title="Compact project stories with deeper case studies."
        description="Recruiters can scan the core project lineup quickly, then open detailed case studies for architecture, contributions, challenges, and impact."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onViewCaseStudy={setSelectedProject}
          />
        ))}
      </div>
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={closeCaseStudy}
      />
    </MotionSection>
  );
}
