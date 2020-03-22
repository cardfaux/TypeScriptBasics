// Interfaces
// Not A BluePrint For A Object More Like A Custom Type
// Interfaces can only be described to define the structure of an object
// Can't Have Values Inside An Interface

interface Named {
	readonly nickName: string;
	outputName?: string;
}
interface Person {
	readonly name: string;
	readonly age: number;

	greet(phrase: string): void;
}

// Can Use The Interface To Type Check An Object Now Person Is The Type;
let user1: Person;
user1 = {
	name: 'Adam',
	age: 31,
	greet(phrase: string) {
		console.log(phrase + ' ' + this.name);
	}
};

// You See More Interfacs Than Types

interface Greetable extends Named {
	name: string;

	greet(phrase: string): void;
}

let user2: Greetable;
// Can not Assign To A ReadOnly Propertry
//user1.name = 'Adam'

class PersonMe implements Greetable {
	nickName: string;
	name: string;
	age: number = 31;
	outputName: string = 'ME';

	constructor(n: string, nickName: string) {
		this.name = n;
		this.nickName = nickName;
	}
	greet(phrase: string) {
		console.log(phrase + ' ' + this.name);
	}
}

user2 = new PersonMe('Adam', 'Hagood');
user2.greet('Hi There I Am');
console.log(user2);

type AddFn = (a: number, b: number) => number;
interface AddFn3 {
	// Below Is An Annonimous Function
	(a: number, b: number): number;
}

let add9: AddFn;
let add76: AddFn3;

add9 = (n1: number, n2: number) => {
	return n1 + n2;
};

add76 = (n1: number, n2: number) => {
	return n1 + n2;
};
