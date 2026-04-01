import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaWordpress, FaPhp } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMongodb, SiFirebase, SiFlutter, SiDart } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BiGitBranch } from 'react-icons/bi';
import SkillBadge from '../components/SkillBadge';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: IoLogoJavascript },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'PHP', icon: FaPhp },
    ]
  },
  {
    title: 'App Development',
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Dart', icon: SiDart },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: BiGitBranch },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'WordPress', icon: FaWordpress },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-light-100 mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-light-200/80 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, ranging from full-stack web technologies to cross-platform mobile app development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-dark-200/50 rounded-2xl p-8 border border-dark-100"
            >
              <h3 className="text-xl font-bold font-outfit text-light-100 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-primary to-sky-400 rounded-full inline-block"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    delay={(catIndex * 0.1) + (index * 0.05)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
