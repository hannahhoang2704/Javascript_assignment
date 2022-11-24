dogs = [];
const d = document.querySelector(".dog");
for (let i= 0; i<6; i++){
  dog = prompt(`Name of dog ${i+1} : `)
  dogs.push(dog)
}

dogs.sort()
dogs.reverse()

for(let a =0; a < dogs.length; a++){
  d.innerHTML += `<li>${dogs[a]}</li>`;
}