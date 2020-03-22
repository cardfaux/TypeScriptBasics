// Optional Chaining
const fetchedUserData = {
	id: 'u1',
	name: 'Adam',
	job: { title: 'CEO', description: 'My Own Company' }
};

console.log(fetchedUserData?.job?.title);

// Nullish Coersion
const userInputMaybeNullish = null;

// Default Value if it is Nullish or Falsey
const storedData = userInputMaybeNullish || 'DEFAULT';
// The ?? Says If It Is Null or Undefined Then Will Use The Fall Back Not Empty String
const storedDataIfNull = userInputMaybeNullish ?? 'DEFAULT';
