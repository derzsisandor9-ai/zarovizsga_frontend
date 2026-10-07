"use strict";
function osszesOszto(szam) {
    var eredmeny = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            eredmeny.push(i);
        }
    }
    return eredmeny;
}
function parosDarab(tomb) {
    var db = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            db++;
        }
    }
    return db;
}
function fuggvenyhivasPalindrom(feladat) {
    var szoveg = feladat();
    var space = "";
    var forditott = "";
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg[i] !== " ") {
            space += szoveg[i];
        }
    }
    for (var j = space.length - 1; j >= 0; j--) {
        forditott += space[j];
    }
    return space === forditott;
}
