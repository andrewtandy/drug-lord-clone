import data from './assets/data/market.json' assert { type: 'json' };

import { createTable } from './composables/productTable.js';
import { buttonAction } from './composables/buttonAction.js';

createTable('market-list', data);
createTable('inventory', data);


// Functions for options column buttons - need refactoring and separating
const buttons = document.getElementsByTagName("button")

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let buttonId = buttons[i].id
        buttonAction('Cocaine', buttonId)
    })
}

// Functions for The Market and Inventory item selection - need refactoring and separating

// finds all items in a table on the page (both market and inventory)
const items = document.getElementsByClassName("table-item")

// placed an eventlistener on these items with actions to alter css classes
for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        removeClass(items, "selected")
        addClass(items[i], "selected")
        highlightAlternate(items[i])
    })
}

// function css highlights item in alternate window; the market/inventory
function highlightAlternate(element) {
    let elParent = element.parentElement
    let elId = element.id
    let itemNumber = elId.replace(/\D/g,'')

    let marketListItem = document.getElementById(`market-list-${itemNumber}`)
    let inventoryListItem = document.getElementById(`inventory-${itemNumber}`)

    switch(elParent.id) {
        case 'inventory':
            removeClass(items, "highlighted")
            addClass(marketListItem, "highlighted")
            break
        case 'market-list':
            removeClass(items, "highlighted")
            addClass(inventoryListItem, "highlighted")
            break
    }
}

function addClass(element, cssClass) {
    let elId = element.id
    let selectedEl = document.getElementById(elId)
    selectedEl.classList.add(cssClass)
}

function removeClass(elements, cssClass) {
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(cssClass)
    }
}

