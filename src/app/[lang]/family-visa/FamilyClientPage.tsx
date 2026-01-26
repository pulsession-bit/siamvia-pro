'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Heart } from 'lucide-react';

const FamilyClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="family_visa_page"
            heroImage={IMAGES.BEACH || "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1920&q=80"}
            heroIcon={<Heart className="h-6 w-6" />}
            ctaHelpLink="/contact"
            ctaCompareLink="/retirement-visa"
            visaConfig={{
                type: "Famille / Mariage",
                duration: "1 An (Renouvelable)",
                workAllowed: true
            }}
        />
    );
};

export default FamilyClientPage;
