let inputField = document.getElementById('number');
let submitButton = document.getElementById('submit');
let outputField = document.getElementById('result');

function isPrime() {
    let num = Number(inputField.value);
    outputField.innerHTML = '';

    if (num <= 1) {
        outputField.innerHTML = 'not prime';
        return;
    }

    if (num === 2) {
        outputField.innerHTML = 'prime';
        return;
    }

    if (num % 2 === 0) {
        outputField.innerHTML = 'not prime';
        return;
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            outputField.innerHTML = 'not prime';
            return;
        }
    }
    
    // If we get here, the number is prime
    outputField.innerHTML = 'prime';
}

// Fixed: Pass the function reference, don't call it
submitButton.addEventListener('click', isPrime);

inputField.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        isPrime();
    }
});