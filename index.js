import data from './assets/data/market.json' assert { type: 'json' };
import status from './assets/data/status.json' assert { type: 'json' };
import inventory from './assets/data/inventory.json' assert { type: 'json'};

import { setLocal, getLocal } from './composables/utilities/handleLocalStorage.js';

import { createTable } from './composables/productTable.js';
import { generateStatusWindow } from './composables/status.js';
import { buttonListener } from './composables/utilities/buttonListener.js';
import { generateLocalMarket } from './composables/localMarket.js';
import { buyProduct } from './composables/products/buyProduct.js';
import { sellProduct } from './composables/products/sellProduct.js';
import { productInfo } from './composables/utilities/productInfo.js';

generateLocalMarket()
generateStatusWindow()

// function to check what button has been pressed and process action related
buttonListener()

createTable('inventory', data);

setLocal('status',status)
setLocal('inventory', inventory)

// Functions for The Market and Inventory item selection - need refactoring and separating

// finds all items in a table on the page (both market and inventory)
const items = document.getElementsByClassName("table-item")

// placed an eventlistener on these items with actions to alter css classes
for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        removeClass(items, "selected")
        addClass(items[i], "selected")
        const prodInfo = productInfo(items[i].id)
        setLocal("selected-item", prodInfo)
        highlightAlternate(items[i])
        buyProduct()
        sellProduct()

    })
}

// function css highlights item in alternate window; the market/inventory
function highlightAlternate(element) {
    let elParent = element.parentElement
    let elId = element.id
    let itemNumber = elId.replace(/\D/g,'')

    let marketListItem = document.getElementById(`market-list-${itemNumber}`)
    let inventoryListItem = document.getElementById(`inventory-${itemNumber}`)

    if(inventoryListItem && marketListItem) {
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
