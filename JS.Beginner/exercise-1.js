function sumOfTwo(a, b) {
    if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b)) throw new Error("Input numbers! (Integers or Float)");
    return a + b;
}

console.log();
console.log("----------SUM OF TWO NUMS------------------");
console.log();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", (inputA) => {
    rl.question("Enter the second number: ", (inputB) => {
        try {
            const numA = parseFloat(inputA);
            const numB = parseFloat(inputB);
            console.log(`Result: ${sumOfTwo(numA, numB)}`);
        } catch (error) {
            console.error(error.message);
        } finally {
            rl.close();
        }
    });
});
