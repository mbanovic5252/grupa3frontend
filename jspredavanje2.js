let x = 4;

function add() {
  x++;
}
add();

let auto = {
  boja: "crvena",
  godina: 2009,
  brand: "Toyota",
  kilometara: 187456,
  gume: {
    tip: "zimske",
    marka: "Sava",
  },
  trenutnaBrzina: 0,
  upaljen: false,
  klimaTemp: 18,
  upali: function () {
    this.upaljen = true;
  },
  ubrzaj: function (brzina) {
    if (this.upaljen /* je isto sto i this.upaljen === true */) {
      this.trenutnaBrzina = brzina;
    } else {
      console.log("Auto nije upaljen.");
    }
    return this.trenutnaBrzina;
  },
  // true / false = jako ili ne jako
  zakoci: function (jako) {
    if (jako === true) {
      this.trenutnaBrzina -= 10;
    } else {
      this.trenutnaBrzina -= 5;
    }
    return trenutnaBrzina;
  },
  klima: function (temperatura) {
    this.klimaTemp = temperatura;
    return this.klimaTemp;
  },
  staviLjetneGume: function (noveGume) {
    this.gume.tip = "ljetne";
  },
};
console.log("Moj auto je " + auto.boja + " boje i ima " + auto.kilometara);
console.log(
  `Moj auto je ${auto.boja} boje i ima ${auto.kilometara} kilometara`
);

//PROLAZI KROZ PROPERTIJE AUTOa I STAVLJA IH U X
for (let x in auto) {
  console.log(x);
}

// POKUSAVA UZIMATI VRIJEDNOSTI PROPERTIJA AUTOa
for (let x of auto) {
  console.log(x);
}

let niz = ["aa", "bb", "cc", 56];

// IN = INDEXI
for (let x in niz) {
  console.log(x);
}
// 0
// 1
// 2
// 3

for (let i in niz) {
  console.log(niz[i]);
}
// aa
// bb
// cc
// 56

// OF = VRIJEDNOSTI
for (let x of niz) {
  console.log(x);
}

// NEZZ STA SVE AUTO IMA ILI IMA PUNO, ZELIM ISPISATI SVE VRIJEDNOSTI IZ SVIH PROPERTIJA
for (let propertyName in auto) {
  let propertyValue = auto[propertyName];
  console.log(propertyName + ": " + propertyValue);
}

//Pronaci odredeni string unutar stringa.
let re = new RegExp("ab+c[0-9a-z]\1d*s");
// ili let re = /ab+c/;
