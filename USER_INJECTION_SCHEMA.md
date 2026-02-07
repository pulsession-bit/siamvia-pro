# Schema d'Injection Utilisateur - Le Point Canonique

Ce document décrit la structure de données "UserCanonical" pour centraliser les interactions des utilisateurs (demandes de visa, prises de rendez-vous) dans une collection unique `users`.

## 1. Objectif

Créer une **source unique de vérité** (Canonical Point) pour chaque utilisateur, agrégeant toutes ses interactions avec la plateforme.

## 2. Structure (Schema) de la Collection `users`

Voici la structure JSON que chaque document utilisateur doit respecter dans Firestore.

```typescript
interface UserCanonical {
  // Identité (Auth)
  uid: string;              // UID Firebase Auth (Clé Primaire)
  email: string;            // Identifiant unique (toujours en minuscule)
  
  // Profil (Données fusionnées)
  displayName?: string;     // Nom complet
  firstName?: string;       // Prénom (extrait)
  lastName?: string;        // Nom de famille (extrait)
  phone?: string;           // Téléphone normalisé
  nationality?: string;     // Nationalité (ISO code ou nom)
  language: string;         // 'fr', 'en', etc. (Langue de préférence)
  photoURL?: string;        // URL photo (si disponible via Google/Auth)

  // Métadonnées système
  role: 'user' | 'admin' | 'expert';
  status: 'lead' | 'prospect' | 'customer' | 'churned';
  source: string;           // ex: 'website_application', 'google_login', 'crm_import'
  
  // Relations (Point Canonique d'Agrégation)
  // Liste des IDs des documents liés dans d'autres collections
  applicationIds: string[]; // Références vers 'visa_applications'
  appointmentIds: string[]; // Références vers 'appointments'
  
  // Horodatage
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastLoginAt?: Timestamp;
}
```

## 3. Stratégie d'Injection (Mapping)

Lors de l'importation ou de la création d'un utilisateur, utilisez les correspondances suivantes selon la source de la donnée.

### Source A : Demande de Visa (`visa_applications`)

| Champ User (Cible) | Champ Source (`visa_applications`) | Note |
| :--- | :--- | :--- |
| `uid` | `uid` (si auth) ou généré | Utiliser l'email comme clé de déduplication si pas d'UID |
| `email` | `email` | **Toujours convertir en minuscule** |
| `firstName` | `firstName` | |
| `lastName` | `lastName` | |
| `phone` | `phone` | |
| `nationality` | `nationality` | |
| `language` | `language` | |
| `applicationIds` | `[doc.id]` | Ajouter l'ID du document à la liste existante |
| `source` | "website_application" | |

### Source B : Prise de Rendez-vous (`appointments`)

| Champ User (Cible) | Champ Source (`appointments`) | Note |
| :--- | :--- | :--- |
| `uid` | `userId` | |
| `email` | `email` | **Toujours convertir en minuscule** |
| `firstName` | `fullName` (partie 1) | Split sur le premier espace |
| `lastName` | `fullName` (partie 2+) | |
| `phone` | `contactValue` | Uniquement si `contactMethod` == 'phone' ou 'whatsapp' |
| `appointmentIds` | `[doc.id]` | Ajouter l'ID du document à la liste existante |
| `source` | "appointment_booking" | |

## 4. Règles de Gestion (Business Rules)

1. **Unicité de l'Email** : L'email est l'identifiant unique fonctionnel. Si un utilisateur existe déjà avec cet email, mettez à jour son document (merge) au lieu de créer un doublon.
2. **Priorité des Données** : Si un conflit de données survient (ex: téléphone différent), privilégier la donnée la plus récente (`updatedAt`).
3. **Point Canonique** : L'objectif est d'avoir **un seul** document `user` qui possède des tableaux `applicationIds` et `appointmentIds` remplis, permettant de retrouver tout l'historique d'un client.
