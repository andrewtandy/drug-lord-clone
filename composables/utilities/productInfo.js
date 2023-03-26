import data from '../../assets/data/productList.json' assert { type: 'json' };
import { getLocal } from './handleLocalStorage.js';

export function productInfo(selectedItem) {
    // pull the priduct id number from element id by regex non-numerical characters
    const selectedId = selectedItem.replace(/\D/g,'')

    // loop through product list data for id match
    for(let i = 0; i < data.length; i++){
        if(data[i].id == selectedId){
            let marketInfo = getMarketInfo(data[i].id)
            const marketQty = marketInfo.qty
            const marketPrice = marketInfo.price
            data[i].marketQty = marketQty
            data[i].marketPrice = marketPrice

            // return info on currently selected item to local storage
            return data[i]
        }
    }
}

// access local storage for current marketplace info (qty, price, etc.) by product id
function getMarketInfo(itemId) {
    const marketData = getLocal("local-market")
    for(let i = 0; i < marketData.length; i++){
        if(marketData[i].id == itemId) {
            return marketData[i]
        }
    }
}