var foot = document.getElementsByClassName('rights');
//or with jquery: var foot = $('.rights');
document.getElementById("logo").addEventListener("mouseover", mouseOver);
document.getElementById("logo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("logo").style.top = "3em";
}

function mouseOut() {
  document.getElementById("logo").style.top = "0.8em";
}
