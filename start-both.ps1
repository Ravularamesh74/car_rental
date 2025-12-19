# Car Rental MERN Stack - Start Both Services
# PowerShell Script to run frontend and backend separately

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Car Rental MERN Stack" -ForegroundColor Cyan
Write-Host "Starting Frontend and Backend Separately" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
$nodeCheck = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCheck) {
    Write-Host "ERROR: Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if MongoDB is running
try {
    $mongoCheck = Test-NetConnection -ComputerName localhost -Port 27017 -WarningAction SilentlyContinue
    if (-not $mongoCheck.TcpTestSucceeded) {
        Write-Host "WARNING: MongoDB might not be running on port 27017" -ForegroundColor Yellow
        Write-Host "Make sure MongoDB is started before proceeding" -ForegroundColor Yellow
        Write-Host ""
    }
} catch {
    Write-Host "Could not check MongoDB status" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Option 1: Run in Separate Terminal Windows (Recommended)" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Terminal 1 - Backend Server:"
Write-Host "  cd D:\MT WORKSPACE\server" -ForegroundColor Cyan
Write-Host "  node server.js" -ForegroundColor Cyan
Write-Host ""
Write-Host "Terminal 2 - Frontend Server:"
Write-Host "  cd D:\MT WORKSPACE\client" -ForegroundColor Cyan
Write-Host "  npm start" -ForegroundColor Cyan
Write-Host ""

Write-Host "Option 2: Run Both from PowerShell (Below)" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host ""

$runBoth = Read-Host "Do you want to run both services now? (y/n)"
if ($runBoth -ne "y" -and $runBoth -ne "Y") {
    Write-Host "Exiting..." -ForegroundColor Yellow
    exit 0
}

# Start Backend
Write-Host ""
Write-Host "Starting Backend Server on port 5000..." -ForegroundColor Green
Start-Process -NoNewWindow -FilePath "cmd" -ArgumentList "/k `"cd /d D:\MT WORKSPACE\server && node server.js`""

# Wait for backend to start
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "Starting Frontend Server on port 3000..." -ForegroundColor Green
Start-Process -NoNewWindow -FilePath "cmd" -ArgumentList "/k `"cd /d D:\MT WORKSPACE\client && npm start`""

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Services Starting..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend:  http://localhost:5000" -ForegroundColor Yellow
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C in each window to stop individual services" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Read-Host "Press Enter to exit this script (services will continue running)"
