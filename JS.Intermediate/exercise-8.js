function getUniqueValues(arr) {
    if (!Array.isArray(arr)) throw new Error("Input must be an array");
    let myMap = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "string" && typeof arr[i] !== "number") throw new Error("Array elements must be strings or numbers!");
        if (myMap.has(arr[i])) myMap.set(arr[i], myMap.get(arr[i]) + 1);
        else myMap.set(arr[i], 1);
    }
    let res = [];
    for (let [key, value] of myMap) if (value == 1) res.push(key);
    return res;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter values (numbers or strings) separated by commas: ", (input) => {
    try {
        const valuesArray = input.split(',').map(value => isNaN(value) ? value.trim() : parseFloat(value.trim()));
        console.log(`Unique values: ${getUniqueValues(valuesArray)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
