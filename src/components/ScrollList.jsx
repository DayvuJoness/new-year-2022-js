import React from 'react';
import ScrollCard from './ScrollCard';

/**
 * Container component for a scrolling list (.scroll-list)
 * @param {string} listType - Modifier for list type
 * @param {Array} data - Data array for cards
 * @param {string} [props.loading] - Loading strategy for child cards
 */
function ScrollList({ listType, data, loading }) {
    
    const containerClass = `scroll-list scroll-list--${listType}`;
    
    return (
        <div className={containerClass}>
            {data.map((card) => (
                <ScrollCard
                    key={card.id} 
                    cardData={card} 
                    loading={loading}
                />
            ))}
        </div>
    );
}

export default ScrollList;