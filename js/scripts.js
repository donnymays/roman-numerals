// The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

// The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.

// You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

// Do not add any UI logic until you've completed your business logic (and included testing).

// Describe: "convertRoman" 
// Test: "It will assign values to our Roman Numerals"
// Expect: "(I = 1) (V = 5) etc..."

function convertRoman(userinput) {
  if (userinput === 1) {
    return "I";
  } else if (userinput === 5) {
    return "V";
  } else if (userinput === 10) {
    return "X";
  } else if (userinput === 50) {
    return "L";
  } else if (userinput === 100) {
    return "C";
  } else if (userinput === 500) {
    return "D";
  } else if (userinput === 1000) {
    return "M";
  }
}

DCL = parse value of D, parse value of




function addNumerals(number1, number2, number3, number4, number5, number6, number7) {
  // let numTranslation = { "I": 1, "V": 5, "X": 10 }
  let romanNums = ["I", "V", "X"];
  let arabicNums = [1, 5, 10]
  let I = 1
  let V = 5
  let X = 10
  let L = 50
  let C = 100
  let D = 500
  let M = 1000

  let I = parseInt(I);
  let V = parseInt(V);
  let X = parseInt(X);
  let L = parseInt(L);
  let C = parseInt(C);
  let D = parseInt(D);
  let M = parseInt(D);
  return number1 + number2 + number3 + number4 + number5 + number6 + number7
};


// Describe: "addSymbols()"
// Test: "It will add the value of the symbols together"
// Expect: (addSymbols(II)).toEqual("2")

function romanNumeral(input) {
  let romanArr = []
  let inputString = input.toString();
  for (let i = 0; i <= inputString.length - 1; i++) {
    romanArr.push(inputString[i]);
    console.log(romanArr);
  }
}

function singleNumeral(input) {
  let singleStr = "";
  for (let i = 1; i <= input; i++) {
    if (i < 4) {
      singleStr += "I";
    } else if (i === 4) {
      singleStr ="IV";
    } else if (i === 5) {
      singleStr = "V";
    } else if (i === 9) {
      singleStr = "IX";
    } 
    console.log(singleStr);
  }
}









// Describe: "subSymbols()"
// Test: It will subtract the values of the symbols if there are more than 3 in a row"
// Expect: (subSymbols("4")).toEqual("IV")

for (let convertRoman(userinput)) {
  while i != -1;
  num += parseInt([rn]);
  romanNumber = romanNumber.replace, "-");

}
// Describe: "sepSymbols()"
// Test: It will seperate ones, tens, hundreds, thousands (99 is XCIX, not IC).
// Expect: (sepSymbols("199")).toEqual("CXCIX (not ICC))")



function addNumerals2(number1, number2, number3, number4, number5, number6, number7) {
  let I = 1
  let V = 5
  let X = 10
  let L = 50
  let C = 100
  let D = 500
  let M = 1000
  Number(number1);
  Number(number2);
  Number(number3);
  Number(number4);
  Number(number5);
  Number(number6);
  Number(number7);
  return number1 + number2 + number3 + number4 + number5 + number6 + number7
};