
function foo(n) {
    let mult = 1;
    if (!n) {
        return mult;
    } else {
        return foo(mult => mult * n);
    }
}

console.log(foo(5)());