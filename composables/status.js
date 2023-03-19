import data from '../assets/data/status.json' assert { type: 'json' };

// import { setLocal } from './utilities/handleLocalStorage.js';

export function generateStatusWindow () {
    // Locate DOM element container for status window
    let domContainer = document.getElementById("status-window");
    
    let statPanelClass = Object.keys(data[0])
    
    statPanelClass.forEach((key) => {
        const panel = document.createElement("div")

        let label = document.createElement("span")
        label.classList.add("stat-label")

        let value = document.createElement("span")

        label.innerText = `${key}: `
        value.innerText = `${data[0][key]}`

        panel.appendChild(label)
        panel.appendChild(value)
        panel.classList.add(`stat-${key}`, "stat-panel")

        domContainer.appendChild(panel)
    })
}