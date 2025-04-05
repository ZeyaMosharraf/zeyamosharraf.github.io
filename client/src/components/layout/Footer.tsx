import { Link } from "wouter";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaHeart, 
  FaHackerrank,
  FaCloud
} from "react-icons/fa";

const Footer = () => {
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
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Zeya</span>
              <span className="text-primary">Mosharraf</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Data analyst turning complex information into clear, actionable insights.
              Specialized in Python, SQL, and data visualization.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href="https://cloud.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Google Cloud"
              >
                <FaCloud className="text-lg" />
              </a>
              <a
                href="https://www.hackerrank.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="HackerRank"
              >
                <FaHackerrank className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleSectionClick("home")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("projects")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("skills")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:zeya.mosharraf@example.com"
                  className="hover:text-white transition-colors"
                >
                  zeya.mosharraf@example.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Zeya Mosharraf. All rights reserved.</p>
          <p className="text-gray-400 mt-2 md:mt-0 flex items-center">
            Built with <FaHeart className="text-red-500 mx-1" /> using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
