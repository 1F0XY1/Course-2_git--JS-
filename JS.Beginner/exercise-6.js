function isPalindrome(str) {
    if (typeof str !== "string") throw new Error("Input string!");
    var l = 0, r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string to check for palindrome: ", (inputStr) => {
    try {
        console.log(`Is palindrome: ${isPalindrome(inputStr)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
