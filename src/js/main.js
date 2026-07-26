import './burger-menu.js';
import './js-tel-link.js';
import './js-reserv-link.js';

// Инициализируем Swiper
const testimonialSwiper = new Swiper('.testimonial__slider', {
    slidesPerView: 'auto', // 👈 Говорим Swiper брать ширину из CSS!
    // ... остальные настройки
    // Основные настройки
    loop: true,           // Бесконечный слайдер
    slidesPerView: 1,     // Сколько слайдов показывать
    spaceBetween: 30,     // Расстояние между слайдами в px
    speed: 600,           // Скорость переключения (мс)

    // Автоплей (автоматическое перелистывание)
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false, // Не отключать автоплей при кликах пользователя
    //     pauseOnMouseEnter: true,// 👈 Пауза, пока мышка находится над слайдером
    // },

    // Подключаем точки (пагинацию)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Чтобы можно было кликать на точки
    },

    // Подключаем стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Адаптивность (Брейкпоинты как в медиа-запросах)
    breakpoints: {
        // от 768px и выше (Планшеты)
        768: {
            slidesPerView: 2, // Будет виден 1 центральный слайд и половинки боковых
            spaceBetween: 30,
        },
        // от 1150px (или от ширины, где у тебя начинается десктоп)
        1150: {
            slidesPerView: 2, // Включаем авто-ширину, чтобы на десктопе слайд стал 544px[cite: 2]
            spaceBetween: 50,      // Большой отступ между слайдами на ПК
        }
    }
});
// const testimonialSwiper = new Swiper('.testimonial__slider', {
    
// });