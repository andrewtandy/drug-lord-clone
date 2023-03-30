import { getLocal } from "../utilities/handleLocalStorage.js";
import { canDump } from "./canDump.js";

export function dumpProduct() {
    const dumpButton = document.getElementById("dump")
    // set Dump button disabled by default
    dumpButton.disabled = true

    const selectedItem = getLocal("selected-item")

    if(canDump(selectedItem) >= 1) {
        dumpButton.disabled = false
    }
}