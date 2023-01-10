let dobro = "1234567890";
let lose = "1123456";
// function returns true if all the letters in string are unique, otherwise false
let nemaDuplih = function (password) {
  if (!password || password.length === 1) {
    return true;
  }
  // let char = password[0];
  // for (let i=1; i < password.length; i++){
  //     if(password[i] === char){
  //     return false;}
  // }
  // //uzeli smo broj jedan spremili ga u varijablu char , kreni od pozicije 1 i provjeravaj do kraja jel ima jedinice.
  // return true;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    for (let j = i + 1; j < password.length; j++) {
      let secondChar = password[j];
      if (char === secondChar) {
        return false;
      }
    }
  }
};

nemaDuplih(dobro); // true
nemaDuplih(lose); // false

// DRUGI NACIN
let r2 = function (password) {
  for (let i = 0; i < password.length; i++) {
    if (password.lastIndexOf(password[i]) !== i) {
      return false;
    }
  }
  return true;
};

//
let uniqueChars = function (password) {
  if (!password) {
    return true;
  }
  let chars = [];
  for (let i = 0; i < password.length; i++) {
    if (chars.includes(password[i])) {
      return false;
    } else {
      chars.push(password[i]);
    }
  }
  return true;
};

//1234951
// .split = 1,2,3,4,9,5,1
// .sort = 1,1,2,3,4,5,9
let r3 = function (password) {
  let chars = password.split("").sort();
  for (let i = 0; i < password.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return false;
    }
  }
  return true;
};

//dictionary
// {
//     {
//         key: k1, // UNIQUE NAME POJMA
//         value: null // DEFINICIJA
//     },
//     {
//         key: k2,
//         value: null
//     },
//     {
//         key: k3,
//         value: null
//     },
// }
// // Moj pokusaj
let mojFunc = function (password) {
  let obj = {};
  for (x = 0; x < password.length; x++) {
    let znak = password[x];
    if (obj[znak]) {
      return false;
    }
    obj[znak] = true;
  }
  return true;
};

//"dictionary like"
let r4 = function (password) {
  let obj = {};
  for (let i = 0; i < password.length; i++) {
    let znak = password[i];
    if (obj[znak]) {
      return false;
    }
    obj[znak] = true;
  }
  return true;
};
//  auto.boja ==>> auto["boja"]

// SET nacin najbrzi i najbolji nacin, cesto se koristi kod pretrazivanja // unqieu stvari charovi oov ono
let r5 = function (password) {
  let set = new Set();
  for (i = 0; i < password.length; i++) {
    let char = password[i];
    if (set.has(znak)) {
      return false;
    }
    set.add(znak);
  }
  return true;
};

// Dobar isto ako je velicina seta manja od velicina pw false je jer je u Setu samo unique znakovi

let r6 = function (password) {
  let result = new Set(password).size === password.length;
  return result;
};

//  Barem jedna znamenka, duljina barem 6 znakova, barem jedan special char, barem jedno veliko slovo
let znamenke = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specijalci = ["!", ".", ",", "_"];
//45G!123 -> ok
// salskhsfTT_y -> not ok

let sadrziZnakove = function (str, znakovi) {
  let sadrzi = false;
  for (let znak in znakovi) {
    if (str.indexOf(znak) >= 0) {
      return true;
    }
  }
  return false;
};

function valjaLiPass(pass) {
  if (!pass || pass.length < 6) {
    return false;
  }

  let znamenkeOk = sadrziZnakove(pass, znamenke);

  if (!znamenkeOk) {
    return false;
  }

  // ima li specijalnih znakova
  let specijalciOk = false;
  for (let s in specijalci) {
    if (pass.indexOf(s) >= 0) {
      specijalciOk = true;
      break;
    }
  }
  if (!specijalciOk) {
    return false;
  }

  //ima li veliko slovo
  let velikoSlovoOk = false;
  for (let znak in pass) {
    if (znak === znak.toUpperCase()) {
      velikoSlovoOk = true;
      break;
    }
  }

  if (!velikoSlovoOk) {
    return false;
  }
  return true;
}
