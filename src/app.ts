// Interfaces
// Not A BluePrint For A Object More Like A Custom Type
// Interfaces can only be described to define the structure of an object
// Can't Have Values Inside An Interface

interface Named {
	readonly nickName: string;
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
