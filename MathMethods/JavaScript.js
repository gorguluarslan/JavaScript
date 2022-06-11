var sayi;
sayi = Math.PI;
sayi = Math.round(2.5); //buçuğun üstünü üste yuvarlıyo altını aynı bırakıyor
sayi = Math.floor(44.999999); //.'dan sonrası önemli değil sayı aynı kalıyor 
sayi = Math.ceil(44.1);//.'dan sonrası yukarı yuvarlıyor.
sayi = Math.sqrt(9); //sayının karekökünü veriyor.
sayi = Math.pow(2,3); // 2'nin 3. kuvvetini alıyor.
sayi = Math.abs(-2342324); // bir sayının mutlak değerini buluyor.
sayi = Math.min(12,25,45,10,8); // dizi içindeki en küçük değeri veriyor.
sayi = Math.max(12,25,45,10,8); // dizi içindeki en büyük değeri veriyor.
sayi = Math.random(); // burası 0 ile 1 değer arasında bir değer veriyor.
sayi = Math.random()*10; // burası 0 ile 10 değer arasında bir değer veriyor.
sayi = Math.round(Math.random()*10); // burası 0 ile 10 değer arasında verilen değerin virgülden sonraki kısmını siliyor.
sayi = Math.ceil(Math.random()*6); // burası 1 ile 6 değer arasında verilen değeri yazıyor. zar olduğunu düşünürsek zarda 0 olmadığı için ceil kullanıyoruz.
sayi1 = Math.ceil(Math.random()*6); // burası 1 ile 6 değer arasında verilen değeri yazıyor. zar olduğunu düşünürsek zarda 0 olmadığı için ceil kullanıyoruz.

document.write(sayi);
document.write(sayi1);