
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.projects'), href: "/projects" },
    { name: t('nav.contact'), href: "/contact" },
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

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
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
            <motion.button
              whileHover="hover"
              variants={linkVariants}
              onClick={toggleLanguage}
              className="flex items-center justify-center rounded-full p-2 bg-black/20 hover:bg-black/30 transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={16} className="text-[#8bd8bd]" />
              <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
