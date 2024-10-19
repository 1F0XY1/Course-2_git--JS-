function sumOfArray(nums) {
    if (!Array.isArray(nums)) throw new Error("This is not an array!");
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== "number" || isNaN(nums[i])) throw new Error("Array elements must be numbers!");
        sum += nums[i];
    }
    return sum;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (inputNums) => {
    try {
        const numsArray = inputNums.split(',').map(num => parseFloat(num.trim()));
        console.log(`Sum of array: ${sumOfArray(numsArray)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
