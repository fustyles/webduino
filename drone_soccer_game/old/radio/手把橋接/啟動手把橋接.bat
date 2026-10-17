@echo off
chcp 65001 >nul
title 手把橋接程式（無人機足球）
cd /d "%~dp0"
where python >nul 2>nul
if errorlevel 1 (
  echo 找不到 Python。請先到 https://www.python.org/downloads/ 安裝，安裝時勾選「Add python.exe to PATH」。
  pause
  exit /b 1
)
echo 檢查並安裝需要的套件（第一次會比較久）...
python -m pip install --quiet --disable-pip-version-check pygame websockets
python gamepad_bridge.py
pause
