import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium"
            >
              Data Analyst
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Transforming Data into{" "}
              <span className="text-primary">Actionable Insights</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-lg text-gray-600 max-w-2xl"
            >
              Hi, I'm Zeya Mosharraf. I help businesses make data-driven decisions through advanced analytics, 
              interactive visualizations, and predictive modeling. With expertise in Python, SQL, Power BI, and other BI tools, 
              I turn complex data into clear strategies that drive business growth.
            </motion.p>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => handleSectionClick("projects")}
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium flex items-center"
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <button
                onClick={() => handleSectionClick("contact")}
                className="px-6 py-3 border border-gray-300 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
              >
                Contact Me
              </button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              {/* Profile Image with Data Visualization Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-10 rounded-2xl transform rotate-6"></div>
              <div className="rounded-2xl shadow-lg relative z-10 w-full h-auto bg-white p-4 flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary to-blue-400 shadow-md mb-6 flex items-center justify-center text-white text-5xl font-bold overflow-hidden border-4 border-white">
                    <img 
                  src="https://lh6.googleusercontent.com/AoEENouZCO87xTNlQq6L4vFznSWdOBy9cxbMmrzo2vbPEaHire7c5LEh9XgzOqTTU7HaoK09XJlYthYnRZf8EyQ=w1280"
                  alt="Zeya Mosharraf" 
                  className="w-full h-full object-cover rounded-full"
                    />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Zeya Mosharraf</h3>
                <p className="text-primary font-medium mb-4">Data Analyst & BI Specialist</p>
                
              {/* Data Visualization Section */}
                <div className="w-full mt-4 bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Professional Expertise</h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <div className="text-blue-600 font-medium mb-1">SQL & Database</div>
                      <div className="text-sm text-gray-600">Advanced queries & data modeling</div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-md">
                      <div className="text-green-600 font-medium mb-1">Power BI</div>
                      <div className="text-sm text-gray-600">Interactive dashboards & reports</div>
                    </div>
                    
                    <div className="bg-yellow-50 p-3 rounded-md">
                      <div className="text-yellow-600 font-medium mb-1">Python</div>
                      <div className="text-sm text-gray-600">Data processing & ML models</div>
                    </div>
                    
                    <div className="bg-purple-50 p-3 rounded-md">
                      <div className="text-purple-600 font-medium mb-1">Excel</div>
                      <div className="text-sm text-gray-600">Advanced analytics & forecasting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
