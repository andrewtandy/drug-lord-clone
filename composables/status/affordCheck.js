import { getLocal } from "../utilities/handleLocalStorage.js";

export function affordCheck(marketPrice) {
    const cash = getLocal('status')[0].cash
    
    const affordQty = Math.floor(cash / marketPrice)

    return affordQty
} 