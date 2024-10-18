// Ejemplo algoritmo largo
const numbers = [1,2,3,4,5];
let rta = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}

console.log(rta);

// Ejemplo algoritmo corto
let rta2 = numbers.some(item => item % 2 === 0);
console.log(rta2);