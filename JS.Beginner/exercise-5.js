function largestNumber(nums) {
    if (!Array.isArray(nums)) throw new Error("Input array!");
    let mx = -1e9;
    for (var i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== "number" || isNaN(nums[i])) throw new Error("Array elements must be numbers!");
        mx = Math.max(mx, nums[i]);
    }
    return mx;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (inputNums) => {
    try {
        const numsArray = inputNums.split(',').map(num => parseFloat(num.trim()));
        console.log(`Largest number: ${largestNumber(numsArray)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
