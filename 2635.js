/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
};

/* function constant(n, i) { return 42; }
function plusI(n, i) { return n + i; }
function plusone(n) { return n + 1; } */
