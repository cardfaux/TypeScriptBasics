// Here We Assign The Return Type As A Number
function add3(n1: number, n2: number): number {
	return n1 + n2;
}

// Here We Say The Function Dosen't Return Anything
function printResult(num: number): void {
	console.log('Result:' + num);
}

// Here We Say The Function Returns Undefined So We Have To Return From The Function
function printResult2(num: number): undefined {
	console.log('Result:' + num);
	return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

printResult(add3(5, 12));

// This Sets The Type To A Function any Function
let combineValues: Function;
// Here We Set The Type To A Function With These Parameters and Return Type Function Types
let combineValues2: (a: number, b: number) => number;

combineValues = add3;
combineValues2 = add3;
//combineValues2 = printResult; // This Gives An Error

console.log(combineValues2(8, 8));

addAndHandle(10, 20, (result) => {
	console.log(result);
});
