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
      image: 'https://asset.cloudinary.com/dhbojrw6q/35c52cf0d4fa8b9daeecc1af76d7498f',
    },
    {
      title: 'Project 2',
      description: 'Collaborative Code Editor',
      techStack: ['React', 'Node.js', 'Socket.io','Express.js'],
      demoUrl: 'https://project1.example.com',
      repoUrl: 'https://github.com/chaitanya3715/CodeCollab',
      image: 'https://asset.cloudinary.com/dhbojrw6q/96a925dcfc74ebdc0325d34a3598a748',
    },
    {
      title: 'Project 3',
      description: 'A full-stack Portfolio Website.',
      techStack: ['React', 'Node.js', 'Express', 'SupaSpace'],
      demoUrl: 'https://project1.example.com',
      repoUrl: 'https://github.com/yourusername/project1',
      image: 'https://asset.cloudinary.com/dhbojrw6q/dc1b8c5bea897c79d22ca33c48fc66f4',
    },
    {
      title: 'Project 4',
      description: 'Docker Containerization of a MERN Application.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      demoUrl: 'https://project1.example.com',
      repoUrl: 'https://github.com/chaitanya3715/Docker-containerized-',
      image: 'https://asset.cloudinary.com/dhbojrw6q/1e2d481259119f2308f49a54ee95c8f4',
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