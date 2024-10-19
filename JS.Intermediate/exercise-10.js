function fibonnaciNums(n) {
    if (typeof n !== "number" || isNaN(n)) throw new Error("Input must be a number!");
    let res = [0, 1];
    if (n === 1) return [0];
    if (n === 2) return res;
    for (var i = 2; i < n; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return res;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of Fibonacci numbers to generate: ", (inputN) => {
    try {
        const n = parseFloat(inputN);
        if (isNaN(n)) throw new Error("Input must be a valid number!");
        console.log(`Fibonacci numbers: ${fibonnaciNums(n)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
