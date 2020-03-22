// Generics Flexible and Re-Useable Code
const namesArray: Array<string> = [];
namesArray[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This Is Done!');
	}, 2000);
});

promise.then((data) => {
	data.split(' ');
});

// Build A Generic Function
function merge<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Adam' }, { age: 31 });
mergedObj.age;
mergedObj.name;
