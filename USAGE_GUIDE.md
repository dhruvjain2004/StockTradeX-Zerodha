# Zerodha Trading Platform - Usage Guide

## 🚀 Quick Start

1. **Start the Application**:
   ```bash
   # Run the start.bat file or manually:
   cd backend && npm run dev
   cd frontend/Basic-Interface && npm run dev
   ```

2. **Access the Application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3002

## 📋 How to Use the Backend from Frontend

### 1. **Authentication Flow**
- **Sign Up**: Visit `/signup` to create a new account
- **Login**: Visit `/login` to access your account
- **Dashboard**: After login, you'll be redirected to `/dashboard`

### 2. **Available Backend APIs**

#### Authentication APIs:
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login to account

#### Trading APIs:
- `GET /allHoldings` - Get all holdings data
- `GET /allPositions` - Get all positions data  
- `GET /allOrders` - Get all orders data
- `POST /addNewOrder` - Place new order (requires authentication)

### 3. **Frontend-Backend Integration**

Your frontend automatically connects to the backend through:

#### **API Service** (`src/services/api.js`):
- Centralized API calls
- Automatic token management
- Error handling

#### **Components Using Backend**:
- **Login/Signup**: Authentication with backend
- **Dashboard**: Place orders with backend
- **Holdings**: Display holdings from backend
- **Positions**: Display positions from backend
- **Orders**: Display orders from backend

### 4. **User Journey**

1. **Landing Page** (`/`) - Welcome page
2. **Sign Up** (`/signup`) - Create account
3. **Login** (`/login`) - Access account
4. **Dashboard** (`/dashboard`) - Main trading interface
   - Place new orders
   - View account info
   - Quick navigation to other features

### 5. **Trading Features**

#### **Place Orders**:
- Stock name (e.g., RELIANCE, TCS)
- Quantity (number of shares)
- Price (per share)
- Order type (Buy/Sell)

#### **View Data**:
- **Holdings**: Your current stock holdings
- **Positions**: Active trading positions
- **Orders**: Order history

### 6. **Authentication & Security**

- **JWT Tokens**: Secure authentication
- **Protected Routes**: Some APIs require login
- **Token Storage**: Automatically managed in localStorage

### 7. **Data Flow**

```
Frontend (React) ←→ Backend (Node.js/Express) ←→ Database (MongoDB)
```

1. User interacts with React components
2. Components call backend APIs via axios
3. Backend processes requests and interacts with MongoDB
4. Data flows back to frontend for display

### 8. **Troubleshooting**

#### **Common Issues**:
- **CORS Errors**: Backend has CORS enabled
- **Authentication Errors**: Check if token is valid
- **Connection Errors**: Ensure both servers are running

#### **Check Server Status**:
- Backend health: `GET http://localhost:3002/health`
- Frontend: Check browser console for errors

### 9. **Development Tips**

#### **Adding New Features**:
1. Create backend API endpoint in `backend/index.js`
2. Add API call in `frontend/src/services/api.js`
3. Create/update React component to use the API
4. Test the integration

#### **Database Models**:
- `User.js` - User accounts
- `HoldingsModel.js` - Stock holdings
- `PositionsModel.js` - Trading positions
- `OrdersModel.js` - Order history

### 10. **File Structure**

```
frontend/Basic-Interface/src/
├── services/api.js          # API service layer
├── landingpage/
│   ├── login/login.jsx      # Login component
│   ├── signup/Signup.jsx    # Signup component
│   ├── page/Dashboard.jsx   # Main dashboard
│   └── context/AuthContext.jsx # Authentication context
└── components/
    ├── Holdings.jsx         # Holdings display
    ├── Positions.jsx        # Positions display
    └── Orders.jsx           # Orders display
```

## 🎯 Next Steps

1. **Test the complete flow**: Sign up → Login → Dashboard → Place orders
2. **Explore the trading data**: Check holdings, positions, and orders
3. **Customize the interface**: Modify components as needed
4. **Add more features**: Extend the API and frontend functionality

Your Zerodha trading platform is now fully functional with frontend-backend integration! 🚀 