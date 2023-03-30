import { getLocal, setLocal } from "../utilities/handleLocalStorage.js"

export function processOrder(item, action, qty) {
    if(action === 'dump') {
        updateInventory(item, qty)        
    }
}

function updateInventory(item, qty){
    const inventory = getLocal("inventory")
    const invProducts = inventory.products
    const itemIndex = invProducts.findIndex(product => product.id === item.id)

    inventory.products[itemIndex].qty -= qty

    setLocal("inventory", inventory)
}
