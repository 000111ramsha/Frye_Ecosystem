#!/bin/bash

echo "🔧 Fixing build issues for FRYE Ecosystem..."

echo "📦 Cleaning node_modules and package-lock.json..."
rm -rf node_modules
rm -f package-lock.json

echo "🧹 Cleaning Next.js cache..."
rm -rf .next

echo "📥 Installing dependencies..."
npm install

echo "🔍 Running type check..."
npm run type-check

echo "✅ Build fix complete! Try running 'npm run build' now."
