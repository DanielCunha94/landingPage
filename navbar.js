const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBar = document.getElementsByClassName("navbar-links")[0];
const header = document.getElementById("header");

toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

window.addEventListener("resize", () => {
  navBar.classList.remove("active");
});

window.addEventListener("scroll", () => {
  header.style.display = "none";
  setTimeout(() => {
    header.style.display = "block";
  }, 500);
});

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
