import $ from 'jquery';
import 'slick-carousel';
import Swiper from 'swiper';
import AOS from 'aos';

AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$(document).ready(function () {

    const searchInputs = $('.search');
    const mainSliderSpeed = 3000;

    searchInputs.on('click', event => {
        if (event.target.localName !== 'input') {
            searchInputs.toggleClass('search_active');
        } else {
            searchInputs.addClass('search_active');
        }
    });

    const fillSliderBar = () => {
        let currentWidth = +$('.slider__progres_active').css('width').replace(/[^-\d\.]/g, '');
        let maxWidth = +$('.slider__progres').css('width').replace(/[^-\d\.]/g, '');
        let inc = maxWidth / 15;
        let stepWidth = currentWidth + inc;

        if (stepWidth <= maxWidth) {
            $('.slider__progres_active').css('width', `${stepWidth}px`);
            setTimeout(fillSliderBar, 1)
        } else {
            $('.slider__progres_active').css('width', `${maxWidth}px`);
            $('.slider__progres_active').css('width', '0');
        };
    };

    $('.slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider__prev'),
        nextArrow: $('.slider__next'),
        autoplay: true,
        autoplaySpeed: mainSliderSpeed,
        dots: true
    }).on('afterChange', () => {
        fillSliderBar();
    });
    fillSliderBar();

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
