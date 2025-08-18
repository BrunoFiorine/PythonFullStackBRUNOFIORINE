//

let preçoProduto = 150;
let desconto = 0.2; // 20% de desconto
let preçoComDesconto = preçoProduto * (1 - desconto);
console.log("O preço com desconto é: R$" + preçoComDesconto.toFixed(2));

//

//

let peso = 70; // em kg
let altura = 1.75; // em metros
let imc = peso / (altura * altura);
console.log("O IMC é: " + imc.toFixed(2));

//

//

let idade = 22;
let temExperiencia = true;
let elegivel = (idade>=18) && (tem_experiencia=true);
console.log("É elegível para a vaga?", elegivel);


//

let nivel_acesso = 2;

if (nivel_acesso === 3) {
    console.log("Acesso Total permitido.");
}
else if (nivel_acesso === 2) {
    console.log("Acesso Parcial permitido.");
}
else  {
    console.log("Acesso Negado.");
}

//


//

let celsius = 25; // Temperatura em Celsius
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C é igual a " + fahrenheit + "°F");

//

let inteiro = 10;
 
if (inteiro % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}


//

let peso1 = 20;
if (peso1 <= 5) {
    console.log("O Frete é R$ 20 reias");
} else if (peso1 >= 10) {
    console.log("O Frete é R$ 30 reias");
} else {
    console.log("O Frete é R$ 25 reias");
}
//


