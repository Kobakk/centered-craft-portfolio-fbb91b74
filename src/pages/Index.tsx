
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-4">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm bg-neutral/10 rounded-full mb-4">
            Web Developer
          </span>
          <h1 className="text-4xl font-bold mb-6">
            Creating digital experiences with precision and purpose
          </h1>
          <p className="text-neutral text-lg">
            I'm a web developer focused on building beautiful, functional websites and applications. 
            With attention to detail and a passion for clean code, I bring ideas to life.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {[1, 2, 3, 4].map((project) => (
            <div 
              key={project}
              className="aspect-[4/3] bg-neutral/5 rounded-lg hover:bg-neutral/10 transition-colors cursor-pointer flex items-center justify-center"
            >
              <span className="text-neutral">Project {project}</span>
            </div>
          ))}
        </motion.section>
      </main>
    </div>
  );
};

export default Index;
