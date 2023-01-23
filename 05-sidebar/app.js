const side = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", (e) => {
  side.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", (e) => {
  side.classList.remove("show-sidebar");
});
