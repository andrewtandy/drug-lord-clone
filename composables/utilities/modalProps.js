import { canBuy } from "../products/canBuy.js"

export function modalProps(itemData, action) {
    // variables needed
    const canBuyAmount = canBuy(itemData)

    let elProps = {}
    switch(action) {
        default:
            console.log('No action defined for this yet')
            break
        case 'buy':
            elProps.title = `Buying ${itemData.name}`
            elProps.message = `${itemData.name} is currently selling for $${itemData.marketPrice}. With your available funds, you can buy ${canBuyAmount} units.`
            elProps.amount = canBuyAmount
            return elProps
        case 'sell':
            elProps.title = `Selling ${itemData.name}`
            elProps.message = `${itemData.name} is currently being bought for $${itemData.marketPrice}. You have ${itemData.invQty} units to sell ${calculateLossProfit(itemData)}.`
            elProps.amount = itemData.invQty
            return elProps
        case 'dump':
            elProps.title = `Dumping ${itemData.name}`
            elProps.message = `You have ${itemData.invQty} units of ${itemData.name}.`
            elProps.amount = itemData.invQty
            return elProps
    }
}

function calculateLossProfit(selectedItem) {
    const amount = selectedItem.marketPrice - selectedItem.invPrice
    let result = null

    if(amount < 0){
        result = 'loss'
    } else if (amount == 0) {
        return `and will break even in this deal.`
    } else {
        result = 'profit'
    }    
    
    const message = `for a ${result} of $${Math.abs(amount)} per unit.`
    return message
}