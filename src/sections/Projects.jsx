import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';


const projects = [
  {
    title: 'ExpensePilot',
    description: 'A Flutter Android application for managing and tracking personal expenses with a clean, intuitive, and highly responsive user interface.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Mobile App'],
    githubLink: 'https://github.com/nayansuthar-1/ExpensePilot',
    downloadLink: 'https://github.com/nayansuthar-1/ExpensePilot/releases/download/v1.0/ExpensePilot.apk'
  },
  {
    title: 'Atmos Weather App',
    description: 'A beautifully designed Flutter weather application that provides real-time weather information, forecasting, and environmental data.',
    techStack: ['Flutter', 'Dart', 'REST API', 'Mobile App'],
    githubLink: 'https://github.com/nayansuthar-1/atmos_weather_app',
    downloadLink: 'https://github.com/nayansuthar-1/atmos_weather_app/releases/download/v1.0/app-release.apk'
  },
  {
    title: 'VistaGO',
    description: 'A comprehensive travel accommodation platform that allows users to discover, book, and list unique stays around the world, featuring a robust search and booking system.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/nayansuthar-1/VistaGo',
    liveLink: 'https://vistago.onrender.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dark-200 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-light-100 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto md:mx-0 rounded-full"></div>
          <p className="mt-4 text-light-200/80 max-w-2xl md:ml-0">
            A curated selection of my recent development projects, showcasing my ability to build both scalable web applications and intuitive mobile experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              downloadLink={project.downloadLink}
              liveLink={project.liveLink}
              image={project.image}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
