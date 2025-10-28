import React from 'react';
import classNames from 'classnames';

/**
 * Card component for slider (.slider-list__item)
 * @param {object} props - Component properties
 * @param {string} props.link - Card link
 * @param {string} props.alt - Image alt-text
 * @param {string} props.srcMobile - Source for mobile PNG
 * @param {string} props.srcDesktop - Source for desktop PNG
 * @param {string} props.srcMobileWebp - Source for mobile WebP
 * @param {string} props.srcMobileAvif - Source for mobile AVIF
 * @param {string} props.srcDesktopWebp - Source for desktop WebP
 * @param {string} props.srcDesktopAvif - Source for desktop AVIF
 * @param {string} [props.sizeSlider] - Size modificator
 * @param {string} [props.positionSlider] - Relative position modificator
 * @param {string} [props.zIndex] - Z-index modificator
 * @param {string} [props.tabIndexNumber] - Tab key focus index, -1 - excluding from focus for hidden slides
 * @param {string} [props.loading] - Loading strategy: 'eager' or 'lazy'
 */

function SliderCard({ cardData, loading }) { 
    const { 
        link, 
        alt, 
        srcMobile, 
        srcDesktop,
        srcMobileWebp, 
        srcMobileAvif, 
        srcDesktopWebp, 
        srcDesktopAvif, 
        sizeSlider, 
        positionSlider, 
        zIndex,
        tabIndexNumber,
    } = cardData;

    const classString = classNames(
        'slider__item',
        {
            [`slider__item--size-${sizeSlider}`]: sizeSlider, 
            [`slider__item--position-${positionSlider}`]: positionSlider, 
            [`slider__item--z-${zIndex}`]: zIndex, 
        }
    );

    return (
        <a 
            href={link} 
            className={classString} 
            tabIndex={tabIndexNumber} 
            draggable="false"
        >
            <picture>
                {srcDesktopAvif && (
                    <source type="image/avif" media="(min-width: 768px)" srcSet={srcDesktopAvif} />
                )}
                
                {srcDesktopWebp && (
                    <source type="image/webp" media="(min-width: 768px)" srcSet={srcDesktopWebp} />
                )}
                
                <source media="(min-width: 768px)" srcSet={srcDesktop} />
                
                {srcMobileAvif && (
                    <source type="image/avif" srcSet={srcMobileAvif} />
                )}
                
                {srcMobileWebp && (
                    <source type="image/webp" srcSet={srcMobileWebp} />
                )}

                <img src={srcMobile} alt={alt} loading={loading ?? "lazy"} />
            </picture>
        </a>
    );
}

export default React.memo(SliderCard);