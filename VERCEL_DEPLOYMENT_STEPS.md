# 🚀 Vercel Deployment Steps for Zerodha Clone

## Prerequisites
- ✅ Vercel account (you're already signed up)
- ✅ Vercel CLI installed (`npm install -g vercel`)
- ✅ MongoDB database (local or cloud)

## Step 1: Deploy Backend

### Option A: Using Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click "New Project"

2. **Import Repository**
   - Connect your GitHub account if not already connected
   - Select your Zerodha-Clone repository

3. **Configure Backend Project**
   - **Framework Preset**: `Node.js`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Output Directory**: (leave empty)
   - **Install Command**: `npm install`
   - **Development Command**: `npm run dev`

4. **Set Environment Variables**
   - Click "Environment Variables"
   - Add these variables:
     ```
     MONGO_URL=mongodb://localhost:27017/zerodha
     JWT_SECRET=your-super-secret-jwt-key-2024
     ALLOWED_ORIGINS=https://your-frontend-app.vercel.app
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy the backend URL (e.g., `https://zerodha-backend-abc123.vercel.app`)

### Option B: Using Command Line

```bash
cd backend
vercel --prod
```

## Step 2: Deploy Frontend

### Option A: Using Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click "New Project"

2. **Import Repository**
   - Select the same Zerodha-Clone repository

3. **Configure Frontend Project**
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend/Basic-Interface`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Development Command**: `npm run dev`

4. **Set Environment Variables**
   - Click "Environment Variables"
   - Add this variable:
     ```
     VITE_API_URL=https://your-backend-app.vercel.app
     ```
   - Replace with your actual backend URL from Step 1

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

### Option B: Using Command Line

```bash
cd frontend/Basic-Interface
vercel --prod
```

## Step 3: Test Your Deployment

### Test Backend
- Visit: `https://your-backend-app.vercel.app/health`
- Should return: `{"status":"OK","message":"Server is running"}`

### Test Frontend
- Visit: `https://your-frontend-app.vercel.app`
- Should load the Zerodha Clone homepage

## Step 4: Update Environment Variables

After both deployments:

1. **Update Frontend API URL**
   - Go to your frontend project settings
   - Update `VITE_API_URL` with your backend URL
   - Redeploy frontend

2. **Update Backend CORS**
   - Go to your backend project settings
   - Update `ALLOWED_ORIGINS` with your frontend URL
   - Redeploy backend

## Environment Variables Reference

### Backend Variables
```env
MONGO_URL=mongodb://localhost:27017/zerodha
JWT_SECRET=your-super-secret-jwt-key-2024
ALLOWED_ORIGINS=https://your-frontend-app.vercel.app
```

### Frontend Variables
```env
VITE_API_URL=https://your-backend-app.vercel.app
```

## Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check that all dependencies are in package.json
   - Ensure Node.js version is compatible

2. **CORS Errors**
   - Verify `ALLOWED_ORIGINS` includes your frontend domain
   - Check that backend CORS is properly configured

3. **MongoDB Connection Issues**
   - Ensure MongoDB is accessible from Vercel
   - For MongoDB Atlas, whitelist Vercel IPs

4. **Environment Variables Not Working**
   - Redeploy after setting environment variables
   - Check variable names are correct

### Quick Fix Commands:

```bash
# Redeploy backend
cd backend
vercel --prod

# Redeploy frontend
cd frontend/Basic-Interface
vercel --prod
```

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables are set correctly
3. Test endpoints individually
4. Check MongoDB connection

## Next Steps

After successful deployment:
1. Set up a custom domain (optional)
2. Configure automatic deployments from GitHub
3. Set up monitoring and analytics
4. Implement CI/CD pipeline

---

**Need Help?** Check the deployment logs in Vercel dashboard for specific error messages. 