
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-4">
        <motion.section 
          variants={itemVariants}
          className="mb-16"
        >
          <motion.span 
            className="inline-block px-3 py-1 text-sm bg-neutral/10 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web Developer
          </motion.span>
          <motion.h1 
            className="text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Creating digital experiences with precision and purpose
          </motion.h1>
          <motion.p 
            className="text-neutral text-lg"
            variants={itemVariants}
          >
            I'm a web developer focused on building beautiful, functional websites and applications. 
            With attention to detail and a passion for clean code, I bring ideas to life.
          </motion.p>
        </motion.section>

        <motion.section 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          {[1, 2, 3, 4].map((project) => (
            <motion.div 
              key={project}
              className="aspect-[4/3] bg-neutral/5 rounded-lg hover:bg-neutral/10 transition-colors cursor-pointer flex items-center justify-center"
              variants={projectVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-neutral">Project {project}</span>
            </motion.div>
          ))}
        </motion.section>
      </main>
    </motion.div>
  );
};

export default Index;
