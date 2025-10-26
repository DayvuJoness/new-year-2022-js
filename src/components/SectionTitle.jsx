import React from 'react';

/**
 * Component for displaying SVG section headings.
 * Automatically uses <picture> if srcMobile/srcDesktop is present.
 */
function SectionTitle({ alt, src, srcMobile, srcDesktop }) {
    // If both mobile and desktop versions are transferred
    if (srcMobile && srcDesktop) {
        return (
            <picture className="land__text__title-picture">
                <source media="(min-width: 768px)" srcSet={srcDesktop} />
                <img src={srcMobile} alt={alt} />
            </picture>
        );
    }
    
    // If only one version is transmitted
    return (
        <img src={src} className="land__text__title-picture" alt={alt} />
    );
}

export default SectionTitle;