function removeDuplicates(nums){
    if (!(Array.isArray(nums))) throw new Error("Enter array!");
    if (nums.length == 0) return;

    nums.sort();
    let res = [nums[0]];
    for (var i = 1; i < nums.length; i++) if (nums[i] != res[res.length - 1]) res.push(nums[i]);
    nums.length = 0;
    for (x in res) nums.push(x);
}

let arr = [1,1,6,7,3,6,8,2,0,9,10,3,3,6,34,5];
try {
    removeDuplicates(arr);
} catch(error){
    console.error(error.message);
}

for (var i = 0; i < arr.length; i++) console.log(arr[i]);


try {
    removeDuplicates("[1, 2, 3, 6, 6]");
} catch(error){
    console.error(error.message);
}
