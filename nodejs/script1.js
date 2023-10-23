function sum() {
    let a = 5, b = 6, c;
    c = a + b
    return c;
}
let a = sum()

function sub() {
    let a = 10, b = 6, c;
    c = a - b
    return c;
}
let b = sub()
module.exports = { first: a, second: b };
