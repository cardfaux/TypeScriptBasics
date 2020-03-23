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
function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Adam' }, { age: 31 });
mergedObj.age;
mergedObj.name;

interface Lengthly {
	length: number;
}
function countAndDescribe<T extends Lengthly>(element: T): [T, string] {
	let descriptionText = 'Got No Value.';
	if (element.length > 0) {
		descriptionText = 'Got ' + element.length + ' elements.';
	} else if (element.length > 1) {
		descriptionText = 'Got ' + element.length + ' elements';
	}
	return [element, descriptionText];
}
console.log(countAndDescribe('Hi There!'));
console.log(countAndDescribe(['sports', 'cooking']));

// KeyOf Constraints
function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return obj[key];
}
extractAndConvert({ name: 'Adam' }, 'name');

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];
	addItem(item: T) {
		this.data.push(item);
	}
	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}
	getItems() {
		return [...this.data];
	}
}
const textStorage = new DataStorage<string>();
textStorage.addItem('James');
textStorage.addItem('Amanda');
textStorage.addItem('James');
console.log(textStorage.getItems());
const numberStorage = new DataStorage<number>();
const objStorage = new DataStorage<any>();
objStorage.addItem({ name: 'Adam' });
objStorage.addItem({ name: 'James' });
objStorage.removeItem({ name: 'Adam' });
console.log(objStorage.getItems());
