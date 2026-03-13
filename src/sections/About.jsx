import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-200 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-light-100 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto md:mx-0 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-dark-100 relative"
          >
            <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-dark-100 to-dark-300 flex items-center justify-center relative overflow-hidden">
               <img 
                 src={profileImg} 
                 alt="Nayan Suthar" 
                 className="w-full h-full object-cover"
               />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold text-light-100">
              MERN Stack & Flutter Developer
            </h3>
            
            <div className="space-y-4 text-light-200/80 leading-relaxed text-lg">
              <p>
                I am a passionate <strong className="text-primary font-medium">MERN Stack Developer</strong> and <strong className="text-sky-400 font-medium">Flutter (Dart) mobile app developer</strong>. 
                With a strong foundation in both frontend and backend technologies, I build full-stack web applications and fluid Android apps.
              </p>
              <p>
                My expertise lies in building <strong>scalable backend systems, crafting modern user interfaces, and engaging in real-world problem solving</strong>. 
                I thrive in environments where I can build end-to-end solutions, integrating seamless UI with robust server architectures.
              </p>
              <p>
                I am highly interested in <strong>startup-level products and advanced development projects</strong>, constantly exploring new technologies to deliver high-quality, impactful software.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-dark-100 border border-dark-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">W</div>
                <div>
                  <h4 className="font-bold text-light-100">Web Apps</h4>
                  <p className="text-sm text-light-200/70">MERN Stack</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-dark-100 border border-dark-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 text-xl font-bold">M</div>
                <div>
                  <h4 className="font-bold text-light-100">Mobile Apps</h4>
                  <p className="text-sm text-light-200/70">Flutter (Dart)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
