import { useState, useEffect } from 'react';

/**
 * A hook for determining whether the current screen matches a given media query..
 * @param {string} query - Media query, for example, '(min-width: 768px)'.
 * @returns {boolean} - true if the screen matches the request, otherwise false.
 */
const useMediaQuery = (query) => {
    // 1. Set the initial state.
    // If the code is running on a server (SSR) or in an environment without a window,
    // set it to false. Otherwise, check immediately.
    const [matches, setMatches] = useState(() => {
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        // Let's check that we're working in a browser.
        if (typeof window === 'undefined' || !window.matchMedia) {
            return;
        }

        const mediaQueryList = window.matchMedia(query);

        // 2. Create a handler to update the state
        const listener = (e) => setMatches(e.matches);

        // 3. Set up the listener
        // We use the modern addEventListener method, but take older browsers into account
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', listener);
        } else { // To support older browsers (deprecate)
            mediaQueryList.addListener(listener);
        }

        // 4. Cleanup: Remove the listener when the component is unmounted
        return () => {
            if (mediaQueryList.removeEventListener) {
                mediaQueryList.removeEventListener('change', listener);
            } else { // To support older browsers (deprecate)
                mediaQueryList.removeListener(listener);
            }
        };
    }, [query]); // Restart the effect if the media query has changed

    return matches;
};

export default useMediaQuery;