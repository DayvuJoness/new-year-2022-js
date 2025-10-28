import React from 'react';
import SectionTitle from './SectionTitle'; 

// Dynamic Imports for Code Splitting
const ScrollList = React.lazy(() => import('./ScrollList'));
const Slider = React.lazy(() => import('./Slider'));

const Decorations = ({ classNames }) => <div className={`land__decor ${classNames}`}></div>;

/**
 * An universal component for section rendering.
 * @param {object} config - Section configuration object.
 */
function Section({ 
    id,
    sectionType, 
    titleData, 
    description, 
    data, 
    decorations = [],           // Decorations of the upper part of the section
    contentDecorations = [],    // Decorations inside the scroll-wrapper (for Suits only)
    hasBottomBg = false,
    hasBottomDecor = false,
    useSlider = true,            // Flag for the Suits section (ScrollList always)
    isMobile,
    isDesktop,
    isLoadingData = false,
}) {
    // 1. The logic of adaptability
    
    // 2. Selecting a component
    let Component;
    if (useSlider) {
        Component = isDesktop ? Slider : ScrollList;
    } else {
        // For the Suits section, we always use ScrollList (even on the desktop)
        Component = ScrollList;
    }
    
    // 3. Optimization: The first section (food) is loaded by 'eager'
    const finalLoading = id === 'food' ? 'eager' : 'lazy'; 

    // 4. Additional wrapper rendering for Suits
    const needsScrollWrapper = contentDecorations.length > 0;

    let content;
    if (isLoadingData) {
        content = <div className="loading-placeholder">Загрузка данных...</div>;
    } else {
        content = (
            <React.Suspense fallback={<div className="loading-placeholder">Загрузка контента...</div>}>
                <Component 
                    listType={sectionType} 
                    data={data} 
                    loading={finalLoading} 
                />
            </React.Suspense>
        );
    }

    return (
        <section className={`land__section land__section--${sectionType}`} id={id}>
            
            {/* Rendering of the main scenery */}
            {decorations.map((cls, index) => (
                <Decorations key={`decor-${index}`} classNames={cls} />
            ))}

            {/* Title and description block */}
            <div className={`land__text land__text--${sectionType}`}>
                <h2><SectionTitle {...titleData} /></h2>
                <p className="land__text__description">{description}</p>
            </div>

            {/* Content rendering (with or without Suits wrapper) */}
            {needsScrollWrapper ? (
                <div className="land__section__scroll-wrapper"> 
                    {contentDecorations.map((cls, index) => (
                        <Decorations key={`content-decor-${index}`} classNames={cls} />
                    ))}
                    {content}
                </div>
            ) : (
                content
            )}
            
            {/* Bottom background of the section */}
            {hasBottomBg && <div className="land__bgbottom"></div>}

            {/* Lower section decoration */}
            {hasBottomDecor && <Decorations classNames="land__decor--bottom" />}
            
        </section>
    );
}

export default Section;