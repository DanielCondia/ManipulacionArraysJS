const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

// Ejemplo de algoritmo largo con for
let rta = null;
for (let i = 0; i < products.length; i++) {
    let element = products[i];
    if (element.name === 'Hot cakes') {
        rta = element;
        break;
    }
}
console.log('for => ', rta);

// Ejemplo corto con find
const rta2 = products.find(item => item.name === 'Hot cakes');
console.log('find => ', rta2);

// Ejemplo para encontrar el index
const rta3 = products.findIndex(item => item.name === 'Hot cakes');
console.log('findIndex => ', rta3);
