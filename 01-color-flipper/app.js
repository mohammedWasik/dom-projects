const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const fateNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[fateNumber];
  color.textContent = colors[fateNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * 4);
};
