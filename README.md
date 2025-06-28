# Zerodha Trading Platform Clone

A full-stack trading platform clone built with React.js frontend and Node.js backend, featuring real-time stock data, portfolio management, and trading functionality.

## 🚀 Features

### Frontend
- **Modern React Interface** - Built with React 19 and Vite
- **Real-time Dashboard** - Live stock prices and portfolio tracking
- **Trading Interface** - Buy/sell orders, holdings, and positions
- **Responsive Design** - Mobile-friendly interface
- **Authentication** - User registration and login
- **Charts & Analytics** - Interactive charts using Chart.js
- **Watchlist** - Custom stock watchlist with real-time updates

### Backend
- **Node.js API** - RESTful API with Express.js
- **MongoDB Database** - NoSQL database for data persistence
- **JWT Authentication** - Secure user authentication
- **Real-time Data** - Stock prices and market data
- **Order Management** - Buy/sell order processing
- **Portfolio Tracking** - Holdings and positions management

## 📁 Project Structure

```
Zerodha/
├── backend/                 # Node.js backend
│   ├── controllers/         # API controllers
│   ├── middlewares/         # Authentication middleware
│   ├── models/             # MongoDB models
│   ├── schemas/            # Database schemas
│   ├── AuthRoute.js        # Authentication routes
│   ├── index.js            # Main server file
│   └── package.json        # Backend dependencies
├── frontend/
│   └── Basic-Interface/    # React frontend
│       ├── src/
│       │   ├── components/ # Dashboard components
│       │   ├── landingpage/# Landing page components
│       │   ├── data/       # Static data
│       │   └── main.jsx    # App entry point
│       └── package.json    # Frontend dependencies
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URL=mongodb://localhost:27017/zerodha
   JWT_SECRET=your_jwt_secret_key_here
   PORT=3002
   NODE_ENV=development
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend/Basic-Interface
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Database Setup
- Ensure MongoDB is running locally or update the `MONGO_URL` in your environment variables
- The application will automatically create the necessary collections

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

#### Trading Data
- `GET /allHoldings` - Get user holdings
- `GET /allPositions` - Get user positions
- `GET /allOrders` - Get user orders
- `POST /addNewOrder` - Add new order (requires authentication)

## 🎨 Features Overview

### Dashboard
- Real-time stock prices
- Portfolio summary
- P&L tracking
- Market indices

### Trading
- Stock search and watchlist
- Buy/sell orders
- Holdings management
- Position tracking

### Analytics
- Interactive charts
- Performance metrics
- Historical data

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables for production
2. Use a process manager like PM2
3. Deploy to platforms like Heroku, Railway, or AWS

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or AWS S3

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation
- Error handling

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🛠️ Technologies Used

### Frontend
- React 19
- Vite
- React Router DOM
- Chart.js
- Material-UI
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes only.

## 🆘 Support

For support and questions, please open an issue in the repository.

---

**Note:** This is a clone/educational project and should not be used for actual trading. Always use official trading platforms for real investments. 