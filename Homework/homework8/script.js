let counter = 0;

const btn = document.querySelector('button');
btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    counter++;
    const div = document.querySelector("div");
    div.innerText = "Вы кликнули " + counter + " раз";
}