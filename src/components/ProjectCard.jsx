import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, githubLink, downloadLink, liveLink, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-dark-100 rounded-2xl overflow-hidden border border-dark-100 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 flex flex-col h-full"
    >
      {image && (
        <div className="relative h-48 overflow-hidden bg-dark-200 flex items-center justify-center p-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-60"></div>
        </div>
      )}
      <div className="p-8 flex flex-col h-full">
        <h3 className="text-2xl font-bold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-light-100 to-light-200 mb-3 group-hover:from-primary group-hover:to-sky-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-light-200/80 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          {downloadLink && (
            <a
              href={downloadLink}
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white transition-colors bg-primary hover:bg-primary/90 py-2 px-4 rounded-lg w-full justify-center shadow-lg shadow-primary/20"
            >
              <FaGithub className="text-lg" />
              <span>Download App</span>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white transition-colors bg-sky-500 hover:bg-sky-500/90 py-2 px-4 rounded-lg w-full justify-center shadow-lg shadow-sky-500/20"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Visit Site</span>
            </a>
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-light-100 hover:text-primary transition-colors bg-dark-200 py-2 px-4 rounded-lg border border-dark-100 hover:border-primary/30 w-full justify-center"
          >
            <FaGithub className="text-lg" />
            <span>View Source</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
