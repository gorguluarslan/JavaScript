//Boy Kilo Endeksi Hesaplama
Boy = (prompt("Boyunuzu giriniz"));
Kilo = (prompt("Kilonuzu giriniz"));
function endekshesapla(Boy,Kilo) {
    var endeks = Kilo / (Boy*Boy/10000);
    return `${endeks}`
}
document.write(endekshesapla(Boy, Kilo)) ;





// function hesapla() {
//     var Kilo = document.KitleForm.Kilo.value
//     var Boy = document.KitleForm.Boy.value
//     if(Kilo > 0 && Boy > 0){  
//     var sonuc = Kilo/(Boy/100*Boy/100)
//     document.KitleForm.endeks.value = sonuc
//     if(sonuc < 18.5){
//     document.KitleForm.islemsonucu.value = "Zayıfsınız"
//     }//www.bilisimogretmeni.com
//     if(sonuc > 18.5 && sonuc < 25){
//     document.KitleForm.islemsonucu.value = "Gayet Sağlıklı."
//     }
//     if(sonuc > 25){
//     document.KitleForm.islemsonucu.value = "Şişmansınız."
//     }
//     }//www.bilisimogretmeni.com
//     else{
//     alert("Böyle kilo,boy olmaz tekrar dene")
//     }
//     }


