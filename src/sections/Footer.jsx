import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-300 py-12 border-t border-dark-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400 mb-2">
            Nayan Suthar
          </h3>
          <p className="text-light-200/60 text-sm">
            MERN Stack & Flutter Developer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/nayansuthar-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-200 hover:text-primary transition-colors hover:scale-110 transform"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/nayan-suthar-04b178340"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-200 hover:text-sky-500 transition-colors hover:scale-110 transform"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        <div className="text-light-200/60 text-sm text-center md:text-right flex flex-col items-center md:items-end gap-1">
          <p>
            &copy; {currentYear} All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <FaHeart className="text-red-500" /> using React
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
