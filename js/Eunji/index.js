const clickBtn = document.querySelector(".clickBtn");
const input = document.querySelector(".input");
const showResult = document.querySelector(".showResult");

let num;
let count = 5;
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function modal(str) {
  alert(str);
  count = 5;
  showResult.innerHTML = "Enter the number";
  input.value = "";
  num = 0;
}

clickBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!num) {
    num = randomNumber(1, 100);
  }

  if (count > -1) {
    if (input.value < num) {
      showResult.innerHTML = "UP";
      input.value = "";
    } else if (input.value > num) {
      showResult.innerHTML = "DOWN";
      input.value = "";
    } else {
      showResult.innerHTML = "Correct!";
      modal("Correct");
    }
  } else {
    modal("Game over");
  }
  count--;
});
