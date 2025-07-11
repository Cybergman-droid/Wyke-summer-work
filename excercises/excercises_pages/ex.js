function checkNumIsEven() {
    num = document.getElementById('number').value;
    if (num % 2 == 0) {
        document.getElementById('result').innerHTML = 'The number is even';
    } else {
        document.getElementById('result').innerHTML = 'The number is odd';
    }    
}

checkButton = document.getElementById('check');
checkButton.addEventListener('click', checkNumIsEven);
