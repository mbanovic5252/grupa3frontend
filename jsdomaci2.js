/*Napraviti niz koji u sebi ima 5 objekata. Svaki objekt predstavlja osobu koji ima "ime" i "godine". 
Napisati funkciju "dodajGodine" koja će proći kroz zadani niz i svim osobama dodati jednu godinu života. 
Napisati drugu funkciju "prosjekGodina" koja će nad zadanim nizom osoba proći i izračunati i vratiti prosjek godina.
Obje funkcije trebaju imati po jedan parametar za niz kojeg primaju. */

let listOfPeople = [
  { name: "Pero", years: 20 },
  { name: "Marko", years: 22 },
  { name: "Stipe", years: 21 },
  { name: "Ante", years: 24 },
  { name: "Domagoj", years: 22 },
];

function addYears() {
  for (i = 0; i < listOfPeople.length; i++) {
    listOfPeople[i].years++;
  }
}

function averageYears() {
  let sumOfYears = 0;
  for (i = 0; i < listOfPeople.length; i++) {
    sumOfYears += listOfPeople[i].years;
  }
  return sumOfYears / listOfPeople.length;
}
