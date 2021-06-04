/**
 *
 * 먼저 ProtoType이란?
 * 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 Prototype(프로토타입) 객체 또는 줄여서 Prototype(프로토타입)이라 한다.
 *  
*/

const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);


const array = [];
console.log(array);


function CoffeeMachine(beans) {
  this.beans = beans;
  //Instance Level
  // this.makeCoffee = (shots) => {
  //   console.log('making...');
  // }
}

//Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making....');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);


function LatteMachine(milk) {
  this.milk = milk; 
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
latteMachine.makeCoffee();


/**
 * Class란 쉽게 설명하면 추상적인 틀 이 추상적인 틀이 생성될때 구체적인 객체로 변환
*/


class Foo{ }

const foo = new Foo();

/**
 * constructor는 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 특수한 메소드 
 *
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
}

// 인스턴스 생성
const me = new Person('Lee');
console.log(me); // Person {_name: "Lee"}