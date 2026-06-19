import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ArchitectureCaseStudies } from "@/components/sections/ArchitectureCaseStudies";
import { TechnicalBlog } from "@/components/sections/TechnicalBlog";
import { ResumeDownload } from "@/components/sections/ResumeDownload";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechnicalSkills />
      <Certifications />
      <Experience />
      <FeaturedProjects />
      <ArchitectureCaseStudies />
      <TechnicalBlog />
      <ResumeDownload />
      <ContactForm />
    </>
  );
}
