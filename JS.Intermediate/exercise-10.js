function fibonnaciNums(n){
    if (typeof n != "number") throw new Error("Input must be a number!");

    let res = [0, 1];
    if (n == 1) return 0;
    if (n == 2) return res;

    for (var i = 2; i < n; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return res;    
}

let n = 20;
try{
    console.log(fibonnaciNums(n));
} catch(error){
    console.error(error.message);
}