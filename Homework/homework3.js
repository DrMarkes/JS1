let m;
let k = [];

for (let n = 10000; n <= 150000; n++) {
    m = 3 * n - 6; // (n-1) + (n-2) + (n-3)
    if (m % 100 === 52 && m.toString()[1] === '2') {
        k.push(m);
    }
}

console.log(k);