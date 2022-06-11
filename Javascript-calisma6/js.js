var zmn = new Date().getFullYear();
document.getElementById('zmn').innerHTML = zmn;

function hesapla() {
    var boy = Number(document.getElementById('boy').value);
    var kilo = Number(document.getElementById('kilo').value);
    var endeks = kilo / (boy*boy/10000);
    if (endeks >= 0 && endeks <=18.4 ) {
        document.getElementById('sonuc').innerHTML = endeks.toFixed(2) + " Zayıfsınız..."
        
    }
    else if(endeks >= 18.5 && endeks <=25){
        document.getElementById('sonuc').innerHTML = endeks.toFixed(2) + " Normalsiniz..."

    }
    else if(endeks >= 25 && endeks <=30){
        document.getElementById('sonuc').innerHTML = endeks.toFixed(2) + " Fazla Kilolusunuz..."

    }
    else if(endeks >= 30 && endeks <=35){
        document.getElementById('sonuc').innerHTML = endeks.toFixed(2) + " Şişmansınız..."

    }
    else if(endeks >= 35 && endeks <=45){
        document.getElementById('sonuc').innerHTML = endeks.toFixed(2) + " Obezsiniz..."

    }
    else if(endeks >= 45 && endeks <=55){
        document.getElementById('sonuc').innerHTML = endeks.toFixed(2) + " Normalsiniz..."

    }
else{
    alert('Böyle Kilo Olmaz Olsun');
}
}