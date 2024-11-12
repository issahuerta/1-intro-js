

const sayHello = (name = 'Isa', age = 0) => `Hola mundo function mi nombre es ${name} y tengo ${age} años`;
const add = (a = 25, b = 12) => `El resultado de la suma de ${a} + ${b} es igual a ${a+b}`;
const add1 = (a = 25, b = 12) => `${a} + ${b} es igual a ${a+b}`;



const resul = sayHello('Issa', 25);
console.log(resul);

console.log(add1(25, 12));