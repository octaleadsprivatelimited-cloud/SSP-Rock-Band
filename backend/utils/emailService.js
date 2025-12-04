const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send contact form notification
const sendContactNotification = async (contactData) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL || 'sekharponnada1234@gmail.com',
    subject: `New Contact Form Submission - ${contactData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #7c2d12); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🎸 SSP Rock Band</h1>
          <p style="color: #fca5a5; margin: 5px 0;">New Contact Form Submission</p>
        </div>
        <div style="padding: 30px; background: #1f1f1f; color: #e5e5e5;">
          <h2 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">Contact Details</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          ${contactData.eventDate ? `<p><strong>Event Date:</strong> ${new Date(contactData.eventDate).toLocaleDateString()}</p>` : ''}
          ${contactData.eventType ? `<p><strong>Event Type:</strong> ${contactData.eventType}</p>` : ''}
          <h3 style="color: #ef4444; margin-top: 20px;">Message:</h3>
          <p style="background: #2d2d2d; padding: 15px; border-radius: 8px;">${contactData.message}</p>
        </div>
        <div style="background: #111; padding: 15px; text-align: center; color: #888;">
          <p>© ${new Date().getFullYear()} SSP Rock Band. All rights reserved.</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact notification:', error);
    return false;
  }
};

// Send booking confirmation to customer
const sendBookingConfirmation = async (bookingData) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: bookingData.email,
    subject: `Booking Confirmation - SSP Rock Band - ${bookingData.bookingReference}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #7c2d12); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🎸 SSP Rock Band</h1>
          <p style="color: #fca5a5; margin: 5px 0;">Booking Confirmation</p>
        </div>
        <div style="padding: 30px; background: #1f1f1f; color: #e5e5e5;">
          <h2 style="color: #22c55e; text-align: center;">✓ Booking Request Received!</h2>
          <div style="background: #2d2d2d; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 18px; color: #ef4444; text-align: center; margin: 0;">
              Booking Reference: <strong>${bookingData.bookingReference}</strong>
            </p>
          </div>
          <h3 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">Event Details</h3>
          <p><strong>Name:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
          <p><strong>Event Type:</strong> ${bookingData.eventType}</p>
          <p><strong>Event Date:</strong> ${new Date(bookingData.eventDate).toLocaleDateString()}</p>
          <p><strong>Event Time:</strong> ${bookingData.eventTime}</p>
          <p><strong>Duration:</strong> ${bookingData.eventDuration}</p>
          <p><strong>Venue:</strong> ${bookingData.venueName}</p>
          <p><strong>Location:</strong> ${bookingData.venueAddress}, ${bookingData.venueCity}</p>
          <div style="background: #22c55e22; border-left: 4px solid #22c55e; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #22c55e;"><strong>What's Next?</strong></p>
            <p style="margin: 10px 0 0 0;">Our team will review your booking request and contact you within 24-48 hours to confirm availability and discuss further details.</p>
          </div>
          <p style="text-align: center;">
            <strong>Questions?</strong><br>
            Call us: <a href="tel:9652710153" style="color: #ef4444;">9652710153</a><br>
            Email: <a href="mailto:sekharponnada1234@gmail.com" style="color: #ef4444;">sekharponnada1234@gmail.com</a>
          </p>
        </div>
        <div style="background: #111; padding: 15px; text-align: center; color: #888;">
          <p>© ${new Date().getFullYear()} SSP Rock Band. All rights reserved.</p>
          <p>Vizag, India</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Booking confirmation email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending booking confirmation:', error);
    return false;
  }
};

// Send booking notification to admin
const sendBookingNotification = async (bookingData) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL || 'sekharponnada1234@gmail.com',
    subject: `🎸 New Booking Request - ${bookingData.bookingReference}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #7c2d12); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🎸 SSP Rock Band</h1>
          <p style="color: #fca5a5; margin: 5px 0;">New Booking Request</p>
        </div>
        <div style="padding: 30px; background: #1f1f1f; color: #e5e5e5;">
          <div style="background: #ef444422; border-left: 4px solid #ef4444; padding: 15px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 18px;"><strong>Booking Reference:</strong> ${bookingData.bookingReference}</p>
          </div>
          
          <h3 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">Customer Information</h3>
          <p><strong>Name:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Phone:</strong> ${bookingData.phone}</p>
          
          <h3 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px; margin-top: 25px;">Event Details</h3>
          <p><strong>Event Type:</strong> ${bookingData.eventType}</p>
          <p><strong>Date:</strong> ${new Date(bookingData.eventDate).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${bookingData.eventTime}</p>
          <p><strong>Duration:</strong> ${bookingData.eventDuration}</p>
          <p><strong>Expected Guests:</strong> ${bookingData.expectedGuests || 'Not specified'}</p>
          
          <h3 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px; margin-top: 25px;">Venue Information</h3>
          <p><strong>Venue:</strong> ${bookingData.venueName}</p>
          <p><strong>Address:</strong> ${bookingData.venueAddress}</p>
          <p><strong>City:</strong> ${bookingData.venueCity}</p>
          
          <h3 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px; margin-top: 25px;">Preferences</h3>
          <p><strong>Band Preference:</strong> ${bookingData.bandPreference || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${bookingData.budget || 'Not specified'}</p>
          ${bookingData.specialRequests ? `<p><strong>Special Requests:</strong> ${bookingData.specialRequests}</p>` : ''}
        </div>
        <div style="background: #111; padding: 15px; text-align: center; color: #888;">
          <p>© ${new Date().getFullYear()} SSP Rock Band. All rights reserved.</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Booking notification email sent to admin');
    return true;
  } catch (error) {
    console.error('Error sending booking notification to admin:', error);
    return false;
  }
};

module.exports = {
  sendContactNotification,
  sendBookingConfirmation,
  sendBookingNotification
};

