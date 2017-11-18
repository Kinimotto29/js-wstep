// if/else-if/else/switch

// najprostszy if wykonuje sie tylko wtedy, kiedy warunek jest spelniony (wynikiem jest prawda)

// else wykonuje sie wtedy, kiedy wartosc warunku w if jest nieprawdą (else jest opcjonalnym blokiem)
if ('2' === 2) {
    console.log('prawda');
} else if ('2' == 2) {
    console.log('"2" == 2');
} else {
    console.log('nieprawda');
}

// switch
var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('wybrales czerwony');
        break;
    case 'zielony':
        console.log('wybrales zielony');
        break;
    case 'bialy':
        console.log('wybrales bialy');
    default:
        console.log('jestes daltonista');
}