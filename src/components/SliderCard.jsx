import React from 'react';
import classNames from 'classnames';

/**
 * Card component for slider (.slider-list__item)
 * @param {object} props - Component properties
 * @param {string} props.link - Card link
 * @param {string} props.alt - Image alt-text
 * @param {string} props.srcMobile - Source for mobile images
 * @param {string} props.srcDesktop - Source for desktop images
 * @param {string} [props.sizeSlider] - Size modificator
 * @param {string} [props.positionSlider] - Relative position modificator
 * @param {string} [props.zIndex] - Z-index modificator
 * @param {string} [props.tabIndexNumber] - Tab key focus index, -1 - excluding from focus for hidden slides
 */
function SliderCard({ 
    link, 
    alt, 
    srcMobile, 
    srcDesktop, 
    sizeSlider, 
    positionSlider, 
    zIndex,
    tabIndexNumber
}) {
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
                {/* 2. Adaptive image */}
                <source media="(min-width: 768px)" srcSet={srcDesktop} />
                <img src={srcMobile} alt={alt} loading="lazy" />
            </picture>
        </a>
    );
}

export default React.memo(SliderCard);