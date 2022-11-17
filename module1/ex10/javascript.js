const diceNumber = parseInt(prompt("How many number of dice? "))
const eyesNumberInterest =  parseInt(prompt("The sum of the eye numbers of interest: "))
let sum = 0;

for(let i = 0; i<=10000; i++){
  let roll = 0;
  for(let d =1; d<=diceNumber; d++){
    roll += Math.floor(Math.random() * 6) +1;
    if (roll == eyesNumberInterest) {
      sum++
    }
  }
}
probability = (sum/10000)*100

document.querySelector('.probability').innerHTML = `Probability is ${probability}`;