// bir çok veriyi tek bir isimde topladığımız depodur.
/*
Birden çok farklı tipteki veriyi tek bir dizi de barındırabiliriz. Hatta dizi içerisinde bir veya daha fazla dizi de bulundurabiliriz.
syntax olarak yani söz dizimi:
diziTipi(var,let, const) diziAdi = [dizi elemanları]
*/

let ogrenciler = ['Hayrettin', 'Altuğ', 'İlker', 'Hilal', 'Batuhan', 'Gürol', 'Serbay', 'Seyfullah'];
sonuc = ogrenciler.length; //eleman sayısını verir.

console.log(sonuc);
document.write(ogrenciler[ogrenciler.length-1]); //son elemanı almak için

let araba1 = "Fiat";
let araba2 = "Opel";
let araba3 = "BMW";
let arabalar = ["Mercedes", "Opel", "Fiat"];
araba1 = arabalar[0];
document.write(araba1);   
document.write(arabalar[1]);    
document.write(arabalar[2]); 


document.write(` en sevdiğim araba ${arabalar[0]} bunu da seviyorum ${arabalar [1] } bu da ucuz araba ${arabalar [2]}`)

// let metin = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, aliquid soluta veniam cumque minus tempore beatae in dolorem dolores itaque alias necessitatibus, amet molestias veritatis nisi accusantium ducimus repellendus aut"
// metin = metin.split(" ");
// document.write(metin[5]);

//DİZİ METODLARI

let arabalar1 = ['Mercedes', 'Opel', 'Porsche','Ferrari','Hundai','Peugeot','Tofaş','TOGG'];
console.log(typeof arabalar1);
deger = arabalar1.toString();
// console.log(typeof deger);
deger = arabalar1.join(" ");
console.log(deger);

arabalar1.pop();//Son elemanı siler.
console.log(arabalar1);

deger = arabalar1.pop();//Sildiğimiz son elemanı gösterir.
console.log(deger);
arabalar1.shift(); //İlk elemanı siler.
console.log(arabalar1);
deger = arabalar1.shift(); //Sildiğimiz ilk elemanı gösterir.
console.log(deger);

arabalar1.push("TOGG"); // Sonuna eleman ekler
console.log(arabalar1);
deger = arabalar1.push("TOGG"); // Dizinin eleman sayısını verir.
console.log(deger);

arabalar1.unshift("Mercedes"); // Başına eleman ekler
console.log(arabalar1);
deger = arabalar1.unshift("TOGG"); // Dizinin eleman sayısını verir.
console.log(deger);

let ogrenciler1 = ['Ali', 'Veli', 'Hasan'];
let ogrenciler2 = ['Yunus', 'Emre', 'Mahmut'];
let ogrenciler3 = ['Ayşe', 'Fatma', 'Hayriye'];

deger = ogrenciler1.concat(ogrenciler2);
console.log(deger);

deger = ogrenciler1.splice(1,2); //Başlangıç indexi ve silinecek eleman adetlerini gösterir.

deger = ogrenciler2.splice(0,0,'Hilal','İlker') //Virgülden önceki ilk rakam kaçıncı kişiyi seçeceğini belirtir. virgülden sonraki rakam kaç kişi silinecek onu gösterir. 0 olursa kimseyi silmez.
console.log(ogrenciler2);

deger = ogrenciler2.splice(0,3,'Hilal','İlker')
console.log(ogrenciler2);

var ogrenciler4 = new Array('Altuğ', 'İlker', 'İbrahim', 'Hayrettin hocam', 'Hilal abla', 1990, 1956,'Merhaba')
console.log(ogrenciler4);

console.log(ogrenciler4.length);
console.log(ogrenciler4[ogrenciler4.length-1]); // Son elemanı gösterir.

// ogrenciler4[10] ='Serbay'; //Araya empty ekleyerek yapıyor.
console.log(ogrenciler4);

ogrenciler4[ogrenciler4.length] = 'Serbay';
console.log(ogrenciler4);

// console.log(ogrenciler4.sort()); //Dizinin içindekileri Alfabetik sıralar.

console.log(ogrenciler4.reverse()); //Dizileri ters çevirir.

console.log(ogrenciler4.reverse());
console.log(ogrenciler4[1].toString().split("").reverse()); //1. diziyi seçtik, string yaptık, split ile böldük, reverse ile ters çevirdik.

for(var i = 1 ; i<=10 ; i++) {
console.log(i+ "İbrahim");
}
var ogrenciler5 = ['Altuğ', 'İlker', 'İbrahim', 'Hayrettin hocam', 'Hilal abla', 1990, 1956,'Merhaba'];
orenciler = ogrenciler5.concat(ogrenciler3);
console.log(ogrenciler5[1]);

for (let index = 0; index <= orenciler.length-1; index++) {
  console.log(index+ "-"+ orenciler[index])
    
}

ogrenciler5.forEach(element => {
    console.log(element);
});
var a = 0;
while (a < ogrenciler1.length) {
console.log(a+"-"+ogrenciler1[a]);
    a++;
}

var a = 0;
while (a < ogrenciler1.length) {
console.log(a+"-"+ogrenciler[a]);
    a++;
}
do {
    console.log("Hoşgeldiniz!")
    console.log(ogrenciler2[a])
    a++;
} while (a< ogrenciler2.length);