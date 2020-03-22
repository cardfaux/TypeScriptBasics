// Next GEN ES-6
const name2: 'Adam' = 'Adam';
let lastName: string = 'Hagood';

console.log(name2 + lastName);

const add5 = (a: number, b: number) => a + b;

const printAdd: (a: number | string) => void = (output: string | number) => {
	console.log(output);
};

printAdd(add5(5, 2));

const button: HTMLButtonElement | null = document.querySelector('button');

// To Avoid The Possible Null Error Put It In A Run Time If Check
// If The StrictNullChecks Is Set To True in TSConfig.TS
if (button) {
	button.addEventListener('click', (event: MouseEvent) => console.log(event));
}

const hobbies = ['sporst', 'cooking'];
const moreHobbies = ['hiking'];

moreHobbies.push(...hobbies);

const person8 = {
	name: 'Adam',
	age: 31
};

const copiedPerson = { ...person8 };

const addMe = (...numbers: number[]) => {
	return numbers.reduce((currentResult, currentValue) => {
		return currentResult + currentValue;
	}, 0);
};

const addedNumbers = addMe(5, 10, 7, 5, 2);
console.log(addedNumbers);
