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
var k = 0;
$('.menu__item-theme').click(function() {
    if (k == 0) {
        $('head').children('link[rel="stylesheet"]').attr('href', 'assets/css/style-dark.css');
        k = 1;
    } else {
        $('head').children('link[rel="stylesheet"]').attr('href', 'assets/css/style.css');
        k = 0;
    }
    $('.menu__open').trigger('click')
});
$('.buttons>.btn').click(function() {
    $('.buttons>.btn').removeClass('btn--active');
    $(this).toggleClass('btn--active');
});

$('.info-stand__print').click(function() {
    // подумать
    $(this).preventDefault();
    var file = $(this).attr('href');
    var file2 = window.open(file);
    file2.print();
});

$('.info-stand__scale').click(function() {
    $(this).parent('.info-stand__actions').siblings('.info-stand__photo').toggleClass('info-stand__photo--active')
})