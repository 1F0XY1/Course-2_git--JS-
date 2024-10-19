function getUniqueValues(arr){
    if (!(Array.isArray(arr))) throw new Error("Input must be an arrauy");

    let myMap = new Map();
    for (var i = 0; i < arr.length; i++){
        if (myMap.has(arr[i])) myMap.set(arr[i], myMap.get(arr[i]) + 1);
        else myMap.set(arr[i], 1);
    }

    let res = [];
    for (let [key, value] of myMap) if (value == 1) res.push(key);
    
    return res;
}

let arr = [1, 2, 2, 6, 3, 9, 6, 3, 7, 11, 62];
try{
    console.log(getUniqueValues(arr));
} catch(error){
    console.message(error.message);
}

try{
    console.log(getUniqueValues("[1, 2, 2, 6, 3, 9, 6, 3, 7, 11, 62]"));
} catch(error){
    console.error(error.message);
}