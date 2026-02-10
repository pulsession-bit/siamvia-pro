'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Sun } from 'lucide-react';

const ReligiousClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="religious_visa_page"
            heroImage="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4"
            heroIcon={<Sun className="h-6 w-6" />}
            
            ctaComparePageKey="retirement-visa"
            visaConfig={{
                type: "Religieux / Missionnaire",
                duration: "1 An (Renouv.)",
                workAllowed: false
            }}
        />
    );
};

export default ReligiousClientPage;
