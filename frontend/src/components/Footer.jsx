import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaSpotify, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book a Band', path: '/booking' },
  ];

  const services = [
    'Wedding Performances',
    'Corporate Events',
    'Birthday Parties',
    'Club Events',
    'Festivals & Concerts',
    'Private Parties',
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/ssprockband', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com/ssprockband', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://youtube.com/ssprockband', label: 'YouTube' },
    { icon: FaTwitter, href: 'https://twitter.com/ssprockband', label: 'Twitter' },
    { icon: FaSpotify, href: 'https://spotify.com/artist/ssprockband', label: 'Spotify' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/ssp-logo.png" 
                alt="SSP Rock Band Logo" 
                className="h-8 w-auto object-contain"
              />
              <div>
                <h2 className="text-xl font-display tracking-wider text-white">
                  SSP <span className="text-primary-500">Rock Band</span>
                </h2>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bringing electrifying rock performances to your events since 2010. We don't just play music – we create unforgettable experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9652710153"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800">
                    <FaPhone className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                    <p className="font-medium">9652710153</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sekharponnada1234@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800">
                    <FaEnvelope className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="font-medium">sekharponnada1234@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800">
                    <FaMapMarkerAlt className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="font-medium">Vizag, Andhra Pradesh, India</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © 2025 SSP Rock Band. All rights reserved.
              </p>
              <a 
                href="/sitemap.xml"
                className="text-gray-500 hover:text-primary-400 transition-colors text-sm"
              >
                Sitemap
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Developed by{' '}
              <a 
                href="https://octaleads.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Octaleads Private Limited
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

