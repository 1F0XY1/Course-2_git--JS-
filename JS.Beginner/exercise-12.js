function randNum(l, r) {
    if (typeof l !== "number" || isNaN(l) || typeof r !== "number" || isNaN(r)) throw new Error("Input numbers! (Integers or Float)");
    if (l === r) return l;
    return l + Math.random() * (r - l);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the lower bound: ", (inputL) => {
    rl.question("Enter the upper bound: ", (inputR) => {
        try {
            const lower = parseFloat(inputL);
            const upper = parseFloat(inputR);
            console.log(`Random number: ${Math.round(randNum(lower, upper))}`);
        } catch (error) {
            console.error(error.message);
        } finally {
            rl.close();
        }
    });
});
2