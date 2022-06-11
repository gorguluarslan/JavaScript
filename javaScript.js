// alert("Merhaba Dünya")
console.log("Merhaba Web Tasarım")
// var,let
// const,
var adi = 'Emine';
console.log(adi);

// adi = prompt("lütfen adınızı giriniz");
console.log("Hoşgeldiniz " + adi+ ' Nasılsınız? ' );
console.log("Bugün JavaScript'e başladık");
document.write("Hoşgeldiniz " + adi+ ' Nasılsınız? ' );

var sayi1 = 45;
var sayi2 = 15;
toplam = sayi1 + sayi2;
cikarma = sayi1 - sayi2;
carpim = sayi1 * sayi2;
bolum = sayi1 / sayi2;
mod = sayi1 % sayi2;

console.log("Toplam:",toplam, "Cikarma:", cikarma, "carpim:",carpim, "bolum:",bolum, "Mod:", mod);

// console.log(cikarma);
// console.log(carpim);
// console.log(bolum);
// mod= bölümünden kalan demek.


var deg = 5;
// deg = ++deg;
// deg++;
// --deg
// deg--;
// console.log(deg--);
// console.log(++deg);



deg += deg;
console.log(deg);

var a = 5;
var b = 10;
var c = '5';
deg = a == b;
console.log(deg);

deg = a == c;
console.log(deg);

deg = b == c;
console.log(deg);

deg = a === c;
console.log(deg);

deg = a !== b;
console.log(deg);

deg = a !== c;
console.log(deg);

var k = 5;
var l = 3;
var j = '5';

deg = (k==l) && (k==j)
console.log(deg);

deg = (k!=l) && (k==j)
console.log("truuue"+deg);

deg = (k==l) || (k==j)
console.log(deg);


deg = (k==l) || (k===j)
console.log(deg);

console.log(typeof k);
console.log(typeof j);

var a = Number(prompt('adınızı giriniz'));

document.write( toplam);