# 🔥 Guide d'activation Firebase Auth Anonyme

## Étapes à suivre dans Firebase Console

### 1. Accéder à la console
- URL: https://console.firebase.google.com
- Projet: `call-center-lead-dc450`

### 2. Activer l'authentification anonyme
1. Dans le menu de gauche, cliquez sur **"Authentication"** (🔐)
2. Cliquez sur l'onglet **"Sign-in method"**
3. Dans la liste des fournisseurs, trouvez **"Anonymous"** (Anonyme)
4. Cliquez sur **"Anonymous"**
5. Activez le bouton **"Enable"** (Activer)
6. Cliquez sur **"Save"** (Enregistrer)

### 3. Vérification
Une fois activé, vous devriez voir :
- ✅ "Anonymous" avec le statut "Enabled" (Activé)

## Test du formulaire

Après activation, testez le formulaire sur :
- http://localhost:3001/fr (section "Prendre RDV")
- http://localhost:3001/fr/visa-ltr-thailande (formulaire en bas)
- http://localhost:3001/fr/visa-elite-thailande (formulaire en bas)

## Vérification des données

Les rendez-vous seront sauvegardés dans Firestore :
- Collection: `appointments`
- Champs: date, slot1, slot2, contactMethod, contactValue, language, status, createdAt, userId

Pour voir les données :
1. Firebase Console > Firestore Database
2. Collection "appointments"
3. Vous verrez chaque demande de RDV

## Structure des données sauvegardées

```json
{
  "date": "2026-01-15",
  "slot1": "09:30",
  "slot2": "14:00",
  "contactMethod": "whatsapp",
  "contactValue": "+33612345678",
  "language": "fr",
  "status": "pending",
  "createdAt": "2026-01-02T18:25:00Z",
  "source": "website",
  "userId": "anonymous-user-id-xyz"
}
```

## Dépannage

Si le formulaire ne fonctionne toujours pas après activation :
1. Vider le cache du navigateur (Ctrl+Shift+R)
2. Vérifier la console du navigateur (F12) pour les erreurs
3. Relancer le serveur Next.js : `npm run dev`
