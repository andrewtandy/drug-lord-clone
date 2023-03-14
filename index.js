import data from './assets/data/market.json' assert { type: 'json' };

import { createTable } from './composables/productTable.js';
import { itemAction } from './composables/itemAction.js';

createTable('market-list', data);
createTable('inventory', data);

// TODO: refactor the below button code (consider actions such as vault and ship...)

const buyButton = document.querySelector('#buy-btn')
const sellButton = document.querySelector('#sell-btn')
const dumpButton = document.querySelector('#dump-btn')


buyButton.addEventListener("click", function() {
    itemAction('Cocaine', 'Buy')
})

sellButton.addEventListener("click", function() {
    itemAction('Cocaine', 'Sell')
})

dumpButton.addEventListener("click", function() {
    itemAction('Cocaine', 'Dump')
})

