let benimyasim = 27 , onunyasi = 30;

if(benimyasim < onunyasi) {
    document.write("ben senden küçüğüm");
 
} else if(benimyasim === onunyasi) {

    document.write("aynı yaştayız");
}

else {
    document.write("ben senden büyüğüm");
}

let a=10, b=5, c=0;
if(a<b) {
    c=a+b;
} else {
    c=a-b;
}
console.log("c değeri:"+c);

//ternary operatör = if ve else ifadelerinin kısa hali

c = (a<b) ? (a+b) : (a-b); // if'in kısa hali ?, else'in kısa hali :.
console.log("c'nin yeni değeri:"+c);