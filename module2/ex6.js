function randomDice(){
  eye = Math.floor(Math.random() * 6) +1;
  return eye
}
const x = document.querySelector(".dice")
while (randomDice()!= 6){
  x.innerHTML += `<li>${eye}</li>`;
}
