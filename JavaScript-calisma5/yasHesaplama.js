//Yaş Hesaplama
dogumTarihi = Number(prompt("Doğum Tarihinizi Giriniz"));
function yasHesapla(dogumTarihi) {
    yas = new Date() .getFullYear() - dogumTarihi;
    return `${yas} yaşındasınız. Allah uzun, sağlıklı ve huzurlu ömürler versin :)`

}
document.write(yasHesapla(dogumTarihi));
