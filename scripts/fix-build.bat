@echo off
echo 🔧 Fixing build issues for FRYE Ecosystem...

echo 📦 Cleaning node_modules and package-lock.json...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo 🧹 Cleaning Next.js cache...
if exist .next rmdir /s /q .next

echo 📥 Installing dependencies...
npm install

echo 🔍 Running type check...
npm run type-check

echo ✅ Build fix complete! Try running 'npm run build' now.
pause
