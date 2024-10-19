function largestNumber(nums){
    if (!(Array.isArray(nums))) throw new Error("Input array!"); 
    let mx = -1e9;
    for (var i = 0; i < nums.length; i++) mx = Math.max(mx, nums[i]);
    return mx;
}

try {
    console.log(largestNumber([1, 5, 32, 6, 4, 9]));
} catch (error ){
    console.error(error.message);
}

try {
    console.log(largestNumber([7]));
} catch (error ){
    console.error(error.message);
}

try {
    console.log(largestNumber(7));
} catch (error ){
    console.error(error.message);
}