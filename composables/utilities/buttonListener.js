import { buttonAction } from "../buttonAction.js"
import { buyProduct } from "../products/buyProduct.js"
import { dumpProduct } from "../products/dumpProduct.js"
import { sellProduct } from "../products/sellProduct.js"
import { getLocal } from "./handleLocalStorage.js"

// Listen to which button has been pressed from options column
export function buttonListener() {   
    const buttons = document.querySelectorAll("button")
    buyProduct()
    sellProduct()
    dumpProduct()

    buttons.forEach(element => {
        element.addEventListener('click', () => {
            const buttonId = element.id
            const itemSelected = getLocal("selected-item")

            buttonAction(itemSelected, buttonId)
        })
    })
}

