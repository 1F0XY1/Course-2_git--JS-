function flattenNestedArray(arr, res = []){
    if (!(Array.isArray(arr))) throw new Error("Input must be an array!");
    
    for (var i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) flattenNestedArray(arr[i], res);
        else res.push(arr[i]);
    }
    return res;
}

let arr = [[1, 2], [[2, 7], 3, 5], [[[1, 3, 7, 4]], [2, 7, 8], 8, 10]];

try{
    arr = flattenNestedArray(arr);
    console.log(arr);
} catch(error){
    console.log(error.message);
}

try{
    console.log(flattenNestedArray(1));
} catch(error){
    console.error(error.message);
}

