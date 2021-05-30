// const randNum = Math.floor(Math.random() * (max - min + 1)) + min;

const pcNum = Math.floor(Math.random() * 100) + 1;
let text = document.querySelector('h2');
const initialText = document.querySelector('h2').innerText;

let count = 0;

function checkNumber(event) {
  event.preventDefault();
  const userNum = event.target[0].value;

  if(userNum > pcNum) {
    text.innerHTML = '큽니다.'
    count++;
  } else if(userNum < pcNum) {
    text.innerHTML = '작습니다'
    count++;
  } else {
    text.innerHTML = '정답!'
    count = 0;
    text.innerHTML = initialText;
  }
  if(count > 4) {
    alert('종료되었습니다.');
    count = 0;
    text.innerHTML = initialText;
  }
}
