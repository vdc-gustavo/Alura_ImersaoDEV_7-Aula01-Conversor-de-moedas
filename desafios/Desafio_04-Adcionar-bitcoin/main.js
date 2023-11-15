let valorEmDolar = 64;
let cotacaoDoDolar = 5.32;
let cotacaoDoBitcoin = 175828.27;

let valorEmReal = valorEmDolar * cotacaoDoDolar;
let valorEmBitcoin = valorEmDolar * cotacaoDoBitcoin;
valorEmReal = valorEmReal.toFixed(2);
valorEmBitcoin = valorEmBitcoin.toFixed(2);
alert("R$ " + valorEmReal + "\nBTC " + valorEmBitcoin);
