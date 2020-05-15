import {btnMainMenuPage1, popupMain} from './UiElements'

btnMainMenuPage1.addEventListener('click', () => {
    console.log(popupMain)
    popupMain.classList.remove('invisible')
})