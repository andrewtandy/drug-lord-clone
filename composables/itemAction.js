export function itemAction(item, action) {
    switch(action) {
        default:
            console.log(`Decided to do nothin' huh?!`)
            break
        case 'Buy':
            console.log(`ohhh you come here to buy suttin!? ${item}`)
            break
        case 'Sell':
            console.log(`huh, let's take a look then ${item}`)
            break
        case 'Dump':
            console.log(`flushing it away. like all my dreams ${item}`)
    }
}