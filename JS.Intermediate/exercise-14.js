function throttle(callback, interval) {
    let previousTime = 0;

    return function (...params) {
        const currentTime = Date.now();

        if (currentTime - previousTime >= interval) {
            previousTime = currentTime;
            callback.apply(this, params);
        }
    };
}

function displayMessage(msg) {
    console.log(`${new Date().toLocaleTimeString()}: ${msg}`);
}

const throttledDisplay = throttle(displayMessage, 2000);

setInterval(() => throttledDisplay("Hello!"), 500);
