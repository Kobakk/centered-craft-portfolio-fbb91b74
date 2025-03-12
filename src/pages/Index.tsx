import { motion } from "framer-motion";
import { Github, Linkedin, FileType, Code, ServerCog, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import { useLanguage } from "../contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
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
      boxShadow: "0 10px 25px -10px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-4">
        {/* Hero Section */}
        <motion.section 
          variants={containerVariants}
          className="mb-16 flex flex-col md:flex-row items-start gap-8"
        >
          <motion.div 
            className="bg-black/10 rounded-lg p-4 text-center flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="w-32 h-32 mb-3 overflow-hidden">
              <img 
                src="/lovable-uploads/eaa3918e-ad47-4bfa-9e94-d202b6c8fa6f.png" 
                alt="Perfil"
                className="rounded-full w-full h-full object-cover border-2 border-[#8bd8bd]"
              />
            </div>
            <motion.div 
              className="inline-block px-3 py-1 text-sm bg-black/20 rounded-full mb-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.available')}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex-1">
            <motion.h1 className="text-4xl font-bold mb-2 text-[#8bd8bd]">
              {t('hero.name')}
            </motion.h1>
            
            <motion.h2 className="text-xl mb-4">
              {t('hero.jobTitle')}
            </motion.h2>
            
            <motion.p className="mb-4 text-justify">
              {t('hero.description')}
            </motion.p>

            <div className="flex space-x-3 mb-6">
              <motion.a 
                href="https://www.linkedin.com/in/sebasveleza/" 
                className="social-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>
              <motion.a 
                href="https://github.com/Kobakk" 
                className="social-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                GitHub
              </motion.a>
              <motion.a 
                href="#" 
                className="social-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileType size={16} />
                TikTok
              </motion.a>
            </div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="section-title">{t('section.experience')}</h2>
          
          <div className="space-y-8">
            <motion.div 
              variants={itemVariants}
              className="bg-black/10 p-6 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="job-title">{t('job1.title')}</h3>
                <div>
                  <span className="job-place">{t('job1.company')}</span>
                  <span className="mx-2">-</span>
                  <span className="job-date">2022</span>
                </div>
              </div>
              <p className="job-description">
                {t('job1.description')}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <motion.button 
                  className="tech-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={14} />
                  WordPress
                </motion.button>
                <motion.button 
                  className="tech-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ServerCog size={14} />
                  Hosting
                </motion.button>
                <motion.button 
                  className="tech-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={14} />
                  SEO
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-black/10 p-6 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="job-title">{t('job2.title')}</h3>
                <div>
                  <span className="job-place">{t('job2.company')}</span>
                  <span className="mx-2">-</span>
                  <span className="job-date">2024</span>
                </div>
              </div>
              <p className="job-description">
                {t('job2.description')}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <motion.button 
                  className="tech-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={14} />
                  Python
                </motion.button>
                <motion.button 
                  className="tech-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={14} />
                  Selenium
                </motion.button>
                <motion.button 
                  className="tech-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={14} />
                  Pandas
                </motion.button>
                <motion.button 
                  className="tech-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ServerCog size={14} />
                  WSL
                </motion.button>
                <motion.button 
                  className="tech-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={14} />
                  Jupyter
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="section-title">{t('section.projects')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a 
              href="https://reformasrolan.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/10 rounded-lg overflow-hidden group"
              variants={projectVariants}
              whileHover="hover"
            >
              <div className="aspect-video bg-white/5 relative">
                <img 
                  src="/lovable-uploads/732bde49-bb6b-432a-88c1-cf12b2b17a38.png" 
                  alt="Web Reforma - Reformas Rolan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-white w-8 h-8" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#8bd8bd] flex items-center">
                  {t('project1.title')}
                  <ExternalLink size={16} className="ml-2 opacity-70" />
                </h3>
                <p className="text-sm">{t('project1.description')}</p>
              </div>
            </motion.a>
            
            <motion.a 
              href="https://elreydelostacos.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/10 rounded-lg overflow-hidden group"
              variants={projectVariants}
              whileHover="hover"
            >
              <div className="aspect-video bg-white/5 relative">
                <img 
                  src="/lovable-uploads/68fe286e-28fc-481a-a9ad-f4942bfd6c70.png" 
                  alt="El Rey de los Tacos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-white w-8 h-8" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#8bd8bd] flex items-center">
                  {t('project2.title')}
                  <ExternalLink size={16} className="ml-2 opacity-70" />
                </h3>
                <p className="text-sm">{t('project2.description')}</p>
              </div>
            </motion.a>
            
            {[3, 4].map((project) => (
              <motion.div 
                key={project}
                className="bg-black/10 rounded-lg overflow-hidden"
                variants={projectVariants}
                whileHover="hover"
              >
                <div className="aspect-video bg-white/5">
                  <img 
                    src={`https://placehold.co/600x400/2b3146/8bd8bd?text=Proyecto+${project}`}
                    alt={`Proyecto ${project}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-[#8bd8bd]">{`${t('project.description')} ${project}`}</h3>
                  <p className="text-sm">{`${t('project.description')} ${project}`}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section 
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="section-title">{t('section.about')}</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div variants={itemVariants} className="w-32 h-32 overflow-hidden flex-shrink-0">
              <img 
                src="/lovable-uploads/eaa3918e-ad47-4bfa-9e94-d202b6c8fa6f.png"
                alt="Perfil" 
                className="rounded-full w-full h-full object-cover border-2 border-[#8bd8bd]"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="mb-4">
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="text-center pb-8 text-sm text-white/50">
        <p>{t('footer.copyright')}</p>
      </footer>
    </motion.div>
  );
};

export default Index;
