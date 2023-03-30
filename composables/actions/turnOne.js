// File to store actions that need to take place on Turn One (i.e. setting up)

import { initInventory } from "../inventory/initInventory.js";
import { popInventory } from "../inventory/popInventory.js";

export function turnOne () {
    // Init local storage files from Models
    initInventory()

    // Populate storage files with Turn One data
    popInventory()
}