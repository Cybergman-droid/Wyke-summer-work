let num = document.getElementById('number').value;
let submit = document.getElementById('submit');
let output = document.getElementById('result')

function countdown() {
    for(let i = num; i != 0; i--){
        output.innerHTML = i
        console.log(i)

    }

}

submit.addEventListener('click',countdown);