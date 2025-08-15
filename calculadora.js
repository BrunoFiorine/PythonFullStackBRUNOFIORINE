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

let x = 22
let y = 18;
console.log("x é maior que y?" , x > y);
console.log("x é igual a y?" , x === y);

//

//

let temExperiencia = true;
let idade = 22;
let nãoTemExperiencia = false;
let temExperienciaOuIdade = temExperiencia || idade >= 18;
console.log("Tem experiência ou é maior de idade?", temExperienciaOuIdade);
console.log("Não tem experiência?", nãoTemExperiencia);




//

let celsius = 25; // Temperatura em Celsius
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C é igual a " + fahrenheit + "°F");

//

let numeroPar = 2

switch (numeroPar) {
    case 1:
        console.log("Impar");
        break;
    case 2:
        console.log("Par");
        break;
    default:
        console.log("Dia inválido");
        break;

}

//

