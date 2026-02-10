'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Lightbulb } from 'lucide-react';

const SmartClientPage: React.FC = () => {
    return (
        <>
            <VisaPageTemplate
                pageKey="smart_visa_page"
                heroImage={IMAGES.OFFICE || "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=80"}
                heroIcon={<Lightbulb className="h-6 w-6" />}
                ctaComparePageKey="ltr"
                visaConfig={{
                    type: "Innovation / Tech",
                    duration: "4 Ans",
                    workAllowed: true
                }}
            />

            {/* AI Bot Summary — Semantic HTML for crawlers (visually hidden) */}
            <article className="sr-only" aria-label="Thailand SMART Visa Summary for Search Engines">
                <h2>Thailand SMART Visa 2026 — Key Facts</h2>
                <section>
                    <h3>Overview</h3>
                    <p>The SMART Visa is for highly skilled professionals, investors, executives, and startups in Thailand&apos;s 13 S-Curve targeted industries. Up to 4 years, work permit included, no 90-day reporting. Managed by BOI (Board of Investment). Categories: SMART T (Talent), SMART I (Investor), SMART E (Executive), SMART S (Startup).</p>
                </section>
                <section>
                    <h3>Key Specifications</h3>
                    <dl>
                        <dt>Validity</dt><dd>Up to 4 years (2 years for Startup)</dd>
                        <dt>Work permit</dt><dd>Included automatically</dd>
                        <dt>90-day reporting</dt><dd>Exempt</dd>
                        <dt>Income requirement</dt><dd>SMART T: $50K+/yr, SMART E: $100K+/yr</dd>
                        <dt>Investment requirement</dt><dd>SMART I: 20M+ THB in targeted industry</dd>
                        <dt>Application fee</dt><dd>Free (processed by BOI)</dd>
                        <dt>Dependents</dt><dd>SMART O visa for spouse and children</dd>
                    </dl>
                </section>
                <section>
                    <h3>SMART Visa vs Other Professional Visas (Comparison 2026)</h3>
                    <table>
                        <thead><tr><th>Visa</th><th>Duration</th><th>Work</th><th>Cost</th><th>Best For</th></tr></thead>
                        <tbody>
                            <tr><td>SMART</td><td>4 years</td><td>WP included</td><td>Free</td><td>Tech/science experts</td></tr>
                            <tr><td>LTR</td><td>10 years</td><td>Digital WP</td><td>~€1,300</td><td>High earners ($80K+)</td></tr>
                            <tr><td>Non-B + WP</td><td>1 year</td><td>Thai employer</td><td>~€100</td><td>Employees</td></tr>
                            <tr><td>DTV</td><td>5 years</td><td>Remote only</td><td>~€350</td><td>Remote workers</td></tr>
                        </tbody>
                    </table>
                </section>
                <footer>
                    <p>Last updated: <time dateTime="2026-02-10">February 10, 2026</time>. Information sourced from BOI Thailand and verified by SiamVisa Pro immigration consultants.</p>
                </footer>
            </article>
        </>
    );
};

export default SmartClientPage;
