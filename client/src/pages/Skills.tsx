import { useEffect } from "react";
import SkillsSection from "@/components/sections/SkillsSection";

const Skills = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      <SkillsSection />
    </div>
  );
};

export default Skills;
