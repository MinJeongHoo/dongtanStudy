# Promise

## Javascript에서의 비동기란?

![비동기 코드를 쓰는 이유](https://res.cloudinary.com/practicaldev/image/fetch/s--IB0Ikc71--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cl.ly/3N0P302P0H2g/Image%25202018-07-19%2520at%25209.16.55%2520AM.png)

링크 : [캡틴판교님의 비동기 처리 관련 글](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation)

![이벤트 루프의 이해](https://poiemaweb.com/img/event-loop.png)

## Javascript 내에서 비동기를 구현하는 방법

1. callback

    가장 기본적으로 비동기를 구현하는 방식(~ES6 이전)

    직관적이며, call back(나중에 실행해줘) 패턴으로 되어있으나, 그 구조가 복잡해질 수록 코드가 어려워짐.

    ![콜백 헬](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2362E03357889CBE1D)


    ```javascript
    // timer
    setTimeout(checkForUpdates, 6000);
    // event
    div.addEventListener('click', submitContent);
    // network event
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/bar/foo.txt", true);
    xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
        console.log(xhr.responseText);
        } else {
        console.error(xhr.statusText);
        }
    }
    };
    xhr.onerror = function (e) {
    console.error(xhr.statusText);
    };
    xhr.send(null); 
    ```

2. promise

    ES6에서 새로 추가된 비동기 계산을 위한 object로, 좀 더 쉬운 형태의 비동기 프로그래밍을 할 수 있음.

    단, 이 또한 callback에 대해 개선된 형태로, 결국 base는 callback과 유사함.

    미래의 결과 값에 대해서 먼저 promise object를 리턴하고, 만족, 불만족에 따라 **결과값** callback을 돌려주는 형태의 API.

    **promise chain**을 활용하면 가독성 높은 코드를 짤 수 있다.

    ```javascript
    getJSON(url).then(data => {
        // callback function
    })
    ```

    +) exception 처리 또한 쉽게 할 수 있음

    - `then()` 이후의 첫번째 인자 : 만족시켰을 때, 두번째 인자 : 만족시키지 않았을 때 사용

    ```javascript
    // fulfill, reject 방식
    getJSON(url).then(upload, handleError);
    // then - catch 방식
    getJSON(url).then(upload).catch(handleError);

    ```

    - promise chaining

    ```javascript
    fetch(something)
        .then(res => res.json())
        .then(document => {
            return render(document)
        })
        .catch(err => handle(err))
    ```

    - ES2018부터는 `.finally()` 또한 새로 추가가 되어서, try / catch / finally 형태도 가능

    - Promise.all()

    여러 개의 promise가 모두 충족(fulfill)되었을 때, 이에 대한 Promise를 리턴하는 형태

    promise가 아닐지라도 array에 포함된 모든 값들에 대해서 처리를 할 수가 있다.

    *ES2020 : Promise.allSettled()가 새로 나옴(모든 값들이 promise로 나오면 마무리)*

    - Promise.race()

    여러 개의 promise 중 단 하나라도 fulfill되었을 때 이를 return

    - Promise를 직접 만들어 사용하기

    ```javascript
    // 안의 모든 내용이 순차적으로 실행된 뒤 완료되어야 할 때
    const parseDicomFile = (file: File) => {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
        reader.readAsArrayBuffer(file);
        reader.onload = event => {
            const dicomRawBuffer = new Uint8Array(event.target.result);
            const dataSet = dicomParser.parseDicom(dicomRawBuffer);
            parsedDataSet.push(dataSet);
            resolve(dataSet);
        };
        });
    };
    ```

3. async/await

    링크 : [자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)

    ES2017에서 새로 추가된 내용으로, 동기 코드를 짜는 것과 비슷하게 비동기 코드를 짤 수 있음

    **사용방법** : 함수의 시작에 해당 함수가 `async`임을 명시하고, 그 뒤에 `await`를 사용해서 비동기 코드를 작성

    - `await` : promise를 가지고 있고, return value에 따라 fulfill, reject를 가지게 됨

    - `async` : 해당 function이 promise를 반환하는 함수임을 선언하는 것

    ```javascript
    async function getScore() {
        let res = await fetch(URL);
        let profile = await res.json();
        return profile.score;
    }
    ```

    async/await를 쓸 수 있을 때와 promise를 써야할 때를 구분해야 한다.

    -> async 함수 안에 감싸져 있지 않은 경우 await를 쓰지 않고 .then()을 이전과 같이 활용해야 함

    - 여러 promise를 await으로 감쌀 때

    ```js
    // 아래와 같이 짤 경우 불필요한 순서 발생
    let value1 = await getJSON(url1);
    let value2 = await getJSON(url2);

    // Promise.all() 활용
    let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)])
    ```

4. for/await

    ES2018에서 추가된 방법으로, for/of 문에서 조금 더 발전된 형태로 비동기 코드를 iterate할 수 있음

    ```js
    // for..of
    for(const promise of promises) {
        response = await promise;
        handle(promise);
    }

    // for/await
    for await(const response of promises) {
        handle(promise);
    }
    ```

## Reminder

- JS의 core에는 비동기를 처리하는 기능이 **전혀** 없다! -> 하지만, 대부분의 JS programming에서는 비동기 형태가 필요하다.

- 그러므로 이를 예전에는 event, callback으로 처리했었는데, 이렇게 되다보면 nesting이 생기고, error handling이 어려워진다.

- promise는 이를 chain 형태(then(), catch())를 활용하여 쉽게 순차적으로 처리할 수 있게 되며, 에러 핸들링도 쉬워진다.

- async / await는 이를 좀더 쉽게 동기 코드와 비슷하게 짤 수 있다. async로 선언하고, await로 promise를 지정해주면 된다.

- for / await loop 또한 활용이 가능하며, 이는 iterator를 활용하면 좀더 다양하게 활용할 수 있다.

## Question

- 기존 callback과 promise의 차이는?

- promise의 상태값에는 어떠한 것들이 있는가?

- promise를 사용하는 이유는?