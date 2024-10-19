function isEvenOdd(x){
    if (typeof x != "number" || x != Math.round(x)) throw new Error("Input integers!");
    if (x % 2 == 0) return "The number is Even";
    return "The number is Odd";
}

try {
    console.log(isEvenOdd(6));
} catch(error){
    console.error(error.message);
}

try {
    console.log(isEvenOdd(5));
} catch(error){
    console.error(error.message);
}

try {
    console.log(isEvenOdd("3"));
} catch(error){
    console.error(error.message);
}

try {
    console.log(isEvenOdd(2.5));
} catch(error){
    console.error(error.message);
}