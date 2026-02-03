# Guide d'Utilisation des Composants UI Optimisés

## 📦 Nouveaux Composants Disponibles

### 1. **Button** - Bouton universel

```tsx
import { Button } from '@/components/ui'

// Variants
<Button variant="primary">Bouton Principal</Button>
<Button variant="secondary">Bouton Secondaire</Button>
<Button variant="outline">Bouton Outline</Button>
<Button variant="ghost">Bouton Ghost</Button>

// Tailles
<Button size="sm">Petit</Button>
<Button size="md">Moyen</Button>
<Button size="lg">Grand</Button>

// Avec lien
<Button href="/contact">Contactez-nous</Button>

// Personnalisé
<Button className="mt-4" onClick={() => console.log('Click!')}>
  Action
</Button>
```

### 2. **Container** - Conteneur responsive

```tsx
import { Container } from '@/components/ui'

// Tailles
<Container size="sm">Contenu étroit</Container>
<Container size="md">Contenu moyen</Container>
<Container size="lg">Contenu large (défaut)</Container>
<Container size="xl">Contenu très large</Container>
<Container size="full">Pleine largeur</Container>

// Exemple d'utilisation
<Container>
  <h1>Mon Titre</h1>
  <p>Mon contenu...</p>
</Container>
```

### 3. **Section** - Section de page

```tsx
import { Section } from '@/components/ui'

// Variants
<Section variant="default">Section blanche</Section>
<Section variant="dark">Section sombre</Section>
<Section variant="light">Section gris clair</Section>

// Espacement
<Section spacing="sm">Petit espacement</Section>
<Section spacing="md">Espacement moyen</Section>
<Section spacing="lg">Grand espacement (défaut)</Section>
<Section spacing="xl">Très grand espacement</Section>

// Exemple complet
<Section variant="dark" spacing="xl">
  <Container>
    <h2>Ma Section</h2>
  </Container>
</Section>
```

### 4. **Badge** - Labels et tags

```tsx
import { Badge } from '@/components/ui'

// Variants
<Badge variant="primary">Principal</Badge>
<Badge variant="secondary">Secondaire</Badge>
<Badge variant="success">Succès</Badge>
<Badge variant="warning">Attention</Badge>
<Badge variant="error">Erreur</Badge>
<Badge variant="info">Info</Badge>

// Tailles
<Badge size="sm">Petit</Badge>
<Badge size="md">Moyen</Badge>
<Badge size="lg">Grand</Badge>

// Exemple
<Badge variant="success" size="lg">Nouveau</Badge>
```

---

## 🎨 Utilisation des Design Tokens

### Couleurs dans Tailwind

```tsx
// Anciennes classes
className="bg-amber-500 text-slate-900"

// Nouvelles classes (avec tokens)
className="bg-primary text-dark"

// Disponibles :
// - bg-primary, text-primary (et -light, -dark)
// - bg-dark, text-dark (et -light, -lighter)
```

### Ombres personnalisées

```tsx
// Anciennes classes
className="shadow-xl"

// Nouvelles classes
className="shadow-card"        // Ombre de carte standard
className="shadow-card-hover"  // Ombre au survol
className="shadow-primary"     // Ombre colorée (ambre)
```

### Border Radius personnalisés

```tsx
// Anciennes classes
className="rounded-2xl"

// Nouvelles classes
className="rounded-card"    // 1rem (16px)
className="rounded-card-lg" // 1.5rem (24px)
```

---

## 🔧 Fonction Utilitaire `cn()`

La fonction `cn()` permet de fusionner intelligemment les classes Tailwind.

```tsx
import { cn } from '@/utils/cn'

// Fusion simple
cn('px-4 py-2', 'bg-primary')
// Résultat: 'px-4 py-2 bg-primary'

// Résolution de conflits
cn('px-4', 'px-6')
// Résultat: 'px-6' (la dernière gagne)

// Classes conditionnelles
cn('base-class', isActive && 'active-class', isDisabled && 'disabled-class')

// Exemple réel
<div className={cn(
  'rounded-lg p-4',
  variant === 'primary' && 'bg-primary',
  variant === 'secondary' && 'bg-dark',
  className
)}>
```

---

## 📚 Styles Communs Réutilisables

