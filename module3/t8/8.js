const nr1Value = document.querySelector('input[id=num1]');            //select nr1
const nr2Value = document.getElementById('num2');                     //select nr2

const o = document.querySelector('#operation');

const button = document.getElementById('start');                      //select button for calculation
const pResult = document.getElementById('result')
function calculation(evt) {
    evt.preventDefault();
    n1 = parseInt(nr1Value.value);
    n2 = parseInt(nr2Value.value);
    if (o.value == "add"){
        pResult.innerText = `Result is ${n1+n2}`;
    } else if(o.value == "sub"){
        pResult.innerText = `Result is ${n1-n2}`;
    }else if (o.value == "multi"){
        pResult.innerText = `Result is ${n1*n2}`;
    }else{
        pResult.innerText = `Result is ${n1/n2}`;
    }
}
button.addEventListener('click', calculation);