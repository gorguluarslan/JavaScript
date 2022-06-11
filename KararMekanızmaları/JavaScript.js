//if - else-if - switch-case - ternarry operaötü
/*
//if(şart belirttiğim alan == true)
//eğer tek satırlık işlem yapacaksam
süslü paranteze ihtiyacım yok
{
şartım gerçekleştiğinde çalışacak olan blok
}
*/
// if(false)
//     console.log("Hayalim Gerçek Oldu");
//  else 
//     console.log("Hayallerim suya düştü");

//     var kullaniciAdi = "Hilal";
//     var parola = 123;
//     if(kullaniciAdi != "Vektorel" && parola == 123){
//         console.log("Anasayfaya hoşgeldiniz");
//     } 
//     else //else bloklarında "()" içerisinde şart belirtilmez.
//     console.log("Tanımlanmayan kullanıcı")

// //Not ortalamasını veren program... Vize Notunun %30u

// var vize1 = Number(prompt("Birinci vize notunu giriniz"));
// if(vize1 < 0 ){
// alert("Negatif not girilemez")
// } else if(vize1 > 100) {
//     alert("100'den büyük not girilemez")
//     confirm("Devam etme")
// }


// var vize2 = Number(prompt("İkinci vize notunu giriniz"));

// if(vize2 < 0 || vize1 > 100){
//     console.log("Hatalı not girişi");
//     }

// var Final = Number(prompt("Final notunu giriniz"));
// if(Final < 0 || Final > 100){
//     console.log("Hatalı not girişi");
//     }
// vizeToplam = (vize1 + vize2)/2;
// toplam = vizeToplam * 0.3;
// sonuc = toplam + (Final * 0.7);
// console.log(sonuc);

// if(sonuc < 50)
// {
//     console.log("Kaldınız");
// } 
// else if(sonuc <= 64)
// {
// console.log("Geçtiniz");
// }
// else if(sonuc < 75){
//     console.log("Orta ile geçtiniz")
// }
// else if(sonuc <= 84) {
//     console.log("İyi ile geçtiniz")
// }
// else 
// {
//     console.log("Pekiyi ile geçtiniz");
// }

// var adi = "ali";
// var soyAd = "Yılmaz";
// var yas = 17;
// var sehir = "ankara";
// var mesaj = "benim adım" +" " + adi + " " +"Soyadim" +" " + soyAd + "yaşım" + yas + "Yaşadığım şehir" + sehir;
// console.log(mesaj);

// //bactikc
// mesaj = `Benim adım ${adi} soyadım ${soyAd} yaşım ${yas}
// yaşadığım şehir ${sehir}`;
// console.log(mesaj);

// //Ternarry
// mesaj = (yas >= 18 ? "Benim yaşım 18'den büyüktür" : "Benim yaşım 18'den küçüktür");
// console.log(mesaj);


/*
degiskentipi control = degiskenDegeri
switch(control) {
    case"deger":
    mesaj = "mesaj döndüren";
    break;

    default:
    mesaj = "default mesaj";
    break;
}
*/

// let gun = prompt("Haftanın gününü yazınız");
// gun = gun.toLocaleLowerCase();
// var mesaj;
// switch(gun) 
// {
//     case"pazar":
//     case"cumartesi":
//     mesaj = "Hafta sonu";
//     break;
//     case"pazartesi":
//     case"salı":
//     case"çarşamba":
//     case"perşembe":
//     case"cuma":
//     mesaj = "İş Günü";
//     break;
//     default:
//         mesaj = "Yanlış parametre"
//         break;
// }
// document.write(mesaj);

//Ehliyet Alma Durumunu Kontrol Eden Program
var yas = Number(prompt("Yaşınızı giriniz"));
var egitim = prompt("Eğitim durumunuzu giriniz");
egitim = egitim.toLocaleLowerCase();
if(yas >= 18){
    if(egitim == "ilköğretim" || egitim == "lise" || egitim == "üniversite"){
console.log("Ehliyet alabilirsiniz");
    } else {
        console.log("Yetersiz eğitimden dolayı ehliyet alamazsınız");
    }
}else {
    console.log(`Yaşınız 18'den küçük olduğu için ehliyet alamazsınız.`)

}

