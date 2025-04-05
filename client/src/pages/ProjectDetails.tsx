import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { projects, Project } from "@/data/projectsData";

interface ProjectDetailsProps {
  params: {
    id: string;
  };
}

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const projectId = parseInt(params.id);
    const foundProject = projects.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
    }
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button 
            onClick={() => setLocation("/")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
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
            <FaArrowLeft className="mr-2" /> Back to Projects
          </button>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
                  <span 
                    className={`mt-2 inline-block text-sm px-3 py-1 rounded-full ${project.tagColor}`}
                  >
                    {project.category}
                  </span>
                </div>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 rounded-md hover:border-primary hover:text-primary transition-colors flex items-center"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>

              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <div className="aspect-video max-w-4xl mx-auto">
                  {project.svgContent}
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6">
                  {project.description}
                </p>

                <h2 className="text-2xl font-bold mb-4">Methodology</h2>
                <p className="text-gray-700 mb-6">
                  For this project, I employed a comprehensive approach to data analysis, 
                  focusing on extracting actionable insights from the available dataset. 
                  The process began with data cleaning and preparation, followed by exploratory analysis, 
                  and finally visualization and interpretation of results.
                </p>

                <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
                <p className="text-gray-700 mb-6">
                  The analysis revealed several key patterns that had significant business implications. 
                  By implementing the recommendations derived from this analysis, the client was able 
                  to optimize their processes and achieve measurable improvements in performance metrics.
                </p>

                {project.category === "Power BI" && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Interactive Dashboard</h2>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="aspect-video w-full">
                        {/* Power BI Embed */}
                        <div className="w-full h-full flex items-center justify-center bg-white border border-gray-200 rounded-md">
                          <p className="text-gray-500">
                            Dashboard embed placeholder - Add your Power BI embed code here
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-bold mb-2">Skills Applied</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Data Cleaning and Preparation</li>
                        <li>Statistical Analysis</li>
                        <li>Data Visualization</li>
                        <li>Insight Generation</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-bold mb-2">Tools Used</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>{project.category === "SQL" && "SQL (PostgreSQL, MySQL)"}</li>
                        <li>{project.category === "Python" && "Python (Pandas, NumPy, Matplotlib)"}</li>
                        <li>{project.category === "Machine Learning" && "Scikit-learn, TensorFlow"}</li>
                        <li>{project.category === "Power BI" && "Power BI"}</li>
                        <li>{project.category === "Excel" && "Excel (Advanced formulas, Pivot Tables)"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;