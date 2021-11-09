console.log("Javascript and Node are working");

// FUNCTIONS : 3 WAYS

// FUNCTION 1> •	function declaration
let sum = 0;

function doubleArray1(numbers) {
  const doubled = numbers.map((n) => n * 2); //, it takes an argument of a callback function and returns a new array!
  //console.log(doubled);
  doubled.forEach((item) => {
    sum += item;
    finalSum = sum * 2;
  });
  return doubled;
}

const result1 = doubleArray1([1, 2]);
console.log(result1); // this returns: [2, 4]
console.log(sum); // this returns: 6
console.log(finalSum); // this returns: 12

// FUNCTION 2 > 	function expression

let sum2 = 0;

const doubleArray2 = function (numbers) {
  const doubled = numbers.map((n) => n * 2); //, it takes an argument of a callback function and returns a new array!
  //console.log(doubled);
  doubled.forEach((item) => {
    sum2 += item;
    finalSum2 = sum * 2;
  });
  return doubled;
};

const result2 = doubleArray2([1, 2]);
console.log(result2); // this returns: [2, 4]
console.log(sum2); // this returns: 6
console.log(finalSum2); // this returns: 12

// FUNCTION 3 > 	arrow function

let sum3 = 0;

const doubleArray3 = (numbers) => {
  const doubled = numbers.map((n) => n * 2); //, it takes an argument of a callback function and returns a new array!
  //console.log(doubled);
  doubled.forEach((item) => {
    sum3 += item;
    finalSum3 = sum * 2;
  });
  return doubled;
};

const result3 = doubleArray3([1, 2]);
console.log(result3); // this returns: [2, 4]
console.log(sum3); // this returns: 6
console.log(finalSum3); // this returns: 12
