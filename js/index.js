function test() {
    let a = 3;
    function callB() {
        return a + 5;
    }
    return callB;
}
const aa = test();
console.log(aa());