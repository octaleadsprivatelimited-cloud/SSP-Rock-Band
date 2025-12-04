import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-950/95 backdrop-blur-lg shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              <img 
                src="/ssp-logo.png" 
                alt="SSP Rock Band Logo" 
                className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h1 className="text-2xl font-display tracking-wider text-white">
                SSP <span className="text-primary-500">Rock Band</span>
              </h1>
              <p className="text-xs text-gray-400 tracking-widest uppercase">Live Music Experience</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link text-sm uppercase tracking-wider ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button & Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:9652710153"
              className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
            >
              <FaPhone className="text-primary-500" />
              <span className="text-sm font-medium">9652710153</span>
            </a>
            <Link to="/booking" className="btn-primary !py-3 !px-6 !text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-primary-500 transition-colors"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-950/98 backdrop-blur-lg border-t border-dark-800"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-medium tracking-wide border-b border-dark-800 ${
                        isActive ? 'text-primary-500' : 'text-gray-300'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4 space-y-4"
              >
                <a
                  href="tel:9652710153"
                  className="flex items-center justify-center gap-2 text-gray-300"
                >
                  <FaPhone className="text-primary-500" />
                  <span>9652710153</span>
                </a>
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

