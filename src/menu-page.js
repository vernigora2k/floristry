import {btnMainMenuPage1, popupMain, btnClosePopup} from './js/UiElements'

btnMainMenuPage1.addEventListener('click', () => {
    popupMain.classList.remove('invisible')
})

btnClosePopup.addEventListener('click', () => {
    popupMain.classList.add('invisible')
})