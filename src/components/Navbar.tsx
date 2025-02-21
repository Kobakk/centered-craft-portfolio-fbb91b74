
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center items-center space-x-8">
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link to="/" className="text-xl font-mono hover:text-neutral transition-colors">
              Portfolio
            </Link>
          </motion.div>
          <motion.div 
            className="h-4 w-px bg-neutral/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
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
                className="text-sm hover:text-neutral transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
