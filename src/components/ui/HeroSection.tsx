import Image from 'next/image';

interface HeroSectionProps {
    backgroundImage: string;
    imageAlt?: string;
    badge?: string;
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
    icon?: React.ReactNode;
    overlayOpacity?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    backgroundImage,
    imageAlt = 'Thailand visa services - SiamVisa Pro',
    badge,
    title,
    subtitle,
    icon,
    overlayOpacity = 0.5,
}) => {
    return (
        <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
            <div className={`absolute inset-0 opacity-${Math.round(overlayOpacity * 100)}`}>
                <Image
                    src={backgroundImage}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/50"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                {icon && <div className="mb-6">{icon}</div>}
                {badge && (
                    <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-600 text-amber-400 text-xs font-bold tracking-wider mb-8 shadow-lg backdrop-blur-sm">
                        {badge}
                    </span>
                )}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto">{subtitle}</p>
            </div>
        </div>
    );
};
