function findPrimes(limit) {
    if (typeof limit !== "number" || isNaN(limit)) throw new Error("Input must be a number");
    let res = [];
    for (var i = 2; i <= limit; i++) {
        let isPrime = true;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) res.push(i);
    }
    return res;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the upper limit to find prime numbers: ", (inputLimit) => {
    try {
        const limit = parseFloat(inputLimit);
        if (isNaN(limit)) throw new Error("Input must be a valid number!");
        console.log(`Prime numbers up to ${limit}: ${findPrimes(limit)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
