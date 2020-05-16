import {mainCatalogItems, catalogItemArticles, catalogItem, btnClosePopup, popupMain, btnMainMenu, btnClosePopupCallMe, popupCallMe, btnPopupCallMe} from './UiElements'

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

btnClosePopup.addEventListener('click', () => {
    popupMain.classList.add('invisible')
})

btnMainMenu.addEventListener('click', () => {
    popupMain.classList.remove('invisible')
})

btnClosePopupCallMe.addEventListener('click', () => {
    popupCallMe.classList.add('invisible')
})

btnPopupCallMe.addEventListener('click', () => {
    popupCallMe.classList.remove('invisible')
})