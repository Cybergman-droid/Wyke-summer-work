let number = document.getElementById("number");
let generate = document.getElementById("generate");
let result = document.getElementById("result");
let max = document.getElementById("max");

function generateTimesTable() {
    result.innerHTML = "";
    for(let i = 1 ; i <= max.value; i++){
        let timesTable = number.value * i;
        result.innerHTML += (`${number.value} x ${i} = ${timesTable}<br>`);
    }
}

generate.addEventListener("click", generateTimesTable);

max.addEventListener('keyup',function(event){
    if(event.key === 'Enter'){
        generateTimesTable();
    }
})
number.addEventListener('keyup',function(event){
    if(event.key === 'Enter'){
        generateTimesTable();
    }
})