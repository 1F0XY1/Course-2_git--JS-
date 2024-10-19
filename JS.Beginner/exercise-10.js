function calculate(a, b, operator) {
    if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b)) throw new Error("Input numbers in first two inputs");
    if (typeof operator !== "string") throw new Error("Input string to last variable should be +, -, / or *");
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
    throw new Error("Input string to last variable should be +, -, /, *");
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", (inputA) => {
    rl.question("Enter the second number: ", (inputB) => {
        rl.question("Enter an operator (+, -, *, /): ", (operator) => {
            try {
                const numA = parseFloat(inputA);
                const numB = parseFloat(inputB);
                console.log(`Result: ${calculate(numA, numB, operator)}`);
            } catch (error) {
                console.error(error.message);
            } finally {
                rl.close();
            }
        });
    });
});
