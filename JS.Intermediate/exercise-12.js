function commonOfArrays(arr1, arr2){
    if (!(Array.isArray(arr1) && Array.isArray(arr2))) throw new Error("Inputs should be arrays!");

    let res = [];
    let mySet = new Set();
    for (var i = 0; i < arr1.length; i++) mySet.add(arr1[i]);
    for (var i = 0; i < arr2.length; i++) if (mySet.has(arr2[i])) res.push(arr2[i]);
    return res;
}


let arr1 = [1, 4, 6, 3 , 7];
let arr2 = [2, 5, 3, 2, 1, 10, 7, 88];
try{
    console.log(commonOfArrays(arr1, arr2));
} catch(error){
    console.error(error.message);
}

try{
    console.log(commonOfArrays(arr1, "[1, 2, 3, 4, 5]"));
} catch(error){
    console.error(error.message);
}