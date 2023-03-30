import { createTable } from "../productTable.js"
import { getLocal } from "../utilities/handleLocalStorage.js"

export function popInvElement() {
    // Get latest info from local storage 
    const element = document.getElementById("inventory")
    const invStat = getLocal('inventory')

    const elHeader = document.createElement("span")
    elHeader.classList.add("element-header")
    elHeader.innerText = `${invStat.name} (${invStat.stored}/${invStat.limit})`

    element.appendChild(elHeader)

    const elContent = document.createElement("div")
    elContent.id = "inventory-list"
    elContent.classList.add("element-content")
    
    element.appendChild(elContent)

    createTable("inventory-list", invStat.products)
}