// src/components/SliderCard.jsx

import React from 'react';

/**
 * Компонент карточки для списка прокрутки (.slider-list__item)
 * * @param {object} props - Свойства компонента
 * @param {string} props.link - Ссылка карточки
 * @param {string} props.alt - Alt-текст изображения
 * @param {string} props.srcMobile - Путь к изображению для мобильных устройств
 * @param {string} props.srcDesktop - Путь к изображению для десктопа
 * @param {string} [props.sizeSlider] - Модификатор размера (например, 'size-big')
 * @param {string} [props.positionSlider] - Модификатор позиции (например, 'position-center')
 * @param {string} [props.zIndex] - Модификатор z-index (например, 'z-top')
 */
function SliderCard({ 
    link, 
    alt, 
    srcMobile, 
    srcDesktop, 
    sizeSlider, 
    positionSlider, 
    zIndex 
}) {
    // 1. Динамическое формирование строки классов
    // Мы собираем базовый класс и все переданные модификаторы
    const baseClass = 'slider__item';
    const classNames = `${baseClass} 
        ${sizeSlider ? `${baseClass}--size-${sizeSlider}` : ''}
        ${positionSlider ? `${baseClass}--position-${positionSlider}` : ''}
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

export default SliderCard;