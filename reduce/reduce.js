// Ejemplo largo de como se hace con for
const totals = [1,2,3,4,5];
let suma = 0;
for (let i = 0; i < totals.length; i++)
	suma += totals[i];

console.log(suma);


// Ejemplo con reduce
const rta = totals.reduce((suma, item) => suma + item, 0);
console.log(rta);