const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  console.log(id);
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      event.target.classList.add("active");
    });
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  } else {
    // console.log(id);
  }
});
