function isValidEmail(email) {
    if (typeof email !== "string") throw new Error("Input must be a string!");
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an email address: ", (inputEmail) => {
    try {
        if (typeof inputEmail !== "string" || inputEmail.trim() === "") throw new Error("Input must be a valid string!");
        console.log((isValidEmail(inputEmail))? "YES": "NO");
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
