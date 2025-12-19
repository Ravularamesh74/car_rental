@echo off
REM Car Rental MERN Stack - Start Both Services
REM This batch file starts both backend and frontend servers

echo.
echo ========================================
echo Car Rental MERN Stack
echo Starting Frontend and Backend
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

REM Check if MongoDB is running
netstat -an | find ":27017" >nul
if %errorlevel% neq 0 (
    echo WARNING: MongoDB might not be running on port 27017
    echo Make sure MongoDB is started before proceeding
    echo.
)

echo.
echo Starting Backend Server (Port 5000)...
echo.
start "Backend - Car Rental" cmd /k "cd /d D:\MT WORKSPACE\server && node server.js"

REM Wait for backend to start
timeout /t 3 /nobreak

echo.
echo Starting Frontend Server (Port 3000)...
echo.
start "Frontend - Car Rental" cmd /k "cd /d D:\MT WORKSPACE\client && npm start"

echo.
echo ========================================
echo Services Starting...
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press Ctrl+C in either window to stop
echo ========================================
echo.

pause
