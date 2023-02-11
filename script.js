const button = document.getElementById("cool");

if (button) {
  button.addEventListener("mouseover", function () {
    if (button.style.transform) {
      button.style.transform = "";
    } else {
      button.style.transform = "translateX(100%)";
    }
  });
}