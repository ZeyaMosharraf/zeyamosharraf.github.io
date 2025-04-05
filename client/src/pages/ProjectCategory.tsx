import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { projects, Project } from "@/data/projectsData";
import ProjectCard from "@/components/ui/ProjectCard";

interface ProjectCategoryProps {
  params: {
    category: string;
  };
}

type CategoryType = "SQL" | "Python" | "Machine Learning" | "Power BI" | "Excel";

const getDisplayName = (category: string): string => {
  switch (category) {
    case "SQL":
      return "SQL Projects";
    case "Python":
      return "Python Projects";
    case "Machine Learning":
      return "Machine Learning Projects";
    case "Power BI":
      return "Power BI Dashboards";
    case "Excel":
      return "Excel Projects";
    default:
      return "Projects";
  }
};

const getCategoryDescription = (category: string): string => {
  switch (category) {
    case "SQL":
      return "Advanced database projects using SQL to extract, transform, and analyze data for business insights.";
    case "Python":
      return "Python-based data analysis projects using libraries like Pandas, NumPy, and Matplotlib.";
    case "Machine Learning":
      return "Projects implementing machine learning algorithms for predictive analytics and pattern recognition.";
    case "Power BI":
      return "Interactive dashboards and visualizations created with Microsoft Power BI.";
    case "Excel":
      return "Advanced Excel projects demonstrating data analysis, modeling, and visualization techniques.";
    default:
      return "Collection of data analysis projects.";
  }
};

const ProjectCategory = ({ params }: ProjectCategoryProps) => {
  const [categoryProjects, setCategoryProjects] = useState<Project[]>([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Normalize category for comparison
    const normalizedCategory = params.category
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
      
    const filtered = projects.filter(project => 
      project.category.toLowerCase() === normalizedCategory.toLowerCase() ||
      // Special case for "Machine Learning" which might be formatted as "machine-learning" in URL
      (normalizedCategory === "Machine Learning" && project.category === "Machine Learning")
    );
    
    setCategoryProjects(filtered);
  }, [params.category]);

  const displayName = getDisplayName(params.category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" "));

  const description = getCategoryDescription(params.category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" "));

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
    <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-white">
      <div className="container mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setLocation("/projects")}
            className="mb-6 inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to All Projects
          </button>

          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{displayName}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {categoryProjects.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              {categoryProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium text-gray-600">No projects found in this category</h3>
              <p className="mt-2 text-gray-500">Check back later for updates or explore other categories</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCategory;