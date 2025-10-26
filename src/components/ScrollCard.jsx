import React from 'react';
import classNames from 'classnames'; 

/**
 * Card component for scroller (.scroll-list__item)
 * @param {object} props - Component properties
 * @param {string} props.link - Card link
 * @param {string} props.alt - Image alt-text
 * @param {string} props.srcMobile - Source for mobile images
 * @param {string} props.srcDesktop - Source for desktop images
 * @param {string} [props.size] - Size modificator
 * @param {string} [props.position] - Relative position modificator
 * @param {string} [props.zIndex] - Z-index modificator
 * @param {string} [props.loading] - Loading strategy: 'eager' or 'lazy'. Default: undefined (browser default)
 */
function ScrollCard({ 
    link, 
    alt, 
    srcMobile, 
    srcDesktop, 
    size, 
    position, 
    zIndex,
    loading
}) {
    const classString = classNames(
        'scroll-list__item',
        {
            [`scroll-list__item--size-${size}`]: size,
            [`scroll-list__item--position-${position}`]: position,
            [`scroll-list__item--z-${zIndex}`]: zIndex,
        }
    );

    return (
        <a href={link} className={classString}>
            <picture>
                {/* 2. Adaptive image */}
                <source media="(min-width: 768px)" srcSet={srcDesktop} />
                <img src={srcMobile} alt={alt} {...(loading && { loading: loading })} />
            </picture>
        </a>
    );
}

export default React.memo(ScrollCard);