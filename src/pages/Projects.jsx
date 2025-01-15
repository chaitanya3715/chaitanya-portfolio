import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack Cloud Based Freelancing Platform.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      demoUrl: 'https://project1.example.com',
      repoUrl: 'https://github.com/chaitanya3715/cloud-based-Freelancing-Platform',
      image: 'public/static/images/project1.png',
    },
    {
      title: 'Project 2',
      description: 'Collaborative Code Editor',
      techStack: ['React', 'Node.js', 'Socket.io','Express.js'],
      demoUrl: 'https://project1.example.com',
      repoUrl: 'https://github.com/chaitanya3715/CodeCollab',
      image: 'public/static/images/project2.png',
    },
    {
      title: 'Project 3',
      description: 'A full-stack Portfolio Website.',
      techStack: ['React', 'Node.js', 'Express', 'SupaSpace'],
      demoUrl: 'https://project1.example.com',
      repoUrl: 'https://github.com/yourusername/project1',
      image: 'public/static/images/project3.png',
    },
    {
      title: 'Project 4',
      description: 'Docker Containerization of a MERN Application.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      demoUrl: 'https://project1.example.com',
      repoUrl: 'https://github.com/chaitanya3715/Docker-containerized-',
      image: 'public/static/images/project4.png',
    },
    // {
    //   title: 'Project 5',
    //   description: 'Banking Application.',
    //   techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    //   demoUrl: 'https://project1.example.com',
    //   repoUrl: 'https://github.com/yourusername/project1',
    //   image: '/project1.jpg',
    // },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          My Projects
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}