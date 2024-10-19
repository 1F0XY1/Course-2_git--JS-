function bubbleSort(nums) {
    if (!Array.isArray(nums)) throw new Error("Input must be an array");
    for (var i = 0; i < nums.length; i++) {
        for (var j = i; j < nums.length; j++) {
            if (typeof nums[j] !== "number" || isNaN(nums[j])) throw new Error("Array elements must be numbers!");
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
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
        console.log(`Sorted array: ${bubbleSort(numsArray)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
