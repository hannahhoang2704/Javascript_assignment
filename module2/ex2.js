const nrParticipants = parseInt(prompt("How many participants?"));
names = [];
const result = document.querySelector ('.name');
for (let i = 0; i < nrParticipants; i++ ){
  name = prompt("Names: ")
  names.push(name)
}
names.sort();
console.log(names)
for (let a = 0; a < names.length; a++){
  result.innerHTML += `<li>${names[a]}</li>`;
}