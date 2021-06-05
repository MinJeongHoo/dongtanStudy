# Symbol

## Symbol이란?

Javascript는 원래 6개의 타입을 가지고 있다.(*Boolean, null, undefined, Number, String, Object*)

## 생성 방법

`Symbol()` function을 통해 생성할 수 있다.

같은 프로퍼티를 중복으로 쓰지 않을 수 있어서, 이를 활용하여 언어의 확장성에 기여할 수 있다.

(항상 다른 value를 return한다!)

```js
let newSymbol1 = Symbol('hello');
let newSymbol2 = Symbol('hello');

// true
console.log(newSymbol1.toString() === newSymbol2.toString())

// false
console.log(newSymbol1 === newSymbol2)

```

Symbol.for() : string을 통해 Symbol 레지스트리에서 같은 값이 있다면 반환, 없다면 새로 생성한다.

```js

// 1은 없으므로 새로 생성
let newSymbol1 = Symbol.for('hello');
// 2는 있으므로 1을 반환
let newSymbol2 = Symbol.for('hello');

let o = {};
o[newSymbol1] = 1;

// 1 or undefined?
console.log(o[newSymbol2])

// true
console.log(newSymbol1.toString() === newSymbol2.toString())

// true
console.log(newSymbol1 === newSymbol2)

```

## Symbol의 사용

1. for/of loop

2. iterable object
