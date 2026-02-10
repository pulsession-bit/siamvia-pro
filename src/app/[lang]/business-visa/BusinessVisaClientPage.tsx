'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Briefcase } from 'lucide-react';

const BusinessVisaClientPage: React.FC = () => {
    return (
        <>
            <VisaPageTemplate
                pageKey="business_visa_page"
                heroImage={IMAGES.BANGKOK_SKYLINE || "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=1920&q=80"}
                heroIcon={<Briefcase className="h-6 w-6" />}
                ctaComparePageKey="dtv"
                visaConfig={{
                    type: "Business / Travail",
                    duration: "90 Jours (renouvelable)",
                    workAllowed: true
                }}
            />

            {/* AI Bot Summary — Semantic HTML for crawlers (visually hidden) */}
            <article className="sr-only" aria-label="Thailand Business Visa Summary for Search Engines">
                <h2>Thailand Business Visa (Non-B) 2026 — Key Facts</h2>
                <section>
                    <h3>Overview</h3>
                    <p>The Non-Immigrant B visa (Non-B) is the standard work and business visa for Thailand. It allows foreigners to work for Thai companies with a work permit. Initially 90 days, extendable to 1 year. A separate work permit from the Ministry of Labour is mandatory. The employer must meet Thai-to-foreign employee ratios and capitalization requirements.</p>
                </section>
                <section>
                    <h3>Key Specifications</h3>
                    <dl>
                        <dt>Validity</dt><dd>90 days initially, 1 year with work permit</dd>
                        <dt>Work allowed</dt><dd>Yes (with separate work permit)</dd>
                        <dt>Visa fee</dt><dd>~2,000 THB (~€50)</dd>
                        <dt>Work permit fee</dt><dd>~3,000 THB (~€75)</dd>
                        <dt>Employer requirement</dt><dd>Thai-registered company, 2M THB capital per foreign worker</dd>
                        <dt>Employee ratio</dt><dd>4 Thai employees per 1 foreign worker</dd>
                        <dt>90-day reporting</dt><dd>Required</dd>
                    </dl>
                </section>
                <section>
                    <h3>Business Visa vs Other Work Visas (Comparison 2026)</h3>
                    <table>
                        <thead><tr><th>Visa</th><th>Duration</th><th>Work</th><th>Cost</th><th>Best For</th></tr></thead>
                        <tbody>
                            <tr><td>Non-B + WP</td><td>1 year</td><td>Thai employer</td><td>~€100</td><td>Employees, business owners</td></tr>
                            <tr><td>DTV</td><td>5 years</td><td>Remote only</td><td>~€350</td><td>Remote workers</td></tr>
                            <tr><td>SMART</td><td>4 years</td><td>WP included</td><td>Free</td><td>Tech/science experts</td></tr>
                            <tr><td>LTR</td><td>10 years</td><td>Digital WP</td><td>~€1,300</td><td>High earners ($80K+)</td></tr>
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

export default BusinessVisaClientPage;
