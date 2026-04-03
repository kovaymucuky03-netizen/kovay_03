const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.onclick = () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
};

function toggleSub(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}