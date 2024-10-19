function flattenNestedArray(arr, res = []) {
    if (!Array.isArray(arr)) throw new Error("Input must be an array!");
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) flattenNestedArray(arr[i], res);
        else res.push(arr[i]);
    }
    return res;
}


//Input example: [1, [2, 3, 5], 5]
//Output: 1,2,3,5,5

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers or arrays separated by commas: ", (input) => {
    try {
        let parsedInput = JSON.parse(`[${input}]`);
        if (!Array.isArray(parsedInput)) throw new Error("Input must be an array!");
        const result = flattenNestedArray(parsedInput);
        console.log(`Flattened array: ${result}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
