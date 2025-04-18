import main from "./main.js";

test("Returns correct average, minimum, maximum and length", () => {
  // test cases and solutions
  const testCases = [
    [1, 2, 3],
    [5, 10, 15, 20],
    [-10, 0, 10],
    [42],
    [],
    [3.5, 7.2, 1.1]
  ];
  
  const solutions = [
    { average: 2, min: 1, max: 3, length: 3 },
    { average: 12.5, min: 5, max: 20, length: 4 },
    { average: 0, min: -10, max: 10, length: 3 },
    { average: 42, min: 42, max: 42, length: 1 },
    { average: null, min: null, max: null, length: 0 },
    { average: 3.933333333333333, min: 1.1, max: 7.2, length: 3 }
  ];
  

  for(let i = 0; i < testCases.length; i++) {
    expect(main.analyzeArray(testCases[i])).toMatchObject(solutions[i])
  }

});

test("Returns string encrypted with Caesar Cipher", () => {
  // test cases and solutions
  const testCases = [
    { text: "HeLLo", shift: 3 },
    { text: "xyz", shift: 3 },
    { text: "this", shift: 1 },
    { text: "tests", shift: 2 },
    { text: "the", shift: 3 },
    { text: "capitalize", shift: 4 },
    { text: "function", shift: 5 },
    { text: "ThiS TesT Th CapItaLizE fUncTioN", shift: 13 },
    { text: "Hello, World!", shift: 3 },
  ];

  const solutions = [
    "KhOOr",
    "abc",
    "uijt",
    "vguvu",
    "wkh",
    "getmxepmdi",
    "kzshynts",
    "GuvF GrfG Gu PncVgnYvmR sHapGvbA",
    "Khoor, Zruog!",
  ];

  for (let i = 0; i < testCases.length; i++) {
    expect(main.caesarCipher(testCases[i].text, testCases[i].shift)).toBe(
      solutions[i]
    );
  }
});

test("Returns correct calculated results", () => {
  let a = Math.random();
  let b = Math.random();

  expect(main.calculator.add(a, b)).toBeCloseTo(a + b);
  expect(main.calculator.subtract(a, b)).toBeCloseTo(a - b);
  expect(main.calculator.multiply(a, b)).toBeCloseTo(a * b);
  expect(main.calculator.divide(a, b)).toBeCloseTo(a / b);
});

test("Returns reversed string of the input string", () => {
  //  test cases and solutions
  const testCases = [
    "this",
    "tests",
    "the",
    "capitalize",
    "function",
    "this tests the capitalize function",
  ];
  const solutions = [
    "siht",
    "stset",
    "eht",
    "ezilatipac",
    "noitcnuf",
    "noitcnuf ezilatipac eht stset siht",
  ];

  // test for all cases
  for (let i = 0; i < testCases.length; i++) {
    expect(main.reverse(testCases[i])).toBe(solutions[i]);
  }
});

test("Returns string with first letter in uppercase", () => {
  // test cases and solutions
  const testCases = [
    "this",
    "tests",
    "the",
    "capitalize",
    "function",
    "this tests the capitalize function",
  ];
  const solutions = [
    "This",
    "Tests",
    "The",
    "Capitalize",
    "Function",
    "This tests the capitalize function",
  ];

  // test for all cases
  for (let i = 0; i < testCases.length; i++) {
    expect(main.capitalize(testCases[i])).toBe(solutions[i]);
  }
});
