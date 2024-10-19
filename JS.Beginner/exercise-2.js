function reverse(str) {
    if (typeof str !== "string") throw new Error("Input \"String\" data type!");
    let res = "";
    for (var i = str.length - 1; i >= 0; i--) res += str[i];
    return res;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string to reverse: ", (inputStr) => {
    try {
        console.log(`Reversed string: ${reverse(inputStr)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
