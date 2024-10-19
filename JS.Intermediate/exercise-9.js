function isSubstring(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") throw new Error("Inputs should be 'String' data types!");
    let str, subStr;
    if (str1.length < str2.length) {
        str = str2;
        subStr = str1;
    } else {
        str = str1;
        subStr = str2;
    }
    for (var i = 0; i < str.length; i++) {
        if (str.length - i < subStr.length) return false;
        if (str[i] === subStr[0]) {
            let poss = true;
            for (var j = 0; j < subStr.length; j++) {
                if (subStr[j] !== str[i + j]) {
                    poss = false;
                    break;
                }
            }
            if (poss) return true;
        }
    }
    return false;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first string: ", (str1) => {
    rl.question("Enter the second string: ", (str2) => {
        try {
            if (typeof str1 !== "string" || typeof str2 !== "string" || str1.trim() === "" || str2.trim() === "") throw new Error("Both inputs should be valid strings");
            const result = isSubstring(str1, str2);
            console.log(result ? "There exists a substring!" : "There is no substring!");
        } catch (error) {
            console.error(error.message);
        } finally {
            rl.close();
        }
    });
});
