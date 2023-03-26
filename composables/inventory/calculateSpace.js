import { getLocal } from "../utilities/handleLocalStorage.js";

export function calculateSpace() {
    const inventory = getLocal('inventory')
    const stored = inventory[0].stored
    const limit = inventory[0].limit

    const spaceAvailable = limit - stored

    return spaceAvailable
}