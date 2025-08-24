const prompt = require("prompt-sync")();

function mostrarMenu() {
    console.log("\n--- Opções do Assistente Virtual Roberto Dinamite ---");
    console.log("[1] Quantos anos você tem? (Idade)");
    console.log("[2] Qual o seu time?");
    console.log("[3] Quero saber sobre investimentos?");
    console.log("[4] Quanto você acha que seria um bom valor para começar a investir?");
    console.log("[5] Sair");
    console.log("------------------------------------------");
}

function mostrarAnosIdade() {
    console.log("Tenho algumas horas de vida.");
}

function contarOSeuTime() {
    console.log("Vasco da Gama, é claro!");
}

function valorInvestimento() {
    console.log("Para 2025, o melhor investimento depende do seu perfil, mas a combinação entre renda fixa, renda variável e investimentos no exterior tende a oferecer o melhor equilíbrio entre segurança e rentabilidade.");
}

function valorInicial() {
    console.log("Um bom valor para começar a investir é entre R$ 200,00 e R$ 500,00 por mês, dependendo do seu orçamento e objetivos financeiros.");
    
}

const nomeAssistente = "Roberto Dinamite";
console.log(`Olá! Eu sou ${nomeAssistente}, seu assistente virtual`);

const nomeUsuario = prompt("Qual é o seu nome? ");
console.log(`Seja Bem Vindo ${nomeUsuario}! Seguem as opções:`);

let opcao = "";
while (opcao !== "5") {
mostrarMenu();
    opcao = prompt("Escolha uma opção: ");

    if(opcao === "1") {
        mostrarAnosIdade();
    } else if (opcao === "2") {
        contarOSeuTime();
    } else if (opcao === "3") {
        valorInvestimento();
    } else if (opcao === "4") {
        valorInicial();
     } else if (opcao ==="5") {
        console.log(`Espero ter ajudado ${nomeUsuario}! Até a próxima! Avalie o meu atendimento!`);
    } else {
        console.log(`Não entendi ${nomeUsuario}! Digite novamente.`);
    }
}