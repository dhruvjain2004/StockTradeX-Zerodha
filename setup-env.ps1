# PowerShell script to set up Vercel environment variables

Write-Host "Setting up Vercel environment variables..." -ForegroundColor Green

# Set MongoDB URL (you'll need to replace this with your actual MongoDB Atlas URL)
$mongoUrl = "mongodb+srv://your-username:your-password@your-cluster.mongodb.net/zerodha"

# Set JWT Secret
$jwtSecret = "your-super-secret-jwt-key-here-change-this-in-production"

# Set Allowed Origins (will be updated after deployment)
$allowedOrigins = "https://stock-zerodha-g0ghcckb9-dhruv-jains-projects-4f2b6f42.vercel.app"

Write-Host "Please update the MongoDB URL in this script with your actual MongoDB Atlas connection string" -ForegroundColor Yellow
Write-Host "Current MongoDB URL: $mongoUrl" -ForegroundColor Cyan
Write-Host "Current JWT Secret: $jwtSecret" -ForegroundColor Cyan
Write-Host "Current Allowed Origins: $allowedOrigins" -ForegroundColor Cyan

Write-Host "`nTo set these environment variables manually, run:" -ForegroundColor Green
Write-Host "vercel env add MONGO_URL" -ForegroundColor White
Write-Host "vercel env add JWT_SECRET" -ForegroundColor White
Write-Host "vercel env add ALLOWED_ORIGINS" -ForegroundColor White

Write-Host "`nThen redeploy with: vercel --prod" -ForegroundColor Green 