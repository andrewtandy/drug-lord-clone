import { canBuy } from "../products/canBuy.js"

export function populateModal(item) {
    // parse the JSON data to use
    const itemData = JSON.parse(item)

    // variables needed
    const canBuyAmount = canBuy(itemData)

    // find the modal header
    const modalHeader = document.getElementById("modal-title")
    
    // create a span for the modal header title
    const span = document.createElement("span")
    const modalTitle = `Buying ${itemData.name}`   
    span.innerText = modalTitle

    // remove previous title and append with new title
    modalHeader.removeChild(modalHeader.lastChild)
    modalHeader.appendChild(span)

    // set new message for the modal
    
    // create a div for the modal message
    const messageDiv = document.createElement("div")
    messageDiv.classList.add("element-content")
    messageDiv.innerText = `${itemData.name} is currently selling for $${itemData.marketPrice}. With your available funds, you can buy ${canBuyAmount} units.`

    // remove previous message and append new message
    const modalContent = document.getElementById("modal-content")
    modalContent.removeChild(modalContent.lastChild)
    modalContent.appendChild(messageDiv)

    // find modal input seciton
    const modalInput = document.getElementById("modal-input")
    
    // set input field to default amount
    const inputField = document.createElement("input")
    inputField.type = "number"
    inputField.id = "productQty"
    inputField.classList.add("qty-width")
    inputField.value = canBuyAmount

    // remove and append
    modalInput.removeChild(modalInput.lastChild)
    modalInput.appendChild(inputField)    
}