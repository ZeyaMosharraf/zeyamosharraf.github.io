import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [, setLocation] = useLocation();
  const projectsDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      closeMenu();
      setActiveSection(sectionId);
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const handleProjectCategoryClick = (category: string) => {
    setIsProjectsDropdownOpen(false);
    closeMenu();
    setLocation(`/category/${category.toLowerCase().replace(' ', '-')}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItem = ({ section, label }: { section: string; label: string }) => (
    <button
      onClick={() => handleSectionClick(section)}
      className={cn(
        "relative nav-item text-gray-800 hover:text-primary transition-colors px-1 py-2",
        activeSection === section ? "text-primary" : ""
      )}
    >
      {label}
      <span
        className={cn(
          "absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300",
          activeSection === section ? "w-full" : "w-0"
        )}
      />
    </button>
  );

  const categories = ["SQL", "Python", "Machine Learning", "Power BI", "Excel", "Case Study"];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleSectionClick("home");
          }}
          className="flex items-center"
        >
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-2">
            ZM
          </div>
          <span className="text-2xl font-bold">
            <span className="text-primary">Zeya</span>
            <span className="text-gray-800">Mosharraf</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavItem section="home" label="Home" />
          
          {/* Projects dropdown */}
          <div className="relative" ref={projectsDropdownRef}>
            <button
              onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
              className={cn(
                "relative nav-item text-gray-800 hover:text-primary transition-colors px-1 py-2 flex items-center",
                activeSection === "projects" ? "text-primary" : ""
              )}
            >
              Projects
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300",
                  activeSection === "projects" ? "w-full" : "w-0"
                )}
              />
            </button>
            
            {/* Dropdown menu */}
            {isProjectsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <button
                  onClick={() => handleSectionClick("projects")}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  All Projects
                </button>
                
                <div className="h-px bg-gray-200 my-1"></div>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleProjectCategoryClick(category)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <NavItem section="skills" label="Skills" />
          <NavItem section="about" label="About" />
          <NavItem section="contact" label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 py-3 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <button
          onClick={() => handleSectionClick("home")}
          className={`block w-full text-left py-2 ${
            activeSection === "home" ? "text-primary" : "text-gray-800"
          } hover:text-primary transition-colors`}
        >
          Home
        </button>
        
        {/* Mobile Projects Menu */}
        <div className="py-2">
          <button
            onClick={() => handleSectionClick("projects")}
            className={`block w-full text-left py-2 ${
              activeSection === "projects" ? "text-primary" : "text-gray-800"
            } hover:text-primary transition-colors font-medium`}
          >
            All Projects
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleProjectCategoryClick(category)}
              className="block w-full text-left py-2 pl-4 text-gray-600 hover:text-primary transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => handleSectionClick("skills")}
          className={`block w-full text-left py-2 ${
            activeSection === "skills" ? "text-primary" : "text-gray-800"
          } hover:text-primary transition-colors`}
        >
          Skills
        </button>
        <button
          onClick={() => handleSectionClick("about")}
          className={`block w-full text-left py-2 ${
            activeSection === "about" ? "text-primary" : "text-gray-800"
          } hover:text-primary transition-colors`}
        >
          About
        </button>
        <button
          onClick={() => handleSectionClick("contact")}
          className={`block w-full text-left py-2 ${
            activeSection === "contact" ? "text-primary" : "text-gray-800"
          } hover:text-primary transition-colors`}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Navbar;
