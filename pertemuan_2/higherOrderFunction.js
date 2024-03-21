const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];

// filter, map, reduce

/** FILTER */
// const filterNumber = numbers.filter((number) => {
//   return number > 3;
// });
// console.log(filterNumber);

/** MAP */
// const mapNumber = numbers.map((number) => number * 2);
// console.log(mapNumber);

/** REDUCE */
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
