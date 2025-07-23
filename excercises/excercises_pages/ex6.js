let password = "password";
let input = document.getElementById("guess");
let checkButton = document.getElementById("check");
let result = document.getElementById("result");

function checkPassword() {
    let userGuess = input.value;
    do {
        if (userGuess == password) {
            result.value = "Correct!";
        } 
        else {
            result.value = "Incorrect!";
        }
    }
    while (userGuess != password);
}

checkButton.addEventListener("click", checkPassword);