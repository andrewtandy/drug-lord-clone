import { getLocal } from "../utilities/handleLocalStorage.js";

export function calculateSpace() {
    const inventory = getLocal('inventory')
    const stored = inventory.stored
    const limit = inventory.limit

    const spaceAvailable = limit - stored

    return spaceAvailable
}