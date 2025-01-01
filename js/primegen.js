/* 
* Javascript to generate prime numbers using workers
* Date: 31 December 2024
* Programmer: Mukul Dharwadkar
*/

// Create a new worker, giving it the code in generate.js by calling it here.
const worker = new Worker("./generate.js");

function handleClickToGenerate() {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
        command: "generate",
        quota,
    });
}

function handleClickToReload() {
    document.querySelector("#user-input").value = 
    'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
}

/* When the user clicks on Generate prime, send a message to the worker.
The message command is "generate", and the message also contains "quota",
which is the number of primes to be generated.*/
document.querySelector("#generate").addEventListener("click", handleClickToGenerate);

/* When the worker sends a message back to the main thread, update the output box with a message
for the user, including the number of primes that were generated, taken from the message data */
worker.addEventListener("message", (message) => {
    document.querySelector("#output").textContent = 
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", handleClickToReload);