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

// Use a simple template to get the import functions
const imageImportFns = import.meta.glob('../assets/img/*.png'); 
const imageKeys = Object.keys(imageImportFns);

/**
 * Asynchronous function for searching and retrieving metadata
 * @param {string} filename - File name
 * @returns {Array|undefined} An array of metadata, or undefined if the file is not found
 */
async function getMeta(filename) {
    // 1. We find the key (path) corresponding to the file
    const fullKey = imageKeys.find(key => key.endsWith(`/${filename}`));

    if (!fullKey) {
        console.error(`[Vite Glob Error] File not found for: ${filename}.`);
        return undefined; 
    }

    // 2. Add query parameters to the found key.
    // When dynamically importing, Vite understands that a plugin needs to be used.
    const importKeyWithMeta = `${fullKey}?format=png;webp;avif&meta`;
    
    // 3. Dynamically import the file with metadata.
    try {
        const importFn = imageImportFns[fullKey];
        // Use /* @vite-ignore */ to suppress the Vite static analyzer warning
        const module = await importFn(/* @vite-ignore */ importKeyWithMeta);
        
        // Metadata is stored in the .default field
        return module.default;
    } catch (error) {
        console.error(`[Vite Glob Error] Failed to import metadata for ${filename} with query params:`, error);
        return undefined;
    }
}

