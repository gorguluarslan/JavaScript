//String Metodlar
let mesaj = "Hilal artık, let tipli değişkenlerin, daha çok kullanıldığını söyledi."

var deger = mesaj.toLowerCase();
deger = mesaj.toLocaleUpperCase();
// deger = mesaj.length;
// deger = mesaj[deger-1];
// deger = mesaj.slice(0,5);
// deger = mesaj.slice(15);
// deger = mesaj.slice(-8);
deger = mesaj.substring(0,5);
deger = mesaj.substring(6);
deger = mesaj.replace("let","var").replace ("Hilal","İlker").replace("çok","az");
deger = mesaj.replace("ç","c").replace("ş","s").replace("İ","I").replace("ı","i").replace(/ğ/g, 'g');
deger = mesaj.trim(); //baştan sondan boşluk silme
deger = mesaj.trimEnd();
deger = mesaj.trimStart();
deger = mesaj.indexOf("Hilal"); //kelime aratma
deger = mesaj.indexOf("çok");
deger = mesaj.lastIndexOf("çok");
deger = mesaj.split(" ");
console.log(deger);
console.log(deger[5]);
deger = mesaj.split(",");
console.log(deger);
