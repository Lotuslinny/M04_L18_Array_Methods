//A
const addTheWordCool = function (array) {
  // add your code
  array.push("cool");
  return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//B
const amountOfElementsInArray = function (array) {
  return array.length;
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
//3

//C
const selectBelgiumFromBenelux = function (array) {
  return array[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//D 
const lastElementInArray = function (array) {
  return array[3];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
  // Remove an item by index position, splice changing the array.
  //splice neemt eerst de argument 1: positie en dan de argument 2: aantal die weggehaald moeten worden.
  array.splice(0, 1);
  return array;
}

const impeachTrumpSplice = function (array) {
  //copy array ... return pas later nadat je er 1 element hebt verwijderd.
  array.slice(0);
  return array;
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F
const stringsTogether = function (elements) {
  return elements.join('')
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

//G
const combineArrays = function (array1, array2) {
  //console.log('wat nu')
  // dit wil ik terug "zien".
  return array1.concat(array2);
}
//dit stop ik in de functies: arguments.
console.log(combineArrays([1, 2, 3], [4, 5, 6]));



  // resultaat: [1,2,3,4,5,6]