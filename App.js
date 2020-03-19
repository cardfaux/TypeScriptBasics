// const button = document.querySelector('button');
// const input1 = document.getElementById('num1')! as HTMLInputElement; // Type Casting
// const input2 = document.getElementById('num2')! as HTMLInputElement; // The ! tells TS it will never be null
// // In JavaScript Inputs Are Always Strings, The Value Of Any Input Element Will Always Be A String
// function add(num1: number, num2: number) {
// 	return num1 + num2;
// }
// button.addEventListener('click', function() {
// 	// Here We Converted Both To Numbers With the +
// 	console.log(add(+input1.value, +input2.value));
// });
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
