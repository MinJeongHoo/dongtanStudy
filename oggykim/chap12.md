# 제너레이터

## 제너레이터란?

이터러블을 생성하는 함수로, 이터러블을 쉽게 구현할 수 있다.

```js
// *을 통해 제네레이터 함수를 정의
// yield를 통해 return을 설정
function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}


let primes = oneDigitPrimes();
primes.next().value // 2
primes.next().value // 3
primes.next().value // 5
primes.next().value // 7
primes.next().done // true

```

## 특징

- 코드 블록을 한번에 실행하지 않고, 블록의 실행을 중지, 필요한 시점에 재시작할 수 있다.

    -> 이를 통해 비동기 함수를 만들어낼 수 있다. 링크 : [ES6의 제너레이터를 사용한 비동기 프로그래밍](https://meetup.toast.com/posts/73)

- 이터레이터를 별도로 생성하지 않아도 된다.

- 활용 : [redux-saga](https://redux-saga.js.org/)

```js
// 무한 이터러블을 생성하는 함수
const infiniteFibonacci = (function () {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() { return this; },
    next() {
      [pre, cur] = [cur, pre + cur];
      // done 프로퍼티를 생략한다.
      return { value: cur };
    }
  };
}());

// infiniteFibonacci는 무한 이터러블이다.
for (const num of infiniteFibonacci) {
  if (num > 10000) break;
  console.log(num); // 1 2 3 5 8...
}

// 무한 이터러블을 생성하는 제너레이터 함수
const infiniteFibonacci = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
}());

// infiniteFibonacci는 무한 이터러블이다.
for (const num of infiniteFibonacci) {
  if (num > 10000) break;
  console.log(num);
}
```

## Reminder

- 제너레이터는 이터레이터를 쉽게 정의할 수 있는 방법이다.

- 함수지만, 실행하는 순간에 바로 실행하지 않고 실행을 `next()`로 조정할 수 있다 -> ES2017 전 비동기 코드에도 종종 활용되었다.

- next() 를 통해 다음 yield 표현식을 불러온다. 더 이상 yield가 없는 시점에 이터레이션이 끝난다.
