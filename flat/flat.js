// Ejemplo largo
let arreglo = [
	[1,2,3],
	[4,5,6,[4,5,6,[7,8,9]]],
	[7,8,9,[10,11,12,[13,14,15,[13,14,15]]]]
];
let arregloPlano = [];
function aplanarArreglo(subArreglo) {
	for (let i = 0; i < subArreglo.length; i++) {
		let valor = subArreglo[i];
		if (Array.isArray(valor)) {
			aplanarArreglo(valor);
			continue;
		}
		arregloPlano.push(valor);
	}
}
aplanarArreglo(arreglo);
console.log('arregloPlano => ', arregloPlano);

const rtaFlat = arreglo.flat(3); // Se específica hasta que nivel se tiene que aplanar.
console.log('rtaFlat => ', rtaFlat);