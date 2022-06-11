// //*Ödev 1
// Bir değişken oluştur ve bu değişkene saniye değerini tut.
//Sonra bu saniye değerinin kaç dakika ve kaç saniyeye denk geldiğini yazdır.


let saniyeString = prompt("Saniye değerini giriniz", "100");
let saniye = parseInt(saniyeString);

let dakika = parseInt((saniye / 60), 10);
let kalanSaniye = saniye % 60;

console.log(typeof saniye);
console.log(`Girdiğiniz ${saniye} değeri : ${dakika} dakika ve ${kalanSaniye} saniyedir.` );