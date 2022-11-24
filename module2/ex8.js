let string = "";
function concat(array){
  for(let i = 0; i < array.length; i++){
    string += array[i];
  }
  return string
}
s = concat(["Johnny", "DeeDee", "Joey", "Marky"])
document.getElementById('string').innerHTML = s;