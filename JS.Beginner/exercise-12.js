function randNum(l, r){
    if (typeof l != "number" || typeof r != "number") throw new Error ("Input numbers! (Integers or Float)");
    return l + Math.random() * (r - l + 1);
} 

try{
    console.log(randNum(30, 40));
} catch(error){
    console.error(error.message);
}

try{
    console.log(randNum("30", 40));
} catch(error){
    console.error(error.message);
}