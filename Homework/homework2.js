let fedorPoints = 22;
let petrPoints = 12;

let win = '';

if(fedorPoints > 21) {
    win = "Петр";
} else if(petrPoints > 21) {
    win = "Федор";
} else if(fedorPoints >= petrPoints) {
    win = "Федор";
} else {
    win = "Петр";
}

console.log("Победил " + win);