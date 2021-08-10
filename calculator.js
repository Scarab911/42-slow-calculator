async function calculator(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a + b)
        }, 2000);
    })
}

module.exports = calculator;