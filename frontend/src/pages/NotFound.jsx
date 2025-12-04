import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | SSP Rock Band"
        description="The page you're looking for doesn't exist. Return to SSP Rock Band homepage."
        keywords="404, page not found, SSP Rock Band"
        canonicalUrl="/404"
      />
      <div className="pt-20 min-h-screen flex items-center justify-center overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <FaExclamationTriangle className="text-9xl text-primary-500 opacity-20" />
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-display text-primary-500">
                  404
                </span>
              </div>
            </motion.div>

            {/* Error Message */}
            <h1 className="text-4xl md:text-6xl font-display uppercase tracking-wider text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FaHome />
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <FaArrowLeft />
                Go Back
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-dark-800">
              <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider">
                Popular Pages
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
                <Link
                  to="/booking"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Booking
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

