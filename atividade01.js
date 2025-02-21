// Questão 1
let numero1 = parseFloat(prompt("Digite o primeiro número"))
let numero2 = parseFloat(prompt("Digite o segundo número"))

let soma = numero1 + numero2

console.log("Soma:", soma)


console.log("Soma:", soma)

// Questão 2
let numero1 = parseFloat(prompt("Digite o primeiro número"))
let numero2 = parseFloat(prompt("Digite o segundo número"))

let subtracao = numero1 - numero2

console.log("Subtração:", subtracao)

// Questão 3
let numero1 = parseFloat(prompt("Digite o primeiro número"))
let numero2 = parseFloat(prompt("Digite o segundo número"))

let multiplicacao = numero1 * numero2

console.log("Multiplicação:", multiplicacao)


// Questão 4
let numero1 = parseFloat(prompt("Digite o primeiro número"))
let numero2 = parseFloat(prompt("Digite o segundo número"))

let divisao = numero1 / numero2

console.log("Divisão:", divisao)


// Questão 5
let numero = parseFloat(prompt("Digite um número"))

if (numero > 10) {
    console.log("Sim")
} else {
    console.log("Não")
}


// Questão 6
let largura = parseFloat(prompt("Digite a largura do retângulo"))
let altura = parseFloat(prompt("Digite a altura do retângulo"))

let area = largura * altura

console.log("Área do retângulo:", area)


// Questão 7
let idade = parseInt(prompt("Digite a sua idade"))

if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}


// Questão 8
let numero = parseInt(prompt("Digite um número"))

if (numero % 2 === 0) {
    console.log("Par")
} else {
    console.log("Ímpar")
}

// Questão 9
let numero = parseFloat(prompt("Digite um número"))

if (numero > 0) {
    console.log("Positivo")
} else if (numero < 0) {
    console.log("Negativo")
} else {
    console.log("Zero")
}

// Questão 10
let precoOriginal = parseFloat(prompt("Digite o preço do produto"))
let desconto = 0.15

let precoComDesconto = precoOriginal - (precoOriginal * desconto)

console.log("Preço com desconto:", precoComDesconto)
