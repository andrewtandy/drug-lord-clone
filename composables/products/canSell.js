export function canSell(selectedItem) {
    // Need to check conditions; have product to sell and market wants to buy

    // How many can be sold?
    const inventoryAmount = selectedItem.invQty

    // Available on market to be sold?
    const marketAmount = selectedItem.marketQty

    if(inventoryAmount >= 1 && marketAmount >= 1){
        return inventoryAmount
    }

}