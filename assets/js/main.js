$('.menu__open').click(function() {
    $('.menu__item + ul').removeClass('list--active');
    $('.menu__item').removeClass('menu__item--active');
    $('.menu__icon').toggleClass('menu__icon--active');
    $('.menu').toggleClass('menu--active')
});

$('.menu__item').click(function() {
    $(this).addClass('menu__item--active');
    $(this).next().addClass('list--active');
})