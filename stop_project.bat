@echo off
title PartfolioHub Stopper
echo ========================================================
echo        Stopping PartfolioHub Services...
echo ========================================================
taskkill /F /IM php.exe 2>nul
taskkill /F /IM node.exe 2>nul
taskkill /F /IM mysqld.exe 2>nul
echo All servers have been stopped.
timeout /t 2 /nobreak >nul
