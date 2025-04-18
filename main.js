function analyzeArray(arr) {
  let average, max, min, length;

  // array may be empty
  if (arr.length > 0) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }

    average = sum / arr.length;
    max = Math.max(...arr);
    min = Math.min(...arr);
    length = arr.length;
  } else {
    average = null;
    max = null;
    min = null;
    length = 0;
  }

  return {
    average,
    max,
    min,
    length,
  };
}

function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let cipherText = "";

  for (let char of str) {
    // check if char is  lowercase / uppercase
    // if neither it is a punctuation and left as if

    const isUpper = char === char.toUpperCase() && /[A-Z]/.test(char);
    const isLower = char === char.toLowerCase() && /[a-z]/.test(char);
    let shiftedChar = char;

    if (isUpper || isLower) {
      // char is a letter
      // calculate shifed char
      const code = (alphabet.indexOf(char.toLowerCase()) + shift) % 26;
      shiftedChar = isUpper ? alphabet[code].toUpperCase() : alphabet[code];
    }

    cipherText += shiftedChar;
  }

  return cipherText;
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },

  divide: (a, b) => {
    return a / b;
  },
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split("").reverse().join("");
}

const main = { capitalize, reverse, calculator, caesarCipher, analyzeArray };
export default main;
