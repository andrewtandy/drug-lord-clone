import productList from '../../assets/data/productList.json' assert { type: 'json' }
import { buyProduct } from '../products/buyProduct.js'
import { dumpProduct } from '../products/dumpProduct.js'
import { sellProduct } from '../products/sellProduct.js'
import { getLocal, setLocal } from "./handleLocalStorage.js"

export function selectedItem() {
    const allTableItems = document.getElementsByClassName("table-item")

    // Loop through all table items/products in the dom and place a click event listener on each
    for(let item = 0; item < allTableItems.length; item++){

        allTableItems[item].addEventListener("click", function () {
            
            // remove and apply relevant CSS stylings to selected
            removeClass(allTableItems, "selected")
            removeClass(allTableItems, "highlighted")        
            addClass(allTableItems[item], "selected")
            
            // pull product ID number from element id attribute, return as Number type
            const itemId = Number(getProductId(allTableItems[item].id))
            
            const localMarketInfo = getLocal("local-market")
            const inventoryInfo = getLocal("inventory")
            
            // used Array.find method to simplify searching for item by id (Number!)
            const compiledData = () => {
                const localMarketItem = localMarketInfo.find(item => item.id === itemId);
                const inventoryItem = inventoryInfo.products.find(item => item.id === itemId);
                const product = productList.find(item => item.id === itemId);
              
                return {
                  id: itemId,
                  invPrice: inventoryItem?.price || 0,
                  invQty: inventoryItem?.qty || 0,
                  marketPrice: localMarketItem?.price || 0,
                  marketQty: localMarketItem?.qty || 0,
                  name: product?.name || null,
                };
            };
              
            setLocal("selected-item", compiledData())
            
            // selected item triggers button activation?
            buyProduct()
            sellProduct()
            dumpProduct()

            // data for styling switch
            const itemParent = allTableItems[item].parentElement.id;
            const altElementId = itemParent === 'inventory-list' ? `market-list-${itemId}` : `inventory-list-${itemId}`;
            const altElement = document.getElementById(altElementId);
            addClass(altElement, 'highlighted');
        })
    }
}

// function to add css class to dom element
function addClass(element, cssClass) {
    // if check to prevent error message
    if(element){
        element.classList.add(cssClass)
    }
}

// function to remove css class from all elements
function removeClass(elements, cssClass) {
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(cssClass)
    }
}

// function to strip non numerical characters, i.e. pull id number from element id
function getProductId(element) {
    return element.replace(/\D/g,'')
}