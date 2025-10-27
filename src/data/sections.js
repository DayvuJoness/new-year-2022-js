export function extractMeta(mobileMeta, desktopMeta) {
    const srcMobile = mobileMeta?.[0] || '';
    const srcMobileWebp = mobileMeta?.[1] || '';
    const srcMobileAvif = mobileMeta?.[2] || '';

    const srcDesktop = desktopMeta?.[0] || '';
    const srcDesktopWebp = desktopMeta?.[1] || '';
    const srcDesktopAvif = desktopMeta?.[2] || '';
    
    if (!srcMobileWebp || !srcMobileAvif) {
        console.warn('[!!! WARNING !!!] Mobile image is missing WebP/AVIF paths. Fallback will be used.');
    }

    return {
        srcMobile,
        srcMobileWebp,
        srcMobileAvif,
        srcDesktop,
        srcDesktopWebp,
        srcDesktopAvif,
    };
}

// FOOD
import img21m_meta from '../assets/img/21_m.png?format=png;webp;avif&meta';
import img21_meta from '../assets/img/21.png?format=png;webp;avif&meta';
import img22_meta from '../assets/img/22.png?format=png;webp;avif&meta';
import img23_meta from '../assets/img/23.png?format=png;webp;avif&meta';
import img24_meta from '../assets/img/24.png?format=png;webp;avif&meta';
import img25_meta from '../assets/img/25.png?format=png;webp;avif&meta';
import img26m_meta from '../assets/img/26_m.png?format=png;webp;avif&meta';
import img26_meta from '../assets/img/26.png?format=png;webp;avif&meta';
import img27_meta from '../assets/img/27.png?format=png;webp;avif&meta';
import img28_meta from '../assets/img/28.png?format=png;webp;avif&meta';

// MOOD
import img10_meta from '../assets/img/10.png?format=png;webp;avif&meta';
import img11m_meta from '../assets/img/11_m.png?format=png;webp;avif&meta';
import img11_meta from '../assets/img/11.png?format=png;webp;avif&meta';
import img12_meta from '../assets/img/12.png?format=png;webp;avif&meta';
import img13_meta from '../assets/img/13.png?format=png;webp;avif&meta';
import img14_meta from '../assets/img/14.png?format=png;webp;avif&meta';
import img15_1_meta from '../assets/img/15-1.png?format=png;webp;avif&meta';
import img16m_meta from '../assets/img/16_m.png?format=png;webp;avif&meta';
import img16_meta from '../assets/img/16.png?format=png;webp;avif&meta';
import img17_meta from '../assets/img/17.png?format=png;webp;avif&meta';

// GIFTS
import img1_gifts_meta from '../assets/img/1.png?format=png;webp;avif&meta';
import img2_gifts_meta from '../assets/img/2.png?format=png;webp;avif&meta';
import img3_meta from '../assets/img/3.png?format=png;webp;avif&meta';
import img4_meta from '../assets/img/4.png?format=png;webp;avif&meta';
import img5_meta from '../assets/img/5.png?format=png;webp;avif&meta';
import img6_meta from '../assets/img/6.png?format=png;webp;avif&meta';
import img7_meta from '../assets/img/7.png?format=png;webp;avif&meta';
import img8_meta from '../assets/img/8.png?format=png;webp;avif&meta';
import img9_meta from '../assets/img/9.png?format=png;webp;avif&meta';

// SUITS
import img18m2_meta from '../assets/img/18_m2.png?format=png;webp;avif&meta';
import img18_meta from '../assets/img/18.png?format=png;webp;avif&meta';
import img19_meta from '../assets/img/19.png?format=png;webp;avif&meta';
import img20_meta from '../assets/img/20.png?format=png;webp;avif&meta';



// --- Section data "Накрываем на стол" (Food)
export const foodData = [
    { id: 1, slideNumber: 1, link: "#", alt: "Колбасные изделия", 
        ...extractMeta(img21m_meta, img21_meta),
        sizeSlider: 'big', position: 'right', positionSlider: 'center' 
    },
    { id: 2, slideNumber: 1, link: "#", alt: "Молоко, сыр, яйца", 
        ...extractMeta(img22_meta, img22_meta),
    },
    { id: 3, slideNumber: 1, link: "#", alt: "Овощи, фрукты, зелень, грибы, ягоды", 
        ...extractMeta(img23_meta, img23_meta),
        zIndex: 'z-top' 
    },
    { id: 4, slideNumber: 1, link: "#", alt: "Рыба, икра, морепродукты", 
        ...extractMeta(img24_meta, img24_meta),
        zIndex: 'z-bottom' 
    },
    { id: 5, slideNumber: 2, link: "#", alt: "Вода, соки, напитки", 
        ...extractMeta(img25_meta, img25_meta) 
    },
    { id: 6, slideNumber: 2, link: "#", alt: "Кулинария", 
        ...extractMeta(img26m_meta, img26_meta),
        sizeSlider: 'big' 
    },
    { id: 7, slideNumber: 2, link: "#", alt: "Хлебная выпечка", 
        ...extractMeta(img27_meta, img27_meta) 
    },
    { id: 8, slideNumber: 2, link: "#", alt: "Торты, пирожные", 
        ...extractMeta(img28_meta, img28_meta) 
    },
];

