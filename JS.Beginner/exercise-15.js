function CurrTime() {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    return `Date: ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Press Enter to get the current date and time...", () => {
    try {
        console.log(CurrTime());
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});