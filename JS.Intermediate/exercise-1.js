function bubbleSort(nums){
    if (!(Array.isArray(nums))) throw new Error("Input must be an array");
    for (var i = 0; i < nums.length; i++){
        for (var j = i; j < nums.length; j++){
            if (nums[i] > nums[j]){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
}

let arr = [1, 5, 2, 3, 7, 8, 3, 10, 3];
try{
    console.log(bubbleSort(arr));
} catch(error){
    console.error(error.message);
}

try{
    console.log(bubbleSort([4]));
} catch(error){
    console.error(error.message);
}

try{
    console.log(bubbleSort(4));
} catch(error){
    console.error(error.message);
}

try{
    console.log(bubbleSort("[2,3,4,6,1,3,9,6]"));
} catch(error){
    console.error(error.message);
}