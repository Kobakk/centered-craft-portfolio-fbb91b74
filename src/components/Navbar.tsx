
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Presentación", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Contacto", href: "/contact" },
  ];

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="py-6 mb-12"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover="hover" 
            variants={linkVariants}
            className="text-xl font-mono tracking-wide"
          >
            <Link to="/" className="text-[#8bd8bd] hover:opacity-80 transition-opacity">
              sevdev
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-8">
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                whileHover="hover"
                variants={linkVariants}
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.3 + (index * 0.1) }
                }}
              >
                <Link
                  to={link.href}
                  className="text-sm hover:text-[#8bd8bd] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
