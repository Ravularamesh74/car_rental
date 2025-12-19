# 🚗 Car Rental - MERN Stack (Separate Frontend & Backend)

A complete full-stack car rental application with **completely separate frontend and backend services** built with MongoDB, Express, React, and Node.js.

## 🎯 Architecture: Separate Frontend & Backend

```
┌─────────────────────────────────┐
│   Frontend (React)              │
│   Port: 3000                    │
│   http://localhost:3000         │
└──────────────┬──────────────────┘
               │ HTTP Requests
               │ (API calls via axios)
               ↓
┌─────────────────────────────────┐
│   Backend (Node.js + Express)   │
│   Port: 5000                    │
│   http://localhost:5000/api     │
└──────────────┬──────────────────┘
               │
               ↓
    ┌──────────────────────┐
    │  MongoDB Database    │
    │  :27017              │
    └──────────────────────┘
```

## Features

✅ **User Authentication**
- User registration and login
- JWT token-based authentication
- Secure password hashing

✅ **Car Fleet Management**
- Browse all available cars
- Filter by type, brand, and availability
- Detailed car information

✅ **Booking System**
- Create new bookings
- View booking history
- Cancel bookings
- Real-time price calculation

✅ **Admin Dashboard**
- Manage car inventory
- View all bookings
- Update booking status
- User management

✅ **Responsive Design**
- Mobile-friendly interface
- Cross-platform compatibility

## Tech Stack

### Frontend
- React 18
- React Router v6
- Axios for API calls
- CSS3 for styling

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JWT Authentication
- Bcryptjs for password hashing

## Project Structure

```
D:\MT WORKSPACE\
│
├── server/                           # BACKEND - Runs on Port 5000
│   ├── models/
│   │   ├── User.js                  # User schema with password hashing
│   │   ├── Car.js                   # Car fleet schema
│   │   └── Booking.js               # Booking schema with calculations
│   ├── routes/
│   │   ├── authRoutes.js            # /api/auth/* endpoints
│   │   ├── carRoutes.js             # /api/cars/* endpoints
│   │   ├── bookingRoutes.js         # /api/bookings/* endpoints
│   │   └── userRoutes.js            # /api/users/* endpoints
│   ├── controllers/
│   │   ├── authController.js        # Auth logic (register, login)
│   │   ├── carController.js         # Car CRUD operations
│   │   ├── bookingController.js     # Booking logic
│   │   └── userController.js        # User management
│   ├── middleware/
│   │   └── auth.js                  # JWT verification
│   ├── server.js                    # Express server entry point
│   ├── seedCars.js                  # Database seeding script
│   ├── package.json                 # Backend dependencies
│   └── .env                         # Backend environment variables
│
└── client/                           # FRONTEND - Runs on Port 3000
    ├── src/
    │   ├── pages/
    │   │   ├── Home.js              # Landing page
    │   │   ├── Register.js          # Registration form
    │   │   ├── Login.js             # Login form
    │   │   ├── Cars.js              # Car listing & filters
    │   │   └── Dashboard.js         # User bookings dashboard
    │   ├── components/
    │   │   ├── Header.js            # Navigation header
    │   │   └── ProtectedRoute.js    # Route protection
    │   ├── services/
    │   │   └── api.js               # Axios API client
    │   ├── context/
    │   │   └── AuthContext.js       # State management
    │   ├── styles/
    │   │   └── index.css            # Global styles
    │   ├── App.js                   # Main app component
    │   └── index.js                 # React entry point
    ├── public/
    │   └── index.html               # HTML template
    ├── package.json                 # Frontend dependencies
    └── .env                         # Frontend environment variables
```
car-rental-mern/
├── server/
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── config/           # Configuration files
│   ├── server.js         # Main server file
│   ├── package.json
│   └── .env
├── client/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context
│   │   ├── services/     # API services
│   │   ├── styles/       # CSS styles
│   │   ├── App.js        # Main App component
│   │   └── index.js      # React entry point
│   ├── public/
│   ├── package.json
│   └── README.md
├── package.json          # Root package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd car-rental-mern
```

2. **Install dependencies**
```bash
npm run install-all
```

3. **Configure Environment Variables**

**Server (.env)**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/car-rental
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

**Client (.env.local)**
```
REACT_APP_API_URL=http://localhost:5000/api
```

4. **Start MongoDB**
```bash
mongod
```

5. **Run the application**
```bash
npm run dev
```

The application will start with:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Cars
- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get car by ID
- `POST /api/cars` - Create car (Admin)
- `PUT /api/cars/:id` - Update car (Admin)
- `DELETE /api/cars/:id` - Delete car (Admin)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/user/my-bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking by ID
- `PUT /api/bookings/:id/cancel` - Cancel booking
- `GET /api/bookings` - Get all bookings (Admin)
- `PUT /api/bookings/:id/status` - Update booking status (Admin)

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users` - Get all users (Admin)
- `DELETE /api/users/:id` - Delete user (Admin)

## Usage

### For Users
1. Register or login to your account
2. Browse the car fleet
3. Select a car and view details
4. Create a booking with pickup/return dates
5. View your bookings in the dashboard
6. Cancel bookings if needed

### For Admins
1. Login with admin credentials
2. Access admin dashboard
3. Add/edit/delete cars from fleet
4. Manage all bookings
5. Update booking status and payment information

## Database Models

### User
- fullname, email, phone, password
- address, licenseNumber
- role (user/admin)
- timestamps

### Car
- brand, model, year, type
- dailyRate, registrationNumber
- seatingCapacity, fuelType, transmission
- mileage, features, image
- available status
- timestamps

### Booking
- user (reference), car (reference)
- pickupDate, returnDate
- pickupLocation, dropLocation
- insuranceType, insuranceCost
- totalDays, rentalCost, taxCost, totalAmount
- status (PENDING/CONFIRMED/CANCELLED/COMPLETED)
- paymentStatus (UNPAID/PAID/REFUNDED)
- timestamps

## Development

### Run server only
```bash
npm run server
```

### Run client only
```bash
npm run client
```

### Build for production
```bash
npm run build
```

## Future Enhancements

- Payment gateway integration (Stripe/PayPal)
- Email notifications for bookings
- Admin analytics and reports
- Car damage tracking
- Customer reviews and ratings
- Real-time notifications
- Mobile app (React Native)

## License

MIT License

## Support

For issues or questions, please create an issue in the repository.
