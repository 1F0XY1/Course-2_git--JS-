function removeDuplicates(nums) {
    if (!Array.isArray(nums)) throw new Error("Enter array!");
    if (nums.length === 0) return;
    nums.sort();
    let res = [nums[0]];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== res[res.length - 1]) res.push(nums[i]);
    }
    nums.length = 0;
    for (let x of res) nums.push(x);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (inputNums) => {
    try {
        const numsArray = inputNums.split(',').map(num => parseFloat(num.trim()));
        if (!numsArray.every(num => !isNaN(num))) throw new Error("Array elements must be numbers!");
        removeDuplicates(numsArray);
        console.log("Array after removing duplicates: ", numsArray);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
