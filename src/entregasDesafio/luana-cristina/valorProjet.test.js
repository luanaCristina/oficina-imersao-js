
const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const modulePacote = require("../../dominio/calculadora/Projeto/pacote")
jest.mock("../../dominio/calculadora/Projeto/pacote")//fake, falso, simulação, demonstração
describe('valorProjeto', () => {
    beforeAll(()=> {
        modulePacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test("cenario3", ()=>{
        
        //const result = calcularValorTotalProjeto(funcionalidades)
        //expect(result).toEqual(8008)
        const resultado = calcularValorTotalProjeto(["setup",
        "responsividade",
        "otimizacao_seo",
        "integracao_mailchimp",
        "construcao_1_pagina",
        "formulario",
        "ssr",
        "integracao_api_propria"], 70)
        expect(resultado).toEqual(8008)
    });
    // test("cenario1", ()=>{
        
    //     const resultado = calcularValorTotalProjeto(["setup",
    //     "setup",
    //   "responsividade",
    //   "construcao_1_pagina",
    //   "construcao_1_pagina",
    //   "construcao_1_pagina",
    //   "formulario",
    //   "ssr",], 100)
    //     expect(resultado).toEqual(8800)
    // });

})