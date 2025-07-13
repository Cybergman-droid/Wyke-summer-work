let randnum = Math.floor((Math.random() * 10) + 1);
let submit = document.getElementById('check');

function check() {
    let userguess = document.getElementById('guess').value;
    if (userguess == randnum) {
        document.getElementById('result').innerHTML = 'You guessed it! Well done!';
    } else {
        document.getElementById('result').innerHTML = 'Try again';
    }
}

submit.addEventListener('click', check);
