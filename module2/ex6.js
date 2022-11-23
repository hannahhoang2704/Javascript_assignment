function randomDice(){
  eye = Math.floor(Math.random() * 6) +1;
  return eye
}
const result = document.querySelector(".dice")
while (randomDice()!= 6){
  result.innerHTML += `<li>${eye}</li>`;
}
