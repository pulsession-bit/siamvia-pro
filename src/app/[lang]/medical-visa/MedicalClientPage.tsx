'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Stethoscope } from 'lucide-react';

const MedicalClientPage: React.FC = () => {
    return (
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
    );
};

export default MedicalClientPage;
