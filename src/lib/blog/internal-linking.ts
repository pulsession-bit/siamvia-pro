import {
    Article,
    InternalLinkPlan,
    InternalLinkSuggestion,
    InternalLinkConstraints,
    Stage
} from '@/types/blog';

// Default constraints from specifications
const DEFAULT_CONSTRAINTS: InternalLinkConstraints = {
    max_links_per_1000w: 6,
    require_next_step: true,
    require_glossary: true,
    avoid_duplicate_anchors: true
};

/**
 * Scoring weights defined in spec
 */
const WEIGHTS = {
    CLUSTER: 0.45,
    STAGE_NEXT: 0.35,
    POPULAR: 0.15,
    FRESHNESS: 0.05
};

// Map stages to their logical next steps
const NEXT_STAGE_MAP: Record<Stage, Stage | null> = {
    'discover': 'compare',
    'compare': 'apply',
    'apply': null // End of funnel
};

/**
 * Calculate the relevance score of a candidate article relative to the current article.
 */
function calculateScore(current: Article, candidate: Article, isPopular: boolean = false): number {
    let score = 0;

    // 1. Cluster Match (0.45)
    // Check if they share at least one cluster
    const shareCluster = current.clusters.some(c => candidate.clusters.includes(c));
    if (shareCluster) {
        score += WEIGHTS.CLUSTER;
    }

    // 2. Stage Progression (0.35)
    // Prioritize moving down the funnel (Discover -> Compare -> Apply)
    const nextStage = NEXT_STAGE_MAP[current.stage];
    if (nextStage && candidate.stage === nextStage) {
        score += WEIGHTS.STAGE_NEXT;
    }

    // 3. Popularity (0.15)
    if (isPopular) {
        score += WEIGHTS.POPULAR;
    }

    // 4. Freshness (0.05)
    // Bonus if published in the last 6 months (approx)
    if (candidate.published_at) {
        const pubDate = new Date(candidate.published_at);
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        if (pubDate > sixMonthsAgo) {
            score += WEIGHTS.FRESHNESS;
        }
    }

    return parseFloat(score.toFixed(3));
}

/**
 * Generates an Internal Link Plan based on SEO rules.
 * 
 * @param currentArticle - The article being edited
 * @param candidates - Pool of available published articles
 * @param wordCount - Word count of the current article (to enforce quotas)
 * @param popularArticleIds - Optional list of IDs considered "popular"
 * @param customConstraints - Overrides for default rules
 */
export function generateInternalLinkPlan(
    currentArticle: Article,
    candidates: Article[],
    wordCount: number,
    popularArticleIds: string[] = [],
    customConstraints: Partial<InternalLinkConstraints> = {}
): InternalLinkPlan {
    const constraints = { ...DEFAULT_CONSTRAINTS, ...customConstraints };
    const suggestions: InternalLinkSuggestion[] = [];

    // Filter out self
    const validCandidates = candidates.filter(a => a.id !== currentArticle.id);

    // Calculate scores for all candidates
    const scoredCandidates = validCandidates.map(candidate => ({
        article: candidate,
        score: calculateScore(currentArticle, candidate, popularArticleIds.includes(candidate.id))
    })).sort((a, b) => b.score - a.score); // Sort by highest score first

    // --- STRATEGY IMPLEMENTATION ---

    // 1. Cluster Links (Goal: 2 high relevance links within same topic)
    const clusterMatches = scoredCandidates.filter(c =>
        c.article.clusters.some(cluster => currentArticle.clusters.includes(cluster))
    );

    // Take top 2 unique cluster matches
    clusterMatches.slice(0, 2).forEach(match => {
        suggestions.push({
            to_article_id: match.article.id,
            anchor: `See also: ${match.article.topic}`, // Placeholder anchor
            reason: 'cluster',
            score: match.score
        });
    });

    // 2. Next Step / Funnel Link (Goal: 1 link moving down the funnel)
    const nextStage = NEXT_STAGE_MAP[currentArticle.stage];
    if (nextStage && constraints.require_next_step) {
        const funnelMatch = scoredCandidates.find(c =>
            c.article.stage === nextStage &&
            !suggestions.find(s => s.to_article_id === c.article.id) // Avoid duplicates
        );

        if (funnelMatch) {
            suggestions.push({
                to_article_id: funnelMatch.article.id,
                anchor: `Next step: ${funnelMatch.article.topic}`,
                reason: 'next_step',
                score: funnelMatch.score
            });
        }
    }

    // 3. Quota Enforcement
    // Max links = (WordCount / 1000) * constraint
    const maxLinks = Math.ceil((wordCount / 1000) * constraints.max_links_per_1000w);

    // Truncate if we exceeded quota (prioritizing the ones already added)
    // In a real scenario, we might want to fill up the quota with "related" links if we have space,
    // but for V1 we stick to the core requirements first.
    const finalSuggestions = suggestions.slice(0, maxLinks);

    return {
        generated_at: new Date().toISOString(),
        ruleset_version: 'v1.0.0',
        out: finalSuggestions,
        constraints: constraints
    };
}
