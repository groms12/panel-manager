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
    var file = $(this).attr('data-file');
    // console.log(window.location.pathname);
    var location = 'https://groms12.github.io/panel-manager';
    file = location + file;

    function printFileFromUrl(fileUrl) {
        // Создаем скрытый iframe
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.right = '100%'; // Скрываем за пределами экрана
        iframe.style.bottom = '100%';
        iframe.style.border = 'none';
        iframe.src = fileUrl;

        // Ждем загрузки содержимого в iframe
        iframe.onload = () => {
            try {
                // Вызываем диалог печати для содержимого iframe
                iframe.contentWindow.print();
            } catch (error) {
                console.error('Ошибка печати:', error);
                alert('Не удалось открыть диалог печати. Возможно, файл недоступен или поврежден.');
            }
        };

        document.body.appendChild(iframe);
    }
    printFileFromUrl(file);
});

$('.info-stand__scale').click(function() {
    var photo = $(this).parent('.info-stand__actions').siblings('.info-stand__photo').children('img').attr('src');
    var name = $(this).parent('.info-stand__actions').siblings('.info-stand__name').text();
    $('.modal-stand__img>img').attr('src', photo);
    $('.modal-stand__title').text(name);
    $('.modal-stand').toggleClass('modal-stand--active');
});

$('.modal-stand__close').click(function() {
    $('.modal-stand').toggleClass('modal-stand--active');
})