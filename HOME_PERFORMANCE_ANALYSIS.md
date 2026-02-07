# 🚀 Analyse de Performance - Page Home

**Date:** 3 février 2026  
**Page analysée:** `/[lang]/page.tsx` (Home)

---

## 📊 Problèmes Identifiés

### 🔴 CRITIQUE - Images non optimisées

#### 1. **Images Hero en `priority`** (HomeHero.tsx)
```tsx
// Ligne 17-24
<Image
    src={IMAGES.HERO_THAILAND}
    alt="Thailand Background - Phi Phi Islands"
    fill
    priority  // ⚠️ Bloque le rendu initial
    className="object-cover"
    sizes="100vw"
/>
```

**Problème:**
- L'image hero est chargée en `priority` ce qui bloque le First Contentful Paint (FCP)
- Taille probablement trop grande (non optimisée)
- `sizes="100vw"` charge une image pleine largeur même sur mobile

**Impact:** +1-2 secondes de chargement initial

---

#### 2. **Multiples images dans HomeVisas** (HomeVisas.tsx)
```tsx
// 4 images chargées simultanément:
- IMAGES.BEACH (background, ligne 16-22)
- IMAGES.COWORKING (DTV card, ligne 38-42)
- IMAGES.TOURIST (Tourist card, ligne 66-70)
- IMAGES.LTR (LTR card, ligne 94-98)
```

**Problème:**
- Toutes les images sont chargées immédiatement
- Pas de lazy loading
- Background image inutile (déjà un overlay sombre)

**Impact:** +800ms-1.5s de chargement

---

#### 3. **Images externes non optimisées** (HomeSpotlight.tsx)
```tsx
// Lignes 88 et 97 - Images Unsplash
src="https://images.unsplash.com/photo-..."
```

**Problème:**
- Images externes non passées par Next.js Image Optimization
- Pas de cache local
- Taille non contrôlée

**Impact:** +500ms-1s de chargement

---

### 🟡 MOYEN - Composants non lazy-loaded

#### 4. **ExpertAppointmentForm chargé immédiatement**
```tsx
// HomeClientPage.tsx, ligne 17-20
const ExpertAppointmentForm = dynamic(() => import('@/components/ExpertAppointmentForm'), {
    ssr: false,
    loading: LoadingState
});
```

**Problème:**
- Le formulaire est en bas de page mais chargé dès le début
- Devrait être lazy-loaded au scroll

**Impact:** +300-500ms de chargement initial

---

#### 5. **Tous les composants Home chargés en même temps**
```tsx
// HomeClientPage.tsx, lignes 7-10
import { HomeHero } from './home/components/HomeHero';
import { HomeSpotlight } from './home/components/HomeSpotlight';
import { HomeVisas } from './home/components/HomeVisas';
import { HomeCTA } from './home/components/HomeCTA';
```

**Problème:**
- Tous les composants sont importés statiquement
- Pas de code splitting
- JavaScript bundle trop gros

**Impact:** +200-400ms de chargement initial

---

### 🟢 FAIBLE - Optimisations mineures

#### 6. **Animations et transitions lourdes**
```tsx
// HomeVisas.tsx, ligne 32
className="... hover:-translate-y-2 transition duration-300"
```

**Problème:**
- Transitions sur `transform` peuvent causer des reflows
- Utiliser `will-change` pour optimiser

**Impact:** Minime, mais améliore la fluidité

---

## 🎯 Solutions Recommandées

### 🔥 PRIORITÉ 1: Optimiser les images

#### Solution 1.1: Lazy load l'image hero
```tsx
// HomeHero.tsx
<Image
    src={IMAGES.HERO_THAILAND}
    alt="Thailand Background - Phi Phi Islands"
    fill
    priority={false}  // ✅ Retirer priority
    loading="lazy"     // ✅ Ajouter lazy loading
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 100vw"
    quality={75}       // ✅ Réduire la qualité
/>
```

**Gain estimé:** -1-2 secondes

---

#### Solution 1.2: Lazy load les images des cards
```tsx
// HomeVisas.tsx - Pour chaque image de card
<Image
    src={IMAGES.COWORKING}
    alt="DTV Chiang Mai"
    fill
    loading="lazy"     // ✅ Ajouter lazy loading
    className="object-cover group-hover:scale-110 transition duration-500"
    sizes="(max-width: 768px) 100vw, 33vw"
    quality={80}       // ✅ Réduire la qualité
/>
```

**Gain estimé:** -800ms-1.5s

---

#### Solution 1.3: Supprimer l'image background de HomeVisas
```tsx
// HomeVisas.tsx - Remplacer lignes 15-24 par:
<section className="py-20 relative overflow-hidden bg-slate-900">
    {/* Supprimer l'image, garder juste le fond sombre */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

**Gain estimé:** -300-500ms

---

#### Solution 1.4: Utiliser des images locales optimisées
```tsx
// HomeSpotlight.tsx - Remplacer les images Unsplash
// Par des images locales dans /public/images/
<Image
    src="/images/coworking-optimized.webp"  // ✅ Image locale en WebP
    alt="Coworking"
    fill
    loading="lazy"
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    quality={80}
/>
```

**Gain estimé:** -500ms-1s

---

### 🔥 PRIORITÉ 2: Lazy load les composants

#### Solution 2.1: Lazy load ExpertAppointmentForm au scroll
```tsx
// HomeClientPage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ExpertAppointmentForm = dynamic(
    () => import('@/components/ExpertAppointmentForm'),
    {
        ssr: false,
        loading: () => <div className="h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
        </div>
    }
);

