let start = parseInt(prompt("Start year: "))
const end = parseInt(prompt("End year: "))

for(start; start <= end; start++){
  if (start%400 === 0 || (start%4 === 0 && start %100 != 0)){
  const ul = document.querySelector(".list-leap-year");
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(start));
  ul.appendChild(li);
}}