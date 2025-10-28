import React, { useState, useEffect } from 'react';
import { titleData } from './data/titles';
import { loadSectionData } from './data/sections';

// --- SCSS ---
import './styles/main.scss'; 
import './styles/customization.scss'; 

// --- Components ---
import Section from './components/Section';                
import useMediaQuery from './utils/useMediaQuery';

function App() {
    const isDesktop = useMediaQuery('(min-width: 768px)'); 
    const isMobile = !isDesktop;

    // 1. Create a state for the loaded data
    const [sectionData, setSectionData] = useState(null); 
    
    // 2. useEffect to load asynchronously when the component is mounted
    useEffect(() => {
        loadSectionData().then(data => {
            // Write the loaded data to the state
            setSectionData(data);
        }).catch(error => {
            console.error("Ошибка при загрузке данных секций:", error);
            // In case of an error, set empty data
            setSectionData({ foodData: [], moodData: [], giftsData: [], suitsData: [] });
        });
    }, []); // Run it once
    
    // Destructuring the loaded data for use
    const { foodData, moodData, giftsData, suitsData } = sectionData || {};
    const dataLoaded = !!sectionData;

    // 4. SECTION CONFIGURATION (using sectionData)
    const sectionsConfig = [
        // food
        {
            id: 'food',
            sectionType: 'food',
            titleData: titleData.food,
            description: (
                <>
                    Пусть ваш Новый год станет праздником вкуса! 
                    Порадуйте своих родных как уже полюбившимися блюдами, 
                    так и новыми волшебными гастрономическими открытиями!
                </>
            ), 
            data: foodData || [],
            isLoadingData: !dataLoaded,
            decorations: [
                'land__decor--stars-left', 
                'land__decor--stars-right', 
                'land__decor--mandarin-left', 
                'land__decor--mandarin-right',
                'land__decor--twig',
                'land__decor--arrow-down-red',
            ],
            hasBottomBg: false,
            hasBottomDecor: false,
            useSlider: true,
        },
        // mood
        {
            id: 'mood',
            sectionType: 'mood',
            titleData: titleData.mood,
            description: (
                <>
                    Где скрывается новогоднее волшебство? Конечно, в подарках! 
                    У нас вы легко найдёте всё, что ваши родные с радостью найдут под&nbsp;елкой!
                </>
            ),
            data: moodData,
            decorations: [
                'land__decor--snows-left', 
                'land__decor--snows-right', 
                'land__decor--arrow-down-green',
            ],
            hasBottomBg: false,
            hasBottomDecor: false,
            useSlider: true,
        },
        // gifts
        {
            id: 'gifts',
            sectionType: 'gifts',
            titleData: titleData.gifts,
            description: (
                <>
                    Праздник Нового года приходит в каждый дом. 
                    Но ещё быстрее он приходит в дом, где уже царит новогодняя атмосфера! 
                    Пусть ваша елка будет в центре внимания, а интерьер светится радостью!
                </>
            ),
            data: giftsData,
            decorations: [
                'land__decor--stars-left', 
                'land__decor--stars-right', 
                'land__decor--deer', 
                'land__decor--twig',
                'land__decor--nutcracker',
                'land__decor--arrow-down-red',
            ],
            hasBottomBg: false,
            hasBottomDecor: false,
            useSlider: true,
        },
        // suits
        {
            id: 'suits',
            sectionType: 'suits',
            titleData: titleData.suits,
            description: (
                <>
                    Настройтесь на Новый год!<br/>Костюмы и карнавальные маски — пусть ваш праздник пройдёт как по волшебству!
                </>
            ),
            data: suitsData,
            decorations: [
                'land__decor--snows-bottom-left', 
                'land__decor--snows-bottom-right', 
                'land__decor--garland'
            ],
            contentDecorations: [
                'land__decor--garland-left', 
                'land__decor--garland-right'
            ],
            hasBottomBg: true,
            hasBottomDecor: true, 
            useSlider: false,
        },
    ];


    return (
        <div className="land">
            {!dataLoaded ? (
                <div className="global-loading">Загрузка данных...</div> 
            ) : (
                sectionsConfig.map((section) => (
                    <Section key={section.id} {...section} isMobile={isMobile} isDesktop={isDesktop} />
                ))
            )}
        </div>
    );
}

export default App;