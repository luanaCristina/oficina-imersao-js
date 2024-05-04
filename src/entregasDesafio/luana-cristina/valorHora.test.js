//describe da função ou classe que estamos testando
//test = teste (função que realiza o nosso teste) de integração ou it = test unitário
const modulo = require("../../dominio/calculadora/Hora/valorHora.js")

//1 paramtero o que?
describe('calcularValorPorHora', () => {
    test('Deve retornar dado o salário 1412 retorna 9 por hora', () => {
        const rendaMensal = 1412 //cenario
    //pula uma linha = entrada
        const resultado = modulo.calcularValorPorHora(rendaMensal)//comportamento
    //pula
    expect(resultado).toEqual(9)

    })
})
