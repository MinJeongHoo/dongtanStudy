/**
 * 디스트럭처링은 구조화된 배열 또는 객체를 파괴하여 개별적인 변수에 할당하는 것
*/

/*1. 배열 디스트럭처링*/
// const arr = [1, 2, 3];
// //배열의 인덱스를 기준으로 배열로부터 요소를 추출하여 변수에 할당
// //변수 one, two, three가 선언되고 arr(initializer(초기화자)) 가 Destructuring(비구조화) 되어 할당
// const [one, two, three] = arr;
// // 디스트럭처링을 사용할 때는 반드시 initializer(초기화자)를 할당해야 한다.
// // const [one, two, three]; // SyntaxError: Missing initializer in destructuring declaration
// console.log(one, two, tree);

// let x, y, z;

// [x, y] = [1, 2];
// console.log(x, y); // 1 2

// [x, y] = [1];
// console.log(x, y); // 1 undefined

// [x, y] = [1, 2, 3];
// console.log(x, y); // 1 2

// [x, , z] = [1, 2, 3];
// console.log(x, z); // 1 3

// // 기본값
// [x, y, z = 3] = [1, 2];
// console.log(x, y, z); // 1 2 3

// [x, y = 10, z = 3] = [1, 2];
// console.log(x, y, z); // 1 2 3

// // spread 문법
// [x, ...y] = [1, 2, 3];
// console.log(x, y); // 1 [ 2, 3 ]

// /*ex*/
// const today = new Date(); // Tue May 21 2019 22:19:42 GMT+0900 (한국 표준시)
// const formattedDate = today.toISOString().substring(0, 10); // "2019-05-21"
// const [year, month, day] = formattedDate.split('-');
// console.log([year, month, day]); // [ '2019', '05', '21' ]


// // ES6 Destructuring
// const obj = { firstName: 'Ungmo', lastName: 'Lee' };

// // 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
// // 변수 lastName, firstName가 선언되고 obj(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
// const { lastName, firstName } = obj;

// console.log(firstName, lastName); // Ungmo Lee



// // 프로퍼티 키가 prop1인 프로퍼티의 값을 변수 p1에 할당
// // 프로퍼티 키가 prop2인 프로퍼티의 값을 변수 p2에 할당
// const { prop1: p1, prop2: p2 } = { prop1: 'a', prop2: 'b' };
// console.log(p1, p2); // 'a' 'b'
// console.log({ prop1: p1, prop2: p2 }); // { prop1: 'a', prop2: 'b' }

// // 아래는 위의 축약형이다
// const { prop1, prop2 } = { prop1: 'a', prop2: 'b' };
// console.log({ prop1, prop2 }); // { prop1: 'a', prop2: 'b' }

// // default value
// const { prop1, prop2, prop3 = 'c' } = { prop1: 'a', prop2: 'b' };
// console.log({ prop1, prop2, prop3 }); // { prop1: 'a', prop2: 'b', prop3: 'c' }
// //객체 디스트럭처링은 객체에서 프로퍼티 이름(키)으로 필요한 프로퍼티 값만을 추출할 수 있다. 아래의 코드를 살펴보자.

// const todos = [
//   { id: 1, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: false },
//   { id: 3, content: 'JS', completed: false }
// ];

// // todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
// const completedTodos = todos.filter(({ completed }) => completed);
// console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]
// /*Array.prototype.filter 메소드의 콜백 함수는 대상 배열(todos)을 순회하며 첫 번째 인자로 대상 배열의 요소를 받는다. 이때 필요한 프로퍼티(completed 프로퍼티)만을 추출할 수 있다.

// 중첩 객체의 경우는 아래와 같이 사용한다.*/

// const person = {
//   name: 'Lee',
//   address: {
//     zipCode: '03068',
//     city: 'Seoul'
//   }
// };

// const { address: { city } } = person;
// console.log(city); // 'Seoul'



/*가족에 정보에 대한 프로퍼티를 만드시오. 단 부모로 부터 상속 받을것*/
// var people = [
//   {
//     name: "Mike Smith",
//     family: {
//       mother: "Jane Smith",
//       father: "Harry Smith",
//       sister: "Samantha Smith"
//     },
//     age: 35
//   },
//   {
//     name: "Tom Jones",
//     family: {
//       mother: "Norah Jones",
//       father: "Richard Jones",
//       brother: "Howard Jones"
//     },
//     age: 25
//   }
// ];

// for (const { name: n, family: { father: f } } of people) {
//   console.log("Name: " + n + ", Father: " + f);
// }



/**
 *  1 ~ 100 까지 수중 랜덤으로 하나가 선택되고 그 수를 맞추는 게임
 * 총 10번의 기회가 주어짐
 * 숫자를 입력 후 버튼을 클릭하면 화면에 출력 (숫자보다 큽니다. 작습니다. 정답입니다.)
 * 만약 10번의 기회가 끝나면 alert 종료 되었습니다.=> Reset
 *
 * Math.floor(Math.random()*(max-min+1)) + min; 랜덤 숫자 생성시 이걸로
*/

