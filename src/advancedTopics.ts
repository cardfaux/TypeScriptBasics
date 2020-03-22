// Advanced Typing Concepts

// Intersection Types
type Admin = {
	name: string;
	privileges: string[];
};
type Employee = {
	name: string;
	startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
	name: 'Adam',
	privileges: ['create-server'],
	startDate: new Date()
};
type CombinableTypes = string | number;
type Numeric = number | boolean;
type Universal = CombinableTypes & Numeric; // Builds The Intersecting Type Of The Two Union Types
// Type Guards Flexability of Union Types With Type Checking Where What Is Done Depends On The Type
function addCombinable(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
	console.log('Name: ' + emp.name);
	if ('privileges' in emp) {
		console.log('Privileges: ' + emp.privileges);
	}
	if ('startDate' in emp) {
		console.log('StartDate: ' + emp.startDate);
	}
}
class Car {
	drive() {
		console.log('Driving...');
	}
}
class Truck {
	drive() {
		console.log('Driving A Truck...');
	}
	loadCargo(amount: number) {
		console.log('Loading Cargo...' + amount);
	}
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000);
	}
}
useVehicle(v1);
useVehicle(v2);
// Discriminated Unions
interface Bird {
	type: 'bird';
	flyingSpeed: number;
}
interface Horse {
	type: 'horse';
	runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
	}
	console.log('Moving At Speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// Type Casting
// The ! tells typescript it will never yield null
const paragraph = document.getElementById('message-output');
const userInputElement = <HTMLInputElement>(
	document.getElementById('user-input')!
);
const userInputElementValues = document.getElementById(
	'user-input'
)! as HTMLInputElement;
userInputElement.value = 'Hi There';
// Could Also Use A If Check
if (userInputElementValues) {
	(userInputElementValues as HTMLInputElement).value =
		'Hi There From Values Two';
}
// Index Types
interface ErrorContainer {
	//id : number
	id: string;
	[prop: string]: string;
}
const errorBag: ErrorContainer = {
	id: 'u1',
	email: 'Not A Valid E-Mail',
	username: 'Must Start With Capitol Letter'
};
// Function Overloads Multiple Function Signatures
const resultOfCombinables = addCombinable('Adam', ' Hagood') as string;
resultOfCombinables.split(' ');
