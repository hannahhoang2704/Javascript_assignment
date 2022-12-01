const hover = document.getElementById('trigger')
const image = document.querySelector('img')
function onHover(evt){
  image.src = "img/picB.jpg"
}
function offHover(evt){
   image.src = "img/picA.jpg"
}
hover.addEventListener('mouseenter', onHover)
hover.addEventListener('mouseleave', offHover)
