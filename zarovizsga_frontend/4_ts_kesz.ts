function osszesOszto(szam: number): number[]{
    var eredmeny: number[] = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0){
            eredmeny.push(i);
        }
    }
    return eredmeny;
}

function parosDarab(tomb: number[]): number {
    var db = 0;
    for (var i = 0; i < tomb.length; i++){
        if (tomb[i] % 2 === 0) {
            db++;
        }
    }
    return db;
}

function fuggvenyhivasPalindrom(feladat: () => string): boolean {
    var szoveg = feladat();
    var space = "";
    var forditott = "";
    for (var i = 0; i < szoveg.length; i++){
        if (szoveg[i] !== " ") {
            space += szoveg[i];
        }
    }
    for (var hely = space.length - 1; hely >= 0; hely--){
        forditott += space[hely];
    }
    return space === forditott;
}