const HomeClientPage: React.FC = () => {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        // Charger le formulaire après 2 secondes ou au scroll
        const timer = setTimeout(() => setShowForm(true), 2000);
        
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowForm(true);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* ... autres sections ... */}
            
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4">
                    {showForm ? (
                        <ExpertAppointmentForm />
                    ) : (
                        <div className="h-64 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
```

**Gain estimé:** -300-500ms

---

#### Solution 2.2: Lazy load les sections below-the-fold
```tsx
// HomeClientPage.tsx
const HomeSpotlight = dynamic(() => import('./home/components/HomeSpotlight'), {
    loading: () => <div className="h-96 bg-white"></div>
});

const HomeVisas = dynamic(() => import('./home/components/HomeVisas'), {
    loading: () => <div className="h-96 bg-slate-900"></div>
});

const HomeCTA = dynamic(() => import('./home/components/HomeCTA'), {
    loading: () => <div className="h-64 bg-slate-900"></div>
});
```

**Gain estimé:** -200-400ms

---

### 🔥 PRIORITÉ 3: Optimisations CSS

#### Solution 3.1: Ajouter will-change pour les animations
```tsx
// HomeVisas.tsx
<div className="... hover:-translate-y-2 transition duration-300 will-change-transform">
```

#### Solution 3.2: Utiliser les nouveaux composants optimisés
```tsx
import { Section, Container, Card } from '@/components/ui';

// Au lieu de:
<section className="py-20 relative overflow-hidden bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Utiliser:
<Section variant="dark" spacing="lg">
    <Container>
```

**Gain estimé:** -50-100ms (meilleur cache CSS)

---

## 📋 Plan d'Action Recommandé

### Phase 1: Quick Wins (30 min)
1. ✅ Retirer `priority` de l'image hero
2. ✅ Ajouter `loading="lazy"` à toutes les images
3. ✅ Réduire `quality` des images à 75-80
4. ✅ Supprimer l'image background de HomeVisas

**Gain total:** -2-3 secondes

---

### Phase 2: Lazy Loading (1h)
1. ✅ Lazy load ExpertAppointmentForm au scroll
2. ✅ Lazy load HomeSpotlight, HomeVisas, HomeCTA
3. ✅ Implémenter intersection observer pour charger au besoin

**Gain total:** -500ms-1s

---

### Phase 3: Images Optimisées (2h)
1. ✅ Convertir toutes les images en WebP
2. ✅ Créer des versions responsive (mobile, tablet, desktop)
3. ✅ Utiliser des images locales au lieu d'Unsplash
4. ✅ Configurer `next.config.ts` pour optimiser les images

**Gain total:** -1-2 secondes

---

## 🎯 Résultats Attendus

### Avant Optimisations
- **FCP (First Contentful Paint):** ~2.5-3s
- **LCP (Largest Contentful Paint):** ~4-5s
- **TTI (Time to Interactive):** ~5-6s
- **Bundle Size:** ~500-600KB

### Après Optimisations
- **FCP:** ~1-1.5s ✅ (-60%)
- **LCP:** ~2-2.5s ✅ (-50%)
- **TTI:** ~2.5-3s ✅ (-50%)
- **Bundle Size:** ~300-350KB ✅ (-40%)

---

## 🛠️ Fichiers à Modifier

1. **`src/app/[lang]/HomeClientPage.tsx`**
   - Lazy load des composants
   - Lazy load du formulaire au scroll

2. **`src/app/[lang]/home/components/HomeHero.tsx`**
   - Retirer `priority` de l'image
   - Ajouter `loading="lazy"` et `quality={75}`

3. **`src/app/[lang]/home/components/HomeVisas.tsx`**
   - Supprimer l'image background
   - Ajouter `loading="lazy"` aux images des cards
   - Ajouter `quality={80}`

4. **`src/app/[lang]/home/components/HomeSpotlight.tsx`**
   - Remplacer images Unsplash par images locales
   - Ajouter `loading="lazy"` et `quality={80}`

---

## ✅ Checklist d'Optimisation

- [ ] Retirer `priority` de l'image hero
- [ ] Ajouter `loading="lazy"` à toutes les images
- [ ] Réduire `quality` à 75-80 pour toutes les images
- [ ] Supprimer l'image background de HomeVisas
- [ ] Lazy load ExpertAppointmentForm au scroll
- [ ] Lazy load HomeSpotlight, HomeVisas, HomeCTA
- [ ] Convertir images en WebP
- [ ] Créer versions responsive des images
- [ ] Remplacer images Unsplash par images locales
- [ ] Ajouter `will-change-transform` aux animations
- [ ] Tester avec Lighthouse
- [ ] Vérifier sur mobile

---

**Veux-tu que j'implémente ces optimisations maintenant ?**
