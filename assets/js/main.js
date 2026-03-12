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

$('.city__header').click(function() {
    $(this).siblings('.city__offices').toggleClass('city__offices--active');
    $(this).find('.city__arrow').toggleClass('city__arrow--active');
});

$('.office__name').click(function() {
    $(this).parent('.office__main').siblings('.office__dop').toggleClass('office__dop--active');
    $(this).children('.office__arrow').toggleClass('office__arrow--active');
});

$('.btn-open').click(function() {
    $('.city__arrow').addClass('city__arrow--active');
    $('.city__offices').addClass('city__offices--active');
});

$('.btn-close').click(function() {
    $('.city__arrow').removeClass('city__arrow--active');
    $('.city__offices').removeClass('city__offices--active');
});