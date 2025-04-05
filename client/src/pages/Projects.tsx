import { useEffect } from "react";
import ProjectsSection from "@/components/sections/ProjectsSection";

const Projects = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      <ProjectsSection />
    </div>
  );
};

export default Projects;
