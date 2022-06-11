//Date İşlemleri
let simdi = new Date();
let zaman = simdi.getDate(); //günü getirdi.
zaman = simdi.getDay();
zaman = simdi.getFullYear();
zaman = simdi.getMonth();
zaman = simdi.getHours();
zaman = simdi.getMinutes();
zaman = simdi.getSeconds();

// let dgmTarihi = new Date(1985,10,8);// ortadaki ay +1 olmalı. çünkü aylar 0 dan başlıyor.
// document.write(dgmTarihi);
//Set
// zaman = simdi.setFullYear(1990);
// zaman = simdi.setMonth(7); // milisecond'a çeviriyor.
// zaman = simdi.setDate(15);
// document.write(zaman);
let dgmTarihi = new Date(1985,0,30);
yas = simdi.getFullYear()-dgmTarihi.getFullYear();
// document.write(yas);
let milisecond = simdi - dgmTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;
let yil = gun / 365;
document.write(yil);



// document.write(zaman);
// document.write(typeof simdi);

/* Dizi mantığıyla çalışan zamansal durumlar index ile geri döndürülür.
tam sayı ile çalışanlar sayısal olarak döndürülür.
// gunler = [pazar, pazartesi, salı, çarşamba, perşembe, cuma, cumartesi] 0dan başlıyor.
// aylar = [ocak şubat mart nisan mayıs haziran temmuz ağustos eylül ekim kasım aralık]
 */