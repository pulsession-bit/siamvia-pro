#!/bin/bash

# Script de déploiement pour serveur VPS
# Usage: ./deploy.sh

set -e

echo "🚀 Démarrage du déploiement..."

# 1. Pull des dernières modifications
echo "📥 Récupération du code..."
git pull origin main

# 2. Installation des dépendances
echo "📦 Installation des dépendances..."
npm ci --production=false

# 3. Build de l'application
echo "🔨 Build de l'application..."
npm run build

# 4. Redémarrage avec PM2
echo "♻️  Redémarrage de l'application..."
pm2 reload ecosystem.config.js --update-env

# 5. Sauvegarde de la configuration PM2
pm2 save

echo "✅ Déploiement terminé avec succès!"
echo "📊 Status: pm2 status"
