'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Briefcase } from 'lucide-react';

const BusinessVisaClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="business_visa_page"
            heroImage={IMAGES.BANGKOK_SKYLINE || "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=1920&q=80"}
            heroIcon={<Briefcase className="h-6 w-6" />}
            
            ctaComparePageKey="dtv"
            visaConfig={{
                type: "Business / Travail",
                duration: "90 Jours (renouvelable)",
                workAllowed: true
            }}
        />
    );
};

export default BusinessVisaClientPage;
