'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface LiteYoutubeProps {
    videoId: string;
    title: string;
    className?: string;
}

/**
 * LiteYoutube — Composant haute performance pour les vidéos YouTube.
 *
 * Au lieu de charger l'iframe YouTube au démarrage (~500KB de JS),
 * on affiche une miniature statique. L'iframe ne se charge QU'AU CLIC.
 *
 * Gain PageSpeed : jusqu'à +15-20 points sur les pages avec des vidéos.
 */
export const LiteYoutube: React.FC<LiteYoutubeProps> = ({ videoId, title, className = '' }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    if (isPlaying) {
        return (
            <div className={`relative w-full aspect-video ${className}`}>
                <iframe
                    src={embedUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        );
    }

    return (
        <button
            onClick={() => setIsPlaying(true)}
            aria-label={`Lire la vidéo : ${title}`}
            className={`relative w-full aspect-video group cursor-pointer overflow-hidden bg-black ${className}`}
            style={{ display: 'block' }}
        >
            {/* Miniature YouTube */}
            <Image
                src={thumbnailUrl}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                loading="lazy"
            />

            {/* Overlay sombre au hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

            {/* Bouton Play YouTube */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl">
                    {/* Triangle play */}
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-8 md:h-8 ml-1">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>

            {/* Titre de la vidéo (optionnel, en bas) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium text-left line-clamp-1 opacity-90">
                    {title}
                </p>
            </div>
        </button>
    );
};
