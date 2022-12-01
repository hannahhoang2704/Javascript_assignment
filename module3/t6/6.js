const button = document.querySelector('button');
function popup(event){
  alert("Button clicked!");
}

button.addEventListener('click',popup)