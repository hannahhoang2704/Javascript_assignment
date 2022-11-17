let number = parseInt(prompt("Enter a number: "))
let primeNr = true;
function checkPrimeNumber(nr){
  if (nr > 2){
    for(let i = 2; i < nr; i++){
      if (nr%i == 0){
        primeNr = false;
        break;
      }
    }
  }else if (nr ==2){
    document.querySelector('.prime-nr').innerHTML = `${nr} is a prime number`;
  }else{
     primeNr = false;
  }
  if (primeNr == true){
    document.querySelector('.prime-nr').innerHTML = `${nr} is a prime number`;
  }else {
    document.querySelector(
        '.prime-nr').innerHTML = `${nr} is not a prime number`;
  }
}

checkPrimeNumber(number)