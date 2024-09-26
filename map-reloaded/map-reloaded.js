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

const totales = orders.map(order => order.total); // Se obtienen solo los totales del arreglo de objetos
console.log(totales);


// Agregando un nuevo atributo a los objetos dentro del arreglo, sin modificar el arreglo original. Se produce un nuevo arreglo

/*
El primer ejemplo que se va a proporcionar, va a ser incorrecto, pues también se va a mutar el arreglo original.
El segundo ejemplo va a ser la forma correcta de agregar un nuevo atributo al arreglo de objetos si mutar el arreglo original.
*/

// Lo que normalmente se hace

const nuevoArreglo = orders.map((item) => {
	item.tax = 0.19; // Se agrega el nuevo atributo
	return item;
});

console.log('Arreglo Nuevo => ', nuevoArreglo); // Se imprime el nuevo arreglo con los datos mutados
console.log('Arreglo Original => ', orders); // Se imprime el arreglo original, en donde supuestamente deben estar los datos originales.


// La manera correcta de agregar el atributo sin mutar el arreglo original. Esto se hace desde ECM6 para adelante

const nuevoArreglo2 = orders.map((item) => {
	return {
		...item,	// Se clonan todos los atributos del objeto
		tax: 0.19	// Se crea el nuevo tag
	};
});

console.log('Arreglo Nuevo => ', nuevoArreglo2); // Se imprime el nuevo arreglo con los datos mutados
console.log('Arreglo Original => ', orders); // Se imprime el arreglo original, en donde supuestamente deben estar los datos originales.

/*
Explicación: La primera manera es incorrecta, porque se esta editando directamente el objeto.
 Recordar que un objeto es un espacio en memoria, y al editar el objeto directamente, se esta haciendo referencia a ese espacio en 
 memoria directamente, y se edita el objeto tanto en el arreglo original como en el nuevo arreglo.
 
 En cambio en el segundo ejemplo, con los tres puntos en el return ..., lo que se hace es clonar el objeto, al clonar el objeto se crea una nueva
 instancia o nueva referencia en memoria, y esa nueva referencia en memoria es la que se edita.
*/

