// smoothscroll
let scroll = new SmoothScroll('a[href*="#"]', {
    header: '[data-scroll-header]',
    speed: 1500,
});

// ハンバーガーメニュー
function hamburger() {
    document.querySelector('body').classList.toggle('menu-open');
}
document.querySelector('.mobile-menu__btn').addEventListener('click' , function () {
    hamburger();
} );

function overRay() {
    document.querySelector('body').classList.remove('menu-open');
}
document.querySelector('.mobile-menu__cover').addEventListener('click' , function () {
    overRay();
} );

// const menuOpen = document.querySelectorAll('.mobile-menu__btn, .mobile-menu__cover');

// menuOpen.forEach(function() {
//     hamburger();
// });