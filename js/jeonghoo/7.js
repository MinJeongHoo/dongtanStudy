/**
 *
 * 먼저 ProtoType이란?
 * 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 Prototype(프로토타입) 객체 또는 줄여서 Prototype(프로토타입)이라 한다.
 *  
*/

// const x = {};
// const y = {};
// console.log(x);
// console.log(y);
// console.log(x.toString());
// console.log(x.__proto__ === y.__proto__);


// const array = [];
// console.log(array);


function CoffeeMachine(beans) {
  this.beans = beans;
  //Instance Level
  // this.makeCoffee = (shots) => {
  //   console.log('making...');
  // }
}

//공통인 function이 계속 들어가게됨 한번만 정의하고 싶다면

//Prototype member level
// CoffeeMachine.prototype.makeCoffee = (shots) => {
//   console.log('making....');
// }

// const machine1 = new CoffeeMachine(10);
// const machine2 = new CoffeeMachine(20);

// console.log(machine1);
// console.log(machine2);



// function LatteMachine(milk) {
//   this.milk = milk;
// }

// LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

// const latteMachine = new LatteMachine(123);
// latteMachine.makeCoffee();


function Ultra() { }
Ultra.prototype.ultraProp = true;
function Super() { }
Super.prototype = new Ultra();


/**
 * Class란 쉽게 설명하면 추상적인 틀 이 추상적인 틀이 생성될때 구체적인 객체로 변환
*/


// class Foo { }

// const foo = new Foo();

/**
 * constructor는 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 특수한 메소드 
 * private
 * static
 * get, set
 * extends super
 * 클래스 필드(class field)
 * 클래스 내부의 캡슐화된 변수를 말한다. 
 * 데이터 멤버 또는 멤버 변수라고도 부른다. 클래스 필드는 인스턴스의 프로퍼티 또는 정적 프로퍼티가 될 수 있다. 쉽게 말해, 자바스크립트의 생성자 함수에서 this에 추가한 프로퍼티를 클래스 기반 객체지향 언어에서는 클래스 필드라고 부른다.
 */


// 클래스 선언문
class Person {
  // constructor(생성자). 이름을 바꿀 수 없다.
  constructor(name) {
    // this는 클래스가 생성할 인스턴스를 가리킨다.
    // _name은 클래스 필드이다.
    this._name = name;
  }
  sayHello() {
    this.sayHelloTo();
  }
  sayHelloTo() {
    console.log('test');
  }
}

// 인스턴스 생성
const me = new Person('Lee');
console.log(me); // Person {_name: "Lee"}
me.sayHello();
//클래스 몸체(class body)에는 메소드만 선언할 수 있다. 클래스 바디에 클래스 필드(멤버 변수)를 선언하면 문법 에러(SyntaxError)가 발생한다.
class Foo {
  name = ''; // SyntaxError

  constructor() { }
}



// class Foo {
//   x = 1;            // Field declaration
//   #p = 0;           // Private field
//   static y = 20;    // Static public field
//   static #sp = 30;  // Static private field
//   // 2019/5 : Chrome 미구현
//   // static #sm() {    // Static private method
//   //   console.log('static private method');
//   // }

//   bar() {
//     this.#p = 10; // private 필드 참조
//     // this.p = 10; // 새로운 public p 필드를 동적 추가한다.
//     return this.#p;
//   }
// }

// const foo = new Foo();
// console.log(foo); // Foo&nbsp;{#p: 10, x: 1}

// console.log(foo.x); // 1
// // console.log(foo.#p); // SyntaxError: Undefined private field #p: must be declared in an enclosing class
// console.log(Foo.y); // 20
// // console.log(Foo.#sp); // SyntaxError: Undefined private field #sp: must be declared in an enclosing class
// console.log(foo.bar()); // 10

class Hyundae {
  constructor(foundYear) {
    this.foundYear = foundYear
  }
  test() {
    console.log('test');
  }
}

class HyundaeCar extends Hyundae {
  constructor(ceo) {
    super(1927);
    this.ceo = ceo;
  }
  introudece() {
    console.log(this.ceo);
  }
}

const hyundaeCar = new HyundaeCar('정인선');
hyundaeCar.test();
hyundaeCar.introudece();