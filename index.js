import status from './assets/data/status.json' assert { type: 'json' };
import modelSelectedItem from './assets/models/selectedItem.json' assert { type: 'json' }

import { setLocal, getLocal } from './composables/utilities/handleLocalStorage.js';

import { generateStatusWindow } from './composables/status.js';
import { buttonListener } from './composables/utilities/buttonListener.js';
import { generateLocalMarket } from './composables/localMarket.js';

import { calculateStored } from './composables/inventory/calculateStored.js';
import { turnOne } from './composables/actions/turnOne.js';
import { popInvElement } from './composables/inventory/popInvElement.js';
import { selectedItem } from './composables/utilities/selectedItem.js';

// Turn One (later move to function that will check turn and appropriate action)
turnOne()
popInvElement()

generateLocalMarket()
generateStatusWindow()

// function to check what button has been pressed and process action related
buttonListener()

// Set local storage files
setLocal('status',status)
setLocal('selected-item', modelSelectedItem)

// Utilities
calculateStored()
selectedItem()
