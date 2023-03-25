export function displayPrompt() {
    // const modalTemplate = document.querySelector('#modal-template')
    // const modal = modalTemplate.content.cloneNode(true)

    // document.body.appendChild(modal)
    const dialog = document.getElementById("modal")
    dialog.showModal()

    const closeButton = document.getElementById("modal-close")
    closeButton.addEventListener('click', () => {
        console.log('button clicked')
        dialog.close() 
        // document.body.removeChild(modal)
    })
    
}