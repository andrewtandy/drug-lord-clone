export function setLocal (key, val) {
    let value = JSON.stringify(val)
    return localStorage.setItem(key, value)
}

export function getLocal (key) {
    return JSON.parse(localStorage.getItem(key))
}