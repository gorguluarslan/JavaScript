let person = {
    adi:"Hilal",
    soyadi: "Görgülüarslan",
    yas: 27,
    adres: {
        sehir: "Ankara",
        ilce: "Yenimahalle"
    },
    hobileri: ['Kitap','Gezi','Tiyatro','Sinema']
};

deger = person.adi;
deger = person.soyadi;
console.log(person.adi,person.soyadi);
deger = person.yas;
deger = person.adres;
deger = person.adres.sehir;
deger = person.adres.ilce;
console.log(typeof deger);
deger = person.hobileri;
deger = person.hobileri[0];
deger = person.hobileri[1];
deger = person.hobileri[2];
console.log(deger);

for(i=0;i<person.hobileri.length;i++){
console.log(person.hobileri[i].split(","));
}

let person1 = {
    adi:"Ali İhsan",
    soyadi: "Öcal",
    yas: 29,
    adres: {
        sehir: "Ankara",
        ilce: "Keçiören"
    },
    hobileri: ['Spor','Müzik','Gezi','Sinema']
};

let person2 = {
    adi:"Furkan",
    soyadi: "Görgülüarslan",
    yas: 28,
    adres: {
        sehir: "Ankara",
        ilce: "Yenimahalle"
    },
    hobileri: ['Spor','Müzik','Basketbol','Sinema']
};

var kisiler = [
    person,
    person1,
    person2
];
console.log(kisiler);
console.log(kisiler [0].adi);

for (let i = 0; i < kisiler.length; i++) {
console.log(kisiler[i].adi,kisiler[i].soyadi,kisiler[i].yas);    
}
