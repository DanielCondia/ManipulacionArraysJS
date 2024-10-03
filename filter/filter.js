// Ejemplo de un filtrado largo sin filter

const words = ["spray", "elites", "limit", "apple", "exuberant"];
const newWords = [];

for (let i = 0; i < words.length; i++) {
	const word = words[i];
	if (word.length >= 6) newWords.push(word);
}

console.log(newWords);	// [ 'elites', 'exuberant' ]


// Ejemplo de la manera corta con filter

const filterNewWords = words.filter(word => word.length >= 6);

console.log(filterNewWords);	// [ 'elites', 'exuberant' ]

// Ejemplo con condicionales más complejas

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]

const newOrders = orders.filter(order => order.delivered && order.total >= 100);

console.log(newOrders);

/* OUTPUT
 [
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]**/


const search = (query) => {
	return orders.filter(order => {
		return order.customerName.includes(query);
	});
}

console.log(search('o'));

/* OUTPUT
[
  { customerName: 'Nicolas', total: 60, delivered: true },
  { customerName: 'Santiago', total: 180, delivered: true }
]
**/