import { calculateSpace } from "../inventory/calculateSpace.js";
import { affordCheck } from "../status/affordCheck.js";

export function canBuy(selectedItem) {
    // Need to check against 3 conditions ; inventory space available, can we afford and marketplace quantity
    
    // How many can we afford?
    const canAfford = affordCheck(selectedItem.marketPrice)
    
    // How much space free to store?
    const inventorySpace = calculateSpace()
    
    // Marketplace quantity
    const marketQty = selectedItem.marketQty
    
    // Create an array of the values and find the lowest of the 3 checks
    const values = []  
    values.push(canAfford, inventorySpace, marketQty)
    const minValue = Math.min(...values)

    // Return the most amount can buy based on the lowest value in the array
    return minValue
}