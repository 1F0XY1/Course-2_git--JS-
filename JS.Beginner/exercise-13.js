function numToString(num) {
    if (typeof num !== "number" || isNaN(num)) throw new Error("Input should be number!");
    return num.toString();
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (inputNum) => {
    try {
        const num = parseFloat(inputNum);
        console.log(`Concatenated to string: ${numToString(num)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