// --- Section data "Дарим с удовольствием!" (Mood)
export const moodData = [
    { id: 1, slideNumber: 1, link: "#", alt: "Сладкие подарки", 
        ...extractMeta(img10_meta, img10_meta),
        position: 'center' 
    },
    { id: 2, slideNumber: 1, link: "#", alt: "Игрушки", 
        ...extractMeta(img11m_meta, img11_meta),
        positionSlider: 'left', sizeSlider: 'big' 
    },
    { id: 3, slideNumber: 1, link: "#", alt: "Портативная техника и гаджеты", 
        ...extractMeta(img12_meta, img12_meta) 
    },
    { id: 4, slideNumber: 1, link: "#", alt: "Бытовая техника", 
        ...extractMeta(img13_meta, img13_meta),
        zIndex: 'z-top' 
    },
    { id: 5, slideNumber: 2, link: "#", alt: "Подарочные наборы косметики", 
        ...extractMeta(img14_meta, img14_meta),
        zIndex: 'z-bottom' 
    },
    { id: 6, slideNumber: 2, link: "#", alt: "Товары для дома", 
        ...extractMeta(img15_1_meta, img15_1_meta),
        positionSlider: 'left' 
    },
    { id: 7, slideNumber: 2, link: "#", alt: "Символ года", 
        ...extractMeta(img16m_meta, img16_meta),
        sizeSlider: 'big', positionSlider: 'left' 
    },
    { id: 8, slideNumber: 2, link: "#", alt: "Подарочная упаковка", 
        ...extractMeta(img17_meta, img17_meta) 
    },
];

// --- Section data "Украшаем дом" (Gifts)
export const giftsData = [
    { id: 1, slideNumber: 1, link: "#", alt: "Новогодние коллекции 2022", 
        ...extractMeta(img1_gifts_meta, img1_gifts_meta),
        size: 'big', sizeSlider: 'big' 
    },
    { id: 2, slideNumber: 1, link: "#", alt: "Ёлки", 
        ...extractMeta(img2_gifts_meta, img2_gifts_meta) 
    },
    { id: 3, slideNumber: 1, link: "#", alt: "Шары", 
        ...extractMeta(img3_meta, img3_meta),
        zIndex: 'z-top' 
    },
    { id: 4, slideNumber: 1, link: "#", alt: "Фигурки на ёлку", 
        ...extractMeta(img4_meta, img4_meta),
        zIndex: 'z-bottom' 
    },
    { id: 5, slideNumber: 2, link: "#", alt: "Электрогирлянды и световой декор", 
        ...extractMeta(img5_meta, img5_meta) 
    },
    { id: 6, slideNumber: 2, link: "#", alt: "Мишура", 
        ...extractMeta(img6_meta, img6_meta) 
    },
    { id: 7, slideNumber: 2, link: "#", alt: "Новогодние фигурки", 
        ...extractMeta(img7_meta, img7_meta) 
    },
    { id: 8, slideNumber: 2, link: "#", alt: "Декор для дома", 
        ...extractMeta(img8_meta, img8_meta) 
    },
    { id: 9, slideNumber: 2, link: "#", alt: "Посуда", 
        ...extractMeta(img9_meta, img9_meta) 
    },
];

// --- Section data "Костюмы" (Suits)
export const suitsData = [
    { id: 1, slideNumber: 1, link: "#", alt: "Костюмы", 
        ...extractMeta(img18m2_meta, img18_meta),
        positionSlider: 'right', position: 'right', size: 'big-desktop' 
    },
    { id: 2, slideNumber: 1, link: "#", alt: "Аксессуары для карнавала", 
        ...extractMeta(img19_meta, img19_meta),
        zIndex: 'z-top', positionSlider: 'left' 
    },
    { id: 3, slideNumber: 1, link: "#", alt: "Оборудование для вечеринки", 
        ...extractMeta(img20_meta, img20_meta),
        zIndex: 'z-bottom' 
    },
];