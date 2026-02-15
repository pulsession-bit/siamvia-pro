'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Lightbulb } from 'lucide-react';

const SmartClientPage: React.FC = () => {
    return (
        <>
            <VisaPageTemplate
                pageKey="smart_visa_page"
                heroImage={IMAGES.OFFICE || "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=80"}
                heroIcon={<Lightbulb className="h-6 w-6" />}
                ctaComparePageKey="ltr"
                visaConfig={{
                    type: "Innovation / Tech",
                    duration: "4 Ans",
                    workAllowed: true
                }}
            />
        </>
    );
};

export default SmartClientPage;
