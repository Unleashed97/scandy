export const scrollToTop = () => {
    const btn = document.querySelector('.footer__scroll-up')

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
}

export const handleTabs = () => {
    const tabsList = document.querySelectorAll('.faq__panel-top')

    tabsList.forEach((tab) =>
        tab.addEventListener('click', () => {
            const parentPanel = tab.closest('.faq__panel')
            const icon = parentPanel.querySelector('.faq__panel-icon')

            parentPanel.classList.toggle('active')

            if (parentPanel.classList.contains('active')) {
                icon.src = 'img/icons/minus.jpg'
            } else icon.src = 'img/icons/plus.jpg'
        }),
    )
}

export const handleBurgerMenu = () => {
    const burgerBtn = document.querySelector('.burger')
    const headerContent = document.querySelector('.header__content')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        headerContent.classList.toggle('active')
        document.body.classList.toggle('fixed')
    })
}
