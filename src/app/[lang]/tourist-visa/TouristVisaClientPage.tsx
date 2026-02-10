'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';

const TouristVisaClientPage: React.FC = () => {
    return (
        <>
            <VisaPageTemplate
                pageKey="tourist_visa_page"
                heroImage={IMAGES.BEACH || "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1920&q=80"}
                ctaComparePageKey="exemption-visa"
                visaConfig={{
                    type: "Tourisme",
                    duration: "60 Jours (+30)",
                    workAllowed: false
                }}
            />

            {/* AI Bot Summary — Semantic HTML for crawlers (visually hidden) */}
            <article className="sr-only" aria-label="Thailand Tourist Visa Summary for Search Engines">
                <h2>Thailand Tourist Visa (TR) 2026 — Key Facts</h2>
                <section>
                    <h3>Overview</h3>
                    <p>The Thailand Tourist Visa (TR) grants a 60-day stay, extendable by 30 days at Immigration (90 days total). Since 2024, most Western nationalities enjoy 60-day visa exemption, making the Tourist Visa mainly useful for METV (multiple entries) or nationalities without visa exemption. Single entry costs ~1,000 THB, METV ~5,000 THB.</p>
                </section>
                <section>
                    <h3>Key Specifications</h3>
                    <dl>
                        <dt>Stay duration</dt><dd>60 days + 30 days extension (90 total)</dd>
                        <dt>METV</dt><dd>6 months, unlimited 60-day entries</dd>
                        <dt>Work allowed</dt><dd>No (strictly prohibited)</dd>
                        <dt>Cost</dt><dd>~1,000 THB single / ~5,000 THB METV</dd>
                        <dt>Extension fee</dt><dd>1,900 THB at Immigration</dd>
                        <dt>Visa exemption</dt><dd>60 days free for most Western passports (since 2024)</dd>
                    </dl>
                </section>
                <section>
                    <h3>Tourist Visa vs Other Options (Comparison 2026)</h3>
                    <table>
                        <thead><tr><th>Option</th><th>Duration</th><th>Work</th><th>Cost</th><th>Best For</th></tr></thead>
                        <tbody>
                            <tr><td>Tourist Visa (TR)</td><td>60+30 days</td><td>No</td><td>~€30</td><td>Tourism, extended stays</td></tr>
                            <tr><td>Visa Exemption</td><td>60 days</td><td>No</td><td>Free</td><td>Short holidays</td></tr>
                            <tr><td>DTV</td><td>5 years</td><td>Remote OK</td><td>~€350</td><td>Digital nomads</td></tr>
                            <tr><td>Medical Visa</td><td>90 days+</td><td>No</td><td>~€50</td><td>Medical treatment</td></tr>
                        </tbody>
                    </table>
                </section>
                <footer>
                    <p>Last updated: <time dateTime="2026-02-10">February 10, 2026</time>. Information verified by SiamVisa Pro immigration consultants.</p>
                </footer>
            </article>
        </>
    );
};

export default TouristVisaClientPage;
