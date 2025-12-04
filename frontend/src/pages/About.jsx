import { motion } from 'framer-motion';
import { FaGuitar, FaDrum, FaMicrophone, FaMusic, FaStar, FaQuoteLeft, FaAward, FaHeart, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const bandMembers = [
    {
      name: 'Srinivas Prasad',
      role: 'Lead Vocalist & Founder',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'With 15+ years of experience, Srinivas brings powerful vocals and stage presence to every performance.',
      icon: FaMicrophone,
    },
    {
      name: 'Karthik Reddy',
      role: 'Lead Guitarist',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'A virtuoso guitarist who has mastered everything from classic rock riffs to modern metal solos.',
      icon: FaGuitar,
    },
    {
      name: 'Venkat Rao',
      role: 'Drummer',
      image: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'The heartbeat of SSP Rock Band, Venkat keeps the energy high with his explosive drumming.',
      icon: FaDrum,
    },
    {
      name: 'Ravi Kumar',
      role: 'Bassist',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Laying down the groove that makes everyone move, Ravi is the backbone of our sound.',
      icon: FaMusic,
    },
  ];

  const milestones = [
    { year: '2010', title: 'The Beginning', description: 'SSP Rock Band was founded in Vizag with a passion for rock music.' },
    { year: '2013', title: 'First Major Event', description: 'Performed at our first major corporate event with 1000+ attendees.' },
    { year: '2016', title: 'Wedding Specialists', description: 'Became the most sought-after wedding band in Andhra Pradesh.' },
    { year: '2019', title: '500 Events Milestone', description: 'Celebrated our 500th successful event performance.' },
    { year: '2024', title: 'Regional Recognition', description: 'Expanded services across South India with multiple band setups.' },
  ];

  const testimonials = [
    {
      name: 'Lakshmi Narayan',
      role: 'Event Organizer',
      event: 'Corporate Annual Day',
      text: 'SSP Rock Band transformed our corporate event into an unforgettable celebration. Their professionalism and talent are unmatched!',
      rating: 5,
    },
    {
      name: 'Meera & Arun',
      role: 'Wedding Couple',
      event: 'Wedding Reception',
      text: 'Our wedding reception was magical thanks to SSP Rock Band. They played our favorite songs and had everyone on the dance floor!',
      rating: 5,
    },
    {
      name: 'Suresh Babu',
      role: 'Club Owner',
      event: 'New Year Eve Party',
      text: 'The energy they bring is electric! Our New Year party was a massive hit, and our guests are still talking about their performance.',
      rating: 5,
    },
  ];

  const values = [
    { icon: FaAward, title: 'Excellence', description: 'We deliver nothing but the best in every performance.' },
    { icon: FaHeart, title: 'Passion', description: 'Music is not just our profession, it\'s our life.' },
    { icon: FaUsers, title: 'Connection', description: 'We create memorable experiences that bring people together.' },
  ];

  return (
    <>
      <SEO
        title="About SSP Rock Band | Our Story, Team & Experience"
        description="Learn about SSP Rock Band - Vizag's premier rock band with 14+ years of experience. Meet our talented musicians, discover our journey, and see why we're the top choice for live music events."
        keywords="SSP Rock Band about, rock band team, Vizag musicians, professional band members, live music experience, band history, music group Vizag, experienced musicians, rock band story"
        ogTitle="About SSP Rock Band | Our Story, Team & Experience"
        ogDescription="Learn about SSP Rock Band - Vizag's premier rock band with 14+ years of experience. Meet our talented musicians and discover our journey."
        ogUrl="/about"
        twitterTitle="About SSP Rock Band | Our Story, Team & Experience"
        twitterDescription="Learn about SSP Rock Band - Vizag's premier rock band with 14+ years of experience. Meet our talented musicians and discover our journey."
        canonicalUrl="/about"
      />
      <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              About Us
            </span>
            <h1 className="section-title mb-6">
              The Story Behind
              <span className="gradient-text"> SSP Rock Band</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over 14 years, we've been rocking events across India, bringing passion, 
              energy, and unforgettable performances to every stage we grace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-wider text-white mb-6 break-words">
                Our <span className="text-primary-500">Mission</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 break-words">
                SSP Rock Band was born from a simple belief: live rock music has the power to 
                transform any event into an extraordinary experience. Founded in Vizag in 2010, 
                we started as a group of passionate musicians who wanted to share their love 
                for rock music with the world.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Today, we're proud to be one of South India's most sought-after live rock bands, 
                having performed at over 500 events ranging from intimate weddings to massive 
                corporate celebrations. Our mission remains unchanged: to deliver electrifying 
                performances that create lasting memories.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We don't just play music – we create experiences. Every strum, every beat, 
                every note is crafted to connect with our audience and make your event truly special.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-2 sm:gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Band performing"
                className="rounded-2xl h-64 object-cover w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Concert crowd"
                className="rounded-2xl h-64 object-cover mt-8 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Drummer"
                className="rounded-2xl h-64 object-cover -mt-8 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Guitarist"
                className="rounded-2xl h-64 object-cover w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide every performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800">
                  <value.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Band Members Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              The Team
            </span>
            <h2 className="section-title">Meet the Band</h2>
            <p className="section-subtitle">
              The talented musicians behind the magic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <member.icon className="text-primary-500" />
                      <span className="text-primary-400 text-sm uppercase tracking-wider">{member.role}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              Our Journey
            </span>
            <h2 className="section-title">Milestones</h2>
          </motion.div>

          <div className="relative overflow-x-hidden">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-dark-700 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="card p-6">
                      <span className="text-4xl font-display text-primary-500">{milestone.year}</span>
                      <h3 className="text-xl font-heading font-bold text-white mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 break-words">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900 relative z-10 hidden md:block flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-50" />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              Testimonials
            </span>
            <h2 className="section-title">Client Love</h2>
            <p className="section-subtitle">
              Hear from the event organizers who trusted us with their special moments
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
                <p className="text-sm text-primary-400 uppercase tracking-wider mb-2">{testimonial.event}</p>
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-dark-950" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Ready to Experience
              <span className="gradient-text"> the Magic?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let SSP Rock Band be the highlight of your next event. 
              Contact us today for bookings and inquiries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 px-4">
              <Link to="/booking" className="btn-primary">
                Book Us Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;

