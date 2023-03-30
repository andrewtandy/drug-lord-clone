import { getLocal, setLocal } from "../utilities/handleLocalStorage.js";
import { calculateStored } from "./calculateStored.js";

// temp data item
import inventory from "../../assets/data/inventory.json" assert { type: 'json' }

export function popInventory() {
    // set new values on localstorage item - temporary data item  
    setLocal('inventory', inventory)
    
    inventory.stored = calculateStored(inventory.products)
    
    setLocal('inventory', inventory)
}