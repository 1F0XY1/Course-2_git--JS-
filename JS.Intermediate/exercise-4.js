function countEachWord(str) {
    if (typeof str !== "string") throw new Error("Input must be a string!");
    let myMap = new Map();
    let s = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ' || str[i] === '.' || str[i] === ',' || str[i] === '!' || str[i] === '?') {
            if (s.length > 0 && myMap.has(s)) myMap.set(s, myMap.get(s) + 1);
            else if (s.length > 0) myMap.set(s, 1);
            s = "";
            continue;
        }
        s += str[i];
    }
    if (s.length > 0 && myMap.has(s)) myMap.set(s, myMap.get(s) + 1);
    else if (s.length > 0) myMap.set(s, 1);
    return myMap;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence to count each word: ", (inputStr) => {
    try {
        if (typeof inputStr !== "string" || inputStr.trim() === "") throw new Error("Input must be a valid string!");
        console.log(`Word count: {${Array.from(countEachWord(inputStr)).map(([word, count]) => `${word}: ${count}`).join(', ')}}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
