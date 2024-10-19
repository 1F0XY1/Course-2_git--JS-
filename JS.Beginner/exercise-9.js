function FizzBuzz(start, end) {
    if (typeof start !== "number" || isNaN(start) || typeof end !== "number" || isNaN(end)) throw new Error("Input numbers!");
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the start number: ", (inputStart) => {
    rl.question("Enter the end number: ", (inputEnd) => {
        try {
            const startNum = parseInt(inputStart);
            const endNum = parseInt(inputEnd);
            FizzBuzz(startNum, endNum);
        } catch (error) {
            console.error(error.message);
        } finally {
            rl.close();
        }
    });
});
