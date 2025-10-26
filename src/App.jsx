import React from 'react';
import { titleData } from './data/titles';
import { foodData, moodData, giftsData, suitsData } from './data/sections';

// --- SCSS ---
import './styles/main.scss'; 
import './styles/customization.scss'; 

// --- Components ---
import ScrollList from './components/ScrollList';       // ScrollList component (mobile)
import Slider from './components/Slider';               // Slider component (desktop)
import SectionTitle from './components/SectionTitle';   // Title component

import useMediaQuery from './utils/useMediaQuery';

// --- Decorations component ---
const Decorations = ({ classNames }) => <div className={`land__decor ${classNames}`}></div>;

// --------------------------------------------------------

function App() {
    const isDesktop = useMediaQuery('(min-width: 768px)'); 
    const isMobile = !isDesktop;
    return (
        <div className="land">
            
            {/* ======================================= */}
            {/* Section 1: Food ("Накрываем на стол") */}
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
                
                {/* 1. Scroller (mobile) */}
                {isMobile && <ScrollList listType="food" data={foodData} loading="eager" />}
                
                {/* 2. Slider (desktop) */}
                {isDesktop && <Slider listType="food" data={foodData} loading="eager" />}
                
                <Decorations classNames="land__decor--arrow-down-red" />
            </section>


            {/* ======================================= */}
            {/* Section 2: Mood ("Дарим с удовольствием!") */}
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

                {/* 1. Scroller (mobile) */}
                {isMobile && <ScrollList listType="mood" data={moodData} />}
                
                {/* 2. Slider (desktop) */}
                {isDesktop && <Slider listType="mood" data={moodData} />}
                
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

                {/* 1. Scroller (mobile) */}
                {isMobile && <ScrollList listType="gifts" data={giftsData} />}
                
                {/* 2. Slider (desktop) */}
                {isDesktop && <Slider listType="gifts" data={giftsData} />}
                
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

                <div className="land__section__scroll-wrapper"> 
                    <Decorations classNames="land__decor--garland-left" />
                    
                    {/* 1. Scroller (mobile & desktop) */}
                    <ScrollList listType="suits" data={suitsData} /> 
                    
                    <Decorations classNames="land__decor--garland-right" />
                </div>
                
                <div className="land__bgbottom"></div>
                <Decorations classNames="land__decor--bottom" />
            </section>
        </div>
    );
}

export default App;
