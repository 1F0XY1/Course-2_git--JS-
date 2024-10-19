function CelciusToFahrenheit(number) {
    if (typeof number !== "number" || isNaN(number)) throw new Error("Input number data type!");
    return (9 / 5) * number + 32;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a temperature in Celsius: ", (inputNumber) => {
    try {
        const num = parseFloat(inputNumber);
        console.log(`Temperature in Fahrenheit: ${CelciusToFahrenheit(num)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
