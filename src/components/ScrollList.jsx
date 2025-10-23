// src/components/ScrollList.jsx

import React from 'react';
import ScrollCard from './ScrollCard';

/**
 * Компонент-контейнер для списка прокрутки (.scroll-list)
 * * @param {string} listType - Модификатор для типа списка (например, 'suits', 'food')
 * @param {Array} data - Массив данных для карточек
 */
function ScrollList({ listType, data }) {
    
    const containerClass = `scroll-list scroll-list--${listType}`;

    // В вашем исходном HTML вокруг списка прокрутки были декоративные элементы.
    // Если они нужны, их можно добавить здесь или в родительском компоненте (Section).
    
    return (
        <div className={containerClass}>
            {data.map((card) => (
                <ScrollCard
                    key={card.id} 
                    link={card.link}
                    alt={card.alt}
                    // Передаем переменные, содержащие пути к изображениям
                    srcMobile={card.srcMobile} 
                    srcDesktop={card.srcDesktop}
                    size={card.size}
                    position={card.position}
                    zIndex={card.zIndex}
                />
            ))}
        </div>
    );
}

export default ScrollList;