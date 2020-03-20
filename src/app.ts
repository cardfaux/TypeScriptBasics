let userInput: unknown;
let userInput2: any;
let userName: string;

userInput = 5;
userInput = 'Adam';
if (typeof userInput === 'string') {
	userName = userInput;
}

userName = userInput2;

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

const result2 = generateError('An Error Occured', 500);
console.log(result2);
