import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import SliderCard from './SliderCard';

function Slider({ listType, data }) {
    const groupedSlides = useMemo(() => {
        const map = new Map();
        data.forEach(item => {
            const num = item.slideNumber;
            if (typeof num !== 'number' || num < 1) return;
            if (!map.has(num)) map.set(num, []);
            map.get(num).push(item);
        });
        return Array.from(map.keys())
            .sort((a, b) => a - b)
            .map(key => map.get(key));
    }, [data]);

    const totalSlides = groupedSlides.length;
    if (totalSlides <= 1) return null;

    // Расширяем массив для бесконечной прокрутки
    const extendedSlides = [
        groupedSlides[totalSlides - 1],
        ...groupedSlides,
        groupedSlides[0],
    ];

    const [activeIndex, setActiveIndex] = useState(1);
    const [prevIndex, setPrevIndex] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const sliderRef = useRef(null);

    const displayIndex = activeIndex === 0
        ? totalSlides
        : activeIndex === totalSlides + 1
        ? 1
        : activeIndex;

    const handleTransitionEnd = useCallback(() => {
        setIsLocked(false);

        // Если достигли "клонированного" слайда, быстро возвращаемся на оригинал
        if (activeIndex === extendedSlides.length - 1) {
            requestAnimationFrame(() => setActiveIndex(1));
        } else if (activeIndex === 0) {
            requestAnimationFrame(() => setActiveIndex(totalSlides));
        }
    }, [activeIndex, extendedSlides.length, totalSlides]);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const onTransitionEnd = e => {
            // фильтруем события от дочерних элементов
            if (e.target === slider) handleTransitionEnd();
        };

        slider.addEventListener('transitionend', onTransitionEnd);
        return () => slider.removeEventListener('transitionend', onTransitionEnd);
    }, [handleTransitionEnd]);

    const goToNext = useCallback(() => {
        if (isLocked) return;
        setPrevIndex(activeIndex);
        setActiveIndex(prev => prev + 1);
        setIsLocked(true);
    }, [isLocked, activeIndex]);

    const goToPrev = useCallback(() => {
        if (isLocked) return;
        setPrevIndex(activeIndex);
        setActiveIndex(prev => prev - 1);
        setIsLocked(true);
    }, [isLocked, activeIndex]);

    const goToSlide = useCallback(
        index => {
            if (isLocked || index === activeIndex) return;
            setPrevIndex(activeIndex);
            setActiveIndex(index);
            setIsLocked(true);
        },
        [isLocked, activeIndex]
    );

    return (
        <div className={`slider slider--${listType}`}>
            <div className="slider__container">

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

                <div className="slider__viewport-wrapper">
                    <div className="slider__viewport">
                        <div
                            className="slider__list"
                            ref={sliderRef}
                            style={{
                                display: 'flex',
                                transform: `translateX(-${activeIndex * 55}%)`,
                                transition: isLocked
                                    ? 'transform 0.8s cubic-bezier(.77,0,.175,1)'
                                    : 'none',
                            }}
                        >
                            {extendedSlides.map((slideItems, index) => {
                                const isActive = index === activeIndex;
                                const isPrev = index === prevIndex;

                                // Флаг — мы сейчас "в моменте перескока" с клона на оригинал
                                const isJumpCloneToOriginal =
                                    (activeIndex === 1 && prevIndex === extendedSlides.length - 1) ||
                                    (activeIndex === totalSlides && prevIndex === 0);

                                // === Основная логика прозрачности ===
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
                                        {slideItems.map(card => (
                                            <SliderCard key={card.id} {...card} />
                                        ))}
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>

                <div className="slider__dots">
                    {groupedSlides.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`slider__dot ${i + 1 === displayIndex ? 'slider__dot--active' : ''}`}
                            aria-current={i + 1 === displayIndex ? 'true' : undefined}
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
