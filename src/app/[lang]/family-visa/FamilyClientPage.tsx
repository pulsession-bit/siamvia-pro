'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Heart } from 'lucide-react';

const FamilyClientPage: React.FC = () => {
    return (
        <>
            <VisaPageTemplate
                pageKey="family_visa_page"
                heroImage={IMAGES.BEACH || "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1920&q=80"}
                heroIcon={<Heart className="h-6 w-6" />}
                ctaComparePageKey="retirement-visa"
                visaConfig={{
                    type: "Famille / Mariage",
                    duration: "1 An (Renouvelable)",
                    workAllowed: true
                }}
            />

            {/* AI Bot Summary — Semantic HTML for crawlers (visually hidden) */}
            <article className="sr-only" aria-label="Thailand Family Visa Summary for Search Engines">
                <h2>Thailand Family Visa (Non-O Marriage / Guardian) 2026 — Key Facts</h2>
                <section>
                    <h3>Overview</h3>
                    <p>The Thailand Family Visa (Non-O) is for foreigners married to a Thai national or parents of Thai children. 1-year renewable stay, allows work permit application. Financial requirement: 400,000 THB in Thai bank or 40,000 THB monthly income. Half the financial requirement of the Retirement Visa.</p>
                </section>
                <section>
                    <h3>Key Specifications</h3>
                    <dl>
                        <dt>Validity</dt><dd>1 year (renewable)</dd>
                        <dt>Financial requirement</dt><dd>400,000 THB deposit OR 40,000 THB/month income</dd>
                        <dt>Work allowed</dt><dd>Work permit application possible</dd>
                        <dt>Extension fee</dt><dd>1,900 THB (~€50/year)</dd>
                        <dt>Marriage registration</dt><dd>Required at local Amphoe (district office)</dd>
                        <dt>Guardian visa</dt><dd>Available for parents of Thai children under 20</dd>
                    </dl>
                </section>
                <section>
                    <h3>Family Visa vs Other Options (Comparison 2026)</h3>
                    <table>
                        <thead><tr><th>Visa</th><th>Duration</th><th>Work</th><th>Cost</th><th>Best For</th></tr></thead>
                        <tbody>
                            <tr><td>Family (Non-O)</td><td>1 year</td><td>WP possible</td><td>~€50/year</td><td>Married to Thai national</td></tr>
                            <tr><td>Retirement</td><td>1 year</td><td>No</td><td>~€50/year</td><td>Retirees 50+</td></tr>
                            <tr><td>DTV</td><td>5 years</td><td>Remote OK</td><td>~€350</td><td>Families, dependents</td></tr>
                            <tr><td>Elite</td><td>5-20 years</td><td>No</td><td>€15,000+</td><td>Family packages</td></tr>
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

export default FamilyClientPage;
