let lightYearInKm = 9500000000000;
let convertedKm;
let startApp = confirm(
  "Bem vindo ao conversor de anos-luz. Para iniciar o programa clique em 'Ok'. Para sair clique em 'Cancelar' a qualquer momento."
);

const conversor = () => {
  if (startApp == false) {
    alert("Programa finalizado!\nAtualize a página para tentar novamente.");
    return;
  } else {
    let toConvert = Number(
      prompt(
        "Digite a quantidade de quilômetros que deseja converter para anos luz"
      )
    );
    if (toConvert == 0) {
      alert(
        "Valor inválido! Programa finalizado.\nAtualize a página para tentar novamente."
      );
      return;
    } else {
      convertedKm = toConvert * lightYearInKm;
      alert(`${toConvert} quilômetro(s) em anos-luz equivale a: ${convertedKm} quilômetros`)
    }
  }
};

conversor();
