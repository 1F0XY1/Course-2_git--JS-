function calculate(a, b, operator){
    if (typeof a != "number" || typeof b != "number") throw new Error("Input numbers in first two inputs");
    if (typeof operator != "string") throw new Error("Input string to last variable shouel be +, -, / or *");

    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
    throw new Error("Input string to last variable should be +, -, /, *");
}

try {
    console.log(calculate(4, 76, '+'));
} catch (error){
    console.error(error.message);
}

try {
    console.log(calculate(5, 7, '-'));
} catch (error){
    console.error(error.message);
}

try {
    console.log(calculate(21, 4, '*'));
} catch (error){
    console.error(error.message);
}

try {
    console.log(calculate(21, 4, '/'));
} catch (error){
    console.error(error.message);
}

try {
    console.log(calculate(5, "76", '-'));
} catch (error){
    console.error(error.message);
}

try {
    console.log(calculate(5, 76, 'p'));
} catch (error){
    console.error(error.message);
}
