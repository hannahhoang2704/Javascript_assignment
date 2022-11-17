const rollsNumber = parseInt(prompt("Enter a number of dice rolls: "));
let sum = 0;

for(let i = 1; i<= rollsNumber; i++){
  sum += Math.floor(Math.random() * 6) + 1;
  document.querySelector('.rolls-sum').innerHTML = `Sum of all the dice rolls is ${sum}`;
  console.log(sum)
}