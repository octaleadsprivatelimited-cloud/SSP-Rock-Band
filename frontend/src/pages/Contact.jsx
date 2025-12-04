import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp, FaPaperPlane, FaCheck } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          eventDate: '',
          eventType: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['9652710153'],
      action: 'tel:9652710153',
      actionLabel: 'Call Now',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['sekharponnada1234@gmail.com'],
      action: 'mailto:sekharponnada1234@gmail.com',
      actionLabel: 'Send Email',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      details: ['Vizag (Visakhapatnam)', 'Andhra Pradesh, India'],
      action: 'https://maps.app.goo.gl/6cKZHts5yLUTMBjD6',
      actionLabel: 'Get Directions',
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sunday: By Appointment'],
      action: null,
      actionLabel: null,
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/ssprockband', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaInstagram, href: 'https://instagram.com/ssprockband', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: FaYoutube, href: 'https://youtube.com/ssprockband', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: FaTwitter, href: 'https://twitter.com/ssprockband', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: FaWhatsapp, href: 'https://wa.me/919652710153', label: 'WhatsApp', color: 'hover:bg-green-600' },
  ];

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Concert',
    'Festival',
    'Private Party',
    'Other',
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/90 to-dark-950" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              Contact Us
            </span>
            <h1 className="section-title mb-6">
              Let's
              <span className="gradient-text"> Connect</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions or ready to book? We'd love to hear from you. 
              Reach out and let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-600/20 border border-primary-600/40">
                  <info.icon className="text-xl text-primary-500" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 text-sm break-words">{detail}</p>
                ))}
                {info.action && (
                  <a
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block mt-4 text-primary-400 hover:text-primary-300 text-sm font-medium uppercase tracking-wider"
                  >
                    {info.actionLabel} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display uppercase tracking-wider text-white mb-2 break-words">
                Send Us a Message
              </h2>
              <p className="text-gray-400 mb-8 break-words">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="label">Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="label">Event Type</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us about your event or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FaPaperPlane />
                      Send Message
                    </span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-600/20 border border-green-600/40 rounded-lg flex items-center gap-3"
                  >
                    <FaCheck className="text-green-500" />
                    <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-600/20 border border-red-600/40 rounded-lg"
                  >
                    <p className="text-red-400">Something went wrong. Please try again or contact us directly.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="card overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.4!2d83.2983!3d17.7384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, maxWidth: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SSP Rock Band Location"
                  />
                </div>
                <a 
                  href="https://maps.app.goo.gl/6cKZHts5yLUTMBjD6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-dark-800 text-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  📍 View on Google Maps →
                </a>
              </div>

              {/* Social Links */}
              <div className="card p-8">
                <h3 className="text-xl font-heading font-bold text-white mb-4">Follow Us</h3>
                <p className="text-gray-400 mb-6">
                  Stay connected with us on social media for updates, behind-the-scenes content, and more!
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-dark-700 text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card p-8 bg-gradient-to-br from-primary-900/50 to-dark-900">
                <h3 className="text-xl font-heading font-bold text-white mb-4">Quick Contact</h3>
                <p className="text-gray-300 mb-6">
                  Need an immediate response? Call or WhatsApp us directly!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:9652710153"
                    className="btn-primary flex-1 min-w-0 text-center"
                  >
                    <FaPhone className="mr-2" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919652710153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-0 inline-flex items-center justify-center px-4 sm:px-6 py-4 text-base sm:text-lg font-bold uppercase tracking-wider text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How far in advance should I book?',
                a: 'We recommend booking at least 2-4 weeks in advance for regular events, and 2-3 months for weddings and large events to ensure availability.',
              },
              {
                q: 'Do you travel outside Vizag?',
                a: 'Yes! We perform across Andhra Pradesh, Telangana, and other states. Travel costs may apply depending on the location.',
              },
              {
                q: 'Can you play specific songs on request?',
                a: 'Absolutely! We love taking requests. Share your playlist with us, and we\'ll do our best to include your favorite songs.',
              },
              {
                q: 'What equipment do you bring?',
                a: 'We bring our complete setup including instruments, amplifiers, and can also provide sound systems. Larger venues may require additional PA equipment.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-lg font-heading font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

