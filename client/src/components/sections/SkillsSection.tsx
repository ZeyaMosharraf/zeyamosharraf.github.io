import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SkillBar from "@/components/ui/SkillBar";
import { programmingSkills, visualizationSkills, additionalSkills } from "@/data/skillsData";

const SkillsSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      width: `${i}%`,
      transition: { duration: 1, delay: 0.3 }
    }));
  }, [controls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div 
        className="container mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional toolkit includes programming languages, data analysis tools, and
            visualization platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold mb-6">Data Analysis & Programming</h3>

            <div className="space-y-4">
              {programmingSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="primary"
                  custom={skill.percentage}
                  controls={controls}
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold mb-6">Data Visualization & BI Tools</h3>

            <div className="space-y-4">
              {visualizationSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="secondary"
                  custom={skill.percentage}
                  controls={controls}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Additional Skills</h3>

          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 hover:shadow-md hover:bg-gray-50 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
        
        {/* Visual divider between sections */}
        <motion.div 
          className="mt-20 flex justify-center" 
          variants={itemVariants}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-primary rounded"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
