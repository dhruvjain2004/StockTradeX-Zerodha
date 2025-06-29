#!/bin/bash

echo "🚀 Starting Zerodha Clone Deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 16.0.0"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version check passed: $(node -v)"

# Check if .env files exist
if [ ! -f "backend/.env" ]; then
    echo "⚠️  Warning: backend/.env file not found"
    echo "📝 Please create backend/.env file with required environment variables"
    echo "📋 See backend/env.example for reference"
fi

if [ ! -f "frontend/Basic-Interface/.env" ]; then
    echo "⚠️  Warning: frontend/Basic-Interface/.env file not found"
    echo "📝 Please create frontend/Basic-Interface/.env file with required environment variables"
    echo "📋 See frontend/Basic-Interface/env.example for reference"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm run install-all

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build frontend
echo "🔨 Building frontend..."
cd frontend/Basic-Interface
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed"
    exit 1
fi

echo "✅ Frontend built successfully"

# Go back to root
cd ../..

# Build backend
echo "🔨 Building backend..."
cd backend
npm install --production

if [ $? -ne 0 ]; then
    echo "❌ Backend build failed"
    exit 1
fi

echo "✅ Backend built successfully"

# Go back to root
cd ..

echo "🎉 Deployment preparation completed!"
echo ""
echo "📋 Next steps:"
echo "1. Set up your hosting platform (Heroku, Railway, Render, etc.)"
echo "2. Configure environment variables in your hosting platform"
echo "3. Deploy the backend directory"
echo "4. Deploy the frontend/Basic-Interface directory"
echo "5. Update VITE_API_URL in frontend to point to your backend URL"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions" 