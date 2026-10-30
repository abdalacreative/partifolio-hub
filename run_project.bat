@echo off
title PartfolioHub Launcher
setlocal EnableDelayedExpansion

echo ========================================================
echo        PartfolioHub - Launching All Services
echo ========================================================
echo.

set "BACKEND_DIR=%~dp0backend"
set "FRONTEND_DIR=%~dp0frontend"

:: 1. Check and Start MySQL Server
echo [1/3] Checking MySQL database server...
tasklist /FI "IMAGENAME eq mysqld.exe" 2>NUL | find /I /N "mysqld.exe" >NUL
if "%ERRORLEVEL%"=="0" (
    echo   -^> MySQL is already running.
) else (
    echo   -^> Starting MySQL from XAMPP...
    start "PartfolioHub MySQL Database" "C:\xampp\mysql\bin\mysqld.exe" --defaults-file="C:\xampp\mysql\bin\my.ini" --console
    timeout /t 3 /nobreak >nul
)

:: 2. Start PHP Backend Server on port 8000
echo.
echo [2/3] Starting PHP Backend API on http://127.0.0.1:8000...
start "PartfolioHub Backend (PHP:8000)" /D "%BACKEND_DIR%" cmd /k "C:\xampp\php\php.exe -S 127.0.0.1:8000 router.php"

:: 3. Start React Vite Frontend Server on port 5173
echo.
echo [3/3] Starting React Vite Frontend on http://localhost:5173...
start "PartfolioHub Frontend (Vite:5173)" /D "%FRONTEND_DIR%" cmd /k "call npm.cmd run dev"

echo.
echo ========================================================
echo   PartfolioHub has started successfully!
echo   Opening browser at: http://localhost:5173/categories
echo ========================================================
timeout /t 2 /nobreak >nul
start http://localhost:5173/categories
