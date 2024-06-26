const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");
describe("horasPorProjeto", () => {
  test("Deve retornar 72 a partir de uma listaDeFuncionalidades", () => {
    const listaDeFuncionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades)

    expect(resultado).toEqual(72)
  });
});
