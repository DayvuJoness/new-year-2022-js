import React from 'react';
// Импортируем данные заголовков и секций
import { titleData } from './data/titles';
import { foodData, moodData, giftsData, suitsData } from './data/sections';
// Импортируем стили SCSS
import './styles/mainNew.scss'; 
import './styles/customization.scss'; 

// --- Компоненты ---
// Реальный компонент списка (для мобильных устройств)
import ScrollList from './components/ScrollList'; 
// Новый компонент слайдера (для десктопных устройств)
import Slider from './components/Slider'; 
import SectionTitle from './components/SectionTitle'; // Компонент заголовка

// Вспомогательный компонент для декоративных div'ов
const Decorations = ({ classNames }) => <div className={`land__decor ${classNames}`}></div>;

// --------------------------------------------------------

function App() {
    return (
        <div className="land">
            
            {/* ======================================= */}
            {/* Секция 1: Food ("Накрываем на стол") */}
            {/* ======================================= */}
            <section className="land__section land__section--food">
                <Decorations classNames="land__decor--stars-left" />
                <Decorations classNames="land__decor--stars-right" />
                <Decorations classNames="land__decor--mandarin-left" />
                <Decorations classNames="land__decor--mandarin-right" />
                <Decorations classNames="land__decor--twig" />

                <div className="land__text land__text--food">
                    <h2>
                        <SectionTitle {...titleData.food} />
                    </h2>
                    <p className="land__text__description">
                        Пусть ваш Новый год станет праздником вкуса! Порадуйте своих родных как уже полюбившимися блюдами, так и новыми волшебными гастрономическими открытиями!
                    </p>
                </div>
                
                {/* 1. Скролл-список (видимость управляется SCSS) */}
                <ScrollList listType="food" data={foodData} />
                
                {/* 2. Слайдер на React (видимость управляется SCSS) */}
                <Slider listType="food" data={foodData} />
                
                <Decorations classNames="land__decor--arrow-down-red" />
            </section>


            {/* ======================================= */}
            {/* Секция 2: Mood ("Дарим с удовольствием!") */}
            {/* ======================================= */}
            <section className="land__section land__section--mood">
                <Decorations classNames="land__decor--snows-left" />
                <Decorations classNames="land__decor--snows-right" />

                <div className="land__text land__text--mood">
                    <h2>
                        <SectionTitle {...titleData.mood} />
                    </h2>
                    <p className="land__text__description">
                        Где скрывается новогоднее волшебство? Конечно, в подарках! У нас вы легко найдёте всё, что ваши родные с радостью найдут под елкой!
                    </p>
                </div>
                
                {/* 1. Скролл-список (видимость управляется SCSS) */}
                <ScrollList listType="mood" data={moodData} />
                
                {/* 2. Слайдер на React (видимость управляется SCSS) */}
                <Slider listType="mood" data={moodData} />
                
                <Decorations classNames="land__decor--arrow-down-green" />
            </section>


            {/* ======================================= */}
            {/* Секция 3: Gifts ("Украшаем дом") */}
            {/* ======================================= */}
            <section className="land__section land__section--gifts">
                <Decorations classNames="land__decor--stars-left" />
                <Decorations classNames="land__decor--stars-right" />
                <Decorations classNames="land__decor--deer" />
                <Decorations classNames="land__decor--twig" />
                
                <div className="land__text land__text--gifts">
                    <h2>
                        <SectionTitle {...titleData.gifts} />
                    </h2>
                    <p className="land__text__description">
                        Праздник Нового года приходит в каждый дом. Но ещё быстрее он приходит в дом, где уже царит новогодняя атмосфера! Пусть ваша елка будет в центре внимания, а интерьер светится радостью!
                    </p>
                </div>
                
                {/* 1. Скролл-список (видимость управляется SCSS) */}
                <ScrollList listType="gifts" data={giftsData} />
                
                {/* 2. Слайдер на React (видимость управляется SCSS) */}
                <Slider listType="gifts" data={giftsData} />
                
                <Decorations classNames="land__decor--nutcracker" />
                <Decorations classNames="land__decor--arrow-down-red" />
            </section>


            {/* ======================================= */}
            {/* Секция 4: Suits ("Создаем праздничное настроение") */}
            {/* ======================================= */}
            <section className="land__section land__section--suits">
                <Decorations classNames="land__decor--snows-bottom-left" />
                <Decorations classNames="land__decor--snows-bottom-right" />
                <Decorations classNames="land__decor--garland" />
                
                <div className="land__text land__text--suits">
                    <h2>
                        <SectionTitle {...titleData.suits} />
                    </h2>
                    <p className="land__text__description">
                        Настройтесь на Новый год!<br/>Костюмы и карнавальные маски — пусть ваш праздник пройдёт как по волшебству!
                    </p>
                </div>

                {/* У секции Suits есть дополнительная обертка для декоративных гирлянд */}
                <div className="land__section__scroll-wrapper"> 
                    <Decorations classNames="land__decor--garland-left" />
                    
                    {/* 1. Скролл-список (видимость управляется SCSS) */}
                    <ScrollList listType="suits" data={suitsData} /> 
                    
                    {/* 2. Слайдер на React (видимость управляется SCSS) */}
                    {/* <Slider listType="suits" data={suitsData} />  */}
                    
                    <Decorations classNames="land__decor--garland-right" />
                </div>
                
                <div className="land__bgbottom"></div>
                <Decorations classNames="land__decor--bottom" />
            </section>
        </div>
    );
}

export default App;
