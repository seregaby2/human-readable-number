module.exports = function toReadable (number) {
  let result = '';
  let resultTwo = '';
  let resultOne = ''; 
  let resultZero = ''; 
  let indexZero = (Math.floor(number / 100)) % 10;
  let indexOne = (Math.floor(number / 10)) % 10;
  let indexTwo = number % 10;
  if (number === 0) {
   return resultTwo = 'zero'
  }

  if (indexOne === 1) {
    switch(indexTwo) {
        case 0: resultTwo = 'ten'; break;
        case 1: resultTwo = 'eleven'; break;
        case 2: resultTwo = 'twelve'; break;
        case 3: resultTwo = 'thirteen'; break;
        case 4: resultTwo = 'fourteen'; break;
        case 5: resultTwo = 'fifteen'; break;
        case 6: resultTwo = 'sixteen'; break;
        case 7: resultTwo = 'seventeen'; break;
        case 8: resultTwo = 'eighteen'; break;
        case 9: resultTwo = 'nineteen'; break;
        default: resultTwo = '';
      } ;
    }
  else  {
    switch(indexTwo) {
        case 1: resultTwo = 'one'; break;
        case 2: resultTwo = 'two'; break;
        case 3: resultTwo = 'three'; break;
        case 4: resultTwo = 'four'; break;
        case 5: resultTwo = 'five'; break;
        case 6: resultTwo = 'six'; break;
        case 7: resultTwo = 'seven'; break;
        case 8: resultTwo = 'eight'; break;
        case 9: resultTwo = 'nine'; break;
        default: resultTwo = '';
    };
  };
 switch(indexOne) {
     case 0: resultOne = ''; break;
     case 1: resultOne = ''; break;
     case 2: resultOne = ' twenty'; break;
     case 3: resultOne = ' thirty'; break;
     case 4: resultOne = ' forty'; break;
     case 5: resultOne = ' fifty'; break;
     case 6: resultOne = ' sixty'; break;
     case 7: resultOne = ' seventy'; break;
     case 8: resultOne = ' eighty'; break;
     case 9: resultOne = ' ninety'; break;
     default: resultOne = '';

 } ;
 switch(indexZero) {
    case 0: resultZero = ''; break;
    case 1: resultZero = 'one hundred'; break;
    case 2: resultZero = 'two hundred'; break;
    case 3: resultZero = 'three hundred'; break;
    case 4: resultZero = 'four hundred'; break;
    case 5: resultZero = 'five hundred'; break;
    case 6: resultZero = 'six hundred'; break;
    case 7: resultZero = 'seven hundred'; break;
    case 8: resultZero = 'eight hundred'; break;
    case 9: resultZero = 'nine hundred'; break;
    default: resultZero = '';
};

let result1 = `${resultZero}${resultOne} ${resultTwo}`
 return result = result1.trim();
}
// console.log(toReadable(919));
