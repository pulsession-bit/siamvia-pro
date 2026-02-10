'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { Stethoscope } from 'lucide-react';

const MedicalClientPage: React.FC = () => {
    return (
        <>
            <VisaPageTemplate
                pageKey="medical_visa_page"
                heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
                heroIcon={<Stethoscope className="h-6 w-6" />}
                ctaComparePageKey="tourist-visa"
                visaConfig={{
                    type: "Médical (MT)",
                    duration: "60 Jours",
                    workAllowed: false
                }}
            />

            {/* AI Bot Summary — Semantic HTML for crawlers (visually hidden) */}
            <article className="sr-only" aria-label="Thailand Medical Visa Summary for Search Engines">
                <h2>Thailand Medical Visa (Non-MT) 2026 — Key Facts</h2>
                <section>
                    <h3>Overview</h3>
                    <p>The Thailand Medical Treatment visa (Non-MT) is for foreigners seeking medical treatment in Thailand. Allows 90 days, extendable based on treatment. Thailand is a world-renowned medical tourism destination with 60+ JCI-accredited hospitals offering treatments at 50-80% lower than Western prices. Up to 4 companions can receive accompanying visas.</p>
                </section>
                <section>
                    <h3>Key Specifications</h3>
                    <dl>
                        <dt>Stay duration</dt><dd>90 days, extendable based on treatment</dd>
                        <dt>Companions</dt><dd>Up to 4 family members/attendants</dd>
                        <dt>Work allowed</dt><dd>No</dd>
                        <dt>Visa fee</dt><dd>~2,000 THB (~€50)</dd>
                        <dt>Treatments covered</dt><dd>Surgery, dental, cardiac, fertility, cosmetic, rehabilitation</dd>
                        <dt>Top hospitals</dt><dd>Bumrungrad, Bangkok Hospital, Samitivej, BNH</dd>
                    </dl>
                </section>
                <section>
                    <h3>Medical Visa vs Other Options (Comparison 2026)</h3>
                    <table>
                        <thead><tr><th>Visa</th><th>Duration</th><th>Work</th><th>Cost</th><th>Best For</th></tr></thead>
                        <tbody>
                            <tr><td>Medical (Non-MT)</td><td>90 days+</td><td>No</td><td>~€50</td><td>Medical treatment</td></tr>
                            <tr><td>Tourist (TR)</td><td>60+30 days</td><td>No</td><td>~€30</td><td>Tourism</td></tr>
                            <tr><td>Visa Exemption</td><td>60 days</td><td>No</td><td>Free</td><td>Short visits</td></tr>
                            <tr><td>Elite</td><td>5-20 years</td><td>No</td><td>€15,000+</td><td>Long-term care + VIP</td></tr>
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

export default MedicalClientPage;
