'use client';

import React from 'react';
import { VisaPageTemplate } from '@/components/templates/VisaPageTemplate';
import { IMAGES } from '@/constants';
import { GraduationCap } from 'lucide-react';

const StudentClientPage: React.FC = () => {
    return (
        <VisaPageTemplate
            pageKey="student_visa_page"
            heroImage={IMAGES.OFFICE || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"}
            heroIcon={<GraduationCap className="h-6 w-6" />}
            
            ctaComparePageKey="dtv"
            visaConfig={{
                type: "Éducation",
                duration: "1 An (max)",
                workAllowed: false
            }}
        />
    );
};

export default StudentClientPage;
