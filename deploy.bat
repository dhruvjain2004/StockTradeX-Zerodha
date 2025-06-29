@echo off
echo 🚀 Starting Zerodha Clone Deployment...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js ^>= 16.0.0
    pause
    exit /b 1
)

echo ✅ Node.js version check passed: 
node --version

REM Check if .env files exist
if not exist "backend\.env" (
    echo ⚠️  Warning: backend\.env file not found
    echo 📝 Please create backend\.env file with required environment variables
    echo 📋 See backend\env.example for reference
)

if not exist "frontend\Basic-Interface\.env" (
    echo ⚠️  Warning: frontend\Basic-Interface\.env file not found
    echo 📝 Please create frontend\Basic-Interface\.env file with required environment variables
    echo 📋 See frontend\Basic-Interface\env.example for reference
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm run install-all

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Build frontend
echo 🔨 Building frontend...
cd frontend\Basic-Interface
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Frontend build failed
    pause
    exit /b 1
)

echo ✅ Frontend built successfully

REM Go back to root
cd ..\..

REM Build backend
echo 🔨 Building backend...
cd backend
call npm install --production

if %errorlevel% neq 0 (
    echo ❌ Backend build failed
    pause
    exit /b 1
)

echo ✅ Backend built successfully

REM Go back to root
cd ..

echo 🎉 Deployment preparation completed!
echo.
echo 📋 Next steps:
echo 1. Set up your hosting platform (Heroku, Railway, Render, etc.)
echo 2. Configure environment variables in your hosting platform
echo 3. Deploy the backend directory
echo 4. Deploy the frontend\Basic-Interface directory
echo 5. Update VITE_API_URL in frontend to point to your backend URL
echo.
echo 📖 See DEPLOYMENT_GUIDE.md for detailed instructions
pause 