let wichScaleString = " ";
let startApp = confirm(
  "Bem vindo ao conversor de temperaturas. Para iniciar o programa clique em 'Ok'. Para sair clique em 'Cancelar' a qualquer momento."
);

const conversor = () => {
  if (startApp == false) {
    alert("Programa finalizado!\nAtualize a página para tentar novamente.");
    return;
  } else {
    let toConvert = Number(
      prompt("Digite a temperatura em graus Celsius que deseja converter:")
    );
    if (toConvert == 0) {
      alert(
        "Valor inválido.\nPrograma finalizado!\nAtualize a página para tentar novamente."
      );
      return;
    } else {
      let wichScale = Number(
        prompt(
          "Para qual temperatura deseja converter?\n(Use apenas números).\n1.Kelvin\n2.Fahrenheit"
        )
      );
      if (wichScale == 0) {
        alert(
          "Valor inválido.\nPrograma finalizado!\nAtualize a página para tentar novamente."
        );
        return;
      } else {
        switch (wichScale) {
          case 1:
            convertedTemperature = toConvert + 273;
            wichScaleString = "Kelvin"
            break;
          case 2:
            convertedTemperature = (toConvert * 9) / 5 + 32;
            wichScaleString = "Fahrenheit"
          default:
            alert("Valor inválido.\nPrograma finalizado!\nAtualize a página para tentar novamente.")
            break;
        }
        alert(`${toConvert} grau(s) Celsius equivale a: ${convertedTemperature} ${wichScaleString}`)
      }
    }
  }
};
conversor();
