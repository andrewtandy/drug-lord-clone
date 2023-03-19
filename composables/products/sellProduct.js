import { getLocal } from "../utilities/handleLocalStorage.js";

let sellButton = document.getElementById("sell")

export function sellProduct() {
    // set the buy button to disabled as default
    sellButton.disabled = true

    // get product id from selected item
    let selectedId = getLocal("selected-item").replace(/\D/g,'')
    let localMarketData = getLocal("local-market")

    for(let i = 0; i < localMarketData.length; i++) {
        // to enable sell button, following conditions must be met:
        // quantity of local market is >= 1
        // quantity of local inventory >= 1
        if(localMarketData[i].id == selectedId && localMarketData[i].qty >= 1) {
            sellButton.disabled = false
        }
    }

    // console.log(selectedId, localMarketData)
    

}
