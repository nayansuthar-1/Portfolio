import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaUser, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    // Fallback: Open Gmail Web Compose instead of `mailto:`
    // This works consistently across devices without requiring a default mail client.
    const subject = encodeURIComponent(`New Message from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nayansuthar969@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-light-100 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-light-200/80 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out. I'm currently open for new opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-center space-y-8 bg-dark-200/50 p-8 rounded-2xl border border-dark-100 shadow-xl"
          >
            <h3 className="text-2xl font-bold font-outfit text-light-100 mb-2">Let's Connect</h3>
            <p className="text-light-200/70 mb-6">
              I'm interested in freelance opportunities, full-time positions, and challenging projects. Send me a message and I'll get back to you soon.
            </p>

            <a
              href="mailto:nayansuthar969@gmail.com"
              className="flex items-center gap-4 group p-4 rounded-xl bg-dark-100 border border-dark-100 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-xl" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm text-light-200/70 font-medium">Email Me At</p>
                <p className="text-light-100 font-medium truncate">nayansuthar969@gmail.com</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-dark-200/50 p-8 rounded-2xl border border-dark-100 shadow-xl relative"
          >
            <form 
              className="space-y-6 flex flex-col" 
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-light-200/50">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-dark-100 border border-dark-100 text-light-100 px-12 py-4 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-light-200/40"
                  />
                </div>
                
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-light-200/50">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-dark-100 border border-dark-100 text-light-100 px-12 py-4 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-light-200/40"
                  />
                </div>
              </div>

              <div className="relative flex-grow">
                <span className="absolute left-4 top-5 text-light-200/50">
                  <FaCommentAlt />
                </span>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-full bg-dark-100 border border-dark-100 text-light-100 px-12 py-4 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-light-200/40"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                Send Message <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
