import $ from 'jquery';
import 'slick-carousel';
import Swiper from 'swiper';

$(document).ready(function () {

    const searchInputs = $('.search');

    searchInputs.on('click', event => {
        if (event.target.localName !== 'input') {
            searchInputs.toggleClass('search_active');
        } else {
            searchInputs.addClass('search_active');
        }
    });

    $('.slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider__prev'),
        nextArrow: $('.slider__next')
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
    });

    $('.header-burger').on('click', () => {
        $('.sidebar').toggleClass('open');
        $('.header').toggleClass('fixed');
    });
});
