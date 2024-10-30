const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let i = 0; i < pets.length; i++) {
	let element = pets[i];
	if (element === 'dog') {
		includeInArray = true;
		break;
	}
}

console.log(includeInArray);

const rta2 = pets.includes('dog');
console.log(rta2);