import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaCalendarAlt, FaUsers, FaMusic, FaStar, FaQuoteLeft, FaArrowRight, FaGuitar, FaDrum, FaMicrophone } from 'react-icons/fa';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Events Performed', icon: FaCalendarAlt },
    { number: '50K+', label: 'Happy Guests', icon: FaUsers },
    { number: '14+', label: 'Years Experience', icon: FaMusic },
    { number: '4.9', label: 'Average Rating', icon: FaStar },
  ];

  const services = [
    {
      title: 'Wedding Performances',
      description: 'Make your special day unforgettable with our romantic and energetic rock performances.',
      icon: FaGuitar,
    },
    {
      title: 'Corporate Events',
      description: 'Professional entertainment that elevates your corporate gatherings and team celebrations.',
      icon: FaMicrophone,
    },
    {
      title: 'Private Parties',
      description: 'Birthday bashes, anniversaries, or any celebration – we bring the rock star energy.',
      icon: FaDrum,
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Wedding Client',
      text: 'SSP Rock Band made our wedding reception absolutely magical! The energy they brought was incredible.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Corporate Event Manager',
      text: 'Professional, punctual, and phenomenal performers. Our annual gala was a huge success thanks to them.',
      rating: 5,
    },
    {
      name: 'Anitha Reddy',
      role: 'Birthday Party Host',
      text: 'My 30th birthday was unforgettable! They played all my favorite rock classics and had everyone dancing.',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            }}
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Animated particles/lights effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-500 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, Math.random() * -200],
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-600/20 border border-primary-600/40 rounded-full text-primary-400 text-sm font-medium tracking-wider uppercase mb-6">
                🎸 Vizag's Premier Rock Band
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display uppercase tracking-wider text-white leading-none mb-6"
            >
              We Don't Just
              <br />
              <span className="gradient-text">Play Music</span>
              <br />
              We Create
              <br />
              <span className="text-primary-500">Memories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            >
              Professional rock band services for weddings, corporate events, 
              parties, and more. Let us rock your next event!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/booking" className="btn-primary">
                <FaCalendarAlt className="mr-2" />
                Book a Band
              </Link>
              <Link to="/gallery" className="btn-secondary">
                <FaPlay className="mr-2" />
                Watch Us Perform
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-primary-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-600/20 border border-primary-600/40">
                  <stat.icon className="text-2xl text-primary-500" />
                </div>
                <h3 className="text-4xl md:text-5xl font-display text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-600/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
                Who We Are
              </span>
              <h2 className="section-title mb-6">
                Rock Your Events With
                <span className="gradient-text"> SSP Rock Band</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Founded in 2010, SSP Rock Band has been Vizag's go-to live music entertainment 
                for over a decade. Our passionate musicians bring unmatched energy, professionalism, 
                and versatility to every performance.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                From classic rock anthems to modern hits, we customize our setlist to match 
                your event's vibe. Whether it's an intimate gathering or a grand celebration, 
                we deliver performances that leave lasting impressions.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium uppercase tracking-wider transition-colors">
                Learn More About Us
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="SSP Rock Band performing"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
                  <p className="text-4xl font-display">14+</p>
                  <p className="text-sm uppercase tracking-wider">Years of Rock</p>
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-full h-full border-2 border-primary-600/30 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              What We Offer
            </span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Professional rock band entertainment for every occasion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card card-hover p-8 text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-600/20 to-primary-800/20 border border-primary-600/40 group-hover:border-primary-500 transition-colors">
                  <service.icon className="text-3xl text-primary-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-secondary">
              View All Services
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              Testimonials
            </span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it – hear from those who've experienced our performances
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card p-8 relative"
              >
                <FaQuoteLeft className="text-4xl text-primary-600/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-accent-gold" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">
                Ready to Rock
                <span className="gradient-text"> Your Event?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's create an unforgettable experience together. Get in touch with us 
                today to discuss your event and book SSP Rock Band.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking" className="btn-gold">
                  <FaCalendarAlt className="mr-2" />
                  Book Now
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

