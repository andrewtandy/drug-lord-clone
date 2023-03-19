import data from '../assets/data/productList.json' assert { type: 'json' };
import { setLocal, getLocal } from './utilities/handleLocalStorage.js';
import { createTable } from './productTable.js';

function localMarket () {
    let marketData = []
    for(let i = 0; i < data.length; i++) {
        marketData[i] = {
            "id":data[i].id,
            "name":data[i].name,
            "qty": Math.floor(Math.random() *10),
            "price": Math.floor(Math.random() * 1000) + 100
        }
    }
    setLocal("local-market", marketData)
}

export function generateLocalMarket () {
    localMarket()
    let marketData = getLocal('local-market')
    createTable('market-list', marketData)
}