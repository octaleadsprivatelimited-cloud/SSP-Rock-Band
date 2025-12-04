import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes, FaExpand, FaCamera, FaVideo } from 'react-icons/fa';
import SEO from '../components/SEO';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    {
      type: 'video',
      category: 'performance',
      src: '/media/video1.mp4',
      thumbnail: '/media/image1.jpeg',
      title: 'Live Performance',
      description: 'SSP Rock Band in action',
    },
    {
      type: 'video',
      category: 'performance',
      src: '/media/video2.mp4',
      thumbnail: '/media/image2.jpeg',
      title: 'Stage Show',
      description: 'Electrifying stage presence',
    },
    {
      type: 'video',
      category: 'performance',
      src: '/media/video3.mp4',
      thumbnail: '/media/image3.jpeg',
      title: 'Concert Highlights',
      description: 'Best moments from our shows',
    },
    {
      type: 'video',
      category: 'event',
      src: '/media/video4.mp4',
      thumbnail: '/media/image4.jpeg',
      title: 'Event Performance',
      description: 'Rocking the crowd',
    },
    {
      type: 'video',
      category: 'event',
      src: '/media/video5.mp4',
      thumbnail: '/media/image1.jpeg',
      title: 'Live Music Night',
      description: 'Unforgettable evening',
    },
    {
      type: 'video',
      category: 'performance',
      src: '/media/video6.mp4',
      thumbnail: '/media/image2.jpeg',
      title: 'Band Performance',
      description: 'Full band setup',
    },
    {
      type: 'video',
      category: 'event',
      src: '/media/video7.mp4',
      thumbnail: '/media/image3.jpeg',
      title: 'Special Event',
      description: 'Creating memories',
    },
    {
      type: 'video',
      category: 'performance',
      src: '/media/video8.mp4',
      thumbnail: '/media/image4.jpeg',
      title: 'Rock Night',
      description: 'High energy performance',
    },
    {
      type: 'image',
      category: 'photos',
      src: '/media/image1.jpeg',
      title: 'Band Photo',
      description: 'SSP Rock Band',
    },
    {
      type: 'image',
      category: 'photos',
      src: '/media/image2.jpeg',
      title: 'Performance Shot',
      description: 'On stage moments',
    },
    {
      type: 'image',
      category: 'photos',
      src: '/media/image3.jpeg',
      title: 'Concert Photo',
      description: 'Live in concert',
    },
    {
      type: 'image',
      category: 'photos',
      src: '/media/image4.jpeg',
      title: 'Event Photo',
      description: 'Memorable moments',
    },
  ];

  const tabs = [
    { id: 'all', label: 'All', icon: FaCamera },
    { id: 'performance', label: 'Performances', icon: FaVideo },
    { id: 'event', label: 'Events', icon: FaVideo },
    { id: 'photos', label: 'Photos', icon: FaCamera },
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <>
      <SEO
        title="Gallery | SSP Rock Band - Photo & Video Gallery"
        description="View our photo and video gallery showcasing SSP Rock Band's live performances at weddings, corporate events, parties, and concerts in Vizag. See us in action!"
        keywords="SSP Rock Band gallery, band photos, live performance videos, wedding band photos, event photos, music performance gallery, Vizag band videos, rock band images"
        ogTitle="Gallery | SSP Rock Band - Photo & Video Gallery"
        ogDescription="View our photo and video gallery showcasing SSP Rock Band's live performances at weddings, corporate events, parties, and concerts."
        ogUrl="/gallery"
        twitterTitle="Gallery | SSP Rock Band - Photo & Video Gallery"
        twitterDescription="View our photo and video gallery showcasing SSP Rock Band's live performances at weddings, corporate events, parties, and concerts."
        canonicalUrl="/gallery"
      />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/media/image1.jpeg')`,
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
              Gallery
            </span>
            <h1 className="section-title mb-6">
              Our
              <span className="gradient-text"> Performances</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Relive the energy, excitement, and unforgettable moments from our past events. 
              Browse through photos and videos that capture the SSP Rock Band experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium uppercase tracking-wider text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.category}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-dark-800">
                    {item.type === 'video' ? (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-heading font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                    
                    {/* Icon indicator */}
                    <div className="absolute top-4 right-4">
                      {item.type === 'video' ? (
                        <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                          <FaPlay className="text-white ml-1" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <FaExpand className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Video Badge */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 left-4 bg-primary-600 px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1">
                      <FaVideo /> Video
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-lg p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-500 transition-colors z-10"
              >
                <FaTimes className="text-3xl" />
              </button>

              {selectedItem.type === 'video' ? (
                <div className="rounded-2xl overflow-hidden bg-black">
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="w-full max-h-[80vh]"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full rounded-2xl shadow-2xl max-h-[80vh] object-contain"
                />
              )}

              <div className="mt-4 text-center">
                <h3 className="text-2xl font-heading font-bold text-white">{selectedItem.title}</h3>
                <p className="text-gray-400">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Videos Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              Featured
            </span>
            <h2 className="section-title">Watch Us Live</h2>
            <p className="section-subtitle">
              Experience the energy of our performances
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-dark-800"
            >
              <video
                src="/media/video1.mp4"
                controls
                poster="/media/image1.jpeg"
                className="w-full aspect-video"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-dark-800"
            >
              <video
                src="/media/video2.mp4"
                controls
                poster="/media/image2.jpeg"
                className="w-full aspect-video"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/media/image3.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-dark-950" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Want to See Us
              <span className="gradient-text"> Live?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book SSP Rock Band for your next event and experience the magic in person.
            </p>
            <Link to="/booking" className="btn-gold">
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Gallery;
