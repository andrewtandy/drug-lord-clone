import { modalClose } from "./modalClose.js"

export function modalShow() {
    const dialog = document.getElementById("modal")
    dialog.showModal()

    const closeButton = document.getElementById("modal-close")
    closeButton.addEventListener('click', () => {
        modalClose() 
    })

    const cancelButton = document.getElementById("modal-cancel")
    cancelButton.addEventListener('click', () => {
        modalClose()
    })
    
}