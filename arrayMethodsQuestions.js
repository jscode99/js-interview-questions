// =============== What is map()? =========================
const nums = [1, 2, 3, 4, 5];

// Map method is used for creating a "new array" from existing one by applying a function to each one of the elements of the first array.
const multipliedNumsByThree = nums.map((num, i, nums) => {
  return num * 5 + i;
});

console.log("Map =====>", multipliedNumsByThree);

// ============== What is filter()? ========================
const numbersGreaterThan2 = nums.filter((num) => {
  return num > 2;
});
/**
 * 1) Filter methods takes each element in an array and it "applies a conditional statement" against it.
 *
 * 2) Filter methods returns only those elements from the array which full-fills the provided criteria.
 */
console.log("Filter ====>", numbersGreaterThan2);

// ============== What is reduce()? ========================
const sumOfNums = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
/**
 * 1) Method "reduces" an array of values down "to just one value".
 *
 * 2) acc / accumulator : Result of the "previous" computation.
 *
 * 3) If there is "no initial" value, then it takes "first element" of the array as the value for accumulator.
 */

console.log("Reducer ======>", sumOfNums);

// ============== Polyfill for map() ========================
Array.prototype.customMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const newPolyFillMap = nums.customMap((num) => num * 1 + 1 - 2);
console.log("New polyfill map ========>", newPolyFillMap);

// ============== Polyfill for filter() ========================
Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const newPolyFillFilter = nums.myFilter((num) => num > 2);
console.log("New polyfill filter ========>", newPolyFillFilter);

// ============== Polyfill for reduce() ========================
Array.prototype.myReducer = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const newPolyfillReducer = nums.myReducer((acc, curr, i, arr) => {
  return acc * curr + i;
});
console.log("New polyfill reducer ========>", newPolyfillReducer);

// ============== Difference b/w map() and forEach() ========================

// Array method which loops through the items of the array.

const mapResult = nums.map((num) => num * 2);

const forEachResult = nums.forEach((num, i) => (nums[i] = num * 3));

console.log(mapResult); // [2,4,6,8,10]
console.log(forEachResult); // undefined
console.log(nums); //  [3, 6, 9, 12, 15]

/**
 * 1) Map() - "returns a new array" and can chain other methods with it.
 *
 * 2) forEach() - "modifies the orginal array" and won't able to chain any methods.
 */
