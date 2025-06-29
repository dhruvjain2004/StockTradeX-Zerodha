# Vercel Deployment Guide for Zerodha Clone

## Step 1: Prepare Environment Variables

### Backend Environment Variables
You'll need to set these in Vercel dashboard:

1. **MONGO_URL**: Your MongoDB connection string
   - For local: `mongodb://localhost:27017/zerodha`
   - For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/zerodha`

2. **JWT_SECRET**: A secure random string for JWT tokens
   - Example: `my-super-secret-jwt-key-2024`

3. **ALLOWED_ORIGINS**: Your frontend domain
   - Example: `https://your-frontend-app.vercel.app`

### Frontend Environment Variables
You'll need to set these in Vercel dashboard:

1. **VITE_API_URL**: Your backend API URL
   - Example: `https://your-backend-app.vercel.app`

## Step 2: Deploy Backend

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Set the following:
   - **Framework Preset**: Node.js
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`
   - **Development Command**: `npm run dev`

5. Add Environment Variables:
   - Go to Project Settings → Environment Variables
   - Add the three backend environment variables listed above

6. Deploy!

## Step 3: Deploy Frontend

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository (same repo)
4. Set the following:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend/Basic-Interface`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Development Command**: `npm run dev`

5. Add Environment Variables:
   - Go to Project Settings → Environment Variables
   - Add `VITE_API_URL` with your backend URL

6. Deploy!

## Step 4: Update Frontend API URL

After both deployments are complete:

1. Copy your backend URL from Vercel dashboard
2. Go to your frontend project settings
3. Update the `VITE_API_URL` environment variable with your backend URL
4. Redeploy the frontend

## Alternative: Command Line Deployment

If you prefer command line deployment:

### Deploy Backend:
```bash
cd backend
vercel --prod
```

### Deploy Frontend:
```bash
cd frontend/Basic-Interface
vercel --prod
```

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure `ALLOWED_ORIGINS` includes your frontend domain
2. **MongoDB Connection**: Ensure your MongoDB is accessible from Vercel
3. **Build Failures**: Check that all dependencies are in package.json
4. **Environment Variables**: Verify all required variables are set in Vercel dashboard

### Health Check:
After deployment, test your backend:
- Visit: `https://your-backend-app.vercel.app/health`
- Should return: `{"status":"OK","message":"Server is running"}`

## Quick Deploy Commands

Run these commands in your terminal:

```bash
# Deploy backend
cd backend
vercel --prod

# Deploy frontend  
cd ../frontend/Basic-Interface
vercel --prod
```

Remember to set environment variables in the Vercel dashboard for both projects! 