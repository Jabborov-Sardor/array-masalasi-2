////// 1 - masala /////
const strings = [
  "hello,",
  "banana",
  "dog",
  "Uzbekistan",
  "date",
  "bag",
  "orange",
  "cat",
  "fruits",
  "flowers",
];

const longstirings = (array) =>
  array.filter((val) => (val.length <= 5 ? val : false));
console.log(longstirings(strings));

////// 2 - masala /////
const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 20 },
];
const getAdultNames = people.filter((val) => (val.age >= 18 ? val : false));

const names = getAdultNames.map((val) => val.name);

console.log(names);

////// 3 - masala /////
const lengthStrings = [
  "hello",
  "banana",
  "dog",
  "Uzbekistan",
  "date",
  "bag",
  "orange",
];

const getStringLengths = (array) => {
  return array.map((str) => str.length);
};

console.log(getStringLengths(lengthStrings));
