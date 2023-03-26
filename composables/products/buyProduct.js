import { getLocal } from "../utilities/handleLocalStorage.js";

import { canBuy } from "./canBuy.js";

let buyButton = document.getElementById("buy")

export function buyProduct() {
    // set the buy button to disabled as default
    buyButton.disabled = true

    const selectedItem = getLocal('selected-item')
    
    if(canBuy(selectedItem) >= 1){
        buyButton.disabled = false
    }

}
