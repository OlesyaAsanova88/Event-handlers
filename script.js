const button = document.getElementById('btn');
let inputRange = document.getElementById('range');
let inputText = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
let eBtn = document.getElementById('e_btn');
const newElem = document.createElement('li');



button.addEventListener('click', function () {
    square.style.backgroundColor = inputText.value
});

eBtn.style.display = "none";


inputRange.addEventListener('click', function () {
    circle.textContent = inputRange.value + " %";
    circle.style.width = inputRange.value + "%";
});





