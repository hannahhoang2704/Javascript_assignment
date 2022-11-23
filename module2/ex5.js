let numbers =[];
let nr = parseInt(prompt("Enter the number:"));

while (numbers.includes(nr) == false){
  numbers.push(nr);
  nr = parseInt(prompt("Enter the number:"));
}

console.log("The number you entered has existed!");
numbers.sort((a,b)=>(a-b))
console.log(numbers);