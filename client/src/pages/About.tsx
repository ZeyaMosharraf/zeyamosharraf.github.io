import { useEffect } from "react";
import AboutSection from "@/components/sections/AboutSection";

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      <AboutSection />
    </div>
  );
};

export default About;
