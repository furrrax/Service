//Отключение активного блока для моб
$(document).ready(function () {
    if ($(document).width() < 1190) {
        $('.price__left__item.activable.price__left__item--active').removeClass('price__left__item--active');
    }
});

//Слайдер
$('.slider__slider').slick({
    prevArrow: $('.slider__prev-btn'),
    nextArrow: $('.slider__next-btn'),
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    //focusOnSelect: true,
    //centerMode: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    variableWidth: true,
    responsive: [
    {
        breakpoint: 1190,
        settings: {
            //swipe: true,
            //swipeToSlide: true,
            //touchMove: true,
            waitForAnimate: true
        }
    },
    {
        breakpoint: 400,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        }
    },
    ]
});

//Фильтр кликов и swipe для слайдера
var dragging = 0;
    $(document).mousedown(function() {
        dragging = 0;
        $(document).mousemove(function(){
            dragging = 1;
    });
});

//Изменение активного слайда + линки
$('.slider__slide').click(function(e) {
    e.preventDefault();
    if (dragging == 0){

        var clicked = $(this);
        if(clicked.hasClass('slider__slide--active')){
            return false;
        }else{
            $('.slider__slide.slider__slide--active').removeClass('slider__slide--active');
            clicked.addClass('slider__slide--active');

            //PAGELINKS
            if(clicked.hasClass('slider__slide__iphone')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__imac')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__ipad')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__watch')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__samsung')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__xiaomi')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__honor')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__vertu')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__macbook')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__tv')) {
                document.location.href = "http://www.google.ru";
            } else if(clicked.hasClass('slider__slide__pc')) {
                document.location.href = "http://www.google.ru";
            }
        }
        e.stopPropagation();

        //console.log('click');
    }
    /* else{
        console.log('drag');
    } */
});

//Переключалка прайса
$('.price__left__item.activable').on('click', function (e) {
    if ($(document).width() < 1190) {
        return false;
    }
    var clicked = $(this);
    if(clicked.hasClass('price__left__item--active')){
        return false;
    }else{
        $('.price__left__item.activable.price__left__item--active').removeClass('price__left__item--active');
        clicked.addClass('price__left__item--active');

        var data_id = clicked.data('id');
        $('.price__right__table').css('display', 'none');
        $('.price__right__table-'+data_id).css('display', 'block');
    }
    e.stopPropagation();
});

//Переключалка прайса для моб
$('.price__left__item').on('click', function (e) {
    if ($(document).width() >= 1190) {
        return;
    }
    var clicked = $(this);
    if(clicked.hasClass('price__left__item--active')){
        clicked.removeClass('price__left__item--active');
    }else{
        $('.price__left__item.activable.price__left__item--active').removeClass('price__left__item--active');
        clicked.addClass('price__left__item--active');
    }
    e.stopPropagation();
});
