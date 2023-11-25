// PHONE CHECKER
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')


const regExp = /\+996 [2579] \d{2} /

//TAB SLIDER

const tabsContendCards = document.querySelectorAll('.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const tabsItemsParent = document.querySelector('.tab_content_items')
let currentIndex = 0
const hideTabsContentCards = () => {
    tabsContendCards.forEach((tabContendCard) => {
        tabContendCard.style.display = 'none'
    })
    tabsItems.forEach((tabsItem) => {
        tabsItem.classList.remove('tab_content_item_active')
    })
}
const showTabsContentCards = (indexElement = 0) => {
    tabsContendCards[indexElement].style.display = 'block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}
hideTabsContentCards()
showTabsContentCards()

tabsItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabsItem,tabsItemIndex) => {
            if (event.target === tabsItem) {
                hideTabsContentCards()
                showTabsContentCards(tabsItemIndex)
                currentIndex = tabsItemIndex
            }
        })
    }
}
const changeTab = () => {
    currentIndex = (currentIndex + 1) % tabsItems.length;
    hideTabsContentCards()
    showTabsContentCards(currentIndex)
}
setInterval(changeTab, 4000)