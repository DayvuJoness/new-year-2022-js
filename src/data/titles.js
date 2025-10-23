// src/data/titles.js

// Импорт SVG-заголовков (Vite их обработает!)
import text3 from '../assets/img/text3.svg'; // Накрываем на стол
import text from '../assets/img/text.svg';   // Украшаем дом
import text1_m from '../assets/img/text1_m.svg'; // Дарим с удовольствием! (моб)
import text1 from '../assets/img/text1.svg';     // Дарим с удовольствием! (дек)
import text2_m from '../assets/img/text2_m.svg'; // Создаем праздничное настроение (моб)
import text2 from '../assets/img/text2.svg';     // Создаем праздничное настроение (дек)

export const titleData = {
    // Секция Food: Накрываем на стол
    food: {
        alt: "Накрываем на стол",
        src: text3,
    },
    // Секция Gifts: Украшаем дом
    gifts: {
        alt: "Украшаем дом",
        src: text,
    },
    // Секция Mood: Дарим с удовольствием! (адаптивный)
    mood: {
        alt: "Дарим с удовольствием!",
        srcMobile: text1_m,
        srcDesktop: text1,
    },
    // Секция Suits: Создаем праздничное настроение (адаптивный)
    suits: {
        alt: "Создаем праздничное настроение",
        srcMobile: text2_m,
        srcDesktop: text2,
    }
};