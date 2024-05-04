const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const modulePacote = require("../../dominio/calculadora/Projeto/pacote")
jest.mock("../../dominio/calculadora/Projeto/pacote")//fake, falso, simulação, demonstração
describe('valorProjeto', () => {
    beforeAll(()=> {
        modulePacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test("cenario", ()=>{
        //const funcionalidades = 
        //const result = calcularValorTotalProjeto(funcionalidades)
        //expect(result).toEqual(8)
        const resultado = calcularValorTotalProjeto(["ssr"], 8)
        console.log(resultado)
    }),

    
    test("cenario2", ()=>{
        //const funcionalidades = 
        //const result = calcularValorTotalProjeto(funcionalidades)
        //expect(result).toEqual(8)
        const resultado = calcularValorTotalProjeto(["ssr"], 8)
        console.log(resultado)
    }),
    //test("cenario2", ()=>{
    //    const funcionalidades = 
    //    const result = calcularValorTotalProjeto(funcionalidades)
    //    expect(result).toEqual(8)

    //})
});