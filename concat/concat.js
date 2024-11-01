const numeros = [1,2,3,4];
const numeros2 = [5,6,7,8,9];

// ... clona los valores son copiar la instancia en memoria del elemento
let rta = [...numeros, ...'random'];
console.log(rta);

let rta2 = [...numeros, ...numeros2];
console.log(rta2);

let rta3 = numeros.concat(numeros2);
console.log('rta3 => ', rta3);

numeros.push([...numeros2]);
console.log(numeros);
