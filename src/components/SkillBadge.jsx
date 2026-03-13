import { motion } from 'framer-motion';

const SkillBadge = ({ name, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay,
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-dark-100 border border-dark-100 hover:border-primary/50 hover:bg-dark-100/80 transition-all duration-300 group cursor-default"
    >
      <div className="text-4xl text-light-200 group-hover:text-primary transition-colors duration-300">
        <Icon />
      </div>
      <span className="text-sm font-medium text-light-100 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  );
};

export default SkillBadge;
