import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import ProjectCard from '../components/ProjectCard';
import { useEffect, useState } from 'react';
import pic from '../assets/pic.jpg';
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'



export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const technologies = [
    'React', 'JavaScript', 'Node.js', 
    'Python', 'Docker', 'MongoDB', 
    'Java', 'Github', 'SQL', 'Express.js','C++', 'Kotlin'
  ];

  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack Cloud Based Freelancing Platform.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      demoUrl: 'https://cloud-based-freelancing-platform.onrender.com',
      repoUrl: 'https://github.com/chaitanya3715/cloud-based-Freelancing-Platform',
      image: project1,
    },
    {
      title: 'Project 2',
      description: 'Collaborative Code Editor',
      techStack: ['React', 'Node.js', 'Socket.io','Express.js'],
      demoUrl: 'https://project1.example.com',
      repoUrl: 'https://github.com/chaitanya3715/CodeCollab',
      image: project2,
    },
    // Add more projects as needed
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.querySelector('#projects-section');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  return (
    <div className=" min-h-screen pt-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.1, 1], // Pulsing effect with expansion
                  boxShadow: [
                    "0 0 10px rgba(255, 182, 193, 0.8)", // Light Pink glow
                    "0 0 20px rgba(173, 216, 230, 0.8)", // Light Blue glow
                    "0 0 30px rgba(144, 238, 144, 0.8)", // Light Green glow
                    "0 0 40px rgba(255, 223, 186, 0.8)", // Light Yellow glow
                    "0 0 50px rgba(221, 160, 221, 0.8)", // Light Lavender glow
                    "0 0 60px rgba(255, 105, 180, 0.8)", // Hot Pink glow
                    "0 0 70px rgba(255, 165, 0, 0.8)",   // Soft Orange glow
                  ], // Expanding shadow with color changes
                  backgroundColor: [
                    "rgba(255, 182, 193, 1)", // Light Pink
                    "rgba(173, 216, 230, 1)", // Light Blue
                    "rgba(144, 238, 144, 1)", // Light Green
                    "rgba(255, 223, 186, 1)", // Light Yellow
                    "rgba(221, 160, 221, 1)", // Light Lavender
                    "rgba(255, 105, 180, 1)", // Hot Pink
                    "rgba(255, 165, 0, 1)",   // Soft Orange
                  ], 
                  
              }}
              transition={{
                duration: 3, // 3 seconds for smooth transition
                repeat: Infinity, // Loop the animation infinitely
                ease: "easeInOut", // Smooth easing
              }}

              />
              <img
                src={pic}
                alt="Profile"
                className="relative rounded-full w-full h-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-gray-900 dark:text-white">
                 WELCOME TO MY PAGE !!
            </h2>
            <br />
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm Chaitanya Meshram
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              A passionate full-stack developer with expertise in building modern web applications.
              I love creating elegant solutions to complex problems.
            </p>
            <br />
            
            <SocialLinks />
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          >
            Technologies I Work With
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform hover:shadow-xl transition-all duration-300"
              >
                <span className="text-gray-900 dark:text-white text-center block">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="[#e6f7ff] py-16" id="projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ProjectCard {...project  } />
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-8 transform hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Let's Connect
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}