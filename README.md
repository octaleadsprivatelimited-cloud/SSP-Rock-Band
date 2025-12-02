# 🎸 SSP Rock Band Website

A full-stack website for SSP Rock Band, a professional music service providing rock bands for events in Vizag, India.

## 🚀 Features

### Frontend (React + Vite)
- **Home Page**: Hero section, services preview, testimonials, stats
- **About Page**: Band history, team members, milestones, values
- **Services Page**: Service listings, pricing packages, music styles
- **Gallery Page**: Photo & video gallery with filtering and lightbox
- **Contact Page**: Contact form, map integration, social links
- **Booking Page**: Multi-step booking form with validation

### Backend (Node.js + Express)
- RESTful API endpoints for contact and booking forms
- MongoDB database integration
- Email notifications using Nodemailer
- Form validation with express-validator
- Review system with approval workflow

### Design
- Modern, responsive design with Tailwind CSS
- Mobile-first approach
- Beautiful animations with Framer Motion
- Dark theme with red accent colors
- Custom fonts (Bebas Neue, Oswald, Barlow)

## 📁 Project Structure

```
Ssp rock band/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Booking.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                  # Node.js backend
│   ├── models/              # MongoDB schemas
│   │   ├── Contact.js
│   │   ├── Booking.js
│   │   └── Review.js
│   ├── routes/              # API routes
│   │   ├── contact.js
│   │   ├── booking.js
│   │   └── reviews.js
│   ├── utils/               # Utilities
│   │   └── emailService.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### 1. Clone/Navigate to the project
```bash
cd "Ssp rock band"
```

### 2. Setup Backend
```bash
cd backend

# Install dependencies
npm install

# Create .env file with the following variables:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/ssp-rock-band
# EMAIL_HOST=smtp.gmail.com
# EMAIL_PORT=587
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-specific-password
# ADMIN_EMAIL=info@ssprockband.com

# Start the server
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📧 Email Configuration

To enable email notifications:

1. Use Gmail with an App Password (recommended)
2. Enable 2-Factor Authentication on your Google account
3. Generate an App Password: Google Account → Security → App Passwords
4. Use this password in your .env file

## 🗄️ Database Setup

### Local MongoDB
```bash
# Start MongoDB service
mongod

# The app will automatically create the database and collections
```

### MongoDB Atlas (Cloud)
1. Create a free cluster at https://mongodb.com/atlas
2. Get your connection string
3. Replace `MONGODB_URI` in your .env file

## 📱 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

### Booking
- `POST /api/booking` - Submit booking request
- `GET /api/booking` - Get all bookings (admin)
- `GET /api/booking/:reference` - Get booking by reference
- `GET /api/booking/check-availability/:date` - Check date availability

### Reviews
- `POST /api/reviews` - Submit a review
- `GET /api/reviews` - Get approved reviews
- `GET /api/reviews/all` - Get all reviews (admin)
- `GET /api/reviews/stats` - Get review statistics

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  primary: { ... }, // Red theme
  dark: { ... },    // Dark backgrounds
  accent: { ... },  // Gold, orange, purple accents
}
```

### Fonts
The site uses:
- **Bebas Neue** - Display headings
- **Oswald** - Section headings
- **Barlow** - Body text
- **Rock Salt** - Decorative

### Images
Replace placeholder images with actual band photos in:
- Home page hero
- About page
- Gallery page
- Team member photos

## 🔒 Security Notes

- Always use environment variables for sensitive data
- Enable CORS only for your frontend domain in production
- Implement rate limiting for production
- Add authentication for admin routes

## 📞 Contact Information

- **Phone**: 9652710153
- **Email**: info@ssprockband.com
- **Location**: Vizag (Visakhapatnam), Andhra Pradesh, India

## 📄 License

This project is created for SSP Rock Band. All rights reserved.