```tsx
import { commonStyles } from '@/styles/common'
import { cn } from '@/utils/cn'

// Utilisation
<div className={cn(commonStyles.card, 'mb-4')}>
  Contenu de la carte
</div>

// Styles disponibles :
commonStyles.card           // Carte blanche standard
commonStyles.cardDark       // Carte sombre
commonStyles.cardHover      // Effet hover pour carte
commonStyles.section        // Espacement de section
commonStyles.container      // Conteneur responsive
commonStyles.heading        // Titre principal
commonStyles.subheading     // Sous-titre
commonStyles.body           // Texte de corps
commonStyles.badge          // Badge de base
commonStyles.badgePrimary   // Badge primaire
commonStyles.input          // Input de formulaire
commonStyles.fadeIn         // Animation fade-in
commonStyles.slideUp        // Animation slide-up
```

---

## 🎯 Exemples de Refactoring

### Avant (ancien code)

```tsx
<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 mb-12">
  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
    Mon Titre
  </h2>
  <p className="text-base text-slate-600 leading-relaxed">
    Mon contenu...
  </p>
  <a 
    href="/contact"
    className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-6 py-3 rounded-lg font-bold shadow-lg transition inline-flex items-center justify-center"
  >
    Contactez-nous
  </a>
</div>
```

### Après (code optimisé)

```tsx
import { Card, Button } from '@/components/ui'
import { cn } from '@/utils/cn'
import { commonStyles } from '@/styles/common'

<Card className="mb-12">
  <h2 className={commonStyles.heading}>
    Mon Titre
  </h2>
  <p className={cn(commonStyles.body, 'mb-6')}>
    Mon contenu...
  </p>
  <Button href="/contact" variant="primary">
    Contactez-nous
  </Button>
</Card>
```

**Bénéfices :**
- ✅ 60% moins de code
- ✅ Plus lisible et maintenable
- ✅ Cohérence garantie avec le design system
- ✅ Facile à modifier globalement

---

## 🚀 Migration Progressive

### Étape 1 : Importer les utilitaires

```tsx
import { cn } from '@/utils/cn'
import { commonStyles } from '@/styles/common'
```

### Étape 2 : Remplacer les classes répétitives

```tsx
// Avant
className="bg-amber-500 text-slate-900"

// Après
className="bg-primary text-dark"
```

### Étape 3 : Utiliser les nouveaux composants

```tsx
// Avant
<a href="/contact" className="bg-amber-500 ...">Contact</a>

// Après
<Button href="/contact" variant="primary">Contact</Button>
```

### Étape 4 : Utiliser cn() pour les classes complexes

```tsx
// Avant
<div className={`base ${condition ? 'active' : ''} ${className}`}>

// Après
<div className={cn('base', condition && 'active', className)}>
```

---

## 📊 Checklist de Migration

Pour chaque composant/page :

- [ ] Remplacer `bg-amber-500` par `bg-primary`
- [ ] Remplacer `bg-slate-900` par `bg-dark`
- [ ] Remplacer `rounded-2xl` par `rounded-card-lg`
- [ ] Remplacer `shadow-xl` par `shadow-card`
- [ ] Utiliser `cn()` au lieu de template strings
- [ ] Extraire les styles répétitifs vers `commonStyles`
- [ ] Utiliser les nouveaux composants (Button, Card, etc.)

---

## 💡 Bonnes Pratiques

### ✅ À FAIRE

```tsx
// Utiliser cn() pour fusionner les classes
<div className={cn('base-class', conditionalClass, props.className)} />

// Utiliser les tokens de couleur
<Button variant="primary">Action</Button>

// Extraire les styles répétitifs
const cardClasses = cn(commonStyles.card, 'mb-4')
```

### ❌ À ÉVITER

```tsx
// Template strings pour les classes
<div className={`base ${condition ? 'active' : ''}`} />

// Couleurs codées en dur
<div className="bg-amber-500" />

// Duplication de styles
<div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100" />
<div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100" />
```

---

## 🎨 Variables CSS Disponibles

```css
/* Couleurs */
var(--color-primary)
var(--color-primary-light)
var(--color-primary-dark)
var(--color-dark)
var(--color-dark-light)

/* Ombres */
var(--shadow-card)
var(--shadow-card-hover)
var(--shadow-primary)

/* Border Radius */
var(--radius-card)
var(--radius-card-lg)

/* Transitions */
var(--transition-base)
var(--transition-slow)
```

---

## 📖 Ressources

- **Tailwind Config:** `tailwind.config.ts`
- **Utilitaires:** `src/utils/cn.ts`
- **Styles communs:** `src/styles/common.ts`
- **Composants UI:** `src/components/ui/`
- **CSS Global:** `src/app/globals.css`

---

**Questions ?** Consulte le rapport d'optimisation complet : `CSS_OPTIMIZATION_REPORT.md`
