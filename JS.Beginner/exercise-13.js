function numToString(num){
    if (typeof num != "number") throw new Error("Input should be number!");
    return num.toString();
}

try{
    console.log(numToString(6) + 1);
} catch(error){
    console.error(error.message);
}

try{
    console.log(numToString('6') + 1);
} catch(error){
    console.error(error.message);
}