/*최소값 최대값*/
const minNum = 1;
const maxNum = 100;
/*게임 카운트*/
let totalCnt = 1;
/*랜덤숫자*/
let randomNum = makeRandom(minNum, maxNum);
/*보여주는 화면*/
const text = document.querySelector('#text');
/*제출버튼*/
const summitBtn = document.querySelector('#summit');
summitBtn.addEventListener('click', checkNum);

/*숫자체크 함수*/
function checkNum(event) {
    event.preventDefault();
    const validNum = Number(document.querySelector('#count').value);
    console.log('입력한 숫자 ', validNum);
    console.log('랜덤숫자 ', randomNum);
    if (totalCnt < 6) {
        if (validNum !== randomNum) {
            text.innerHTML = `입력한 값이${validNum > randomNum ? '큽니다.' : '작습니다.'}`;
        }
        else {
            text.innerHTML = '정답입니다.';
        }
    }
    else {
        alert('시간종료');
        reset();
    }
    totalCnt++;

}
/*reset함수*/
function reset() {
    text.value = 'Hello men~!!';
    randomNum = makeRandom(minNum, maxNum);
}

/*random만드는 함수*/
function makeRandom(minNum, maxNum) {
    const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return randomNum;
}
