import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaMusic, FaCheck, FaArrowRight, FaArrowLeft, FaPhone, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import SEO from '../components/SEO';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [bookingReference, setBookingReference] = useState('');
  
  const [formData, setFormData] = useState({
    // Contact Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Event Details
    eventType: '',
    eventDate: '',
    eventTime: '',
    eventDuration: '',
    // Venue Info
    venueName: '',
    venueAddress: '',
    venueCity: '',
    // Preferences
    expectedGuests: '',
    bandPreference: '',
    specialRequests: '',
    budget: '',
  });

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
      const response = await axios.post('http://localhost:5000/api/booking', formData);
      if (response.data.success) {
        setSubmitStatus('success');
        setBookingReference(response.data.bookingReference);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Concert',
    'Festival',
    'Private Party',
    'Club Event',
    'Other',
  ];

  const durations = [
    '1-2 hours',
    '2-3 hours',
    '3-4 hours',
    '4+ hours',
    'Full Day',
  ];

  const guestRanges = [
    'Less than 50',
    '50-100',
    '100-200',
    '200-500',
    '500+',
  ];

  const bandOptions = [
    'Classic Rock Band',
    'Modern Rock Band',
    'Acoustic Set',
    'Full Band with DJ',
    'Custom Package',
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,00,000',
    '₹2,00,000+',
    'Flexible',
  ];

  const steps = [
    { number: 1, title: 'Contact Info', icon: FaUsers },
    { number: 2, title: 'Event Details', icon: FaCalendarAlt },
    { number: 3, title: 'Venue', icon: FaMapMarkerAlt },
    { number: 4, title: 'Preferences', icon: FaMusic },
  ];

  const isStepValid = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.eventType && formData.eventDate && formData.eventTime && formData.eventDuration;
      case 3:
        return formData.venueName && formData.venueAddress && formData.venueCity;
      case 4:
        return true;
      default:
        return false;
    }
  };

  if (submitStatus === 'success') {
    return (
      <>
        <SEO
          title="Booking Confirmed | SSP Rock Band"
          description="Your booking request has been submitted successfully. We'll contact you soon to confirm your event details."
          keywords="booking confirmed, event booking success, SSP Rock Band booking"
          canonicalUrl="/booking"
        />
        <div className="pt-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="card p-12">
            <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-full bg-green-600/20 border-2 border-green-500">
              <FaCheck className="text-4xl text-green-500" />
            </div>
            <h1 className="text-4xl font-display uppercase tracking-wider text-white mb-4">
              Booking Request Submitted!
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Thank you for choosing SSP Rock Band. We've received your booking request.
            </p>
            <div className="bg-dark-800 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Your Booking Reference</p>
              <p className="text-3xl font-display text-primary-500">{bookingReference}</p>
            </div>
            <p className="text-gray-400 mb-8">
              Our team will review your request and contact you within 24-48 hours to confirm 
              availability and discuss further details.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="btn-primary">
                Back to Home
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Book SSP Rock Band | Event Booking Form"
        description="Book SSP Rock Band for your event in Vizag. Fill out our booking form to reserve your date. We offer professional live music for weddings, corporate events, parties, and more."
        keywords="book SSP Rock Band, event booking form, reserve band, book live music, event date booking, Vizag band booking, wedding band booking, corporate event booking"
        ogTitle="Book SSP Rock Band | Event Booking Form"
        ogDescription="Book SSP Rock Band for your event in Vizag. Fill out our booking form to reserve your date for professional live music."
        ogUrl="/booking"
        twitterTitle="Book SSP Rock Band | Event Booking Form"
        twitterDescription="Book SSP Rock Band for your event in Vizag. Fill out our booking form to reserve your date for professional live music."
        canonicalUrl="/booking"
      />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/95 to-dark-950" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary-500 uppercase tracking-widest text-sm font-medium mb-4 block">
              Book Now
            </span>
            <h1 className="section-title mb-4">
              Book
              <span className="gradient-text"> SSP Rock Band</span>
            </h1>
            <p className="text-lg text-gray-300">
              Fill out the form below to request a booking. We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((s, index) => (
                <div key={s.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        step >= s.number
                          ? 'bg-primary-600 text-white'
                          : 'bg-dark-800 text-gray-500'
                      }`}
                    >
                      {step > s.number ? (
                        <FaCheck className="text-lg" />
                      ) : (
                        <s.icon className="text-lg" />
                      )}
                    </div>
                    <span className={`mt-2 text-sm font-medium hidden sm:block ${
                      step >= s.number ? 'text-primary-400' : 'text-gray-500'
                    }`}>
                      {s.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 sm:w-24 h-1 mx-2 rounded transition-all duration-300 ${
                      step > s.number ? 'bg-primary-600' : 'bg-dark-800'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                    <FaUsers className="text-primary-500" />
                    Contact Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="label">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Doe"
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
                    <div>
                      <label className="label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Event Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                    <FaCalendarAlt className="text-primary-500" />
                    Event Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label">Event Date *</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="input-field"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="label">Event Time *</label>
                      <input
                        type="time"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="label">Event Duration *</label>
                      <select
                        name="eventDuration"
                        value={formData.eventDuration}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select duration</option>
                        {durations.map((duration) => (
                          <option key={duration} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Venue Information */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                    <FaMapMarkerAlt className="text-primary-500" />
                    Venue Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="label">Venue Name *</label>
                      <input
                        type="text"
                        name="venueName"
                        value={formData.venueName}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="e.g., Grand Hotel Ballroom"
                      />
                    </div>
                    <div>
                      <label className="label">Venue Address *</label>
                      <input
                        type="text"
                        name="venueAddress"
                        value={formData.venueAddress}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Full address"
                      />
                    </div>
                    <div>
                      <label className="label">City *</label>
                      <input
                        type="text"
                        name="venueCity"
                        value={formData.venueCity}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="e.g., Visakhapatnam"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Preferences */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                    <FaMusic className="text-primary-500" />
                    Preferences & Budget
                  </h2>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="label">Expected Guests</label>
                        <select
                          name="expectedGuests"
                          value={formData.expectedGuests}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select range</option>
                          {guestRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="label">Band Preference</label>
                        <select
                          name="bandPreference"
                          value={formData.bandPreference}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select preference</option>
                          {bandOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="label">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label">Special Requests or Song Preferences</label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        className="input-field resize-none"
                        placeholder="Any specific songs, themes, or requirements..."
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-red-600/20 border border-red-600/40 rounded-lg"
                >
                  <p className="text-red-400">Something went wrong. Please try again or contact us directly.</p>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-dark-700">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    <FaArrowLeft className="mr-2" />
                    Previous
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid(step)}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <FaArrowRight className="ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <FaCheck />
                        Submit Booking Request
                      </span>
                    )}
                  </button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 mb-4">Need help with your booking?</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:9652710153"
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                <FaPhone /> 9652710153
              </a>
              <a
                href="mailto:sekharponnada1234@gmail.com"
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                <FaEnvelope /> sekharponnada1234@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Booking;

