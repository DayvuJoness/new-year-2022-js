// src/components/SectionTitle.jsx

import React from 'react';

/**
 * Компонент для отображения SVG-заголовков секций.
 * Автоматически использует <picture>, если есть srcMobile/srcDesktop.
 */
function SectionTitle({ alt, src, srcMobile, srcDesktop }) {
    // Если переданы мобильная и десктопная версия (например, для Mood и Suits)
    if (srcMobile && srcDesktop) {
        return (
            <picture className="land__text__title-picture">
                {/* В вашем HTML для десктопа использовался srcSet, а для моб. - src, 
                    но для SVG часто удобнее: <source media="desktop"/> <img src="mobile"/> */}
                <source media="(min-width: 768px)" srcSet={srcDesktop} />
                <img src={srcMobile} alt={alt} />
            </picture>
        );
    }
    
    // Если передана только одна версия (например, для Food и Gifts)
    return (
        <img src={src} className="land__text__title-picture" alt={alt} />
    );
}

export default SectionTitle;