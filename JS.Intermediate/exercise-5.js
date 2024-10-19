function findPrimes(limit) {
    if (typeof limit != "number") throw new Error("Input must be a number");

    let res = [];
    for (var i = 2; i <= limit; i++) {
        let isPrime = true; 
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false; 
                break; 
            }
        }
        if (isPrime) res.push(i);
    }
    return res;
}


const l = 50;

try{
    console.log(`Prime numbers up to ${l}:`, findPrimes(l));
} catch(error){
    console.error(error.message);
}

try{
    console.log(`Prime numbers up to ${'50'}:`, findPrimes('50'));
} catch(error){
    console.error(error.message);
}

