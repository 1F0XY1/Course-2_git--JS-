function sumOfTwo (a, b) {
    if (typeof a != "number" || typeof b != "number") throw new Error ("Input numbers! (Integers or Float)");
    return a + b;
}

try {
    console.log(sumOfTwo("3", 6)); 
} catch (error) {
    console.error(error.message); 
}

try {
    console.log(sumOfTwo(3, 6)); 
} catch (error) {
    console.error(error.message); 
}
try {
    console.log(sumOfTwo(3.7, 6)); 
} catch (error) {
    console.error(error.message); 
}