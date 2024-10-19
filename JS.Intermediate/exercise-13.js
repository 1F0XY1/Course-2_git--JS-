function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    let clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a JSON object to clone: ", (inputObj) => {
    try {
        const obj = JSON.parse(inputObj);
        if (typeof obj !== 'object' || obj === null) throw new Error("Input must be a valid JSON object!");
        let copy = deepClone(obj);
        console.log("Original object:", obj);
        console.log("Cloned object:", copy);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
