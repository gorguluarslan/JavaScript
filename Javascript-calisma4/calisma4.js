
let gun = prompt("Haftanın gününü yazınız");
gun = gun.toLocaleLowerCase();
var mesaj;
switch(gun) 
{
    case"pazar":
    case"cumartesi":
    mesaj = "Hafta sonu";
    break;
    case"pazartesi":
    case"salı":
    case"çarşamba":
    case"perşembe":
    case"cuma":
    mesaj = "İş Günü";
    break;
    default:
        mesaj = "Yanlış parametre"
        break;
}
document.write(mesaj);