export async function loadSectionData() {
    // Use Promise.all to download all images in parallel
    const foodPromises = [
        getMeta('21_m.png'), getMeta('21.png'),
        getMeta('22.png'), getMeta('22.png'),
        getMeta('23.png'), getMeta('23.png'),
        getMeta('24.png'), getMeta('24.png'),
        getMeta('25.png'), getMeta('25.png'),
        getMeta('26_m.png'), getMeta('26.png'),
        getMeta('27.png'), getMeta('27.png'),
        getMeta('28.png'), getMeta('28.png'),
    ];
    
    const moodPromises = [
        getMeta('10.png'), getMeta('10.png'),
        getMeta('11_m.png'), getMeta('11.png'),
        getMeta('12.png'), getMeta('12.png'),
        getMeta('13.png'), getMeta('13.png'),
        getMeta('14.png'), getMeta('14.png'),
        getMeta('15-1.png'), getMeta('15-1.png'),
        getMeta('16_m.png'), getMeta('16.png'),
        getMeta('17.png'), getMeta('17.png'),
    ];

    const giftsPromises = [
        getMeta('1.png'), getMeta('1.png'),
        getMeta('2.png'), getMeta('2.png'),
        getMeta('3.png'), getMeta('3.png'),
        getMeta('4.png'), getMeta('4.png'),
        getMeta('5.png'), getMeta('5.png'),
        getMeta('6.png'), getMeta('6.png'),
        getMeta('7.png'), getMeta('7.png'),
        getMeta('8.png'), getMeta('8.png'),
        getMeta('9.png'), getMeta('9.png'),
    ];

    const suitsPromises = [
        getMeta('18_m2.png'), getMeta('18.png'),
        getMeta('19.png'), getMeta('19.png'),
        getMeta('20.png'), getMeta('20.png'),
    ];
    
    const [
        foodMeta, moodMeta, giftsMeta, suitsMeta
    ] = await Promise.all([
        Promise.all(foodPromises),
        Promise.all(moodPromises),
        Promise.all(giftsPromises),
        Promise.all(suitsPromises),
    ]);

    // ----------------------------------------------------
    // --- Section data "Накрываем на стол" (Food)
    // ----------------------------------------------------
    const foodData = [
        { id: 1, slideNumber: 1, link: "#", alt: "Колбасные изделия", 
            ...extractMeta(foodMeta[0], foodMeta[1]),
            sizeSlider: 'big', position: 'right', positionSlider: 'center' 
        },
        { id: 2, slideNumber: 1, link: "#", alt: "Молоко, сыр, яйца", 
            ...extractMeta(foodMeta[2], foodMeta[3]),
        },
        { id: 3, slideNumber: 1, link: "#", alt: "Овощи, фрукты, зелень, грибы, ягоды", 
            ...extractMeta(foodMeta[4], foodMeta[5]),
            zIndex: 'top' 
        },
        { id: 4, slideNumber: 1, link: "#", alt: "Рыба, икра, морепродукты", 
            ...extractMeta(foodMeta[6], foodMeta[7]),
            zIndex: 'bottom' 
        },
        { id: 5, slideNumber: 2, link: "#", alt: "Вода, соки, напитки", 
            ...extractMeta(foodMeta[8], foodMeta[9]) 
        },
        { id: 6, slideNumber: 2, link: "#", alt: "Кулинария", 
            ...extractMeta(foodMeta[10], foodMeta[11]),
            sizeSlider: 'big' 
        },
        { id: 7, slideNumber: 2, link: "#", alt: "Хлебная выпечка", 
            ...extractMeta(foodMeta[12], foodMeta[13]) 
        },
        { id: 8, slideNumber: 2, link: "#", alt: "Торты, пирожные", 
            ...extractMeta(foodMeta[14], foodMeta[15]) 
        },
    ];

    // ----------------------------------------------------
    // --- Section data "Дарим с удовольствием!" (Mood)
    // ----------------------------------------------------
    const moodData = [
        { id: 1, slideNumber: 1, link: "#", alt: "Сладкие подарки", 
            ...extractMeta(moodMeta[0], moodMeta[1]),
            position: 'center' 
        },
        { id: 2, slideNumber: 1, link: "#", alt: "Игрушки", 
            ...extractMeta(moodMeta[2], moodMeta[3]),
            positionSlider: 'left', sizeSlider: 'big' 
        },
        { id: 3, slideNumber: 1, link: "#", alt: "Портативная техника и гаджеты", 
            ...extractMeta(moodMeta[4], moodMeta[5]) 
        },
        { id: 4, slideNumber: 1, link: "#", alt: "Бытовая техника", 
            ...extractMeta(moodMeta[6], moodMeta[7]),
            zIndex: 'top' 
        },
        { id: 5, slideNumber: 2, link: "#", alt: "Подарочные наборы косметики", 
            ...extractMeta(moodMeta[8], moodMeta[9]),
            zIndex: 'bottom' 
        },
        { id: 6, slideNumber: 2, link: "#", alt: "Товары для дома", 
            ...extractMeta(moodMeta[10], moodMeta[11]),
            positionSlider: 'left' 
        },
        { id: 7, slideNumber: 2, link: "#", alt: "Символ года", 
            ...extractMeta(moodMeta[12], moodMeta[13]),
            sizeSlider: 'big', positionSlider: 'left' 
        },
        { id: 8, slideNumber: 2, link: "#", alt: "Подарочная упаковка", 
            ...extractMeta(moodMeta[14], moodMeta[15]) 
        },
    ];

    // ----------------------------------------------------
    // --- Section data "Украшаем дом" (Gifts)
    // ----------------------------------------------------
    const giftsData = [
        { id: 1, slideNumber: 1, link: "#", alt: "Новогодние коллекции 2022", 
            ...extractMeta(giftsMeta[0], giftsMeta[1]),
            size: 'big', sizeSlider: 'big' 
        },
        { id: 2, slideNumber: 1, link: "#", alt: "Ёлки", 
            ...extractMeta(giftsMeta[2], giftsMeta[3])
        },
        { id: 3, slideNumber: 1, link: "#", alt: "Шары", 
            ...extractMeta(giftsMeta[4], giftsMeta[5]),
            zIndex: 'top' 
        },
        { id: 4, slideNumber: 1, link: "#", alt: "Фигурки на ёлку", 
            ...extractMeta(giftsMeta[6], giftsMeta[7]),
            zIndex: 'bottom' 
        },
        { id: 5, slideNumber: 2, link: "#", alt: "Электрогирлянды и световой декор", 
            ...extractMeta(giftsMeta[8], giftsMeta[9]) 
        },
        { id: 6, slideNumber: 2, link: "#", alt: "Мишура", 
            ...extractMeta(giftsMeta[10], giftsMeta[11]) 
        },
        { id: 7, slideNumber: 2, link: "#", alt: "Новогодние фигурки", 
            ...extractMeta(giftsMeta[12], giftsMeta[13]) 
        },
        { id: 8, slideNumber: 2, link: "#", alt: "Декор для дома", 
            ...extractMeta(giftsMeta[14], giftsMeta[15]) 
        },
        { id: 9, slideNumber: 2, link: "#", alt: "Посуда", 
            ...extractMeta(giftsMeta[16], giftsMeta[17]) 
        },
    ];

    // ----------------------------------------------------
    // --- Section data "Костюмы" (Suits)
    // ----------------------------------------------------
    const suitsData = [
        { id: 1, slideNumber: 1, link: "#", alt: "Костюмы", 
            ...extractMeta(suitsMeta[0], suitsMeta[1]),
            positionSlider: 'right', position: 'right', size: 'big-desktop' 
        },
        { id: 2, slideNumber: 1, link: "#", alt: "Аксессуары для карнавала", 
            ...extractMeta(suitsMeta[2], suitsMeta[3]),
            zIndex: 'top', positionSlider: 'left' 
        },
        { id: 3, slideNumber: 1, link: "#", alt: "Оборудование для вечеринки", 
            ...extractMeta(suitsMeta[4], suitsMeta[5]),
            zIndex: 'bottom' 
        },
    ];

    // Return all the prepared data
    return { foodData, moodData, giftsData, suitsData };
}

export const foodData = [];
export const moodData = [];
export const giftsData = [];
export const suitsData = [];