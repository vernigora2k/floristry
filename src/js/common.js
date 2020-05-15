import {mainCatalogItems, catalogItemArticles, catalogItem, closeBtnPopup, mainPopup, mainMenuBtn} from './UiElements'

addListenerToCatalogItem(0)()
addListenerToCatalogItem(1)()
addListenerToCatalogItem(2)()
addListenerToCatalogItem(3)()

function addListenerToCatalogItem(numOfItem) {
    return function() {
        catalogItem[numOfItem].addEventListener('mouseover', () => {
            mainCatalogItems[numOfItem].classList.add('darkened')
            mainCatalogItems[numOfItem].classList.add('border-around')
            catalogItemArticles[numOfItem].classList.add('active-on')
        })
        catalogItem[numOfItem].addEventListener('mouseout', () => {
            mainCatalogItems[numOfItem].classList.remove('darkened')
            mainCatalogItems[numOfItem].classList.remove('border-around')
            catalogItemArticles[numOfItem].classList.remove('active-on')
        })
    }
}

closeBtnPopup.addEventListener('click', () => {
    mainPopup.classList.add('invisible')
})

mainMenuBtn.addEventListener('click', () => {
    mainPopup.classList.remove('invisible')
})