@echo off
echo 🚀 Vercel Deployment for Zerodha Clone
echo.

echo 📋 Step 1: Deploying Backend...
echo.
cd backend
echo Current directory: %CD%
echo.
echo ⚠️  IMPORTANT: You need to set environment variables in Vercel dashboard:
echo    - MONGO_URL: Your MongoDB connection string
echo    - JWT_SECRET: A secure random string
echo    - ALLOWED_ORIGINS: Your frontend domain
echo.
pause
echo.
echo 🔄 Starting backend deployment...
vercel --prod
echo.
echo ✅ Backend deployment completed!
echo.
pause

echo.
echo 📋 Step 2: Deploying Frontend...
echo.
cd ..\frontend\Basic-Interface
echo Current directory: %CD%
echo.
echo ⚠️  IMPORTANT: You need to set environment variables in Vercel dashboard:
echo    - VITE_API_URL: Your backend URL (from step 1)
echo.
pause
echo.
echo 🔄 Starting frontend deployment...
vercel --prod
echo.
echo ✅ Frontend deployment completed!
echo.
echo 🎉 Deployment finished!
echo.
echo 📖 Next steps:
echo 1. Set environment variables in Vercel dashboard
echo 2. Test your backend: https://your-backend-app.vercel.app/health
echo 3. Test your frontend: https://your-frontend-app.vercel.app
echo.
pause 