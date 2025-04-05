import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaDownload } from "react-icons/fa";

const AboutSection = () => {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div 
        className="container mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-5"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 opacity-10 rounded-2xl transform -rotate-3"></div>
              <svg 
                className="rounded-2xl shadow-lg relative z-10 w-full h-auto bg-white"
                viewBox="0 0 400 500" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Professional portrait SVG */}
                <rect width="400" height="500" rx="12" fill="#F9FAFB" />
                
                {/* Stylized person silhouette */}
                <rect x="100" y="80" width="200" height="200" rx="100" fill="#E5E7EB" />
                <circle cx="200" cy="150" r="70" fill="#9CA3AF" />
                <path d="M200,180 Q240,180 240,220 T200,260 Q160,260 160,220 T200,180 z" fill="#9CA3AF" />
                
                <rect x="100" y="300" width="200" height="30" rx="6" fill="#E5E7EB" />
                <rect x="130" y="350" width="140" height="20" rx="4" fill="#E5E7EB" />
                <rect x="150" y="390" width="100" height="20" rx="4" fill="#E5E7EB" />
                
                {/* Data elements */}
                <circle cx="70" cy="450" r="20" fill="#3B82F6" opacity="0.2" />
                <circle cx="330" cy="450" r="20" fill="#3B82F6" opacity="0.2" />
                <circle cx="50" cy="50" r="15" fill="#10B981" opacity="0.2" />
                <circle cx="350" cy="50" r="15" fill="#10B981" opacity="0.2" />
                
                <path d="M70,100 Q90,80 110,100 T150,100" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />
                <path d="M250,100 Q270,80 290,100 T330,100" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />
              </svg>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 space-y-6"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600">
              I'm a data analyst with over 5 years of experience in transforming complex
              datasets into actionable business insights. My passion lies in uncovering
              patterns and trends that drive strategic decision-making.
            </p>
            <p className="text-lg text-gray-600">
              I've worked across multiple industries including retail, finance, and
              healthcare, helping organizations leverage their data to improve operational
              efficiency, customer experiences, and business outcomes.
            </p>

            <div className="space-y-6 pt-4">
              <div>
                <h3 className="text-xl font-bold mb-3">Education</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="flex-shrink-0 h-5 w-5 text-primary mt-1">
                      <FaGraduationCap />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">MSc in Data Science</p>
                      <p className="text-gray-600">University of California, 2018</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-5 w-5 text-primary mt-1">
                      <FaGraduationCap />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">BSc in Statistics</p>
                      <p className="text-gray-600">Stanford University, 2016</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Experience</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="flex-shrink-0 h-5 w-5 text-primary mt-1">
                      <FaBriefcase />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Senior Data Analyst</p>
                      <p className="text-gray-600">TechCorp Inc, 2020 - Present</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-5 w-5 text-primary mt-1">
                      <FaBriefcase />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Data Analyst</p>
                      <p className="text-gray-600">Global Finance Group, 2018 - 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
              >
                Download Resume <FaDownload className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
