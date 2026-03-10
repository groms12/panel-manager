$('.menu__open').click(function() {
    $('.menu__item + ul').removeClass('list--active');
    // $('.menu__item').removeClass('menu__item--active');
    $('.menu__icon').toggleClass('menu__icon--active');
    $('.menu').toggleClass('menu--active')
});

$('.menu__item').click(function() {
    if (!$('.menu').hasClass('menu--active')) {
        $('.menu').toggleClass('menu--active');
        $('.menu__icon').toggleClass('menu__icon--active');
    }
    $('.menu__item').removeClass('menu__item--active');

    $(this).addClass('menu__item--active');
    $(this).next().addClass('list--active');
});

$('.city').click(function() {
    $(this).children('.city__offices').toggleClass('city__offices--active');
    $(this).children('.city__arrow').toggleClass('city__arrow--active');
});