import React from 'react';
import useSliderLogic from '../utils/useSliderLogic';
import SliderCard from './SliderCard';

function Slider({ listType, data, loading }) {
    // === Use a custom hook for all logic ===
    const {
        sliderRef,
        extendedSlides,
        groupedSlides,
        totalSlides,
        activeIndex,
        prevIndex,
        isLocked,
        dragOffset,
        displayIndex,
        isDragging,
        goToNext,
        goToPrev,
        goToSlide,
    } = useSliderLogic(data);

    // If there are less than or equal to 1 slide, the hook will return totalSlides: 0
    if (totalSlides <= 1) return null;

    // Slide List Styles
    const listStyle = {
        display: 'flex',
        '--active-index': activeIndex,
        '--drag-offset': `${dragOffset}px`,
        transition: isLocked
            ? 'transform 0.8s cubic-bezier(.77,0,.175,1)'
            : 'none',
        cursor: isLocked ? 'default' : isDragging ? 'grabbing' : 'grab',
    };

    return (
        <div className={`slider slider--${listType}`}>
            <div className="slider__container">

                {/* Nav buttons */}
                <button
                    className={`slider__nav-btn slider__nav-btn--left ${isLocked ? 'disabled' : ''}`}
                    onClick={goToPrev}
                    aria-label="Previous slide"
                    disabled={isLocked}
                />

                <button
                    className={`slider__nav-btn slider__nav-btn--right ${isLocked ? 'disabled' : ''}`}
                    onClick={goToNext}
                    aria-label="Next slide"
                    disabled={isLocked}
                />

                {/* The main viewing area of ​​the slider */}
                <div className="slider__viewport-wrapper">
                    <div className="slider__viewport">
                        <div
                            className="slider__list"
                            ref={sliderRef}
                            style={listStyle}
                        >
                            {/* Render all advanced slides */}
                            {extendedSlides.map((slideItems, index) => {
                                const isActive = index === activeIndex;
                                const isPrev = index === prevIndex;

                                const tabIndexValue = isActive ? 0 : -1;

                                // Visibility logic for cloned slides when looping
                                const isJumpCloneToOriginal =
                                    (activeIndex === 1 && prevIndex === extendedSlides.length - 1) ||
                                    (activeIndex === totalSlides && prevIndex === 0);

                                const shouldBeVisible =
                                    isActive ||
                                    (isJumpCloneToOriginal && (index === 1 || index === totalSlides));

                                const slideStyle = {
                                    opacity: shouldBeVisible ? 1 : 0,
                                    transition: isLocked
                                        ? 'opacity 0.8s ease-in-out, transform 0.8s cubic-bezier(.77,0,.175,1)'
                                        : 'none',
                                };

                                const classes = [
                                    'slider__slide',
                                    isActive && 'slider__slide--active',
                                    isPrev && 'slider__slide--fading',
                                ]
                                    .filter(Boolean)
                                    .join(' ');

                                return (
                                    <div key={index} className={classes} style={slideStyle}>
                                        {/* Rendering each card within a slide */}
                                        {slideItems.map(card => (
                                            <SliderCard 
                                                key={card.id} 
                                                cardData={card}
                                                tabIndexNumber={tabIndexValue} 
                                                loading={loading} 
                                            />
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Nav points (Dots) */}
                <div className="slider__dots">
                    {groupedSlides.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`slider__dot ${i + 1 === displayIndex ? 'slider__dot--active' : ''}`}
                            aria-current={i + 1 === displayIndex ? 'true' : undefined}
                            // Pass the index of the original slide (i + 1)
                            onClick={() => goToSlide(i + 1)}
                            disabled={isLocked}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default React.memo(Slider);