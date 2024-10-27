import React, { useState, useEffect } from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute bg-blue-500/20 rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `-${Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10 - 5,
        y: (e.clientY / window.innerHeight) * 10 - 5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      id="home" 
      className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden top-12"
    >
      <ParticleBackground />
      
      <div 
        className="w-full max-w-2xl mx-auto px-4 relative z-10"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="user-details space-y-3"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-medium tracking-wider hover:text-blue-300 transition-colors cursor-default text-sm"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            id="user-detail-name" 
            className="text-3xl sm:text-4xl font-bold hover:text-blue-200 transition-colors cursor-default
                     animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            PRASHANT SOM
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            id="user-detail-intro" 
            className="text-xl sm:text-2xl font-semibold text-gray-300 hover:text-white transition-colors cursor-default"
          >
            Full Stack Web Developer.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="group bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300
                     transform hover:scale-[1.01] hover:shadow-lg mt-2"
          >
            <p className="description text-gray-400 text-sm sm:text-base leading-relaxed hover:text-gray-300 transition-colors">
              I possess a solid foundation in full stack development, specializing in MERN stack technologies
              (MongoDB, Express.js, React.js, and Node.js). I am proficient in building responsive and
              user-friendly web applications, and I have recently expanded my skill set to include
              generative AI, enabling me to craft intelligent and dynamic content.
              <br /><br />
              I enjoy working with JavaScript and have a strong grasp of HTML and CSS for creating
              beautiful and intuitive user interfaces. Additionally, I am familiar with Express.js,
              Next.js, Redux, Git, and have a background in data structures and algorithms, Python,
              and cloud platforms like AWS and Azure.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="resume-button mt-4"
          >
            <a
              id="resume-link-2"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://drive.google.com/file/d/1X0PgCD_1VZVrI_L1hnvZ9YVNbtVGcz6x/view?usp=drive_link"
                );
              }}
              className="inline-block"
            >
              <button
                id="resume-button-2"
                className="group relative px-5 py-2 bg-blue-600 text-white text-sm rounded-md overflow-hidden
                         transform hover:scale-105 transition-all duration-300 hover:shadow-lg
                         hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600
                              bg-[length:200%_100%] animate-gradient"></div>
                <div className="relative flex items-center space-x-2">
                  <span className="font-medium">Download Resume</span>
                  <AiOutlineCloudDownload className="text-lg group-hover:animate-bounce" />
                </div>
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;