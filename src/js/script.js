import * as customFunctions from './modules/functions.js'
customFunctions.scrollToTop()
customFunctions.handleTabs()
customFunctions.handleBurgerMenu()

// vendors
const swiper1 = new Swiper('.swiper--1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--1',
        prevEl: '.swiper-button-prev--1',
    },
})

const swiper2 = new Swiper('.swiper--house-details', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--house-details',
        prevEl: '.swiper-button-prev--house-details',
    },
})
const swiper3 = new Swiper('.swiper--3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--3',
        prevEl: '.swiper-button-prev--3',
    },
})

const swiper4 = new Swiper('.swiper--4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--4',
        prevEl: '.swiper-button-prev--4',
    },
})

const swiper5 = new Swiper('.swiper--5', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--5',
        prevEl: '.swiper-button-prev--5',
    },
})
const swiperAboutSt = new Swiper('.swiper--about-st', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 22,
    loop: true,

    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        999: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        },

        1400: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--about-st',
        prevEl: '.swiper-button-prev--about-st',
    },
})
