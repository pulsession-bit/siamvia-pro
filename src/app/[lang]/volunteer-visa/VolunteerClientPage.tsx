'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { Heart } from 'lucide-react';

const VolunteerClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="volunteer_visa_page"
            heroImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            heroIcon={<Heart className="h-6 w-6" />}
            
            ctaComparePageKey="tourist-visa"
            visaConfig={{
                type: "Bénévolat / ONG",
                duration: "90 Jours (+)",
                workAllowed: false
            }}
        />
    );
};

export default VolunteerClientPage;
