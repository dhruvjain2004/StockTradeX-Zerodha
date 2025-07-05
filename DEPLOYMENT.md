# Deployment Guide for Zerodha Clone

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **MongoDB Atlas**: Set up a MongoDB database at [mongodb.com](https://mongodb.com)
3. **GitHub Repository**: Push your code to GitHub

## Environment Variables Setup

### Backend Environment Variables (Set in Vercel Dashboard)

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:

```
MONGO_URL=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/zerodha
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=production
ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app
```

### Frontend Environment Variables (Set in Vercel Dashboard)

```
VITE_API_URL=https://your-vercel-domain.vercel.app/api
```

## Deployment Steps

### Method 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. Follow the prompts to configure your deployment

### Method 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project settings:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: `npm run vercel-build`
   - Output Directory: `frontend/dist`
6. Add environment variables as mentioned above
7. Deploy

## Project Structure for Vercel

The project is configured as a monorepo with the following structure:

```
/
├── backend/          # Node.js API
├── frontend/         # React App
├── vercel.json       # Vercel configuration
└── package.json      # Root package.json
```

## API Endpoints

After deployment, your API will be available at:
- `https://your-domain.vercel.app/api/auth/register`
- `https://your-domain.vercel.app/api/auth/login`
- `https://your-domain.vercel.app/api/allHoldings`
- `https://your-domain.vercel.app/api/allPositions`
- `https://your-domain.vercel.app/api/allOrders`
- `https://your-domain.vercel.app/api/addNewOrder`
- `https://your-domain.vercel.app/api/health`

## Troubleshooting

### Common Issues

1. **Build Failures**: Ensure all dependencies are properly installed
2. **API 404 Errors**: Check that the API routes are properly configured
3. **CORS Errors**: Verify ALLOWED_ORIGINS environment variable
4. **Database Connection**: Ensure MONGO_URL is correct and accessible

### Debugging

1. Check Vercel deployment logs
2. Verify environment variables are set correctly
3. Test API endpoints using tools like Postman
4. Check browser console for frontend errors

## Local Development

To run the project locally:

```bash
# Install dependencies
npm run install-all

# Start development servers
npm run dev
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:3002`. 