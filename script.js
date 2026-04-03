const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");

burger.onclick = () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
};

/* закрытие при клике вне меню */
overlay.onclick = () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
};

function toggleSub(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove("active");
    }
  }
});
