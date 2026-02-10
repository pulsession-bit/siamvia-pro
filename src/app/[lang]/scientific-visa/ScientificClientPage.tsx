'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Microscope } from 'lucide-react';

const ScientificClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="scientific_visa_page"
            heroImage="https://images.unsplash.com/photo-1576086213369-97a306d36557"
            heroIcon={<Microscope className="h-6 w-6" />}
            
            ctaComparePageKey="smart-visa"
            visaConfig={{
                type: "Scientifique / Recherche",
                duration: "1 An (Renouv.)",
                workAllowed: true
            }}
        />
    );
};

export default ScientificClientPage;
