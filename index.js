// //1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs.

const comparison = (a, b) => a > b ? `${a} yra daugiau uz ${b}` : a < b ? `${b} yra daugiau uz ${a}` :
    a === b ? `${a} yra lygu ${b}` : 0;

// console.log(comparison(2, 3));

// // 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.
for (i = 1; i <= 10; i++) {
    console.log(i);
}

// //3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.
for (i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// //4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.
for (i = 1; i <= 10; i++) {
    console.log(parseInt(Math.random(i) * 10 + 1));
}

console.clear();
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10.
//Paskutinis atspausdintas skaičius turi būti 5.

let number = Math.floor(Math.random() * 10) + 1;

while (number !== 5) {
    console.log(number);
    number = Math.floor(Math.random() * 10) + 1;
}

console.log(number);

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, 
//o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, 
//NENAUDOJANT sort() bei Math.max() funkcijų.

const length = parseInt(Math.random() * (31 - 20) + 20);

const arr = [...Array(length)].map(_ => parseInt(Math.random() * (31 - 10) + 10));
console.log(arr);

//---------------NEBAIGTAS

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
//Suskaičiuokite kiek yra kiekvienos raidės.

const letters = ['A', 'B', 'C', 'D'];
const arrOfLetters = Array.from({ length: 100 }, () => letters[Math.floor(Math.random() * letters.length)]);
console.log(arrOfLetters);

const countA = arrOfLetters.filter(a => a === 'A' ? a : 0).length;
console.log(`masyve yra ${countA} A raides`);
const countB = arrOfLetters.filter(a => a === 'B' ? a : 0).length;
console.log(`masyve yra ${countB} B raides`);
const countC = arrOfLetters.filter(a => a === 'C' ? a : 0).length;
console.log(`masyve yra ${countC} C raides`);
const countD = arrOfLetters.filter(a => a === 'D' ? a : 0).length;
console.log(`masyve yra ${countD} D raides`);

//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
//Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).

function lygineSuma(a, b) {

    if ((typeof a === 'number' && typeof b === 'number') || (Array.isArray(a) && Array.isArray(b))) {
        if (a % 2 === 0 && b % 2 === 0) {
            return a + b;
        } else {
            return 'skaiciai turi buti lyginiai';
        }
    } else {
        return 'ivesta turi buti du skaiciai arba du masyvai';
    }

}

// console.log(lygineSuma(1, "2"));


//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. 
//Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius 
//yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)

function pirminisSkaicius(a) {
    if (typeof a !== 'number') {
        return 'prasau ivesti skaiciu';
    }

    return a;


}

console.log(pirminisSkaicius('1'));



//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą.
// Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu "(XXX) XXX-XXXX".

function telefonoNumeris(a) {

    if (!Array.isArray(a)) {
        return 'prašau įvesti skaičių masyvą';
    }

    if (a.length !== 10) {
        return 'masyvo ilgis turi buti 10';
    }

    return `"(${a[0]}${a[1]}${a[3]}) ${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}"`;

}

console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));