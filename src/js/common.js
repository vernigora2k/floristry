import {mainCatalogItems, catalogItemArticles, catalogItem} from './UiElements'

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

addListenerToCatalogItem(0)()
addListenerToCatalogItem(1)()
addListenerToCatalogItem(2)()
addListenerToCatalogItem(3)()