const a = 10;

let s = "s";

s = s + a;

b = 17;

b = b + 1;

b++;

b = ++b;

let li = [1, 2, 3, 4, 5, 6, 7, 8];

li.splice(3, 3);

li.push(10, 5e9);

let ob = {number:""};

ob.number = li.join("; ");

ob.newNumbers = ob.number + "; " + li[4] + "; " + li[4];

console.log(ob);
