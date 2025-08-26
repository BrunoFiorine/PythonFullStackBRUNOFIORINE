// Calcula o troco de uma compra //

// 1 - Valor com troco //

const valorCompra = 110.00;
const valorPago = 90.00;

if (valorPago < valorCompra) {
  const falta = (valorCompra - valorPago).toFixed(2);
  console.log(`Pagamento insuficiente. Faltam R$ ${falta}.`);
} else if (valorPago === valorCompra) {
  console.log('Não há troco.');
} else {
  const troco = (valorPago - valorCompra).toFixed(2);
  console.log(`O troco do cliente é de R$ ${troco}.`);
}


// 2 - Valor sem troco //

const valorCompra1 = 110.00;
const valorPago1 = 110.00;

if (valorPago1 < valorCompra1) {
  const falta = (valorCompra1 - valorPago1).toFixed(2);
  console.log(`Pagamento insuficiente. Faltam R$ ${falta}.`);
} else if (valorPago1 === valorCompra1) {
  console.log('Não há troco.');
} else {
  const troco = (valorPago1 - valorCompra1).toFixed(2);
  console.log(`O troco do cliente é de R$ ${troco}.`);
}


// 3 - Valor com pagamento insuficiente //

const valorCompra3 = 110.00;
const valorPago3 = 150.00;

if (valorPago3 < valorCompra1) {
  const falta = (valorCompra3 - valorPago3).toFixed(2);
  console.log(`Pagamento insuficiente. Faltam R$ ${falta}.`);
} else if (valorPago3 === valorCompra3) {
  console.log('Não há troco.');
} else {
  const troco = (valorPago3 - valorCompra3).toFixed(2);
  console.log(`O troco do cliente é de R$ ${troco}.`);
}