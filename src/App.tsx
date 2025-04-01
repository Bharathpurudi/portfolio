import React from 'react';
import { Github, Linkedin, Mail, Download, Award, Code, Globe, Server, Database, PenTool as Tool } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FadeInSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="container mx-auto px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Bharath Purudi</h1>
              <p className="text-2xl mb-8 text-purple-100">Full Stack Developer & Tech Enthusiast</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="mailto:bharathpurudi.tech@gmail.com" 
                   className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-100 transition-colors flex items-center gap-2 shadow-lg">
                  <Mail size={20} />
                  Contact Me
                </a>
                <a href="/resume.pdf" download 
                   className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Resume
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&h=400" 
                alt="Profile" 
                className="rounded-full w-56 h-56 object-cover border-4 border-white shadow-2xl" 
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                I'm a passionate Full Stack Developer with 3+ years of experience in building web applications. 
                I specialize in React.js and Node.js, with a strong focus on creating scalable and user-friendly applications.
              </p>
              <p>
                Currently working at Accenture, I've had the opportunity to work on various challenging projects 
                that have helped me develop a deep understanding of both frontend and backend technologies.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Skills Section */}
      <FadeInSection>
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-8 bg-white rounded-xl shadow-lg border border-purple-100"
              >
                <div className="text-purple-600 mb-4">
                  <Globe size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Code size={16} className="text-purple-500" />
                    React.js & Redux
                  </li>
                  <li className="flex items-center gap-2">
                    <Code size={16} className="text-purple-500" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <Code size={16} className="text-purple-500" />
                    HTML5 & CSS3
                  </li>
                  <li className="flex items-center gap-2">
                    <Code size={16} className="text-purple-500" />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <Code size={16} className="text-purple-500" />
                    Material UI
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-8 bg-white rounded-xl shadow-lg border border-purple-100"
              >
                <div className="text-purple-600 mb-4">
                  <Server size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Server size={16} className="text-purple-500" />
                    Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <Server size={16} className="text-purple-500" />
                    Express.js
                  </li>
                  <li className="flex items-center gap-2">
                    <Database size={16} className="text-purple-500" />
                    MongoDB
                  </li>
                  <li className="flex items-center gap-2">
                    <Database size={16} className="text-purple-500" />
                    MySQL
                  </li>
                  <li className="flex items-center gap-2">
                    <Server size={16} className="text-purple-500" />
                    RESTful APIs
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-8 bg-white rounded-xl shadow-lg border border-purple-100"
              >
                <div className="text-purple-600 mb-4">
                  <Tool size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Tool size={16} className="text-purple-500" />
                    Git & GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <Tool size={16} className="text-purple-500" />
                    Docker
                  </li>
                  <li className="flex items-center gap-2">
                    <Tool size={16} className="text-purple-500" />
                    AWS Services
                  </li>
                  <li className="flex items-center gap-2">
                    <Tool size={16} className="text-purple-500" />
                    CI/CD
                  </li>
                  <li className="flex items-center gap-2">
                    <Tool size={16} className="text-purple-500" />
                    Agile Methodologies
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Experience Section */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Work Experience</h2>
            <div className="max-w-4xl mx-auto space-y-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-purple-100"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Full Stack Developer</h3>
                    <p className="text-purple-600 text-lg">Accenture</p>
                  </div>
                  <span className="text-gray-500 font-medium">2021 - Present</span>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Award className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <span>Led the development of multiple full-stack applications using React.js and Node.js</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <span>Implemented responsive designs and optimized application performance, improving load times by 40%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <span>Collaborated with cross-functional teams to deliver high-quality solutions within deadlines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <span>Mentored junior developers and conducted code reviews to maintain code quality</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-purple-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400" 
                  alt="E-commerce Platform" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">E-commerce Platform</h3>
                  <p className="text-gray-600 mb-6">
                    A full-stack e-commerce platform with features like product management, 
                    cart functionality, and secure payment integration.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-purple-600">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">React.js</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">MongoDB</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Stripe</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
                      <Globe size={18} />
                      Live Demo
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
                      <Github size={18} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-purple-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=400" 
                  alt="Task Management App" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Task Management App</h3>
                  <p className="text-gray-600 mb-6">
                    A collaborative task management application with real-time updates, 
                    team collaboration features, and progress tracking.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-purple-600">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">React.js</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Socket.io</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Express.js</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">PostgreSQL</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
                      <Globe size={18} />
                      Live Demo
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
                      <Github size={18} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get In Touch</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl text-gray-600 mb-12">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
              <div className="flex justify-center gap-8">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Github size={32} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://linkedin.com" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Linkedin size={32} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="mailto:bharathpurudi.tech@gmail.com" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Mail size={32} />
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Bharath Purudi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;