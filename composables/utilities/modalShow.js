import { processOrder } from "../products/processOrder.js"
import { modalClose } from "./modalClose.js"

export function modalShow(item, action) {
    const dialog = document.getElementById("modal")

    dialog.showModal()

    const closeButton = document.getElementById("modal-close")
    closeButton.addEventListener('click', () => {
        modalClose() 
    })

    const okButton = document.getElementById("modal-confirm")
    okButton.addEventListener('click', () => {
        const inputElement = document.getElementById("productQty")
        const qty = inputElement.value
        processOrder(item, action, qty)

        modalClose()
    })

    const cancelButton = document.getElementById("modal-cancel")
    cancelButton.addEventListener('click', () => {
        modalClose()
    })
    
}