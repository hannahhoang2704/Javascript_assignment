'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const select = document.getElementById('target')
for (let i = 0; i < students.length; i++){
  const opt = document.createElement('option');
  opt.appendChild(document.createTextNode(students[i].name));
  opt.value = students[i].id;
  select.appendChild(opt);
  /*const callOption = document.getElementsByTagName('option');
  callOption.setAttribute('value',`${students[i].id}`)*/
}