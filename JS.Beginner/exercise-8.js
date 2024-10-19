function factorial(num){
    if (typeof num != "number") throw new Error("Input number!");

    if (num < 2) return 1;
    return (num * factorial(num - 1));
}

try{
    console.log(factorial(0));
} catch(error){
    console.error(error.message);
}

try{
    console.log(factorial(5));
} catch(error){
    console.error(error.message);
}

try{
    console.log(factorial("5"));
} catch(error){
    console.error(error.message);
}