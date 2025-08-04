let numInput = document.getElementById('number');
let submit = document.getElementById('submit');
let output = document.getElementById('result')

function countdown() {
    let num = Number(numInput.value)
    output.innerHTML = ''
    for(let i = num; i != 0; i--){
        output.innerHTML += (`${i} <br>`)
        console.log(i);
    }

    if(num % 5 === 0){
        output.innerHTML += (`High five <br>`)
    }

}

submit.addEventListener('click',countdown)

numInput.addEventListener('keyup',function(event){
    if(event.key === 'Enter'){
        countdown();
    }
})