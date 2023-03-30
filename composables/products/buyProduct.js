import { getLocal } from "../utilities/handleLocalStorage.js";
import { canBuy } from "./canBuy.js";

export function buyProduct() {
    const buyButton = document.getElementById("buy")
    // set the buy button to disabled as default
    buyButton.disabled = true

    const selectedItem = getLocal('selected-item')
    
    if(canBuy(selectedItem) >= 1){
        buyButton.disabled = false
    }

}
