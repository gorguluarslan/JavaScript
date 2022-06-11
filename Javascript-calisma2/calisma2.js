//Ödev 2
//Bir değişken oluşturun ve bu değişkeni fahrenheit cinsinden sıcaklığı saklayın.
//Bu değerin kaç celcius olduğunu hesaplayın.
//Hesaplama formülü : celcius = 5/9 * (fahreneheit -32)

let girilenDerece = parseInt(prompt("fahrenheit giriniz", "100"));
let celciusDerece = (5 / 9) * (girilenDerece - 32);

console.log("Girdiğiniz " + girilenDerece+" fahrenheit sıcaklık "+ celciusDerece.toFixed(2) +" derecedir.");
