const student_name = prompt("Student's name: ");
const randomClass = Math.floor(Math.random() * 4) + 1 ;
let result = `${student_name}, you are `;
switch (randomClass){
  case 1:
    result += 'Gryffindor';
    break;
  case 2:
    result += 'Slytherin';
    break;
  case 3:
    result += 'Hufflepuff';
  break;
  case 4:
   result += 'Ravenclaw';
  break;
}
document.querySelector('.hogwarts').innerHTML = result;
