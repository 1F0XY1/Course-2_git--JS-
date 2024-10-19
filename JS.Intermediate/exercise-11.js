function capitalizeEachWord(str) {
    if (typeof str !== "string") throw new Error("Input must be 'string' data type!");
    let res = "", cnt = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') cnt = 0;
        if (cnt === 0 && str[i] !== ' ') {
            res += str[i].toUpperCase();
            cnt++;
            continue;
        }
        res += str[i];
    }
    return res;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence to capitalize each word: ", (inputStr) => {
    try {
        if (typeof inputStr !== "string" || inputStr.trim() === "") throw new Error("Input must be a valid string!");
        console.log(`Capitalized sentence: ${capitalizeEachWord(inputStr)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
