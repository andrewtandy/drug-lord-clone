import { getLocal } from "../utilities/handleLocalStorage.js";

let buyButton = document.getElementById("buy")
let statusData = getLocal('status')

export function buyProduct() {
    // set the buy button to disabled as default
    buyButton.disabled = true
    buyAvailability()

}

function buyAvailability() {
    // get product id from selected item
    let selectedId = getLocal("selected-item").replace(/\D/g,'')
    let localMarketData = getLocal("local-market")
    
    for(let i = 0; i < localMarketData.length; i++) {
        if(localMarketData[i].id == selectedId && localMarketData[i].qty >= 1){
            let productPrice = localMarketData[i].price
            let cashAmount = statusData[0].cash
            
            let canAfford = Math.floor(cashAmount / productPrice)
    
            if(canAfford >= 1) {
                buyButton.disabled = false
            }
        }
    }    
}
