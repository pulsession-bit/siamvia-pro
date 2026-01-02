# Guide de Déploiement - Serveur VPS

## Prérequis

- Serveur Ubuntu 20.04+ / Debian 11+
- Accès SSH root ou sudo
- Nom de domaine configuré (DNS pointant vers le serveur)

## 1. Installation des Dépendances Serveur

```bash
# Mise à jour du système
sudo apt update && sudo apt upgrade -y

# Installation de Node.js (v20 LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Installation de PM2
sudo npm install -g pm2

# Installation de Nginx
sudo apt install -y nginx

# Installation de Git
sudo apt install -y git
```

## 2. Configuration du Serveur

### A. Créer un utilisateur dédié (recommandé)

```bash
# Créer l'utilisateur
sudo adduser siamvisa

# Ajouter aux groupes nécessaires
sudo usermod -aG sudo siamvisa

# Passer à cet utilisateur
su - siamvisa
```

### B. Cloner le projet

```bash
cd /var/www
sudo mkdir -p siamvisapro
sudo chown siamvisa:siamvisa siamvisapro
cd siamvisapro

# Cloner depuis votre repo Git
git clone https://github.com/VOTRE-USERNAME/siamvisa-pro.git .
```

### C. Configuration des variables d'environnement

```bash
# Créer le fichier .env.production
nano .env.production
```

Ajouter :
```env
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
# Autres variables
```

## 3. Build et Démarrage

```bash
# Installation des dépendances
npm ci --production=false

# Build de l'application
npm run build

# Créer le dossier logs
mkdir -p logs

# Démarrer avec PM2
pm2 start ecosystem.config.js

# Configurer PM2 pour démarrer au boot
pm2 startup
pm2 save
```

## 4. Configuration Nginx

```bash
# Copier la configuration
sudo cp nginx.conf /etc/nginx/sites-available/siamvisapro.com

# Créer le lien symbolique
sudo ln -s /etc/nginx/sites-available/siamvisapro.com /etc/nginx/sites-enabled/

# Tester la configuration
sudo nginx -t

# Redémarrer Nginx
sudo systemctl restart nginx
```

## 5. Configuration SSL (Let's Encrypt)

```bash
# Installer Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtenir le certificat SSL
sudo certbot --nginx -d siamvisapro.com -d www.siamvisapro.com

# Le renouvellement automatique est configuré par défaut
# Tester le renouvellement :
sudo certbot renew --dry-run
```

## 6. Déploiement des Mises à Jour

Pour déployer une nouvelle version :

```bash
# Rendre le script exécutable (première fois seulement)
chmod +x deploy.sh

# Lancer le déploiement
./deploy.sh
```

## 7. Monitoring et Logs

```bash
# Voir le status
pm2 status

# Voir les logs en temps réel
pm2 logs siamvisa-nextjs

# Voir les logs Nginx
sudo tail -f /var/log/nginx/siamvisapro_access.log
sudo tail -f /var/log/nginx/siamvisapro_error.log

# Monitoring avec PM2
pm2 monit
```

## 8. Commandes Utiles

```bash
# Redémarrer l'application
pm2 restart siamvisa-nextjs

# Arrêter l'application
pm2 stop siamvisa-nextjs

# Voir les métriques
pm2 show siamvisa-nextjs

# Vider les logs
pm2 flush
```

## 9. Firewall (UFW)

```bash
# Activer le firewall
sudo ufw enable

# Autoriser SSH
sudo ufw allow 22/tcp

# Autoriser HTTP et HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Vérifier le status
sudo ufw status
```

## 10. Backend (optionnel)

Si vous avez un backend séparé dans le dossier `backend/` :

```bash
cd backend
npm ci --production
pm2 start src/index.js --name siamvisa-backend
pm2 save
```

## Troubleshooting

### L'application ne démarre pas
```bash
# Vérifier les logs
pm2 logs siamvisa-nextjs --lines 100

# Vérifier le port
sudo netstat -tulpn | grep 3000
```

### Erreur 502 Bad Gateway
```bash
# Vérifier que l'app tourne
pm2 status

# Vérifier la config Nginx
sudo nginx -t

# Redémarrer Nginx
sudo systemctl restart nginx
```

### Problèmes de permissions
```bash
# Corriger les permissions
sudo chown -R siamvisa:siamvisa /var/www/siamvisapro
```

## Optimisations Recommandées

1. **Cache Nginx** : Déjà configuré dans nginx.conf
2. **Compression** : Gzip activé
3. **CDN** : Considérer Cloudflare pour les assets statiques
4. **Database** : Si vous utilisez une base de données, l'héberger séparément
5. **Backups** : Configurer des sauvegardes automatiques

## Sécurité

- [ ] Changer le port SSH par défaut
- [ ] Désactiver l'authentification root par mot de passe
- [ ] Installer fail2ban
- [ ] Configurer des sauvegardes régulières
- [ ] Mettre à jour régulièrement le système

```bash
# Installer fail2ban
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```
