import {mainCatalogItems, catalogItemArticles} from './UiElements'

console.log(mainCatalogItems[0])
mainCatalogItems[0].addEventListener('mouseover', () => {
    mainCatalogItems[0].classList.add('darkened')
    mainCatalogItems[0].classList.add('border-around')
    catalogItemArticles[0].classList.add('active-on')
})
mainCatalogItems[0].addEventListener('mouseout', () => {
    mainCatalogItems[0].classList.remove('darkened')
    mainCatalogItems[0].classList.remove('border-around')
    catalogItemArticles[0].classList.remove('active-on')
})