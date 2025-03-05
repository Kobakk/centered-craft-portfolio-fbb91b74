import { motion } from "framer-motion";
import { Github, Linkedin, FileType, Code, ServerCog } from "lucide-react";
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
              Disponible para trabajar
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex-1">
            <motion.h1 className="text-4xl font-bold mb-2 text-[#8bd8bd]">
              Sebastián Vélez
            </motion.h1>
            
            <motion.h2 className="text-xl mb-4">
              Web developer
            </motion.h2>
            
            <motion.p className="mb-4">
              👨‍💻 Programador con experiencia en desarrollo web y sistemas. Creo páginas optimizadas que generan resultados concretos. He desarrollado soluciones para empresas como North Market , PanoImagen y clientes independientes, implementando funcionalidades que automatizan procesos y mejoran conversiones.
            </motion.p>

            <div className="flex space-x-3 mb-6">
              <motion.a 
                href="#" 
                className="social-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>
              <motion.a 
                href="#" 
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
          <h2 className="section-title">Experiencia Laboral</h2>
          
          <div className="space-y-8">
            <motion.div 
              variants={itemVariants}
              className="bg-black/10 p-6 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="job-title">Técnico Informático / Desarrollo Web</h3>
                <div>
                  <span className="job-place">North Market</span>
                  <span className="mx-2">-</span>
                  <span className="job-date">2022</span>
                </div>
              </div>
              <p className="job-description">
                Creación de paginas web con WordPress, dominion, hosting, SEO y cookies. Para 
                campañas de marketing. Soporte ténico online y presencial sobre hardware, hardware, 
                red. Para los miembros de la empresa.
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
                <h3 className="job-title">Desarrollador en PanoImagen</h3>
                <div>
                  <span className="job-place">PanoImagen</span>
                  <span className="mx-2">-</span>
                  <span className="job-date">2024</span>
                </div>
              </div>
              <p className="job-description">
                Ejecuté proyectos de manejo de datos para clientes de PanoImagen, implementando soluciones de web scraping con Python/Selenium y automatizando el procesamiento de grandes volúmenes de PDFs. Desarrollé scripts eficientes con Jupyter Notebook, Pandas y WSL que transformaron datos no estructurados en información accionable, reduciendo tiempos de procesamiento y mejorando la toma de decisiones del cliente.
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
          <h2 className="section-title">Trabajos / Proyectos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-black/10 rounded-lg overflow-hidden"
              variants={projectVariants}
              whileHover="hover"
            >
              <div className="aspect-video bg-white/5">
                <img 
                  src="https://placehold.co/600x400/2b3146/8bd8bd" 
                  alt="Proyecto 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#8bd8bd]">Web Reforma</h3>
                <p className="text-sm">Pagina de contacto y portfolio para empresa de reforma. Responsive, accesible con SEO.</p>
              </div>
            </motion.div>
            
            {[2, 3, 4].map((project) => (
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
                  <h3 className="text-lg font-semibold mb-2 text-[#8bd8bd]">Proyecto {project}</h3>
                  <p className="text-sm">Descripción breve del proyecto {project}</p>
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
          <h2 className="section-title">Sobre mí</h2>
          
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
                Soy una persona entusiasta de la programacion y el diseño web, desde pequeño estaba
                interesado por el tema artístico/diseño que he desarrollado por medio de la ilustración y
                dibujo 🎨.
              </p>
              <p>
                Duarante la pandemia comence el grado de sistemas con el que aprendí <span className="highlight">linux</span> y <span className="highlight">cómo
                manejo de servidores</span> y redes, acabandolo en 2022 y comenzando el grado de <span className="highlight">desarrollo
                web</span> acabandolo hace un tiempo.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="text-center pb-8 text-sm text-white/50">
        <p>Copyright © 2024 sevdev</p>
      </footer>
    </motion.div>
  );
};

export default Index;
