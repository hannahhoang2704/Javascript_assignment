evenArray = [];
function even(array){
  for (let i =0; i < array.length; i++){
    if (array[i] % 2 == 0){
      evenArray.push(array[i]);
    }
  }
  return evenArray
}
originalArray = [2,7,4,6,5,8,9]
a = even(originalArray)
console.log(originalArray)
console.log(evenArray)
