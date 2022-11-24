let numbers =[];
let nr = parseInt(prompt("Enter the number (will stop if you enter existing number):"));

while (numbers.includes(nr) == false){
  numbers.push(nr);
  nr = parseInt(prompt("Enter the number(will stop if you enter existing number):"));
}

console.log("The number you entered has existed!");
numbers.sort((a,b)=>(a-b))
console.log(numbers);