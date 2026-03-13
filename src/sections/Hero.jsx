import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaArrowRight, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 md:px-12 z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="max-w-3xl flex-1 mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 tracking-wide">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-outfit mb-4 text-light-100 leading-tight"
          >
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">
              Nayan Suthar
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-light-200 mb-6"
          >
            MERN Stack & Flutter Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-light-200/80 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            I am a passionate developer who builds real-world applications. 
            From scalable full-stack web platforms to smooth and interactive Android apps, 
            I bring ideas to life with modern technology and elegant design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              to="projects"
              smooth="linear"
              duration={700}
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              View Projects <FaArrowRight />
            </Link>
            
            <Link
              to="contact"
              smooth="linear"
              duration={700}
              className="px-6 py-3 rounded-lg bg-dark-100 border border-dark-100 hover:border-primary/50 text-light-100 font-medium flex items-center gap-2 transition-all cursor-pointer"
            >
              Contact Me <FaEnvelope />
            </Link>
            
            <a
              href="https://github.com/nayansuthar-1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-dark-100 border border-dark-100 hover:border-primary/50 text-light-100 font-medium flex items-center gap-2 transition-all cursor-pointer"
            >
              GitHub <FaGithub className="text-lg" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
