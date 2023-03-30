export function calculateStored(products) {
    let sum = 0

    for(const product in products){
        sum += products[product].qty
    }

    return sum
}