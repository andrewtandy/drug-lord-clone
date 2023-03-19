export function displayPrompt() {
    const modalTemplate = document.querySelector('#modal-template')
    const modal = modalTemplate.content.cloneNode(true)

    document.body.appendChild(modal)
    const dialog = document.querySelector('.modal')
    dialog.showModal()

    const closeButton = dialog.querySelector('.close')
    closeButton.addEventListener('click', () => {
        dialog.close()
        document.body.removeChild(modal)
    })
    
}