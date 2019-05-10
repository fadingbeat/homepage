//logo_animation
document.getElementById("logo").addEventListener("mouseover", mouseOver);
document.getElementById("logo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("logo").style.top = "3em";
}

function mouseOut() {
  document.getElementById("logo").style.top = "0.8em";
}

//Click on button opens personal CV
function onClick() {
  window.open('file:///C:/CVPozegaNikolina.pdf');
}
