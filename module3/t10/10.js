const form = document.querySelector('form');
const fname = document.querySelector('input[name=firstname]');
const lname = document.querySelector('input[name=lastname]');
const print = document.getElementById('target');

function callName(evt){
  evt.preventDefault();
  print.innerText = `Your name is ${fname.value} ${lname.value}`;
};

form.addEventListener('submit', callName);