
const list = ["First", "Second", "Third"];

for (let i = 0; i < list.length;i++){
  const li = document.createElement("li");
  n = `${list[i]} item`;
  pushContent = li.appendChild(document.createTextNode(n));
  document.getElementById('target').appendChild(li);
}

const lItem = document.getElementById('target').childNodes[1]
lItem.classList.add('my-item')