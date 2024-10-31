const elementos = ['agua', 'fuego', 'aire'];

// Ejemplo de algoritmo largo con for
let elementosUnidos = '';
const separador = ' -- ';
for (let i = 0; i < elementos.length; i++) {
    let elemento = elementos[i];
    elementosUnidos += elemento.concat(separador);
}

console.log('for => ', elementosUnidos);

// Ejemplo corto con join
let rta2 = elementos.join(' -- ');
console.log('join => ', rta2);

// Ejemplo con split

const url = 'esto es una url en string';
let rta3 = url.split(' ');
console.log('split => ', rta3);

// Ejemplo con split y con Join
let rta4 = url.split(' ').join('/');
console.log('split && join => ', rta4);

let rta5 = rta4.split('/');
console.log(rta5);