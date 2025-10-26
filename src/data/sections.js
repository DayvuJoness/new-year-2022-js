// FOOD
import img21m from '../assets/img/21_m.png';
import img21 from '../assets/img/21.png';
import img22 from '../assets/img/22.png';
import img23 from '../assets/img/23.png';
import img24 from '../assets/img/24.png';
import img25 from '../assets/img/25.png';
import img26m from '../assets/img/26_m.png';
import img26 from '../assets/img/26.png';
import img27 from '../assets/img/27.png';
import img28 from '../assets/img/28.png';

// MOOD
import img10 from '../assets/img/10.png';
import img11m from '../assets/img/11_m.png';
import img11 from '../assets/img/11.png';
import img12 from '../assets/img/12.png';
import img13 from '../assets/img/13.png';
import img14 from '../assets/img/14.png';
import img15_1 from '../assets/img/15-1.png';
import img16m from '../assets/img/16_m.png';
import img16 from '../assets/img/16.png';
import img17 from '../assets/img/17.png';

// GIFTS
import img1_gifts from '../assets/img/1.png';
import img2_gifts from '../assets/img/2.png';
import img3 from '../assets/img/3.png';
import img4 from '../assets/img/4.png';
import img5 from '../assets/img/5.png';
import img6 from '../assets/img/6.png';
import img7 from '../assets/img/7.png';
import img8 from '../assets/img/8.png';
import img9 from '../assets/img/9.png';

// SUITS
import img18m2 from '../assets/img/18_m2.png';
import img18 from '../assets/img/18.png';
import img19 from '../assets/img/19.png';
import img20 from '../assets/img/20.png';

// --- Section data "Накрываем на стол" (Food)
export const foodData = [
    { id: 1, slideNumber: 1, link: "#", alt: "Колбасные изделия", srcMobile: img21m, srcDesktop: img21, sizeSlider: 'big', position: 'right', positionSlider: 'center' },
    { id: 2, slideNumber: 1, link: "#", alt: "Молоко, сыр, яйца", srcMobile: img22, srcDesktop: img22 },
    { id: 3, slideNumber: 1, link: "#", alt: "Овощи, фрукты, зелень, грибы, ягоды", srcMobile: img23, srcDesktop: img23, zIndex: 'z-top' },
    { id: 4, slideNumber: 1, link: "#", alt: "Рыба, икра, морепродукты", srcMobile: img24, srcDesktop: img24, zIndex: 'z-bottom' },
    { id: 5, slideNumber: 2, link: "#", alt: "Вода, соки, напитки", srcMobile: img25, srcDesktop: img25 },
    { id: 6, slideNumber: 2, link: "#", alt: "Кулинария", srcMobile: img26m, srcDesktop: img26, sizeSlider: 'big' },
    { id: 7, slideNumber: 2, link: "#", alt: "Хлебная выпечка", srcMobile: img27, srcDesktop: img27 },
    { id: 8, slideNumber: 2, link: "#", alt: "Торты, пирожные", srcMobile: img28, srcDesktop: img28 },
];

// --- Section data "Дарим с удовольствием!" (Mood)
export const moodData = [
    { id: 1, slideNumber: 1, link: "#", alt: "Сладкие подарки", srcMobile: img10, srcDesktop: img10, position: 'center' },
    { id: 2, slideNumber: 1, link: "#", alt: "Игрушки", srcMobile: img11m, srcDesktop: img11, positionSlider: 'left', sizeSlider: 'big' },
    { id: 3, slideNumber: 1, link: "#", alt: "Портативная техника и гаджеты", srcMobile: img12, srcDesktop: img12 },
    { id: 4, slideNumber: 1, link: "#", alt: "Бытовая техника", srcMobile: img13, srcDesktop: img13, zIndex: 'z-top' },
    { id: 5, slideNumber: 2, link: "#", alt: "Подарочные наборы косметики", srcMobile: img14, srcDesktop: img14, zIndex: 'z-bottom' },
    { id: 6, slideNumber: 2, link: "#", alt: "Товары для дома", srcMobile: img15_1, srcDesktop: img15_1, positionSlider: 'left' },
    { id: 7, slideNumber: 2, link: "#", alt: "Символ года", srcMobile: img16m, srcDesktop: img16, sizeSlider: 'big', positionSlider: 'left' },
    { id: 8, slideNumber: 2, link: "#", alt: "Подарочная упаковка", srcMobile: img17, srcDesktop: img17 },
];

// --- Section data "Украшаем дом" (Gifts)
export const giftsData = [
    { id: 1, slideNumber: 1, link: "#", alt: "Новогодние коллекции 2022", srcMobile: img1_gifts, srcDesktop: img1_gifts, size: 'big', sizeSlider: 'big' },
    { id: 2, slideNumber: 1, link: "#", alt: "Ёлки", srcMobile: img2_gifts, srcDesktop: img2_gifts },
    { id: 3, slideNumber: 1, link: "#", alt: "Шары", srcMobile: img3, srcDesktop: img3, zIndex: 'z-top' },
    { id: 4, slideNumber: 1, link: "#", alt: "Фигурки на ёлку", srcMobile: img4, srcDesktop: img4, zIndex: 'z-bottom' },
    { id: 5, slideNumber: 2, link: "#", alt: "Электрогирлянды и световой декор", srcMobile: img5, srcDesktop: img5 },
    { id: 6, slideNumber: 2, link: "#", alt: "Мишура", srcMobile: img6, srcDesktop: img6 },
    { id: 7, slideNumber: 2, link: "#", alt: "Новогодние фигурки", srcMobile: img7, srcDesktop: img7 },
    { id: 8, slideNumber: 2, link: "#", alt: "Декор для дома", srcMobile: img8, srcDesktop: img8 },
    { id: 9, slideNumber: 2, link: "#", alt: "Посуда", srcMobile: img9, srcDesktop: img9 },
];

// --- Section data "Костюмы" (Suits)
export const suitsData = [
    { id: 1, slideNumber: 1, link: "#", alt: "Костюмы", srcMobile: img18m2, srcDesktop: img18, positionSlider: 'right', position: 'right', size: 'big-desktop' },
    { id: 2, slideNumber: 1, link: "#", alt: "Аксессуары для карнавала", srcMobile: img19, srcDesktop: img19, zIndex: 'z-top', positionSlider: 'left' },
    { id: 3, slideNumber: 1, link: "#", alt: "Оборудование для вечеринки", srcMobile: img20, srcDesktop: img20, zIndex: 'z-bottom' },
];