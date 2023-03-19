export function createTable(containerId, data) {
    // Locate DOM element container for table items
    let domContainer = document.getElementById(containerId);
    
    // Create Div element for headers of table row items
    let tableHeader = document.createElement("div")
    tableHeader.classList.add("table-row","table-header")
    
    // Set column headers using first object in data JSON
    let columnHeaders = Object.keys(data[0])
    
    // Create Span elements to display column headers
    columnHeaders.forEach((header) => {
        if(header != "id") {
            let span = document.createElement("span")
            span.innerText = header
            tableHeader.appendChild(span)
        }
    })
    
    // Add headers to container element
    domContainer.appendChild(tableHeader)
    
    // Iterate through data and create row for each item
    data.forEach((item) => {
        // Don't create element if quantity at 0
        if(item.qty != 0){
            // create a div element to contain individual properties
            const itemRow = document.createElement("div")
            itemRow.classList.add("table-row", "table-item")
            
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
        
            // Set the item row's id to the container and product id (useful for later game logic and Dom access)
            itemRow.id = `${containerId}-${item.id}`
            
            // Add full item row to "The Market" container
            domContainer.appendChild(itemRow)
        }
    })
}