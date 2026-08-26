/*const frutas = [];
const frutas = new Array();
const frutas = new Array('banana', 'maçã')
-------------------------------------------------------------
No javaScript, não precisa determinar o tipo da constante, diferente da linguagem c e c++.
A const LET, pode ser alterada.
-------------------------------------------------------------*/

let frutas = ['banana', 'maçã', 'morango', 7, true, [1, 3]];

//frutas[10] = 'banana'

//console.log(frutas);
//node array.js (serve para iniciar o código no terminal)

//console.log(frutas[0]);
//dentro dos conchetes, colocamos a posição do elemento que queremos

//console.log(frutas[5][0]);
//o segundo conchete serve para selecionar o elemento que está dentro do outro conchete no código.

for(let i=0; i < frutas.length; i++){
    console.log(`frutas [${i}] - ${frutas[i]}`);
}

frutas.forEach ((frutas, i) => console.log(`Fruta [${i}] - {frutas}`));

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros
    .map((n) => n *2)
    .forEach((n) => console.log(n));

let precos = [9.99, 10.55, 155.00, 56.45];

precos 
    .map((preco) => precos *1.10)
    .filter((valor) => valor < 30)
    .forEach((preco) => console.log(`R$ ${preco.toFixed(2)}`));

const valor = precos
    .reduce((soma, valor) => soma + valor, 0);
    console.log(`R$ ${valor.toFixed(2)}`);
