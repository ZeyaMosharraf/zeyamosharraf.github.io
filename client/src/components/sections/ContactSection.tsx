import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div 
        className="container mx-auto max-w-5xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or interested in working together? Feel free to reach out
            through the form below or connect with me directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8"
            variants={itemVariants}
          >
            <ContactForm />
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Contact Information</h3>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <FaEnvelope />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:alex.morgan@example.com"
                    className="text-gray-600 hover:text-primary"
                  >
                    alex.morgan@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <FaMapMarkerAlt />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">San Francisco, California</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <FaClock />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Working Hours</p>
                  <p className="text-gray-600">Monday - Friday, 9AM - 5PM PST</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:bg-opacity-90 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-opacity-90 transition-opacity"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:bg-opacity-90 transition-opacity"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="#"
                  className="h-12 w-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-opacity-90 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
