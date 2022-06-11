//1.Yöntem

// function name(params) {
    
// }
// //2.Yöntem
// var isim = function(){

// }

// function mesaj() {
//     //alert("Merhaba Methods brothers");
//     console.log("Ben de metodun console tarafıyım");
//     a = 1;
//     b = 2;
//     console.log(a+b);
// // }
// // mesaj();

// // function toplam() {
// //     let a = 5;
// //     let b = 3;
// //     c = a + b;
// //     //console.log(c);
// //     return c;

// // }
// // var deger = toplam();
// // console.log(deger);

//  function toplam(a=0,b=0,c=0,d=0) { // bir değer girilmezse 0 kabul et.
//     var a;
//     var b;
//    console.log(a,b,c,d);
//     return a+b+c;
// }
// console.log(toplam(7,5,5));

// // var dizi = [1,2,3,4,5,6,7]
// // dizi.forEach(element,index => {
// // console.log(element);    
// // });

// function mesaj(ad,yas) {
//     deger = ad
//  console.log(deger,yas);
// }
// mesaj("hilal",27);

// function yasHesapla(ad,dgmYili) {
//     guncel = new Date() .getFullYear();
//     yas = guncel - dgmYili;

//     // return ad + " " + yas + "Yaşında"
//     return `${ad} ${yas} yaşında` //üst satırdakinin kısa yazılmış hali.
// }
// console.log(yasHesapla("Hilal",1994));
// console.log(yasHesapla("Ali ihsan",1992));
// console.log(yasHesapla("Furkan",1993));
// // guncel = new Date().getTime();
// // console.log(guncel); // Saliseyi veriyor.

// //Yaş Hesaplama
// dogumTarihi = Number(prompt("Doğum Tarihinizi Giriniz"));
// function yasHesapla(dogumTarihi) {
//     yas = new Date() .getFullYear() - dogumTarihi;
//     return `${yas} yaşındasınız.`

// }
// document.write(yasHesapla(dogumTarihi));

// Boy Kilo Endeksi Hesaplama
//   var Boy = Number(prompt("Boyunuzu giriniz"));
//   console.log(Boy);
//   var Kilo = Number(prompt("Kilonuzu giriniz"));
//   console.log(Kilo);
//   function endekshesapla(Boy,Kilo) {
//      endeks = Kilo / (Boy*Boy/10000);
//      return `${endeks}`
//  }
//   document.write(endekshesapla(Boy, Kilo)) ;


 // Bir dikdörtgenin alanını ve çevresini hesaplayan metot yazınız.

//  var dikdortgen = function(kisa,uzun) {
//      let alan = kisa * uzun;
//      let cevre = (kisa + uzun) * 2;
//      return `Alan: ${alan} Çevre: ${cevre} `
     
//  }
//  console.log(dikdortgen(3,5));
// ÖDEV1 CEVAP
// taban=Number(prompt("taban sayısı giriniz"));
// kuvvet1=Number(prompt("kuvvet sayısı giriniz"));
//  var kuvvet = function(taban,kuvvet1) {
//     sonuc = taban ** kuvvet1;
//  } 
//  console.log(sonuc);
 
 //ÖDEV 1
//  var deger = Math.PI;
//  deger = Math.pow(3,2); //pow kullanmadan 1. değer taban 2. değer kuvvet olacak şekilde geri döndüren metod hazırla.
//  console.log(deger);

 //ÖDEV 2
// boy kilo indexini veren metot hazırla.

//Dışarıdan girilen bir sayının tam bölenlerini gösteren bir dizi oluşturan metod yazalım.

// function tamBolenler(sayi) {
//   var tumsayilar = [];
//   for (let i = 2; i < sayi; i++) {
//       if(sayi % i == 0) {
// tumsayilar.push(i)
//       }
//   }
//   return tumsayilar;
// }
// console.log(tamBolenler(50));
// console.log(`Girilen sayının tam bölenlerinin adedi : `, tamBolenler(50).length);
// //Filter metodu
// console.log(tamBolenler(50).filter(function(e) {

//     return e > 5;
// })); //5ten büyük olanları getir.

// //map metdou
// console.log(tamBolenler(50).map(function(e) {
    
//     return e * 5;
// })); //sonuçların her birini 5 ile çarp getir.

// console.log(tamBolenler(1500).map(function(e) {
    
//     return Math.ceil(e * 0.18);
// })); //Kdv sini hesaplayıp getir. Ceil ile virgülden sonrakileri at.