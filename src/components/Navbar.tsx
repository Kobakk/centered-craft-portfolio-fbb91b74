
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="py-6 mb-12 relative"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover="hover" 
            variants={linkVariants}
            className="text-xl font-mono tracking-wide z-10"
          >
            <Link to="/" className="text-[#8bd8bd] hover:opacity-80 transition-opacity">
              sevdev
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-10">
            <motion.button
              whileHover="hover"
              variants={linkVariants}
              onClick={toggleLanguage}
              className="flex items-center justify-center rounded-full p-2 bg-black/20 hover:bg-black/30 transition-colors mr-4"
              aria-label="Toggle language"
            >
              <Globe size={16} className="text-[#8bd8bd]" />
              <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
            </motion.button>
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md bg-black/20 hover:bg-black/30 transition-colors"
            >
              {isMenuOpen ? (
                <X size={20} className="text-[#8bd8bd]" />
              ) : (
                <Menu size={20} className="text-[#8bd8bd]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden absolute inset-x-0 top-full mt-2 bg-[#202334] rounded-lg shadow-lg p-4 z-20 mx-4"
            >
              <motion.div className="flex flex-col space-y-4">
                {links.map((link) => (
                  <motion.div 
                    key={link.name}
                    variants={mobileItemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={link.href}
                      className="block py-2 text-sm hover:text-[#8bd8bd] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
