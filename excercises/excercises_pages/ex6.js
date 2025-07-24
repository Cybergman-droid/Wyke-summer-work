let password = "password";
let input = document.getElementById("guess");
let checkButton = document.getElementById("check");
let result = document.getElementById("result");

let isPasswordCorrect = false;

function checkPassword() {
    do {
        let userInput = input.value;
        
        if (userInput === password) {
            result.textContent = "Correct password! Access granted.";
            isPasswordCorrect = true;
            return;
        } else {
            result.textContent = "Incorrect password. Try again.";
            input.value = "";
            input.focus();
            return;
        }
    } while (!isPasswordCorrect);
}

checkButton.addEventListener("click", checkPassword);

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});