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

// Map syntax -> arr.map((data, i, arr) => {});
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

// filter syntax -> arr.filter((data, i, arr) => { ---- Condition should be satisfied ----- });
Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    // The condtion should be satisfied before pushing to the array.
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const newPolyFillFilter = nums.myFilter((num) => num > 2);
console.log("New polyfill filter ========>", newPolyFillFilter);

// ============== Polyfill for reduce() ========================

// Reduce syntax -> arr.reduce((acc, curr, i, arr) => {}, initialvalue);
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

const mapResult = nums.map((num) => num * 2).filter((data, i) => data < 2);

const forEachResult = nums.forEach((num, i) => (nums[i] = num * 3));

console.log(mapResult); // [2,4,6,8,10]
console.log(forEachResult); // undefined
console.log(nums); //  [3, 6, 9, 12, 15]

/**
 * 1) Map() - "returns a new array" and can chain other methods with it.
 *
 * 2) forEach() - "modifies the orginal array" and won't able to chain any methods.
 */

// =============== O/P based questions =================

let characters = [
  { name: "john wick", age: 38, job: "Former hitman", netWorthInMill: 80 },
  {
    name: "james bond",
    age: 46,
    job: "British secret agent",
    netWorthInMill: 200,
  },
  { name: "bruce wayne", age: 43, job: "Super hero", netWorthInMill: 90000 },
  { name: "clark kent", age: 40, job: "Super hero", netWorthInMill: 1 },
  { name: "diana prince", age: 200, job: "Super hero", netWorthInMill: 400 },
];

// 1) Return only names in capital letter

const modifiedCharactersNames = characters.map((character, i) =>
  character.name.toUpperCase(),
);

// 2) Do the same using for-loop

const modifiedCharactersNamesLoop = [];

for (let i = 0; i < characters.length; i++) {
  modifiedCharactersNamesLoop.push(characters[i].name.toUpperCase());
}

console.log(
  "Modified characters names=======>",
  modifiedCharactersNames,
  modifiedCharactersNamesLoop,
);

// 3) Return characters details with age greater than or equal 40

const modifiedCharactersWithAge = characters.filter(
  (character, i) => character.age >= 40,
);

console.log("Modified characters age=======>", modifiedCharactersWithAge);

// 4) Return characters age more than or equal 40 and job as a super hero

const modifiedCharactersWithAgeAndJob = characters.filter(
  (character, i) =>
    character.age >= 40 && character.job.toLocaleLowerCase() === "super hero",
);

console.log(
  "Modified characters details with age and job =======>",
  modifiedCharactersWithAgeAndJob,
);

// 5) Total net worth of all the characters

const totalNetWorthOfAll = characters.reduce((acc, curr) => {
  return acc + curr.netWorthInMill;
}, 0);

console.log("Total networth of all characters =====>", totalNetWorthOfAll);

// 6) Return only names of the character who has net worth more than 100 Mills

const charactersWith100Mill = characters
  .filter((character) => character.netWorthInMill > 100)
  .map((character) => character.name);

console.log("Character with 100 Mills====>", charactersWith100Mill);

/**
 * 7) Return total net worth of characters with net worth more than 100 after 20 Mills have been added
 *    to those who have less than 100 Mills
 */

const totalNetWorthAfterModification = characters
  .map((character) => {
    if (character.netWorthInMill < 100) {
      character.netWorthInMill += 20;
    }
    return character;
  })
  .filter((character) => character.netWorthInMill >= 100)
  .reduce((acc, curr) => acc + curr.netWorthInMill, 0)
  // ========= Without filter method ===========
  // .reduce((acc, curr) => {
  //   if (curr.netWorthInMill >= 100) {
  //     return acc + curr.netWorthInMill;
  //   }
  //   return acc;
  // }, 0);

console.log(totalNetWorthAfterModification);
