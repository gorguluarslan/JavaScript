//Bir yıl değerinin artık yıl olup olmadığını hesaplayın.
//Bir yılın artık yıl olması için ya 400 ile modu 0 olmalı ya da 4 ile modu 0 olmalı ve 100 ile modu 0 olmamalı.
//4100 false değer vermeli.

let girilenYil = parseInt(prompt("Yıl değerini giriniz", "2020"));
let artikYilMi = ((girilenYil % 400) == 0) || ( ((girilenYil % 4) == 0) && (girilenYil % 100 != 0)  ) 
console.log("Girilen" + girilenYil + "artık yıl mı? :" + artikYilMi);
