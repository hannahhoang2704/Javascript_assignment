const side = parseInt(prompt("Number of sides of the dice: "))
function randomDice(numberOfSide){
  eye = Math.floor(Math.random() * numberOfSide) +1;
  return eye
}
const result = document.querySelector("#dice-with-sides")
while (randomDice(side)!= side){
  result.innerHTML += `<li>${eye}</li>`;
}