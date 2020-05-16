import {btnMainMenuPage1, popupMain, btnClosePopup, btnPopupCallMeMenuPage, popupCallMe, btnClosePopupCallMe} from './js/UiElements'

btnMainMenuPage1.addEventListener('click', () => {
    popupMain.classList.remove('invisible')
})

btnClosePopup.addEventListener('click', () => {
    popupMain.classList.add('invisible')
})

btnPopupCallMeMenuPage.addEventListener('click', () => {
    popupCallMe.classList.remove('invisible')
})

btnClosePopupCallMe.addEventListener('click', () => {
    popupCallMe.classList.add('invisible')
})