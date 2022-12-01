
const b = document.getElementById('start');
const p = document.getElementById('result');
let numbers;

function calculation(){
 let input = document.getElementById('calculation').value;
 if (input.includes('+')){
    numbers = input.split('+');
    const result = parseInt(numbers[0]) + parseInt(numbers[1]);
     p.innerHTML = `Result is ${result}`;
 }else if (input.includes('-')){
   numbers = input.split('-');
   const result = parseInt(numbers[0]) - parseInt(numbers[1])
   p.innerHTML = `Result is ${result}`;
 }else if (input.includes('/')){
   numbers = input.split('/');
   const result =  parseInt(numbers[0])/parseInt(numbers[1]);
   p.innerHTML = `Result is ${result}`;
 } else if (input.includes('*')){
   numbers = input.split('*');
   const result  =  parseInt(numbers[0])*parseInt(numbers[1]);
   p.innerHTML = `Result is ${result}`;
 }
  };


b.addEventListener('click', calculation);