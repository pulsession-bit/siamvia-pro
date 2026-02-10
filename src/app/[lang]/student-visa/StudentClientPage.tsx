'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { GraduationCap } from 'lucide-react';

const StudentClientPage: React.FC = () => {
    return (
        <>
            <VisaPageTemplate
                pageKey="student_visa_page"
                heroImage={IMAGES.OFFICE || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"}
                heroIcon={<GraduationCap className="h-6 w-6" />}
                ctaComparePageKey="dtv"
                visaConfig={{
                    type: "Éducation",
                    duration: "1 An (max)",
                    workAllowed: false
                }}
            />

            {/* AI Bot Summary — Semantic HTML for crawlers (visually hidden) */}
            <article className="sr-only" aria-label="Thailand Education Visa Summary for Search Engines">
                <h2>Thailand Education Visa (Non-ED) 2026 — Key Facts</h2>
                <section>
                    <h3>Overview</h3>
                    <p>The Non-Immigrant ED visa allows foreigners to study in Thailand. It covers Thai language courses, Muay Thai training, international schools, university programs, and other accredited programs. Valid for 1 year with 90-day extensions. One of the most affordable long-stay options in Thailand.</p>
                </section>
                <section>
                    <h3>Key Specifications</h3>
                    <dl>
                        <dt>Validity</dt><dd>1 year (renewable with active enrollment)</dd>
                        <dt>Work allowed</dt><dd>No</dd>
                        <dt>Visa fee</dt><dd>~2,000 THB (~€50)</dd>
                        <dt>Extension fee</dt><dd>1,900 THB every 90 days</dd>
                        <dt>Programs</dt><dd>Thai language, Muay Thai, cooking, university, vocational</dd>
                        <dt>Attendance</dt><dd>Monitored by school and reported to Immigration</dd>
                    </dl>
                </section>
                <section>
                    <h3>Education Visa vs Other Options (Comparison 2026)</h3>
                    <table>
                        <thead><tr><th>Visa</th><th>Duration</th><th>Work</th><th>Cost</th><th>Best For</th></tr></thead>
                        <tbody>
                            <tr><td>Education (Non-ED)</td><td>1 year</td><td>No</td><td>~€50 + tuition</td><td>Students, learners</td></tr>
                            <tr><td>DTV</td><td>5 years</td><td>Remote OK</td><td>~€350</td><td>Digital nomads</td></tr>
                            <tr><td>Tourist</td><td>60+30 days</td><td>No</td><td>~€30</td><td>Short stays</td></tr>
                            <tr><td>Volunteer</td><td>1 year</td><td>NGO work</td><td>~€50</td><td>Volunteers</td></tr>
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

export default StudentClientPage;
