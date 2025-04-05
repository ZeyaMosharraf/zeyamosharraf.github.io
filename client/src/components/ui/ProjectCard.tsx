import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [, setLocation] = useLocation();

  const handleViewProject = () => {
    setLocation(`/project/${project.id}`);
  };

  return (
    <motion.div
      className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg project-card cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={handleViewProject}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span 
            className={`text-xs px-2 py-1 rounded-full ${project.tagColor}`}
          >
            {project.tag}
          </span>
        </div>
        
        <div className="mb-4 h-40 relative overflow-hidden rounded-md bg-white">
          {project.svgContent}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleViewProject();
            }}
            className="text-primary hover:text-blue-700 font-medium flex items-center"
          >
            View Project <FaArrowRight className="ml-1 text-sm" />
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors"
            aria-label="GitHub repository"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
