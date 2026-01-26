'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';

const TouristVisaClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="tourist_visa_page"
            heroImage={IMAGES.BEACH || "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1920&q=80"}
            ctaHelpLink="/contact"
            ctaCompareLink="/exemption-visa"
            visaConfig={{
                type: "Tourisme",
                duration: "60 Jours (+30)",
                workAllowed: false
            }}
        />
    );
};

export default TouristVisaClientPage;
