
let number1 = document.getElementById("order_count1");
let number2 = document.getElementById("order_count2");
let sumnum = document.getElementById("sum");

number1.addEventListener("input", sum);
number2.addEventListener("input", sum);

function sum() {
    let num1 = parseFloat(number1.value) || 0;
    let num2 = parseFloat(number2.value) || 0;
    let total = num1 + num2;
    sumnum.innerHTML = total;
}
