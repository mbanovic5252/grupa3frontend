function printNumbers() {
  let numberMax = 178;
  for (i = 6; i <= numberMax; i++) {
    if (i % 7 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
printNumbers();
