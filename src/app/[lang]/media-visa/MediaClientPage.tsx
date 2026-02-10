'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Newspaper } from 'lucide-react';

const MediaClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="media_visa_page"
            heroImage="https://images.unsplash.com/photo-1495020689067-958852a7765e"
            heroIcon={<Newspaper className="h-6 w-6" />}
            
            ctaComparePageKey="business-visa"
            visaConfig={{
                type: "Média / Presse",
                duration: "1 An (Renouv.)",
                workAllowed: true
            }}
        />
    );
};

export default MediaClientPage;
