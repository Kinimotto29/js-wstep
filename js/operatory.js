//skrotowe wersje np +=, -=, *=
var liczba = 10;
var liczba2 = 20;

//liczba += liczba2;
//console.log(liczba);
liczba = liczba + liczba2;
console.log(liczba);

var liczba3 = 30;
var liczba4 = '30';

// == sprawdza czy WARTOSCI sa takie same
// === sprawdza czy WARTOSCI I TYP jest taki sam
if (liczba3 === liczba4) {
    console.log('prawda');
}
else {
    console.log('nieprawda');
}

if (! ('2' == 2 || (8 < 4))) {
    console.log('prawda 2');
}
else {
    console.log('nieprawda 2');
}

//operator warunkowy ? :
//warunek ? wartosci_jezeli_prawda: wartosc_jezeli_nieprawda
var wynik = (liczba < 0) ? -1 : 1;
console.log(wynik);