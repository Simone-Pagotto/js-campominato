/**
* Genera un numero random intero compreso tra un valore minimi e uno massimo, comprendendoli.
* @param {number} min - limite minimo
* @param {number} max - limite massimo
* @return {number} - numero random intero compreso tra min e max
*/
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}


/**
* Controlla se un numero è presente in un array d numeri
* @param {number} num - Il numero da testare
* @param {number[]} numArr - L'array generico contenente numeri
* @returns {boolean} - true: il numero è presente; false: altrimenti
*/
function isNumberInArray (num, numArr) {
  var boolean = false;
  for (var i = 0; i < numArr.length; i++) {
    if(numArr[i]===num){
      var boolean = true;
    }
  }
  return boolean;
}


console.log(isNumberInArray(5,[1,2,3,4]));
console.log(isNumberInArray(5,[1,2,3,4,5]));


function bombsGenerator (numBombs,min,max){
  var bombs=[];
  while ( bombs.length < numBombs ) {
      var actualRandomNumber = getRandomIntInclusive(min,max);
      if (!isNumberInArray(actualRandomNumber,bombs)){
          bombs.push(actualRandomNumber);
    }
  }
    return bombs;
}
