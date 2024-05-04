const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe('pacote', () => {
    test("Deve retornar pacote básico quando o totalHorasPorProjeto for menor que 50", () => {
        //const result = calcularPacote(49)
        //console.log(result)
        const totalHorasPorProjeto = 49
        const result = calcularPacote(totalHorasPorProjeto)
        expect(result).toEqual("pacote_basico")
    });
    test("Deve retornar pacote básico quando o totalHorasPorProjeto for menor ou igual que 50", () => {
        //const result = calcularPacote(49)
        //console.log(result)
        const totalHorasPorProjeto = 50
        const result = calcularPacote(totalHorasPorProjeto)
        expect(result).toEqual("pacote_basico")
    });
    test("Deve retornar pacote intermediario quando o totalHorasPorProjeto for maior que 100", () => {
        const totalHorasPorProjeto = 100
        const result = calcularPacote(totalHorasPorProjeto)
        expect(result).toEqual("pacote_intermediario")
    });
    test("Deve retornar pacote premium quando o totalHorasPorProjeto for maior que 200", () => {
        const totalHorasPorProjeto = 200
        const result = calcularPacote(totalHorasPorProjeto)
        expect(result).toEqual("pacote_premium")
    });
    
    
});