numbers = [];
let n = parseInt(prompt("Enter number. (Enter 0 to stop): "));
while (n!=0){
numbers.push(n);
n = parseInt(prompt("Enter number. (Enter 0 to stop): "));
}

console.log(numbers.reverse(numbers.sort((a,b) => a-b)));
