function countVowels(str) {
    if (typeof str !== "string") throw new Error("Input string!");
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var cnt = 0;
    for (var i = 0; i < str.length; i++) if (vowels.has(str[i])) cnt++;
    return cnt;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string to count vowels: ", (inputStr) => {
    try {
        console.log(`Number of vowels: ${countVowels(inputStr)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
