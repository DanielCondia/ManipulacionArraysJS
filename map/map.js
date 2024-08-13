function imprimir(arrayOriginal, arrayNuevo) {
	console.log('Array Origina => ', arrayOriginal);
	console.log('Array Editado => ', arrayNuevo);
}

console.log('Ejemplo de manipulación del array sin el map');

const letras = ['a', 'b', 'c', 'd'];

// Ejemplo de manipulación del array sin el map
const nuevoArray = [];
for (let i = 0; i < letras.length; i++) {
	const elemento = letras[i];
	nuevoArray.push(elemento + '++');	// Editamos el elemento y se agrega un ++
}

imprimir(letras, nuevoArray);
console.log('\n');

// Ejemplo de manipulación del array con el map
console.log('Ejemplo de manipulación del array con el map');
const nuevoArray2 = letras.map(item => item + '++');
imprimir(letras, nuevoArray2);

