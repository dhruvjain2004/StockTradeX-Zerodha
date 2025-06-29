# Zerodha Clone - Deployment Guide

## Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0
- MongoDB database (local or cloud)

## Environment Setup

### Backend Environment Variables
Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=3002

# MongoDB Configuration
MONGO_URL=mongodb://localhost:27017/zerodha
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/zerodha

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# CORS Configuration (for production)
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com

# Environment
NODE_ENV=production
```

### Frontend Environment Variables
Create a `.env` file in the `frontend/Basic-Interface/` directory:

```env
# API Configuration
VITE_API_URL=https://your-backend-domain.com
```

## Local Development

1. Install dependencies:
```bash
npm run install-all
```

2. Start development servers:
```bash
npm run dev
```

## Production Deployment

### Option 1: Separate Frontend and Backend Deployment

#### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables in your hosting platform
2. Deploy the `backend/` directory
3. Ensure MongoDB is connected

#### Frontend Deployment (Vercel/Netlify)
1. Set environment variables in your hosting platform
2. Deploy the `frontend/Basic-Interface/` directory
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Option 2: Full Stack Deployment (Railway/Render)

1. Set environment variables
2. Deploy the entire project
3. Use the build command: `npm run build-all`
4. Use the start command: `npm start`

## Common Deployment Issues & Solutions

### 1. CORS Errors
- Ensure `ALLOWED_ORIGINS` includes your frontend domain
- Check that CORS is properly configured

### 2. MongoDB Connection Issues
- Verify `MONGO_URL` is correct
- Ensure MongoDB is accessible from your deployment platform
- For MongoDB Atlas, whitelist your deployment IP

### 3. JWT Secret Missing
- Ensure `JWT_SECRET` is set in environment variables
- Use a strong, unique secret

### 4. API URL Issues
- Update `VITE_API_URL` to point to your deployed backend
- Ensure the backend is accessible

### 5. Build Failures
- Check Node.js version compatibility
- Ensure all dependencies are installed
- Verify environment variables are set

## Health Check
After deployment, test the health endpoint:
- Backend: `https://your-backend-domain.com/health`
- Should return: `{"status":"OK","message":"Server is running"}`

## Security Considerations
1. Use strong JWT secrets
2. Enable HTTPS in production
3. Set proper CORS origins
4. Use environment variables for sensitive data
5. Regularly update dependencies 