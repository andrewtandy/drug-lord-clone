import data from './assets/data/market.json' assert { type: 'json' };

import { createTable } from './composables/productTable.js';
import { buttonAction } from './composables/buttonAction.js';

createTable('market-list', data);
createTable('inventory', data);

const buttons = document.getElementsByTagName("button")

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let buttonId = buttons[i].id
        buttonAction('Cocaine', buttonId)
    })
}

