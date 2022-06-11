var kati = function() {
    var taban = Number(document.getElementById('tbn').value);
    var kuvvet = Number(document.getElementById('kvt').value);
    var sonuc = 1;
    for (let i = 1; i <= kuvvet; i++) {
        sonuc = sonuc * taban;
        
    }
    return sonuc;
}