const n1 = parseInt(prompt("Number 1: "))
const n2 = parseInt(prompt("Number 2: "))
const n3 = parseInt(prompt("Number 3: "))

function add(n1,n2,n3){
  return n1 + n2 + n3
}

function product(n1,n2,n3){
  return n1*n2*n3
}

function average(n1,n2,n3){
  return (n1+n2+n3)/3
}
document.querySelector('.operation').innerHTML = `Sum is ${add(n1,n2,n3)}, product is ${product(n1,n2,n3)} and average is ${average(n1,n2,n3).toFixed(2)}`;
