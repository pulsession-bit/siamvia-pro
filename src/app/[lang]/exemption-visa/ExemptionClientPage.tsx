'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';

const ExemptionClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="exemption_visa_page"
            heroImage={IMAGES.BEACH || "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1920&q=80"}
            
            ctaComparePageKey="tourist-visa"
            visaConfig={{
                type: "Tourisme Court",
                duration: "60 Jours",
                workAllowed: false
            }}
        />
    );
};

export default ExemptionClientPage;
