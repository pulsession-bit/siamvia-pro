'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Landmark } from 'lucide-react';

const OfficialClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="official_visa_page"
            heroImage={IMAGES.BANGKOK_CITY || "https://images.unsplash.com/photo-1541872703-74c5e440d12e?auto=format&fit=crop&w=1920&q=80"}
            heroIcon={<Landmark className="h-6 w-6" />}
            ctaHelpLink="/contact"
            ctaCompareLink="/business-visa"
            visaConfig={{
                type: "Officiel / Diplomatique",
                duration: "Mission",
                workAllowed: true
            }}
        />
    );
};

export default OfficialClientPage;
