import { setLocal } from "../utilities/handleLocalStorage.js";
import modelInventory from "../../assets/models/inventory.JSON" assert { type: 'json' };
import modelSelectedItem from "../../assets/models/selectedItem.JSON" assert { type: 'json' }

import dataStatus from "../../assets/data/status.json" assert { type: 'json' }

export function initInventory() {
    setLocal('inventory',modelInventory)
    setLocal('selected-item', modelSelectedItem)

    // temp local data
    setLocal('status', dataStatus)
}
