// src/components/ScrollCard.jsx

import React from 'react';

/**
 * Компонент карточки для списка прокрутки (.scroll-list__item)
 * * @param {object} props - Свойства компонента
 * @param {string} props.link - Ссылка карточки
 * @param {string} props.alt - Alt-текст изображения
 * @param {string} props.srcMobile - Путь к изображению для мобильных устройств
 * @param {string} props.srcDesktop - Путь к изображению для десктопа
 * @param {string} [props.size] - Модификатор размера (например, 'size-big')
 * @param {string} [props.position] - Модификатор позиции (например, 'position-center')
 * @param {string} [props.zIndex] - Модификатор z-index (например, 'z-top')
 */
function ScrollCard({ 
    link, 
    alt, 
    srcMobile, 
    srcDesktop, 
    size, 
    position, 
    zIndex 
}) {
    // 1. Динамическое формирование строки классов
    // Мы собираем базовый класс и все переданные модификаторы
    const baseClass = 'scroll-list__item';
    const classNames = `${baseClass} 
        ${size ? `${baseClass}--size-${size}` : ''}
        ${position ? `${baseClass}--position-${position}` : ''}
        ${zIndex ? `${baseClass}--${zIndex}` : ''}
    `.trim();

    return (
        <a href={link} className={classNames}>
            <picture>
                {/* 2. Адаптивное изображение (как в вашем HTML) */}
                <source media="(min-width: 768px)" srcSet={srcDesktop} />
                <img src={srcMobile} alt={alt} />
            </picture>
        </a>
    );
}

export default ScrollCard;