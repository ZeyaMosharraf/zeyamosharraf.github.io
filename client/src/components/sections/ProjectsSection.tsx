import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projectsData";
import { FaGithub, FaFilter } from "react-icons/fa";

// Category options with display information
const categories = [
  { id: "all", name: "All Projects", color: "bg-gray-100 text-gray-800" },
  { id: "sql", name: "SQL", color: "bg-yellow-100 text-yellow-700" },
  { id: "python", name: "Python", color: "bg-blue-100 text-blue-700" },
  { id: "machine-learning", name: "Machine Learning", color: "bg-purple-100 text-purple-700" },
  { id: "power-bi", name: "Power BI", color: "bg-green-100 text-green-700" },
  { id: "excel", name: "Excel", color: "bg-red-100 text-red-700" },
  { id: "case-study", name: "Case Study", color: "bg-indigo-100 text-indigo-700" }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [, setLocation] = useLocation();
  const [projectsData, setProjectsData] = useState(projects || []);
  
  // Debug log
  useEffect(() => {
    console.log("Projects data loaded:", projects ? projects.length : 0);
  }, []);

  // Filter projects based on selected category
  const filteredProjects = activeCategory === "all" 
    ? projectsData
    : projectsData.filter(project => {
        const formattedCategory = project.category.toLowerCase().replace(" ", "-");
        return formattedCategory === activeCategory;
      });

  // Navigate to category page
  const navigateToCategory = (categoryId: string) => {
    if (categoryId === "all") return;
    setLocation(`/category/${categoryId}`);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A collection of data analysis projects showcasing my skills in visualization,
            statistical analysis, and business intelligence.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
                  ${activeCategory === category.id 
                    ? `${category.color} shadow-sm` 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                {category.id === "all" && <FaFilter className="inline-block mr-1 text-xs" />}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}

        <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
          >
            View All Projects on GitHub <FaGithub className="ml-2" />
          </a>

          {activeCategory !== "all" && (
            <button
              onClick={() => navigateToCategory(activeCategory)}
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium"
            >
              View All {categories.find(c => c.id === activeCategory)?.name} Projects
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;