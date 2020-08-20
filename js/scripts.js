// The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

// The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.

// You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

// Do not add any UI logic until you've completed your business logic (and included testing).



const numbertypes = [1, 5, 10, 50, 100, 500, 1000]
const romannumerals = [I, V, X, L, C, D, M]

function convertroman(userinput) {
  if (userinput === "1") {
    return "I";
  } else if (userinput === "5") {
    return "V";
  } else if (userinput === "10") {
    return "X";
  } else if (userinput === "50") {
    return "L";
  } else if (userinput === "100") {
    return "C";
  } else if (userinput === "500") {
    return "D";
  } else if (userinput === "1000") {
    return "M";
  }
}

// Describe: "Create Symbol Variables" 
// Test: "It will assign values to our Roman Numerals"
// Expect: "(I = 1) (V = 5) etc..."

// Describe: "addSymbols()"
// Test: "It will add the value of the symbols together"
// Expect: (addSymbols("2")).toEqual("II")

// Describe: "subSymbols()"
// Test: It will subtract the values of the symbols if there are more than 3 in a row"
// Expect: (subSymbols("4")).toEqual("IV")

// Describe: "sepSymbols()"
// Test: It will seperate ones, tens, hundreds, thousands (99 is XCIX, not IC).
// Expect: (sepSymbols("199")).toEqual("CXCIX (not ICC))")