
function checkScreenSize() {
    // Используем querySelector (ищет один первый элемент)
    const telLink = document.querySelector('.js-tel-link');

    // Если элемента нет на этой странице, просто выходим (защита от ошибок)
    if (!telLink) return;

    if (window.innerWidth < 768) {
        // Если экран меньше 768px — ставим иконку
        telLink.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
        `;
    } else {
        // Если экран большой — возвращаем текст обратно
        telLink.textContent = 'Call - 123 456 789';
    }
}

// Запускаем проверку при загрузке страницы
checkScreenSize();

// И следим за изменением размера экрана
window.addEventListener('resize', checkScreenSize);