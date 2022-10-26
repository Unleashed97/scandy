import * as customFunctions from './modules/functions.js'
customFunctions.scrollToTop()
customFunctions.handleTabs()

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

const swiper2 = new Swiper('.swiper--2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--2',
        prevEl: '.swiper-button-prev--2',
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
