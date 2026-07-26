const menuBurger = document.querySelector('.burger-menu');
const menuBody = document.querySelector('.menu');

const body = document.body;


if (menuBurger && menuBody) {
    menuBurger.addEventListener("click", function (e) {
        body.classList.toggle('lock');
        menuBurger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
    menuBody.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('lock');
            menuBurger.classList.remove('_active');
            menuBody.classList.remove('_active');
        });
    });
}










// const container = document.querySelector('.btn__container');
// const btnOrder = document.querySelector('.btn__order');
// const btnMenu = document.querySelector('.btn__menu');

// // Клик по "Pizza-Menu" — двигаем вправо
// btnMenu.addEventListener('click', (e) => {
//     // e.preventDefault(); // Раскомментируйте, если не хотите перехода по ссылке #menu
//     container.classList.add('is-menu-active');
// });

// // Клик по "To order" — возвращаем назад
// btnOrder.addEventListener('click', (e) => {
//     // e.preventDefault();
//     container.classList.remove('is-menu-active');
// });