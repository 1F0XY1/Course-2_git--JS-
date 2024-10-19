function isEvenOdd(x) {
    if (typeof x !== "number" || x !== Math.round(x)) throw new Error("Input integers!");
    if (x % 2 === 0) return "The number is Even";
    return "The number is Odd";
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", (inputX) => {
    try {
        const numX = parseInt(inputX);
        console.log(isEvenOdd(numX));
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
