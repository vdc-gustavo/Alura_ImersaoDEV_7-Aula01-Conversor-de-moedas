let inDollar = 4.87;
let inEuro = 5.28;
let inLibra = 6.06;
let inBTC = 175403.92;
let convertedValue;
let stringCoin = " ";
let stringCoinFinal = " ";
let startApp = confirm(
  "Bem vindo ao conversor de moedas. Para iniciar o programa clique em 'Ok'. Para sair clique em 'Cancelar' a qualquer momento."
);

const conversor = () => {
  if (startApp == false) {
    alert("Programa finalizado!\nAtualize a página para tentar novamente.");
    return;
  } else {
    let toConvert = Number(
      prompt("Insira o valor em Real(R$) que deseja converter")
    );
    if (toConvert == 0) {
      alert("Valor inválido! Programa finalizado.");
      return;
    } else {
      let wichCoin = Number(
        prompt(
          "Para qual moeda deseja converter o valor inserido anteriormente?\n(Use somente números).\n1. Dólar\n2. Euro\n3. Libra esterlina\n4. Bitcoin"
        )
      );
      if (wichCoin == 0) {
        alert("Valor inválido! Programa finalizado.");
        return;
      }
      switch (wichCoin) {
        case 1:
          convertedValue = toConvert * 4.87;
          stringCoin = "$ ";
          stringCoinFinal = "Dólar(es)";
          break;
        case 2:
          convertedValue = toConvert * 5.28;
          stringCoin = "€ ";
          stringCoinFinal = "Euro(s)";
          break;
        case 3:
          convertedValue = toConvert * 6.06;
          stringCoin = "£ ";
          stringCoinFinal = "Libra(s) esterlina(s)";
          break;
        case 4:
          convertedValue = toConvert * 175403.92;
          stringCoin = "BTC ";
          stringCoinFinal = "Bitcoin";
          break;
        default:
          alert("Valor inválido! Programa finalizado.");
          break;
      }
      alert(
        `R$${toConvert} equivale à ${stringCoin}${convertedValue} ${stringCoinFinal}`
      );
    }
  }
};

conversor();
