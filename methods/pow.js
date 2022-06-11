//"use strict" kuralları katı kullan
//  var kati = function (taban,kuvvet) {
//     var sonuc = 1;
//     for(i = 1; i <= kuvvet; i++) {
//         sonuc = sonuc * taban ;
//     }
//  return sonuc;
// } 
// console.log(kati(2,3));

// console.log(Math.pow(2,3));

class Matematik {
    constructor(sayi1, sayi2) {
        this._sayi1 = sayi1;
        this._sayi2 = sayi2;

    }
    topla() {
        return this._sayi1 + this._sayi2;
    }
    fark() {
        return this._sayi1 - this._sayi2;
    }
    carp() {
        return this._sayi1 * this._sayi2;
    }
    bol() {
        return this._sayi1 / this._sayi2;
    }
    pu() {
        var deger = 3.14;
        return deger;
    }
    
}
var _Mat = new Matematik(2,4);


var deger = _Mat.topla();
console.log(deger);
console.log(_Mat.fark());
console.log(_Mat.carp());
console.log(_Mat.bol());
console.log(_Mat.pu());
console.log(Math.pow());
console.log(Math.PI);
console.log(Math.abs(-150));

Matematik.prototype.kati = function(taban,kuvvet) {
    var sonuc = 1;
    for ( var i = 1; i<= kuvvet; i ++) {
        sonuc = sonuc * taban;
    }
    return sonuc;

}

Matematik.prototype.hll = function(metin) {
    return metin;
}
Matematik.prototype.yeni = 3,14
Matematik.prototype.dizi = [1,2,'İlker',4,5,6['İlker','gezi',125]]
console.log(_Mat.kati(2,10));

var İlker = new Matematik;
var hilal = new Matematik;
var ekle = new Matematik;

console.log(İlker.kati(3,4));
document.write(hilal.hll("yeni ekleme"));
document.write(ekle.yeni);

console.log(ekle);
console.log(typeof ekle);
console.log(ekle.dizi[2][2]);



// Math.prototype.tpl = function (a,b) {
//     return a+b;
// } 
// console.log(Math.tpl(2,4));


// Matematik.prototype.Mat2;
// var deger = Mat2(2,3);
// console.log(deger);
// var deger = _Mat.Mat2(2,5);
// console.log(deger);