// Verificando se um número é par ou ímpar
let numero = 7  // Declarando a variável 'numero'

if (numero % 2 === 0) {
    console.log("O número é par.")
} else {
    console.log("O número é ímpar.")
}

// Calculando a idade de uma pessoa e verificando se ela é maior de idade
let idade = 20  // A idade da pessoa

if (idade >= 18) {
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

//  Verificando se um número é positivo, negativo ou zero

let numero = -3  // A variável 'numero'

if (numero > 0) {
    console.log("O número é positivo.")
} else if (numero < 0) {
    console.log("O número é negativo.")
} else {
    console.log("O número é zero.")
}

// Calculando o preço de um produto com desconto
let precoOriginal = 100  
let desconto = 0.1       

let precoComDesconto = precoOriginal - (precoOriginal * desconto) 

console.log("Preço com desconto:", precoComDesconto)


