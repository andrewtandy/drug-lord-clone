export function buttonAction(item, action) {
    switch(action) {
        default:
            console.log(`Decided to do nothin' huh?!`)
            break
        case 'buy':
            console.log(`ohhh you come here to buy suttin!? ${item}`)
            break
        case 'sell':
            console.log(`huh, let's take a look then ${item}`)
            break
        case 'dump':buttonAction
            console.log(`flushing it away. like all my dreams ${item}`)
    }
}