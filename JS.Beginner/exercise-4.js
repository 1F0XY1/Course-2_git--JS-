function CelciusToFahrenheit(number){
    if (typeof number != "number") throw new Error("Input number data type!");
    return (9 / 5) * number + 32;
}

try{
    console.log(CelciusToFahrenheit(12));
} catch (error){
    console.error(error.message);
}

try{
    console.log(CelciusToFahrenheit("12"));
} catch (error){
    console.error(error.message);
}