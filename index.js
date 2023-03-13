import data from './assets/data/market.json' assert { type: 'json' };

// Locate DOM element container for "The Market" items
let marketList = document.getElementById("market-list");

// Create Div element for headers of "The Market" row items
let marketHeader = document.createElement("div")
marketHeader.classList.add("product-row-header")

// Set column headers
let columnHeaders = [
    "Name",
    "Qty",
    "Price"
]

// Create Span elements to display column headers
columnHeaders.forEach((header) => {
    let span = document.createElement("span")
    span.innerText = header
    marketHeader.appendChild(span)
})

// Add headers to container element
marketList.appendChild(marketHeader)

// Iterate through data for market place as individiual item objects
data.forEach((item) => {
    // create a div element to contain individual properties
    const itemRow = document.createElement("div")
    itemRow.classList.add("product-row-item")
    
    // pull keys from the item object as array
    const itemProps = Object.keys(item)

    // for each key in array create span element and set inner text to property value
    itemProps.forEach((key, index) => {
        // do not create span element if key is id
        if(key != "id") {
            let span = document.createElement("span")
            span.innerText = item[key]
            // add individual span to item row div
            itemRow.appendChild(span)
        }
    })

    // Set the item row's id to the product id (useful for later game logic and Dom access)
    itemRow.id = item.id
    
    // Add full item row to "The Market" container
    marketList.appendChild(itemRow)
})