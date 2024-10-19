function isAnagram(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") throw new Error("Both inputs should be a string");
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return str1 === str2;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first string: ", (str1) => {
    rl.question("Enter the second string: ", (str2) => {
        try {
            if (typeof str1 !== "string" || typeof str2 !== "string" || str1.trim() === "" || str2.trim() === "") throw new Error("Both inputs should be a valid string");
            const result = isAnagram(str1, str2);
            console.log(result ? "They are anagrams!" : "They are not anagrams!");
        } catch (error) {
            console.error(error.message);
        } finally {
            rl.close();
        }
    });
});
