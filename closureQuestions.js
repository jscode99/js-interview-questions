// ================= What is closures? =============

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // uses variable declared in the parent function
  }
  return displayName;
}
init()();

/**
 * 1) Combination of a function bundled together with reference to its surrounding state (lexical env.)
 *
 * 2) Closure gives you access to an outer function's scope from an inner function.
 *
 * 3) Closures are created everytime a function is created, at function creation time.
 *
 * 4) Make possible for a function to have a private variable.
 */

// lexical environment: Environment that holds the variables of the current & outer scope.

// ================= What is lexical scope? =============

/**
 * 1) Ability for a function scope to access variable from the parent scope.
 *
 * 2) Variable defined outside a function can be accessible inside of another function - opposite is not true.
 *
 * 3) Child function to be lexically bound by that of the parent function.
 */

// ================= What is closure scope chain? =============

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

/**
 * 1) 3 scopes - Local scope(own scope), outer function scope and global scope.
 *
 * 2) The outer function is itself a nested function, access to the outer function's scope
 * includes the enclosing scope of the outer function—effectively creating a chain of function scopes.
 *
 * 3) A series of nested functions, all of which have access to the outer functions' scope.
 * In this context, we can say that closures have access to all outer function scopes.
 */

// ================= Closure - O/P based questions =============

// 1) ============== What will be logged to the console? ============
let pCount = 0;
(function printCount() {
  if (pCount == 0) {
    let pCount = 1;
    console.log("pCount 1======>", pCount); // 1 : Variable shadowing will happens in this block scope.
  }
  console.log("pCount 2======>", pCount); // 0
})();

/**
 * 2) ================ Write a function that would allow you to do this :- ===============
 * var addSix = createBase(6);
 * addSix(10); - Output will be 16
 * addSix(21); - Output will be 27
 */

function createBase(num) {
  return function (innerNum) {
    console.log(num + innerNum);
  };
}

// You can create a closure to keep the value passed to a function, even after the inner function is returned.
var addSix = createBase(6);
addSix(10);
addSix(21);

// 3) ====================== Use closure to optimize time for the below function ==============================

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6"); // 6: 54.112323232
console.time("12");
find(12);
console.timeEnd("12"); // 12: 81.7187945945

// Solution:
function closureFind() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const findIt = closureFind();

console.time("6");
findIt(6);
console.timeEnd("6"); // 6: 0.2222167995
console.time("12");
findIt(12);
console.timeEnd("12"); // 12: 0.06787109375

// 4) ========================== Block scope and setTimeout =========================

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // What is logged?
  }, i * 1000);
}

/**
 * Reason :  "var" doesn't have block scope. During the loop's iteration, reference to variable i in memory changes everytime.
 *            The setTimeout will execute the log only after the entire loop's execution.
 *            So, when the iteration stops causing the setTimeout to reference the variable i in memory, which will be 5.
 */

/**
 * Solution:  Use "let" instead of "var". Because "let" is block scoped. So while the iteration starts, each and every reference
 *            to variable "i" is in a separate scope. After the iteration completed, when the setTimeout starts logging every "i"
 *            have a different reference scope to look on and it will print all of them.
 *            { i = 0 }
 *            { i = 1 }
 *            { i = 2 }
 *            { i = 3 }
 */

// 5) ======================== How would you use a closure to create a private counter? ==================

function privateCounter() {
  var _counter = 10;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter is " + _counter;
  }

  return {
    add,
    retrive,
  };
}

const pCounter = privateCounter();
pCounter.add(10);
console.log(pCounter.retrive());

// 6) ======================== Make use of a Module pattern? ==================

var Module = (function () {
  function privateMethod() {
    // Do something privately....
  }
  return {
    publicMethod: function () {
      // Access private methods inside public methods...
    },
  };
})();

Module.publicMethod();
// Module.privateMethod(); // TypeError: Module.privateMethod is not a function.

// 7) ======================== Make this run only once? ==================

let once;

function isRan() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already called before....");
    } else {
      console.log("Initial run....");
      called++;
    }
  };
}

const isRunning = isRan();

isRunning();
isRunning();
isRunning();
isRunning();
isRunning();

// 8) ======================== Implement Caching/Memoize function? ==================

const clumsyProductAmount = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};

// console.log(clumsyProductAmount(4544, 9080)); // Time taken : 192.98945797349 ms

// console.log(clumsyProductAmount(4544, 9080)); // Time taken : 157.879878953479 ms

// ---- Solution -------

function memoizeFn(fn, context) {
  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const memoizedProductCalculation = memoizeFn(clumsyProductAmount);

console.time("First call");
console.log(memoizedProductCalculation(4544, 9080)); // Time taken : 107.98945797349 ms
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedProductCalculation(4544, 9080)); // Time taken : 0.60791090904 ms
console.timeEnd("Second call");
