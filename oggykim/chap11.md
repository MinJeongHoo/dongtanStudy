# 이터레이션과 for..of문

## 이터레이션이란?

일반적으로 사용하는 array, 그리고 string, set, map 모두 iterable하다.(ES6~)

이 얘기는, **이 데이터 구조의 내용들이 반복이 가능하다**는 의미고, 이는 for/of loop을 기저에서 활용하는 것.

이 외에도 ES6의 많은 기능의 기저에서는 이터레이션을 활용한다고 보면 된다.

![이터레이션의 활용](https://poiemaweb.com/img/iteration-protocol-interface.png)

## 이터레이션은 어떻게 작동하는가?

`next()`를 활용하여 처음부터 끝까지 반복한다(done이 나올 때까지)

```js
let iterable = [99];
let iterator = iterable[Symbol.iterator]();

// Symbol.iterator를 활용하여
// done()이 나오는 지점까지 next()를 통해 반복시키는 형태
for(let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value)
}
```

## for/of

for/in과는 전혀 다른 컨셉으로, 일반적인 for 반복문과는 전혀 다르다고 보면 됨

**iterable object**를 활용하고 있다.

활용 가능한 구조 : array, string, set, map

```js
let data = [1, 2, 3, 4, 5];
let sum = 0;
for(let element of data) {
    sum += element;
}
sum // -> 15

// TypeError : object는 iterable하지 않다.
let o = { x: 1, y: 2}
for(let element of o) {
    console.log(element)
}

// 그렇다면?

// array 형태로 변경해주면 가능해진다.
let o = { x: 1, y: 2}
for(let element of Object.keys(o)) {
    console.log(element)
}

// 만약 value를 사용하고 싶으면 Object.values(obj)로,
// 둘 다를 사용하고 싶으면 Object.entries(obj)를 사용하면 된다. 

```

## 지연 평가(Lazy evaluation)

실제로 그 데이터가 필요할 때까지 필요하지 않은 연산을 수행하지 않는 방법.

주로 함수형 프로그래밍의 장점을 활용하기 위해 사용하는데,

이터레이션을 활용하면 해당 제공되는 데이터가 필요한 시점에 계산을 시행하므로,

**불필요한 연산을 방지**할 수 있음

## Reminder

-for/of loop, ...spread 연산자는 모두 이터레이션 개념 위에서 동작한다.

- [Symbol.iterator]를 통해 반복을 동작하게 한다.

- `next()`를 통해 결과를 return할 수 있다.

- `done` 프로퍼티가 true가 되는 순간 이터레이션이 종료한다.