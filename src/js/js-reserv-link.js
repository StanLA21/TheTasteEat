
function checkScreenSize() {
    // Используем querySelector (ищет один первый элемент)
    const reservLink = document.querySelector('.js-reserv-link');

    // Если элемента нет на этой странице, просто выходим (защита от ошибок)
    if (!reservLink) return;

    if (window.innerWidth < 768) {
        // Если экран меньше 768px — ставим иконку
        reservLink.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <circle cx="16" cy="16" r="3"></circle>
    <polyline points="16 14 16 16 17 17"></polyline>
    </svg>
        `;
    } else {
        // Если экран большой — возвращаем текст обратно
        reservLink.textContent = 'Reservation';
    }
}

// Запускаем проверку при загрузке страницы
checkScreenSize();

// И следим за изменением размера экрана
window.addEventListener('resize', checkScreenSize);