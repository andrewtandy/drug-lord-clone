import { getLocal } from "../utilities/handleLocalStorage.js";
import { canSell } from "./canSell.js";

export function sellProduct() {
    let sellButton = document.getElementById("sell")

    // set the buy button to disabled as default
    sellButton.disabled = true

    // get product id from selected item
    const selectedItem = getLocal("selected-item")

    if(canSell(selectedItem) >= 1){
        sellButton.disabled = false
    }
}
