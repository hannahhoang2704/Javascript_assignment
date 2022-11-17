const calculate = confirm("Should I calculate the square root?")
if (calculate == true){
  let number = parseFloat(prompt("Enter a number: "))
  if (number<0){
  document.querySelector('.square-root').innerHTML = `The square root of a negative number is not defined`;
  }else {
    result = Math.sqrt(number).toFixed(2);
    document.querySelector('.square-root').innerHTML = `The square root of ${number} is ${result}`;
  }
}