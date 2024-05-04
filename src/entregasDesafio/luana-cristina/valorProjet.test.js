
const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const modulePacote = require("../../dominio/calculadora/Projeto/pacote")
jest.mock("../../dominio/calculadora/Projeto/pacote")//fake, falso, simulação, demonstração
describe('valorProjeto', () => {
    beforeAll(()=> {
        modulePacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test("cenario", ()=>{
        const funcionalidades = [
            "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
        ]

        const valorHora = 50

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)
        //calculo
        expect(resultado).toEqual(3960)
        //const result = calcularValorTotalProjeto(funcionalidades)
        //expect(result).toEqual(8)
        //const resultado = calcularValorTotalProjeto(["ssr"], 8)
        //console.log(resultado)
    })
})