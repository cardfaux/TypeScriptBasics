// These Are Given To The Properties By The Developer
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: Array<string>;
// 	role: Array<number | string>;
// } = {
// 	name: 'james',
// 	age: 32,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [2, 'author']
// };

// These Types Are Infered By TypeScript
const person: {
	name: string; // String
	age: number; // Number
	hobbies: string[]; // An Array Of Strings
	role: [number, string]; // Tuple Type An Array Of Two Elements one Number one String
} = {
	name: 'james',
	age: 32,
	hobbies: ['Sports', 'Cooking'],
	// TUPLE
	role: [2, 'author'] // Here TypeScript Knows it is An Array With 2 Items String Or Number
};

// Global Variables Basically Human Readable Mapped Values
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR
} // Behind The Scenes it is numbered 0 1 2 Can Assign Different Values If You Want

const person2 = {
	name: 'james',
	age: 32,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN
};

const dog = {
	name: 'bear',
	age: 4
};

let favoriteActivities: string[]; // An Array Of Strings
//favoriteActivities = 'sports' gives an error
favoriteActivities = ['sports', '7'];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase);
}

// This Is Not Supported In TypeScript
const person3 = {
	name: 'James',
	age: 30
};

console.log(person3.name); // Error is name does not exist on type object

// This Is Not Supported In TypeScript
const person4: { name: string; age: number } = {
	name: 'James',
	age: 30
};

console.log(person4.name); // Error is name does not exist on type object same as type object
