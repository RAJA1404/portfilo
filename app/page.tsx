import About from "@/components/About";
import LearningJourneySection from "@/components/LearningJourney";
import Contact from "@/components/Contact";
import CinematicShell from "@/components/CinematicShell";
import EngineeringPractices from "@/components/EngineeringPractices";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { learningJourney } from "@/data/portfolioData";

export default function Home() {
  return (
    <CinematicShell>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <EngineeringPractices />
        <Experience />
        <LearningJourneySection items={learningJourney} />
        <Contact />
      </main>
      <Footer />
    </CinematicShell>
  );
}
