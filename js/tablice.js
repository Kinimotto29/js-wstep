//tablice
//indeksowanie od 0
//dostęp do elementu talbicy - nazwa_tablicy[indeks]
var tablica = [10, 'marcin', 30, 40];
console.log(tablica);
console.log(tablica[1]);

//dodawanie wartości na koniec tablicy za pomocą inteksu ostatniego elementu + 1
tablica[4] = 'anna';
console.log(tablica);

//dodawanie wartości na koniec tablicy za pomocą metody push();
tablica.push(50, 'michal');
console.log(tablica);

//metoda pop() usuwa ostatni element z tablicy
tablica.pop();
console.log(tablica);
//pop usuwa zawsze ostatni element, nawet jak w nawiasach jest indeks

//unshift() wstawia nowe eartości na początek tablicy
tablica.unshift('robert', 105);
console.log(tablica);

//metoda shift() usuwa pierwszy element tablicy, zawsze tylko 1szy
tablica.shift();
console.log(tablica);

//.length - zwraca długość tablicy
console.log(tablica.length);

//metoda join łączy do stringa elementy tablicy
console.log(tablica.join('-'));

//metoda reverse() odwraca kolejność elementów tablicy
console.log(tablica.reverse());
console.log(tablica);

//sort() do sortowania tablicy
console.log(tablica.sort());
console.log(tablica);

