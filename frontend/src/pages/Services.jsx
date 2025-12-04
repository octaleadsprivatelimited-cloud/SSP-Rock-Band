import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGuitar, FaMusic, FaHeart, FaBriefcase, FaBirthdayCake, FaGlassCheers, FaTheaterMasks, FaCheck, FaArrowRight } from 'react-icons/fa';
import SEO from '../components/SEO';

const Services = () => {
  const services = [
    {
      icon: FaHeart,
      title: 'Wedding Performances',
      description: 'Make your special day truly unforgettable with our romantic and energetic performances. From the ceremony to the reception, we create the perfect musical atmosphere.',
      features: ['Custom song requests', 'Romantic ballads', 'Dance floor hits', 'Ceremony music', 'First dance special'],
    },
    {
      icon: FaBriefcase,
      title: 'Corporate Events',
      description: 'Elevate your corporate gatherings with professional entertainment that impresses clients and motivates employees.',
      features: ['Award ceremonies', 'Annual days', 'Team building events', 'Product launches', 'Gala dinners'],
    },
    {
      icon: FaBirthdayCake,
      title: 'Birthday Parties',
      description: 'Rock out on your special day! We bring the energy and excitement to make your birthday celebration legendary.',
      features: ['Age-appropriate setlists', 'Special birthday songs', 'Interactive performances', 'Photo opportunities', 'Customized themes'],
    },
    {
      icon: FaGlassCheers,
      title: 'Private Parties',
      description: 'From anniversaries to house parties, we bring the concert experience to your private celebrations.',
      features: ['Intimate settings', 'Personalized playlists', 'Flexible timing', 'Indoor/outdoor setup', 'All genres covered'],
    },
    {
      icon: FaTheaterMasks,
      title: 'Club Events',
      description: 'High-energy performances designed to keep the crowd moving all night long.',
      features: ['Extended sets', 'DJ collaboration', 'Light show sync', 'Crowd interaction', 'Late night performances'],
    },
    {
      icon: FaMusic,
      title: 'Festivals & Concerts',
      description: 'From college festivals to public concerts, we deliver stadium-worthy performances at any scale.',
      features: ['Large stage presence', 'Professional sound', 'Multi-hour sets', 'Original songs', 'Cover performances'],
    },
  ];

  const musicStyles = [
    { name: 'Classic Rock', artists: 'Led Zeppelin, AC/DC, Queen' },
    { name: 'Modern Rock', artists: 'Foo Fighters, Coldplay, Imagine Dragons' },
    { name: 'Bollywood Hits', artists: 'A.R. Rahman, Pritam, Arijit Singh' },
    { name: 'Pop Rock', artists: 'Maroon 5, Bruno Mars, Ed Sheeran' },
    { name: 'Metal', artists: 'Metallica, Iron Maiden, Black Sabbath' },
    { name: 'Indie Rock', artists: 'Arctic Monkeys, The Strokes, Tame Impala' },
  ];

  return (
    <>
      <SEO
        title="Services | SSP Rock Band - Wedding, Corporate & Event Entertainment in Vizag"
        description="SSP Rock Band offers professional live music services for weddings, corporate events, birthday parties, festivals, and private celebrations in Vizag. Custom performances tailored to your event. Multiple music styles including rock, classic rock, modern rock, and Bollywood. Professional sound setup and lighting included."
        keywords="wedding band services Vizag, corporate event entertainment, birthday party band Andhra Pradesh, festival band, private party music, live music services Visakhapatnam, event entertainment, custom music performance, professional band services, wedding entertainment packages, corporate event music, party band pricing, live music booking Vizag"
        ogTitle="Services | SSP Rock Band - Wedding, Corporate & Event Entertainment"
        ogDescription="Professional live music services for weddings, corporate events, birthday parties, festivals, and private celebrations in Vizag. Custom performances tailored to your event with professional sound and lighting."
        ogImage="/ssp-logo.png"
        ogUrl="/services"
        twitterTitle="Services | SSP Rock Band - Wedding, Corporate & Event Entertainment"
        twitterDescription="Professional live music services for weddings, corporate events, birthday parties, festivals, and private celebrations in Vizag. Custom performances tailored to your event."
        twitterImage="/ssp-logo.png"
        canonicalUrl="/services"
      />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              Our Services
            </span>
            <h1 className="section-title mb-6">
              Rock Any
              <span className="gradient-text"> Occasion</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From intimate gatherings to grand celebrations, we bring professional 
              rock band entertainment tailored to your event's unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover p-8 flex flex-col"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600/20 to-primary-800/20 border border-primary-600/40">
                  <service.icon className="text-2xl text-primary-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <FaCheck className="text-primary-500 text-sm flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Styles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              Our Repertoire
            </span>
            <h2 className="section-title">Music We Play</h2>
            <p className="section-subtitle">
              A diverse range of genres to match your event's vibe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicStyles.map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 flex items-center gap-4 group hover:bg-primary-600/10"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-600/20 group-hover:bg-primary-600/30 transition-colors">
                  <FaGuitar className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">{style.name}</h3>
                  <p className="text-gray-500 text-sm">{style.artists}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              Process
            </span>
            <h2 className="section-title">How to Book</h2>
            <p className="section-subtitle">
              Simple steps to rock your event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contact Us', description: 'Reach out with your event details through our booking form or contact page.' },
              { step: '02', title: 'Consultation', description: 'We\'ll discuss your requirements, preferences, and customize our performance.' },
              { step: '03', title: 'Confirmation', description: 'Confirm the booking and secure your date.' },
              { step: '04', title: 'Rock Your Event', description: 'We arrive, set up, and deliver an unforgettable performance!' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="text-6xl font-display text-primary-600/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
                {index < 3 && (
                  <FaArrowRight className="hidden md:block absolute top-8 -right-4 text-primary-600/40 text-xl" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-900/50 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Ready to Get
              <span className="gradient-text"> Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your event and let's make it legendary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking" className="btn-gold">
                Book Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;
