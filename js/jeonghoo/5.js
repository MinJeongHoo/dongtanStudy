/**
 * 프로퍼티란? 속성 이란 뜻, JS에서는 객체 내부의 속성을 의미
*/

/* 1.프로퍼티 축약 표현 */
let x = 1, y = 2;
const obj = { x, y };
console.log(obj); //{x:1,y:2}

/* 2.프로퍼티 키 동적 생성 */

// const prefix = 'prop';
// let i = 0;

// const obj = {
//   [`${prefix}-${++i}`]: i,
//   [`${prefix}-${++i}`]: i,
//   [`${prefix}-${++i}`]: i
// }

// console.log(obj)


/* 3.메소드 축약 표현 */

// var obj = {
//   name: 'Lee',
//   sayHi: function () {
//     console.log('Hi! ' + this.name);
//   }
// };

// obj.sayHi();


// const obj = {
//   name: 'Lee',
//   sayHi() {
//     console.log('Hi!' + this.name);
//   }
// }

// obj.sayHi();


/*4._proto_프로퍼티에 의한 상속*/

// var parent = {
//   name: 'parent',
//   sayHi: function () {
//     console.log('Hi! ' + this.name);
//   }
// };

// var child = Object.create(parent);
// child.name = 'child';

// parent.sayHi();
// child.sayHi();


// const parent = {
//   name: 'parent',
//   sayHi() {
//     console.log('Hi! ' + this.name);
//   }
// };

// const child = {
//   // child 객체의 프로토타입 객체에 parent 객체를 바인딩하여 상속을 구현한다.
//   __proto__: parent,
//   name: 'child'
// };

// parent.sayHi(); // Hi! parent
// child.sayHi();  // Hi! child