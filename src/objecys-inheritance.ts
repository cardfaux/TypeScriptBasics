// Classes and Objects
class Department {
	private readonly id: number;
	// Protected Makes It Unavailable from Outside But Avilable To Who Extends This Base Class
	protected name: string;
	// Marking This Private Makes It only Accessible To Methods Inside The Class
	private employees: string[] = [];

	constructor(n: string, id: number) {
		this.name = n;
		this.id = id;
	}
	// Extra Type Safety , Dummy Parameter So When Describe is Called , Will Get an Error If In Wrong Context
	describe(this: Department) {
		console.log('Department: ' + this.name + this.id);
	}
	addEmployee(employee: string) {
		this.employees.push(employee);
		//this.id = 2
	}
	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepatment extends Department {
	admins: string[];
	constructor(id: number, admins: string[]) {
		super('IT', id);
		this.admins = admins;
	}
}

const newAccounting = new ITDepatment(4, ['James', 'Amanda']);

const accounting = new Department('Accounting', 5);

accounting.addEmployee('James');
accounting.addEmployee('Adam');
// Get An Error Saying it is Private
//accounting.employees[2] = 'Amanda';
accounting.printEmployeeInformation();

console.log(accounting);

accounting.describe();

//const accountingCopy = { name: 'Adam', describe: accounting.describe };
// Error From The Dummy Parameter Had To Add A Name Property Above For It To Work
//accountingCopy.describe();
