
const year = parseInt(prompt("Enter a year: "))

if (year%400 === 0){
  document.querySelector('.leap-year').innerHTML = `It's a leap year`;
} else if (year%4 === 0 && year %100 != 0){
  document.querySelector('.leap-year').innerHTML = `It's a leap year`;
}else{
  document.querySelector('.leap-year').innerHTML = `It's not a leap year`;
}