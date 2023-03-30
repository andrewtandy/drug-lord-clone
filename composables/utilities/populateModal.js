import { modalProps } from "./modalProps.js"

export function populateModal(item, action) {
    // find the modal header
    const modalHeader = document.getElementById("modal-title")

    // get modal properties
    const props = modalProps(item, action)
    
    // create a span for the modal header title
    const span = document.createElement("span")
    const modalTitle = props.title
    span.innerText = modalTitle

    // remove previous title and append with new title
    modalHeader.removeChild(modalHeader.lastChild)
    modalHeader.appendChild(span)

    // set new message for the modal
    // create a div for the modal message
    const messageDiv = document.createElement("div")
    messageDiv.classList.add("element-content")

    const modalMessage = props.message
    messageDiv.innerText = modalMessage

    // remove previous message and append new message
    const modalContent = document.getElementById("modal-content")
    modalContent.removeChild(modalContent.lastChild)
    modalContent.appendChild(messageDiv)

    // find modal input section
    const modalInput = document.getElementById("modal-input")
    const inputDiv = document.createElement("div")
    inputDiv.classList.add("modal-input")
    
    // set message for input section
    const inputSpan = document.createElement("span")
    inputSpan.innerText = `How many do you wish to ${action}?`
    
    // set input field to default amount
    const inputField = document.createElement("input")
    inputField.type = "number"
    inputField.id = "productQty"
    inputField.classList.add("qty-width")
    inputField.value = props.amount
    
    inputDiv.appendChild(inputSpan)
    inputDiv.appendChild(inputField)
    
    // remove and append
    modalInput.removeChild(modalInput.lastChild)
    modalInput.appendChild(inputDiv)
    

}