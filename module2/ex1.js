
const number = []

for (let i = 0; i <5; i++){
  number[i] = prompt(`Enter 5 numbers. Number ${i+1} :`)
}

for (let a = (number.length-1); a >=0; a--){
  console.log(number[a])
}