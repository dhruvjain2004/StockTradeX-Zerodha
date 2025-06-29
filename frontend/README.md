# Zerodha Frontend

React-based frontend for the Zerodha trading platform clone.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/           # Dashboard components
│   ├── Dashboard.js      # Main dashboard
│   ├── Holdings.js       # Holdings table
│   ├── Positions.js      # Positions table
│   ├── Orders.js         # Orders management
│   ├── WatchList.js      # Stock watchlist
│   ├── Menu.js           # Navigation menu
│   └── ...
├── landingpage/          # Landing page components
│   ├── Home/             # Home page
│   ├── signup/           # Registration
│   ├── login/            # Login
│   ├── context/          # Auth context
│   └── ...
├── data/                 # Static data
└── main.jsx             # App entry point
```

## 🎨 Features

### Dashboard
- Real-time stock prices
- Portfolio summary
- Interactive charts
- Trading interface

### Authentication
- User registration
- User login
- JWT token management

### Trading Interface
- Stock watchlist
- Holdings management
- Order placement
- Position tracking

## 🛠️ Technologies

- React 19
- Vite
- React Router DOM
- Chart.js
- Material-UI
- Axios
- React Toastify

## 🎯 Key Components

### Dashboard
- **Summary** - Portfolio overview
- **Holdings** - Stock holdings table
- **Positions** - Current positions
- **Orders** - Order management
- **Funds** - Account funds
- **Apps** - Additional features

### WatchList
- Real-time stock prices
- Buy/sell actions
- Stock search
- Interactive charts

## 🔧 Configuration

### API Endpoints
Update API endpoints in components:
- Holdings: `http://localhost:3002/allHoldings`
- Positions: `http://localhost:3002/allPositions`
- Auth: `http://localhost:3002/api/auth`

### Environment Variables
Create `.env` file for production:
```env
VITE_API_URL=http://localhost:3002
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to platforms:**
   - Vercel
   - Netlify
   - AWS S3
   - GitHub Pages

## 🎨 Styling

- Custom CSS with responsive design
- Material-UI components
- Chart.js for data visualization
- Toast notifications

## 🔒 Security

- JWT token storage
- Secure API calls
- Input validation
- Error handling
