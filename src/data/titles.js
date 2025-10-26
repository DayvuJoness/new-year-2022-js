import text3 from '../assets/img/text3.svg'; // Накрываем на стол (food title)
import text from '../assets/img/text.svg';   // Украшаем дом (gifts title)
import text1_m from '../assets/img/text1_m.svg'; // Дарим с удовольствием! (mood mobile title)
import text1 from '../assets/img/text1.svg';     // Дарим с удовольствием! (mood desktop title)
import text2_m from '../assets/img/text2_m.svg'; // Создаем праздничное настроение (suits mobile title)
import text2 from '../assets/img/text2.svg';     // Создаем праздничное настроение (suits desktop title)

export const titleData = {
    // Section Food: Накрываем на стол
    food: {
        alt: "Накрываем на стол",
        src: text3,
    },
    // Section Gifts: Украшаем дом
    gifts: {
        alt: "Украшаем дом",
        src: text,
    },
    // Section Mood: Дарим с удовольствием! (adaptive)
    mood: {
        alt: "Дарим с удовольствием!",
        srcMobile: text1_m,
        srcDesktop: text1,
    },
    // Section Suits: Создаем праздничное настроение (adaptive)
    suits: {
        alt: "Создаем праздничное настроение",
        srcMobile: text2_m,
        srcDesktop: text2,
    }
};