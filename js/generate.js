/* 
* Javascript worker function to generate prime numbers
* Date: 31 December 2024
* Programmer: Mukul Dharwadkar
*/

/* Listen for messages from the main thread.
If the message command is "generate", call the generatePrimes()*/

addEventListener("message", (message) => {
    console.log("Message received");
    if (message.data.command === "generate") {
        generatePrimes(message.data.quota);
    }
});

//Generate primes
function generatePrimes(quota) {
    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    /* When finished, send a message to the main thread,
    including the number of primes we generated */
    postMessage(primes.length);
}