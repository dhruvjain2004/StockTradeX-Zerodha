@echo off
echo Starting Zerodha Trading Platform...
echo.

echo Starting Backend Server...
cd backend
start "Backend Server" cmd /k "npm run dev"

echo.
echo Starting Frontend Server...
cd ../frontend/Basic-Interface
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:3002
echo Frontend: http://localhost:5173
echo.
pause 