// 1. 매개 변수 기본값 ( Default parameter value )

// Short quiz

function sum(x, y) {
  return x + y;
}

console.log(sum(1)); // answer?

//따라서 매개변수에 적절한 인수가 전달되었는지 함수내에서 확인이 필요하다.

function sum(x, y) {
  x = x || 0;
  y = y || 0;

  return x + y;
}

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3

//ES6에서는 매개변수에 기본값을 할당하여 간소화하였다.

function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3

// Rest parameter
//Rest 파라미터(Rest Parameter, 나머지 매개변수)는 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를
//의미한다. Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest); // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest); // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);

//Rest 파라미터는 이름 그대로 먼저 선언된 파라미터에 할당된 인수를 제외한 나머지 인수들이 모두 배열에 담겨 할당된다.
//따라서 Rest 파라미터는 반드시 마지막 파라미터이어야 한다.

// Spread 문법
// Spread 문법(Spread Syntax, ...)는 대상을 개별 요소로 분리한다. Spread 문법의 대상은 이터러블이어야 한다.

console.log(...[1, 2, 3]); // 배열
console.log(..."Hello"); // 문자열
//map과set
console.log(
  ...new Map([
    ["a", "1"],
    ["b", "2"],
  ])
);
console.log(...new Set([1, 2, 3]));
console.log(...{ a: 1, b: 2 }); // 객체

// 앞에서 살펴본 rest parameter는 spread문법을 사용하여 파라미터를 정의한 것을 의미한다.

// Rest parameter 사용
function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest); // [ 2, 3 ]
}
foo(1, 2, 3);

// Spread 문법 사용

function foo(param, param2, param3) {
  console.log(param);
  console.log(param2);
  console.log(param3);
}
foo(...[1, 2, 3]);

// Rest parameter는 반드시 마지막이여야 하지만 spread operator는 제약이 없다\

foo(1, ...[2, 3], 4, ...[5]);

// Spread opertor 사용법

//1. concat (병합) 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.

// ES5
let arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6]));

// ES6

let arr = [4, 5, 6];
console.log([1, 2, 3, ...arr]);

//2. push 기존 배열에 개별 요소를 넣어 주는 것

// ES5

// ES5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

// apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 push 메소드에 전달된다.
Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

// ES6

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ...arr2는 [4, 5, 6]을 개별 요소로 분리한다
arr1.push(...arr2); // == arr1.push(4, 5, 6);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

//3. copy

// ES6
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
const copy = [...arr];

console.log(copy); // [ 1, 2, 3 ]

// 복사할때는 shallow copy를 하여 새로운 복사본을 생성한다. 따라서 같은 객체가 아님

// 객체 병합

// 객체의 병합
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 };
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added); // { x: 1, y: 2, z: 0 }
