import { buttonAction } from "../buttonAction.js"

// Listen to which button has been pressed from options column
export function buttonListener() {
    const buttons = document.getElementsByTagName("button")
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            // which button has been pressed - by id
            let buttonId = buttons[i].id
            // from local storage what item is currently selected
            let itemSelected = localStorage.getItem("selected-item")
            // process action on button pressed, send item data
            buttonAction(itemSelected, buttonId)
        })
    }
}

