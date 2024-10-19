function sumOfArray(nums){
    if (!(Array.isArray(nums))) throw new Error("This is not an array!");
    var sum = 0;
    for (var i = 0; i < nums.length; i++) sum += nums[i];
    return sum;
}

try{
    console.log(sumOfArray([1,2,3,4,5,6,7,8,9,10]))
} catch(error){
    console.error(error.message);
}

try{
    console.log(sumOfArray([8]))
} catch(error){
    console.error(error.message);
}

try{
    console.log(sumOfArray("[1,2,3,4,5,6,7,8,9,10]"))
} catch(error){
    console.error(error.message);
}
try{
    console.log(sumOfArray(8))
} catch(error){
    console.error(error.message);
}