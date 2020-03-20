function add(n1: number, n2: number) {
	const result = n1 + n2;
	return result;
}

// Runtime Type Check With Union Types
function combine(
	input1: number | string,
	input2: number | string,
	resultConversion: string
) {
	let result: any;
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString();
		+input2.toString();
	}
	// if (resultConversion === 'as-number') {
	// 	return parseFloat(result);
	// } else {
	// 	return result.toString();
	// }
	return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringages = combine('30', '26', 'as-number');
console.log(combineStringages);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
