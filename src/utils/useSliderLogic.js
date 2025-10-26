import { useState, useMemo, useRef, useEffect, useCallback } from 'react';

/**
 * A custom hook for managing infinite slider logic.
 * @param {Array<Object>} data - Source data for slides.
 * @returns {Object} An object with states, links, and functions for the Slider component.
 */
function useSliderLogic(data) {
    // === 1. Grouping and expanding data ===
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
    // Return empty data if the slider is not needed.
    if (totalSlides <= 1) {
        return { totalSlides: 0 };
    }

    // Expanding slides for infinite loop (cloning first and last)
    const extendedSlides = useMemo(() => [
        groupedSlides[totalSlides - 1],
        ...groupedSlides,
        groupedSlides[0],
    ], [groupedSlides, totalSlides]);


    // === 2. States and links ===
    const [activeIndex, setActiveIndex] = useState(1); // Active slide index (including clones)
    const [prevIndex, setPrevIndex] = useState(0);     // Previous slide index for animation
    const [isLocked, setIsLocked] = useState(false);   // Blocking transitions during animation
    const [dragOffset, setDragOffset] = useState(0);   // Drag Offset
    const startX = useRef(null);                       // Initial X coordinate for dragging
    const isDragging = useRef(false);                  // Drag flag
    const sliderRef = useRef(null);                    // Reference to the slide list DOM element

    // Index for navigation points (Dots)
    const displayIndex = activeIndex === 0
        ? totalSlides
        : activeIndex === totalSlides + 1
        ? 1
        : activeIndex;

    // === 3. Transition and event handlers ===

    // Handling the end of a transition animation
    const handleTransitionEnd = useCallback(() => {
        setIsLocked(false);
        setDragOffset(0);

        // Transition from clone to original slide for infinite loop
        if (activeIndex === extendedSlides.length - 1) {
            // Use requestAnimationFrame to avoid flickering,
            // since a direct state change can trigger a re-render
            // before the browser has fully completed the transition.
            requestAnimationFrame(() => setActiveIndex(1));
        } else if (activeIndex === 0) {
            requestAnimationFrame(() => setActiveIndex(totalSlides));
        }
    }, [activeIndex, extendedSlides.length, totalSlides]);

    // Move to the next slide
    const goToNext = useCallback(() => {
        if (isLocked) return;
        setPrevIndex(activeIndex);
        setActiveIndex(prev => prev + 1);
        setIsLocked(true);
    }, [isLocked, activeIndex]);

    // Move to the previous slide
    const goToPrev = useCallback(() => {
        if (isLocked) return;
        setPrevIndex(activeIndex);
        setActiveIndex(prev => prev - 1);
        setIsLocked(true);
    }, [isLocked, activeIndex]);

    // Jump to a specific slide (via navigation dots)
    const goToSlide = useCallback(
        index => {
            // The navigation index (1..totalSlides) corresponds to the index (1..totalSlides) in extendedSlides
            if (isLocked || index === activeIndex) return;
            setPrevIndex(activeIndex);
            setActiveIndex(index);
            setIsLocked(true);
        },
        [isLocked, activeIndex]
    );

    // === Processors DRAG / SWIPE ===

    const handleStart = useCallback(e => {
        if (isLocked) return;
        isDragging.current = true;
        startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    }, [isLocked]);

    const handleMove = useCallback(e => {
        if (!isDragging.current || isLocked) return;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        const diff = currentX - startX.current;
        // Limit the displacement for a smooth effect
        setDragOffset(Math.max(Math.min(diff / 10, 20), -20));
    }, [isLocked]);

    const handleEnd = useCallback(e => {
        if (!isDragging.current || isLocked) return;
        isDragging.current = false;

        const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const diff = endX - startX.current;
        setDragOffset(0);

        // Change slide if swipe distance is large enough
        if (Math.abs(diff) > 50) {
            if (diff < 0) goToNext();
            else goToPrev();
        }
    }, [isLocked, goToNext, goToPrev]);

    // === 4. Effects (Listeners) ===

    // An effect to listen for the transitionend event
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        // Wrap handleTransitionEnd to check the event target
        const onTransitionEnd = e => {
            if (e.target === slider) handleTransitionEnd();
        };
        slider.addEventListener('transitionend', onTransitionEnd);
        return () => slider.removeEventListener('transitionend', onTransitionEnd);
    }, [handleTransitionEnd]);

    // Effect for listening to mouse and touch events (drag/swipe)
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Mouse drag events
        slider.addEventListener('mousedown', handleStart);
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);

        // Touch swipe events
        slider.addEventListener('touchstart', handleStart, { passive: true });
        slider.addEventListener('touchmove', handleMove, { passive: true });
        slider.addEventListener('touchend', handleEnd);

        return () => {
            slider.removeEventListener('mousedown', handleStart);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            slider.removeEventListener('touchstart', handleStart);
            slider.removeEventListener('touchmove', handleMove);
            slider.removeEventListener('touchend', handleEnd);
        };
    }, [handleStart, handleMove, handleEnd]);

    // === 5. Return values ===
    return {
        sliderRef,
        extendedSlides,
        groupedSlides,
        totalSlides,
        activeIndex,
        prevIndex,
        isLocked,
        dragOffset,
        displayIndex,
        isDragging: isDragging.current, // Return the current value of the reference
        goToNext,
        goToPrev,
        goToSlide,
    };
}

export default useSliderLogic;