function factorial(num) {
    if (typeof num !== "number" || isNaN(num)) throw new Error("Input number!");
    if (num < 2) return 1;
    return num * factorial(num - 1);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number to calculate its factorial: ", (inputNum) => {
    try {
        const num = parseInt(inputNum);
        console.log(`Factorial: ${factorial(num)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
