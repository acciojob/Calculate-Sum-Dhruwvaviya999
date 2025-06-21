//your JS code here. If required.

const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const calculateBtn = document.getElementById("sum_btn");
const resultP = document.getElementById("sum");

calculateBtn.addEventListener("click", () => {
	let sum = parseInt(num1.value) + parseInt(num2.value);
	resultP.textContent = sum;
})