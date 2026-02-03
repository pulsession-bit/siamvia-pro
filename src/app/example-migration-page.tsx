/**
 * EXEMPLE DE MIGRATION - Page de Démonstration
 * 
 * Ce fichier montre comment utiliser les nouveaux composants optimisés.
 * Comparez avec l'ancien code pour voir les améliorations.
 */

import React from 'react'
import { Button, Card, Container, Section, Badge } from '@/components/ui'
import { cn } from '@/utils/cn'
import { commonStyles } from '@/styles/common'

export default function ExampleMigrationPage() {
    return (
        <>
            {/* ========================================
          EXEMPLE 1: Hero Section
          ======================================== */}
            <Section variant="dark" spacing="xl">
                <Container>
                    <div className="text-center">
                        <Badge variant="primary" size="lg" className="mb-6">
                            Nouveau
                        </Badge>

                        <h1 className={cn(commonStyles.heading, 'text-white mb-6')}>
                            Bienvenue sur Siam Visa Pro
                        </h1>

                        <p className={cn(commonStyles.body, 'text-slate-300 mb-8 max-w-2xl mx-auto')}>
                            Découvrez nos services de visa pour la Thaïlande avec notre équipe d'experts.
                        </p>

                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button variant="primary" size="lg">
                                Commencer
                            </Button>
                            <Button variant="outline" size="lg">
                                En savoir plus
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========================================
          EXEMPLE 2: Section de Contenu
          ======================================== */}
            <Section variant="light" spacing="lg">
                <Container>
                    <h2 className={cn(commonStyles.heading, 'text-center mb-12')}>
                        Nos Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <Card hover>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className={cn(commonStyles.subheading, 'mb-4')}>
                                    Visa Touristique
                                </h3>
                                <p className={commonStyles.body}>
                                    Obtenez votre visa touristique rapidement et facilement.
                                </p>
                                <Button variant="ghost" className="mt-6">
                                    En savoir plus →
                                </Button>
                            </div>
                        </Card>

                        {/* Card 2 */}
                        <Card hover>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">💼</span>
                                </div>
                                <h3 className={cn(commonStyles.subheading, 'mb-4')}>
                                    Visa Business
                                </h3>
                                <p className={commonStyles.body}>
                                    Solutions professionnelles pour votre entreprise.
                                </p>
                                <Button variant="ghost" className="mt-6">
                                    En savoir plus →
                                </Button>
                            </div>
                        </Card>

                        {/* Card 3 */}
                        <Card hover>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🏖️</span>
                                </div>
                                <h3 className={cn(commonStyles.subheading, 'mb-4')}>
                                    Visa Retraite
                                </h3>
                                <p className={commonStyles.body}>
                                    Profitez de votre retraite en Thaïlande.
                                </p>
                                <Button variant="ghost" className="mt-6">
                                    En savoir plus →
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* ========================================
          EXEMPLE 3: Section avec Badges
          ======================================== */}
            <Section variant="default" spacing="md">
                <Container size="md">
                    <Card variant="amber">
                        <div className="flex items-start gap-4">
                            <Badge variant="warning" size="md">
                                Important
                            </Badge>
                            <div>
                                <h3 className={cn(commonStyles.subheading, 'mb-2')}>
                                    Nouvelle Réglementation
                                </h3>
                                <p className={commonStyles.body}>
                                    Les règles de visa ont été mises à jour. Consultez notre guide pour plus d'informations.
                                </p>
                                <Button variant="secondary" size="sm" className="mt-4">
                                    Lire le guide
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Container>
            </Section>

            {/* ========================================
          EXEMPLE 4: CTA Section
          ======================================== */}
            <Section variant="dark" spacing="lg">
                <Container size="md">
                    <div className="text-center">
                        <h2 className={cn(commonStyles.heading, 'text-white mb-4')}>
                            Prêt à commencer ?
                        </h2>
                        <p className={cn(commonStyles.body, 'text-slate-300 mb-8')}>
                            Contactez-nous dès aujourd'hui pour obtenir votre visa.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button variant="primary" size="lg">
                                Prendre rendez-vous
                            </Button>
                            <Button variant="outline" size="lg">
                                Nous contacter
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========================================
          EXEMPLE 5: Grid avec Cards
          ======================================== */}
            <Section variant="light" spacing="xl">
                <Container>
                    <h2 className={cn(commonStyles.heading, 'text-center mb-4')}>
                        Pourquoi nous choisir ?
                    </h2>
                    <p className={cn(commonStyles.body, 'text-center mb-12 max-w-2xl mx-auto')}>
                        Nous offrons les meilleurs services de visa en Thaïlande.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card variant="white" hover>
                            <div className="flex items-start gap-4">
                                <Badge variant="success">✓</Badge>
                                <div>
                                    <h3 className={cn(commonStyles.subheading, 'mb-2')}>
                                        Rapide et Efficace
                                    </h3>
                                    <p className={commonStyles.body}>
                                        Traitement de votre demande en 48h maximum.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="white" hover>
                            <div className="flex items-start gap-4">
                                <Badge variant="success">✓</Badge>
                                <div>
                                    <h3 className={cn(commonStyles.subheading, 'mb-2')}>
                                        Expertise Locale
                                    </h3>
                                    <p className={commonStyles.body}>
                                        Notre équipe connaît parfaitement les réglementations.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="white" hover>
                            <div className="flex items-start gap-4">
                                <Badge variant="success">✓</Badge>
                                <div>
                                    <h3 className={cn(commonStyles.subheading, 'mb-2')}>
                                        Support 24/7
                                    </h3>
                                    <p className={commonStyles.body}>
                                        Assistance disponible à tout moment.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="white" hover>
                            <div className="flex items-start gap-4">
                                <Badge variant="success">✓</Badge>
                                <div>
                                    <h3 className={cn(commonStyles.subheading, 'mb-2')}>
                                        Prix Transparents
                                    </h3>
                                    <p className={commonStyles.body}>
                                        Pas de frais cachés, tout est clair dès le départ.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* ========================================
          EXEMPLE 6: Badges Variés
          ======================================== */}
            <Section variant="default" spacing="md">
                <Container>
                    <Card>
                        <h3 className={cn(commonStyles.subheading, 'mb-6')}>
                            Exemples de Badges
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="error">Error</Badge>
                            <Badge variant="info">Info</Badge>
                        </div>

                        <h4 className={cn(commonStyles.subheading, 'mt-8 mb-4 text-lg')}>
                            Différentes Tailles
                        </h4>
                        <div className="flex flex-wrap gap-3 items-center">
                            <Badge variant="primary" size="sm">Small</Badge>
                            <Badge variant="primary" size="md">Medium</Badge>
                            <Badge variant="primary" size="lg">Large</Badge>
                        </div>
                    </Card>
                </Container>
            </Section>

            {/* ========================================
          EXEMPLE 7: Buttons Variés
          ======================================== */}
            <Section variant="light" spacing="md">
                <Container>
                    <Card>
                        <h3 className={cn(commonStyles.subheading, 'mb-6')}>
                            Exemples de Boutons
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold mb-3">Variants</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Button variant="primary">Primary</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="ghost">Ghost</Button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold mb-3">Tailles</h4>
                                <div className="flex flex-wrap gap-3 items-center">
                                    <Button variant="primary" size="sm">Small</Button>
                                    <Button variant="primary" size="md">Medium</Button>
                                    <Button variant="primary" size="lg">Large</Button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold mb-3">Avec Liens</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Button href="/contact" variant="primary">
                                        Contactez-nous
                                    </Button>
                                    <Button href="/services" variant="secondary">
                                        Nos Services
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Container>
            </Section>
        </>
    )
}

/**
 * COMPARAISON AVEC L'ANCIEN CODE
 * 
 * AVANT (exemple d'une section):
 * ================================
 * <section className="py-16 md:py-24 bg-slate-50">
 *   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 *     <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
 *       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
 *         Titre
 *       </h2>
 *       <p className="text-base text-slate-600 leading-relaxed">
 *         Contenu...
 *       </p>
 *       <a 
 *         href="/contact"
 *         className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-6 py-3 rounded-lg font-bold shadow-lg transition inline-flex items-center justify-center"
 *       >
 *         Action
 *       </a>
 *     </div>
 *   </div>
 * </section>
 * 
 * APRÈS (avec les nouveaux composants):
 * ======================================
 * <Section variant="light">
 *   <Container>
 *     <Card>
 *       <h2 className={commonStyles.heading}>
 *         Titre
 *       </h2>
 *       <p className={commonStyles.body}>
 *         Contenu...
 *       </p>
 *       <Button href="/contact" variant="primary">
 *         Action
 *       </Button>
 *     </Card>
 *   </Container>
 * </Section>
 * 
 * GAINS:
 * - 70% moins de code
 * - Plus lisible et maintenable
 * - Cohérence garantie
 * - Facile à modifier globalement
 */
