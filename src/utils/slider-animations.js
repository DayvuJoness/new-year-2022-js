document.addEventListener("DOMContentLoaded", () => {
    // Находим все элементы-слайдеры на странице
    const allSliders = document.querySelectorAll(".slider");
    
    allSliders.forEach(slider => {
        // Получаем все необходимые элементы внутри текущего слайдера
        const slides = Array.from(slider.querySelectorAll(".slider__slide"));
        const btnPrev = slider.querySelector(".slider__nav-btn-left");
        const btnNext = slider.querySelector(".slider__nav-btn-right");
        const dots = Array.from(slider.querySelectorAll(".slider__dot-btn"));

        // Проверка на наличие всех необходимых элементов
        if (slides.length === 0 || !btnPrev || !btnNext || dots.length === 0 || slides.length !== dots.length) {
            console.warn("Slider initialization skipped due to missing elements or mismatch in slide/dot count:", slider);
            return;
        }

        let current = 0;
        let isAnimating = false;

        // Основная функция для переключения слайдов
        function goToSlide(next, direction) {
            if (isAnimating || next === current) return;
            isAnimating = true;

            const currentSlide = slides[current];
            const nextSlide = slides[next];

            // Определяем классы анимации в зависимости от направления
            const outClass = direction === "left" ? "slide-out-left" : "slide-out-right";
            const inClass = direction === "left" ? "slide-in-left" : "slide-in-right";

            // 1. Снимаем класс 'active' с текущего слайда и добавляем анимацию выхода
            currentSlide.classList.remove("active");
            currentSlide.classList.add(outClass);

            // 2. Добавляем классы анимации и 'active' следующему слайду
            nextSlide.classList.add("active", inClass);
            
            // Обновляем состояние точек
            dots[current].classList.remove("active");
            dots[next].classList.add("active");

            // Ожидаем завершения анимации выхода
            currentSlide.addEventListener("animationend", function handleAnimationEnd() {
                // Удаляем классы анимации с ушедшего слайда
                currentSlide.classList.remove(outClass);
                nextSlide.classList.remove(inClass);
                
                // Обновляем текущий индекс
                current = next;
                isAnimating = false;
                
                // Удаляем слушателя, чтобы не вызывать его снова
                currentSlide.removeEventListener("animationend", handleAnimationEnd);
            }, { once: true });
        }

        // Обработчики событий
        btnNext.addEventListener("click", () => {
            const next = (current + 1) % slides.length;
            goToSlide(next, "left"); // Переход влево (следующий слайд)
        });

        btnPrev.addEventListener("click", () => {
            const next = (current - 1 + slides.length) % slides.length;
            goToSlide(next, "right"); // Переход вправо (предыдущий слайд)
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                const direction = index > current ? "left" : "right";
                goToSlide(index, direction);
            });
        });

        // Инициализация: убеждаемся, что первый слайд и точка активны
        slides[0].classList.add("active");
        dots[0].classList.add("active");
    });
});
