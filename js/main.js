let modeBtn = document.querySelector("#mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src =
      "https://static.thenounproject.com/png/4066357-200.png";
  } else {
    this.firstElementChild.src =
      "https://static.thenounproject.com/png/4157080-200.png";
  }
  document.body.classList.toggle("dark");
});