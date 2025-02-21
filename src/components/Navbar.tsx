
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-6 mb-12"
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center items-center space-x-8">
          <Link to="/" className="text-xl font-mono hover:text-neutral transition-colors">
            Portfolio
          </Link>
          <div className="h-4 w-px bg-neutral/20" />
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm hover:text-neutral transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
