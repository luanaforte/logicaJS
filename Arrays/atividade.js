
// 01
let numeros = [10, 20, 30, 40]

// 02
let estados = [true, false, true, false]

//03
let misto = [42, "texto", true, 3.14]

//04
let alunos = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 22 },
    { nome: "José", idade: 21 }
]
//  console.log(alunos[0].nome) 

//05
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let valor1 = matriz[0][1]
let valor2 = matriz[2][0]
// console.log(`${valor1}, ${valor2}`) 

// let valores = [
//     matriz[0][1],
//     matriz[2][0]   
// ]

// console.log(valores)

//06 - exiba todos os números da matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);  // Saída: 1, 2, 3, 4, 5, 6, 7, 8, 9
    }
}

