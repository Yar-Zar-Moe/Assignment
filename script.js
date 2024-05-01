var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  isClick = true;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    isClick = true;
  }
}

