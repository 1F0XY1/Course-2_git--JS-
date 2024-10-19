function commonOfArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new Error("Inputs should be arrays!");
    let res = [];
    let mySet = new Set();
    for (var i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] !== "string" && typeof arr1[i] !== "number") throw new Error("Array elements must be strings or numbers!");
        mySet.add(arr1[i]);
    }
    for (var i = 0; i < arr2.length; i++) {
        if (typeof arr2[i] !== "string" && typeof arr2[i] !== "number") throw new Error("Array elements must be strings or numbers!");
        if (mySet.has(arr2[i])) res.push(arr2[i]);
    }
    return res;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first array (elements separated by commas): ", (inputArr1) => {
    rl.question("Enter the second array (elements separated by commas): ", (inputArr2) => {
        try {
            const arr1 = JSON.parse(`[${inputArr1}]`);
            const arr2 = JSON.parse(`[${inputArr2}]`);
            if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new Error("Both inputs must be valid arrays!");
            console.log(`Common elements: ${commonOfArrays(arr1, arr2)}`);
        } catch (error) {
            console.error(error.message);
        } finally {
            rl.close();
        }
    });
});
